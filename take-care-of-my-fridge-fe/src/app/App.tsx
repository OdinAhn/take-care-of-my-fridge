import { QueryClientProvider } from '@tanstack/react-query';
import { App as AntdApp, ConfigProvider } from 'antd';
import koKR from 'antd/locale/ko_KR';
import { RouterProvider } from 'react-router/dom';

import { FeedbackBridge } from './FeedbackBridge';
import { queryClient } from './queryClient';
import { router } from './router';
import { theme } from './theme';

export function App() {
  return (
    <ConfigProvider theme={theme} locale={koKR}>
      <AntdApp>
        <FeedbackBridge />
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>
      </AntdApp>
    </ConfigProvider>
  );
}
