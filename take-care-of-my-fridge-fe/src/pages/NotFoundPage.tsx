import { Button, Result } from 'antd';
import { useNavigate } from 'react-router';

import { ROUTES } from '@/app/paths';

export default function NotFoundPage() {
  const navigate = useNavigate();
  const handleGoHome = () => navigate(ROUTES.home);

  return (
    <Result
      status="404"
      title="페이지를 찾을 수 없습니다"
      subTitle="주소가 바뀌었거나 삭제된 페이지입니다."
      extra={
        <Button type="primary" onClick={handleGoHome}>
          홈으로
        </Button>
      }
    />
  );
}
