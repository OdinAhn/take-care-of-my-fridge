package org.example.takecareofmyfridgebe.domain.order.service;

import lombok.RequiredArgsConstructor;
import org.example.takecareofmyfridgebe.domain.order.dto.DailyProductSales;
import org.example.takecareofmyfridgebe.domain.order.entity.OrderStatus;
import org.example.takecareofmyfridgebe.domain.order.repository.OrderItemRepository;
import org.example.takecareofmyfridgebe.global.error.BusinessException;
import org.example.takecareofmyfridgebe.global.error.ErrorCode;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.util.List;

@Service
@RequiredArgsConstructor
public class OrderSalesService {

    private final OrderItemRepository orderItemRepository;

    // 판매 예측용: from~to(양끝 포함) 기간의 구매 확정 판매량을 날짜·상품별로 반환
    @Transactional(readOnly = true)
    public List<DailyProductSales> getDailyProductSales(LocalDate from, LocalDate to) {
        if (from == null || to == null || from.isAfter(to)) {
            throw new BusinessException(ErrorCode.INVALID_INPUT_VALUE);
        }
        return orderItemRepository.findDailyProductSales(OrderStatus.CONFIRMED, from.atStartOfDay(), to.plusDays(1).atStartOfDay());
    }
}
