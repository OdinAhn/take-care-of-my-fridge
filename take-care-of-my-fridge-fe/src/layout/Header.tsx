import { MenuOutlined, SearchOutlined } from '@ant-design/icons';
import { Badge, Button, Drawer, Flex, Grid, Input, Layout, Typography } from 'antd';
import { useState } from 'react';
import { Link } from 'react-router';

import { ROUTES } from '@/app/paths';
import { NotificationBell } from '@/domains/notification/components/NotificationBell';

import styles from './Header.module.scss';

const CART_COUNT = 2;

const NAV_ITEMS = [
  { key: 'fridge', label: '내 냉장고' },
  { key: 'recipes', label: '레시피' },
  { key: 'products', label: '재료/밀키트' },
  { key: 'cart', label: '장바구니', badgeCount: CART_COUNT },
  { key: 'mypage', label: '마이페이지' },
] as const;

export function Header() {
  const screens = Grid.useBreakpoint();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleOpenDrawer = () => setDrawerOpen(true);
  const handleCloseDrawer = () => setDrawerOpen(false);

  return (
    <Layout.Header className={styles.header}>
      <div className={styles.inner}>
        <Link to={ROUTES.home} className={styles.brand}>
          <span className={styles.logoMark} aria-hidden="true">
            <span className={styles.logoDoor} />
          </span>
          <Typography.Text strong className={styles.brandText}>
            냉장고를 부탁해
          </Typography.Text>
        </Link>

        <div className={styles.searchWrapper}>
          <Input
            prefix={<SearchOutlined />}
            placeholder="재료나 요리를 검색해 보세요"
            aria-label="재료나 요리 검색"
            className={styles.searchInput}
          />
        </div>

        <nav className={styles.desktopNav} aria-label="주요 메뉴">
          {NAV_ITEMS.map((item) => (
            <Button key={item.key} type="text" className={styles.navButton}>
              <Flex align="center" gap="small">
                <span>{item.label}</span>
                {'badgeCount' in item && <Badge count={item.badgeCount} size="small" />}
              </Flex>
            </Button>
          ))}
        </nav>

        <Flex align="center" gap="small" className={styles.actions}>
          <NotificationBell />
          {!screens.lg && (
            <Button
              type="text"
              icon={<MenuOutlined />}
              aria-label="메뉴 열기"
              onClick={handleOpenDrawer}
              className={styles.mobileMenuTrigger}
            />
          )}
        </Flex>
      </div>

      <Drawer
        title="냉장고를 부탁해"
        placement="right"
        open={!screens.lg && drawerOpen}
        onClose={handleCloseDrawer}
      >
        <Flex vertical gap="middle">
          <Input
            prefix={<SearchOutlined />}
            placeholder="재료나 요리를 검색해 보세요"
            aria-label="모바일 재료나 요리 검색"
          />
          <Flex vertical gap="xs" role="navigation" aria-label="모바일 메뉴">
            {NAV_ITEMS.map((item) => (
              <Button
                key={item.key}
                type="text"
                block
                onClick={handleCloseDrawer}
                className={styles.drawerNavButton}
              >
                <Flex align="center" justify="space-between" className={styles.drawerNavInner}>
                  <span>{item.label}</span>
                  {'badgeCount' in item && <Badge count={item.badgeCount} size="small" />}
                </Flex>
              </Button>
            ))}
          </Flex>
        </Flex>
      </Drawer>
    </Layout.Header>
  );
}
