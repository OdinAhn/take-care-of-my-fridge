# WORK-001: 공통 API 응답 계약

상태: 검증 대기 · 작성일: 2026-10-16 · 담당: 회원 API

## 목표와 범위

- [API 계약](../api/api-spec.md)의 `success/data/error` 응답 형태를 공통 코드에 적용한다.
- 입력 오류 코드를 `C001`로 맞추고, 읽을 수 없는 JSON 본문은 HTTP 400으로 응답한다.
- 회원가입 엔드포인트와 회원별 오류 코드는 이 작업에 포함하지 않는다.

## 구현 결과

- `ApiResponse`와 `ErrorResponse`를 불변 record로 작성했다.
- `ErrorCode.INVALID_INPUT_VALUE`를 `C001`로 맞췄다.
- `GlobalExceptionHandler`에 잘못된 JSON 본문 처리를 추가했다.

## 검증

| 명령 | 결과 |
|---|---|
| `./gradlew clean compileJava compileTestJava` | 통과 |
| `./gradlew test --tests org.example.takecareofmyfridgebe.global.response.ApiResponseTest` | 2개 통과 |
| `./gradlew test` | 기존 `contextLoads` 1개 실패: 로컬 MySQL `fridge_user` 인증 거부 |

DB 연결이 필요한 전체 테스트는 해당 환경의 접속 설정을 확인한 뒤 다시 실행해야 한다.
