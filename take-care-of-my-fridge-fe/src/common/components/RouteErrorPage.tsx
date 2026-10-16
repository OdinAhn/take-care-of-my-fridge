import { Button, Result } from 'antd';

export function RouteErrorPage() {
  const handleReload = () => window.location.reload();

  return (
    <Result
      status="error"
      title="화면을 표시하지 못했습니다"
      subTitle="잠시 후 다시 시도해 주세요."
      extra={
        <Button type="primary" onClick={handleReload}>
          새로고침
        </Button>
      }
    />
  );
}
