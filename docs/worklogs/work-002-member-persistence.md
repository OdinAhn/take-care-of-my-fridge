# WORK-002: 회원 저장 구조

상태: 검증 대기 · 작성일: 2026-10-16 · 담당: 회원 도메인

## 목표와 완료 기준
- 회원가입에서 사용할 회원·맛 선호 JPA 매핑과 중복 확인 저장소를 분리한다.
- 컴파일과 회원 생성 규칙 테스트를 통과한다.

## 근거와 범위
- [회원 도메인](../architecture/domains/member.md), [API 명세](../api/api-spec.md), [데이터 사전](../database/data-dictionary.md)의 `members`·`member_tastes`.
- 회원·맛 선호 엔티티, 회원 저장소, 기존 `BaseTimeEntity`의 JPA 감사 설정만 포함한다. API·서비스·DB DDL은 변경하지 않는다.
- 감사 시각의 최종 관리 주체(Q-06)는 미정이다. 현재 코드의 감사 필드를 동작시키는 설정이며, DB와 함께 쓰는 방식은 후속 확인이 필요하다.

## 계획
| 단계 | 변경 | 검증 |
|---|---|---|
| 1 | 회원·맛 선호 매핑과 저장소 분리 | DB 사전과 필드·제약 비교 |
| 2 | 가입 초기 상태 테스트 | 집중 테스트 |
| 3 | 백엔드 검증 | 컴파일·전체 테스트 |

## AI 활용과 개발자 판단
- 기존 회원가입 작업에서 저장 계층 파일만 골라 독립 브랜치에 옮겼다.
- 가입 시 역할 `USER`, 상태 `ACTIVE`, 0개 이상의 맛 선호라는 기존 설계를 유지했다.
- MySQL 계정 인증 실패를 우회하기 위한 DB 설정·의존성 변경은 범위에서 제외했다.

## 구현 결과
- `Member`, `MemberTaste`: 회원과 맛 선호의 매핑·유일 제약·가입 초기 상태.
- `MemberRepository`: 이메일·닉네임 존재 확인.
- `JpaAuditingConfig`: 기존 감사 필드 활성화.
- API 요청·응답 DTO 및 오류 코드는 변경 없음. 프론트 연동 변경 없음.

## 검증
| 명령·시나리오 | 실행 환경·조건 | 결과 | 근거 |
|---|---|---|---|
| `.\gradlew.bat clean compileJava compileTestJava test --tests 'org.example.takecareofmyfridgebe.domain.member.entity.MemberTest'` | Windows, JDK/Gradle | 통과 | 회원 초기 상태·맛 선호 연결 테스트 1건 |
| `.\gradlew.bat test` | 로컬 MySQL | 실패 | 기존 `contextLoads`: `fridge_user` 인증 거부로 JDBC 메타데이터 조회 불가 |

## 연결과 남은 작업
- 관련 PR: 생성 후 본문에서 연결.
- 로컬 DB 인증 해결 후 전체 테스트 재실행 필요.
- Q-06 감사 시각 관리 주체 확정 후 JPA와 DB 설정의 중복 여부 확인 필요.
