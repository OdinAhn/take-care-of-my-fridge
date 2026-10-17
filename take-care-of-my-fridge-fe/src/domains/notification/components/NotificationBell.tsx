import { BellOutlined } from '@ant-design/icons';
import { Badge, Button } from 'antd';

const UNREAD_COUNT = 3;

export function NotificationBell() {
  return (
    <Badge count={UNREAD_COUNT} size="small">
      <Button type="default" shape="circle" icon={<BellOutlined />} aria-label="알림" />
    </Badge>
  );
}
