import { MutationCache, QueryClient } from '@tanstack/react-query';

import { getErrorMessage } from '@/common/api/errors';

import { getFeedback } from './feedback';

declare module '@tanstack/react-query' {
  interface Register {
    mutationMeta: {
      // 화면에서 실패를 직접 처리할 때 전역 알림을 끈다.
      skipGlobalError?: boolean;
    };
  }
}

export const queryClient = new QueryClient({
  mutationCache: new MutationCache({
    onError: (error, _variables, _onMutateResult, mutation) => {
      if (mutation.meta?.skipGlobalError) return;
      getFeedback()?.message.error(getErrorMessage(error));
    },
  }),
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});
