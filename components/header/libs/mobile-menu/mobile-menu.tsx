'use client';

import { FC } from 'react';
import NavList from '@/components/header/libs/nav-list';
import styles from './styles.module.scss';

type Props = {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu: FC<Props> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className={styles['mobile-menu']}>
      <div className={styles['mobile-menu__content']}>
        <NavList
          className={styles['mobile-menu__nav']}
          onClose={onClose}
          isMobile
        />
      </div>
    </div>
  );
};

export default MobileMenu;
