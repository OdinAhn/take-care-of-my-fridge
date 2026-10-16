import { StarFilled, UserOutlined } from '@ant-design/icons';
import { Avatar, Flex, Typography } from 'antd';

import { SectionCard } from '@/common/components/SectionCard';

import { MOCK_RECENT_REVIEWS } from '../mocks';
import styles from './RecentReviewSection.module.scss';

export function RecentReviewSection() {
  return (
    <SectionCard title="방금 올라온 후기">
      <Flex vertical gap="small" className={styles.list}>
        {MOCK_RECENT_REVIEWS.map((review) => (
          <div key={review.id} className={styles.reviewCard}>
            <Flex align="center" justify="space-between" gap="xs">
              <Flex align="center" gap="xs" className={styles.titleGroup}>
                <Avatar size="small" icon={<UserOutlined />} className={styles.avatar} />
                <Typography.Text strong className={styles.recipeName}>
                  {review.recipeName}
                </Typography.Text>
              </Flex>
              <Typography.Text type="secondary" className={styles.rating}>
                <StarFilled className={styles.starIcon} /> {review.rating}점
              </Typography.Text>
            </Flex>
            <Typography.Text className={styles.comment}>
              &ldquo;{review.comment}&rdquo;
            </Typography.Text>
          </div>
        ))}
      </Flex>
    </SectionCard>
  );
}
