import type { ThemeConfig } from 'antd';

// antd v6는 CSS 변수(--ant-*)가 기본으로 켜져 있어 cssVar 설정이 필요 없다.
export const theme: ThemeConfig = {
  token: {
    colorPrimary: '#4f46e5',
    borderRadius: 8,
    fontFamily: "'Pretendard Variable', Pretendard, -apple-system, BlinkMacSystemFont, sans-serif",
  },
};
