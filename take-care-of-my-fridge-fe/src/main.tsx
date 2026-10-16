import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import dayjs from 'dayjs';
import 'dayjs/locale/ko';
import 'pretendard/dist/web/variable/pretendardvariable-dynamic-subset.css';

import { App } from '@/app/App';
import '@/styles/global.scss';

dayjs.locale('ko');

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
