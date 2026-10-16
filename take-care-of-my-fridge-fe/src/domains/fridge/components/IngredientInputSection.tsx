import { CalendarOutlined, CloseOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, DatePicker, Divider, Flex, Input, Select, Typography } from 'antd';

import { SectionCard } from '@/common/components/SectionCard';

import { MOCK_QUICK_CHIPS, MOCK_STAGED_INGREDIENTS } from '../mocks';
import styles from './IngredientInputSection.module.scss';

const STORAGE_OPTIONS = [
  { value: 'REFRIGERATED', label: '보관: 냉장' },
  { value: 'FROZEN', label: '보관: 냉동' },
  { value: 'ROOM_TEMP', label: '보관: 상온' },
];

export function IngredientInputSection() {
  return (
    <SectionCard title="냉장고에 뭐가 남았나요?">
      <div className={styles.container}>
        <div className={styles.formRow}>
          <Input
            placeholder="재료명 (예: 참치캔)"
            aria-label="재료명"
            className={styles.nameInput}
          />
          <Input
            placeholder="수량"
            suffix={
              <Typography.Text type="secondary" className={styles.unitHint}>
                단위 자동
              </Typography.Text>
            }
            aria-label="수량"
            className={styles.quantityInput}
          />
          <DatePicker
            placeholder="소비기한"
            suffixIcon={<CalendarOutlined />}
            aria-label="소비기한"
            className={styles.datePicker}
          />
          <Select
            defaultValue="REFRIGERATED"
            options={STORAGE_OPTIONS}
            aria-label="보관 방식"
            className={styles.storageSelect}
          />
          <Button type="primary" icon={<PlusOutlined />} className={styles.addButton}>
            재료 추가
          </Button>
        </div>

        <Flex align="center" wrap gap="small" className={styles.quickRow}>
          <Typography.Text type="secondary" className={styles.quickLabel}>
            빠른 선택
          </Typography.Text>
          <Flex wrap gap="xs">
            {MOCK_QUICK_CHIPS.map((chip) => (
              <Button
                key={chip.id}
                size="small"
                shape="round"
                icon={<PlusOutlined />}
                className={styles.chipButton}
              >
                {chip.name}
              </Button>
            ))}
          </Flex>
        </Flex>

        <Divider className={styles.divider} />

        <Flex vertical gap="xs" className={styles.stagedList}>
          {MOCK_STAGED_INGREDIENTS.map((item) => (
            <div key={item.id} className={styles.stagedItem}>
              <Typography.Text strong className={styles.stagedName}>
                {item.name}
              </Typography.Text>
              <Typography.Text className={styles.stagedQty}>{item.quantityText}</Typography.Text>
              <Typography.Text className={styles.stagedDate}>{item.expirationDate}</Typography.Text>
              <Typography.Text type="secondary" className={styles.stagedStorage}>
                {item.storageLabel}
              </Typography.Text>
              <Button
                type="text"
                size="small"
                icon={<CloseOutlined />}
                aria-label={`${item.name} 삭제`}
                className={styles.removeButton}
              />
            </div>
          ))}
        </Flex>

        <Flex justify="flex-end" wrap gap="small" className={styles.footerActions}>
          <Button className={styles.actionButton}>AI 상담</Button>
          <Button type="primary" className={styles.actionButton}>
            냉장고 저장
          </Button>
        </Flex>
      </div>
    </SectionCard>
  );
}
