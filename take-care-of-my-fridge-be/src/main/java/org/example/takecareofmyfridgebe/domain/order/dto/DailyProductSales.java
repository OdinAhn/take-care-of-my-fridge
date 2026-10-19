package org.example.takecareofmyfridgebe.domain.order.dto;

import org.example.takecareofmyfridgebe.domain.order.entity.SaleType;

import java.time.LocalDate;

public record DailyProductSales(Long productId, LocalDate salesDate, SaleType saleType, long quantity) {
}
