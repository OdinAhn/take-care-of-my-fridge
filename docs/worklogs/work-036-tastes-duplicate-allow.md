# WORK-036: 맛 선호 변경 중복 허용 복구

상태: 검증 대기 · 작성일: 2026-10-19 · 담당: 회원

## 목표와 완료 기준

- 맛 선호 변경 요청에서 같은 값이 여러 번 와도 성공한다.
- 저장된 회원 맛 선호에는 각 맛이 한 번만 남는다.
- 회원가입의 중복 거부 정책은 유지한다.

## 근거와 범위

- 사용자가 맛 선호 변경 요청의 중복 허용을 확정했다.
- docs/api/api-spec.md는 변경 요청의 중복 허용과 한 번 저장을 명시한다.
- 병합된 PR #72의 중복 거부를 맛 선호 변경 경로에서만 되돌린다.

## 검증

- MemberServiceTest의 중복 허용·저장 결과 및 회원가입 중복 거부 확인.
- MemberControllerTest의 중복 요청 전달 확인.
- clean compileJava compileTestJava 통과. 전체 test는 130개 중 129개 통과했고, contextLoads 1개는 로컬 MySQL fridge_user 인증 거부로 실패했다.
