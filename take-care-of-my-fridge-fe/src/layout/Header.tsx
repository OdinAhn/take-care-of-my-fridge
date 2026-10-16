import { Layout, Typography } from 'antd';
import { Link } from 'react-router';

import { ROUTES } from '@/app/paths';

import styles from './Header.module.scss';

export function Header() {
  return (
    <Layout.Header className={styles.header}>
      <div className={styles.inner}>
        <Link to={ROUTES.home} className={styles.brand}>
          <Typography.Text strong className={styles.brandText}>
            냉장고를 부탁해
          </Typography.Text>
        </Link>
      </div>
    </Layout.Header>
  );
}
