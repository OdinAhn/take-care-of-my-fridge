package org.example.takecareofmyfridgebe.domain.order.service;

import org.example.takecareofmyfridgebe.domain.order.dto.DailyProductSales;
import org.example.takecareofmyfridgebe.domain.order.entity.OrderStatus;
import org.example.takecareofmyfridgebe.domain.order.entity.SaleType;
import org.example.takecareofmyfridgebe.domain.order.repository.OrderItemRepository;
import org.example.takecareofmyfridgebe.global.error.BusinessException;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.Assertions.assertThatThrownBy;
import static org.mockito.BDDMockito.given;

@ExtendWith(MockitoExtension.class)
class OrderSalesServiceTest {

    @Mock
    private OrderItemRepository orderItemRepository;

    @InjectMocks
    private OrderSalesService orderSalesService;

    @Test
    void queriesFromStartOfFromToStartOfDayAfterTo() {
        List<DailyProductSales> sales = List.of(new DailyProductSales(1L, LocalDate.of(2026, 10, 2), SaleType.NONE, 5L));
        given(orderItemRepository.findDailyProductSales(OrderStatus.CONFIRMED,
            LocalDateTime.of(2026, 10, 1, 0, 0), LocalDateTime.of(2026, 10, 4, 0, 0))).willReturn(sales);

        List<DailyProductSales> result =
            orderSalesService.getDailyProductSales(LocalDate.of(2026, 10, 1), LocalDate.of(2026, 10, 3));

        assertThat(result).isEqualTo(sales);
    }

    @Test
    void rejectsFromAfterTo() {
        assertThatThrownBy(() ->
            orderSalesService.getDailyProductSales(LocalDate.of(2026, 10, 3), LocalDate.of(2026, 10, 1)))
            .isInstanceOf(BusinessException.class);
    }
}
