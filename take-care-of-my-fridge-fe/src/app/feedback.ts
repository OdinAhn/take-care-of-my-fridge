import type { App } from 'antd';

type Feedback = ReturnType<typeof App.useApp>;

let current: Feedback | null = null;

// React 밖(queryClient 등)에서 message·notification·modal을 쓰기 위한 연결점. FeedbackBridge가 채운다.
export function getFeedback() {
  return current;
}

export function setFeedback(feedback: Feedback) {
  current = feedback;
}
