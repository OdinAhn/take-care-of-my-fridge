# 백엔드 작업 지침

[공통 지침](../AGENTS.md)과 [백엔드 상세 규칙](../docs/conventions/backend.md)을 읽습니다.

## 작업 전

- 관련 도메인 정책, [API 명세](../docs/api/api-spec.md), [DB 규칙](../docs/conventions/database.md)을 확인합니다.
- domain/<domain>/dto, global/response, global/error, global/config는 예정 패키지입니다. 실제 패키지명은 초기 구성 시 확정합니다.
- API 변경 시 프론트의 src/api/<domain>.ts와 계약을 대조하고 변경 영향을 기록합니다.
- 인프라 라이브러리는 기술 목록에 있다는 이유만으로 도입하지 않습니다. 사용 기능과 기존 승인 범위를 확인합니다.

## 검증

```sh
./gradlew clean compileJava compileTestJava
./gradlew test
```

Windows PowerShell에서는 .\gradlew.bat를 사용합니다. Wrapper 또는 빌드 설정이 없으면 미구성·미실행으로 기록합니다.

변경 파일, DTO·ErrorCode 변경, 다른 담당자에게 전달할 계약, 검증 결과와 미검증 항목을 보고합니다.
