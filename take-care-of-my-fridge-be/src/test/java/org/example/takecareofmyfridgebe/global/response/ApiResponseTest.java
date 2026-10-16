package org.example.takecareofmyfridgebe.global.response;

import tools.jackson.databind.JsonNode;
import tools.jackson.databind.ObjectMapper;
import org.example.takecareofmyfridgebe.global.error.ErrorCode;
import org.example.takecareofmyfridgebe.global.error.GlobalExceptionHandler;
import org.junit.jupiter.api.Test;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.http.converter.HttpMessageNotReadableException;
import org.springframework.mock.http.MockHttpInputMessage;

import java.util.Map;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertTrue;

class ApiResponseTest {

    private final ObjectMapper objectMapper = new ObjectMapper();

    @Test
    void successAndErrorIncludeTheContractFields() throws Exception {
        JsonNode success = objectMapper.readTree(
                objectMapper.writeValueAsString(ApiResponse.ok(Map.of("id", 1))));
        assertTrue(success.get("success").asBoolean());
        assertEquals(1, success.get("data").get("id").asInt());
        assertTrue(success.get("error").isNull());

        JsonNode failure = objectMapper.readTree(
                objectMapper.writeValueAsString(ApiResponse.error(ErrorCode.INVALID_INPUT_VALUE)));
        assertFalse(failure.get("success").asBoolean());
        assertTrue(failure.get("data").isNull());
        assertEquals("C001", failure.get("error").get("code").asText());
    }

    @Test
    void unreadableJsonReturnsBadRequest() {
        ResponseEntity<ApiResponse<Void>> response = new GlobalExceptionHandler()
                .handleHttpMessageNotReadableException(
                        new HttpMessageNotReadableException("invalid JSON", new MockHttpInputMessage(new byte[0])));

        assertEquals(HttpStatus.BAD_REQUEST, response.getStatusCode());
        assertEquals("C001", response.getBody().error().code());
    }
}
