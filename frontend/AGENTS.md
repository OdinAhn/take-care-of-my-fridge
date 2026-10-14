# 프론트엔드 작업 지침

[공통 지침](../AGENTS.md)과 [프론트 상세 규칙](../docs/conventions/frontend.md)을 읽습니다.

## 작업 전

- [화면 명세](../docs/requirements/screens.md)에서 해당 화면의 동작·상태·담당을 확인합니다.
- [API 명세](../docs/api/api-spec.md)와 실제 백엔드 컨트롤러·DTO를 대조합니다.
- src/api/client.ts, src/api/<domain>.ts, src/router/paths.ts, src/router/index.tsx, src/theme/theme.ts, src/styles/는 예정 경로입니다. 실제 존재 여부부터 확인합니다.
- 초기 설정 단계에는 package.json과 잠금 파일을 먼저 마련합니다. 합의된 초기 의존성을 설치해 잠금 파일을 생성한 이후 pnpm install --frozen-lockfile 규칙을 적용합니다.

## 검증

```sh
pnpm lint
pnpm format:check
pnpm typecheck
pnpm build
pnpm test
```

test는 테스트 설정이 있을 때 실행하며, 없으면 미구성을 기록합니다. UI 변경은 브라우저 사용이 가능할 때 375 / 768 / 1440px에서 확인하고, 360px 최소 폭도 요구사항에 포함합니다. 실행하지 않은 검증은 통과로 표시하지 않습니다.

변경 파일, API 타입 변경, UI 확인 범위, 실패·미실행 항목을 보고합니다.
