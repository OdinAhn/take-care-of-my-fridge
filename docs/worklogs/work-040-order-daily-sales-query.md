# WORK-040: 구매 확정 일시와 일별 상품 판매량 조회

상태: 검증 대기 · 작성일: 2026-10-19 · 담당: 주문

## 목표와 완료 기준

- 판매 예측(관리자 도메인)이 과거 판매 이력을 읽을 수 있도록 구매 확정 일시를 저장하고, 기간별 판매량 조회를 제공한다.
- 구매 확정된 주문만 확정 날짜·상품·판매유형별로 수량을 합산해 돌려준다.

## 근거와 범위

- 같은 앱 안의 서비스 호출로만 쓴다. REST API, Kafka, 새 테이블은 만들지 않는다.
- 구매 확정 처리 서비스는 아직 없어 만들지 않는다. 엔티티 필드와 조회만 추가한다.
- 판매유형(일반·특가·번개 드롭)은 `order_items.sale_type`을 그대로 쓴다. 판매 예측이 유형별 수요를 구분할 수 있게 하려는 것이다.
- QueryDSL은 아직 쓰는 코드가 없어 JPQL로 구현했다. 동적 조건이 필요한 쿼리부터 QueryDSL 도입을 검토한다.

## AI 활용과 개발자 판단

- AI에 맡긴 작업: 엔티티 필드, 조회 쿼리·DTO·서비스, 테스트 초안.
- 채택: 조회 DTO에 판매유형 추가, enum 값은 쿼리 파라미터로 전달.
- 보류: 페이징(전체 데이터를 읽는 용도라 불필요), QueryDSL 방식(별도 브랜치에서 비교만 하고 채택하지 않음).

## 구현 결과

- `Order`에 `confirmedAt`을 추가하고 `confirm()`이 확정 시각을 받아 기록한다.
- `DailyProductSales`(productId, salesDate, saleType, quantity), `OrderItemRepository.findDailyProductSales`, `OrderSalesService.getDailyProductSales`를 추가했다.
- 날짜 두 개(양 끝 포함)를 `[from 00:00, to+1일 00:00)` 시각 범위로 바꿔 조회한다. `from`이 `to`보다 늦거나 null이면 `INVALID_INPUT_VALUE`.
- 신규 HTTP API와 오류 코드는 없다.

## 검증

- `./gradlew clean compileJava compileTestJava test`: 통과했다.
- 쿼리 직접 확인: 임시 H2와 로컬 MySQL에서 같은 날 같은 상품이 유형별 세 행으로 나뉘고, 확정 전 주문과 `to` 당일 0시 주문이 제외됨을 확인했다.

## 연결과 남은 작업

- 구매 확정 처리 서비스는 `confirm(LocalDateTime)` 시그니처에 맞춰 추가한다.
- 판매가 없던 유형은 행이 나오지 않으며 유형 정렬은 enum 이름 순서이므로, 호출하는 쪽은 `saleType` 값으로 구분한다.
- 스키마를 SQL로 관리한다면 `orders.confirmed_at` 컬럼 추가가 필요하다.
