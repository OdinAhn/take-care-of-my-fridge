import { useEffect } from 'react';
import { App } from 'antd';

import { setFeedback } from './feedback';

// AntdApp 안에 두어야 App.useApp()이 테마·locale이 적용된 인스턴스를 돌려준다.
export function FeedbackBridge() {
  const feedback = App.useApp();

  useEffect(() => {
    setFeedback(feedback);
  }, [feedback]);

  return null;
}
