import { Flex, Typography } from 'antd';

export default function MainPage() {
  return (
    <Flex vertical gap="small">
      <Typography.Title level={2}>냉장고를 부탁해</Typography.Title>
      <Typography.Paragraph type="secondary">
        냉장고에 남은 재료를 관리하고, 보유 재료에 맞는 레시피를 찾아보세요.
      </Typography.Paragraph>
    </Flex>
  );
}
