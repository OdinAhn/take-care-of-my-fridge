import { RightOutlined, WarningFilled } from '@ant-design/icons';
import { Button, Flex, Tag, Typography } from 'antd';

import { SectionCard } from '@/common/components/SectionCard';

import { MOCK_MY_FRIDGE_SUMMARY } from '../mocks';
import styles from './MyFridgeSection.module.scss';

const IMMINENT_THRESHOLD_DAYS = 3;

export function MyFridgeSection() {
  const { totalCount, imminentCount, items } = MOCK_MY_FRIDGE_SUMMARY;

  return (
    <SectionCard
      title="내 냉장고"
      extra={
        <Typography.Text type="secondary" className={styles.summaryText}>
          {totalCount}개 · 임박 {imminentCount}
        </Typography.Text>
      }
    >
      <div className={styles.container}>
        <Flex vertical gap="xs" className={styles.itemList}>
          {items.map((item) => {
            const isImminent = item.daysLeft <= IMMINENT_THRESHOLD_DAYS;

            return (
              <div key={item.id} className={styles.itemRow}>
                <Typography.Text strong={isImminent} className={styles.itemName}>
                  {item.name}
                </Typography.Text>
                <Flex align="center" gap="xs">
                  {isImminent && (
                    <WarningFilled className={styles.warningIcon} aria-label="소비기한 임박 경고" />
                  )}
                  <Tag className={isImminent ? styles.imminentBadge : styles.normalBadge}>
                    {item.dDayLabel}
                  </Tag>
                </Flex>
              </div>
            );
          })}
        </Flex>

        <Flex justify="flex-end" className={styles.footer}>
          <Button shape="round" size="small" className={styles.shortcutButton}>
            내 냉장고 바로가기 <RightOutlined />
          </Button>
        </Flex>
      </div>
    </SectionCard>
  );
}
