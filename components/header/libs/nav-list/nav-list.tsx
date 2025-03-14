'use client';

import Link from 'next/link';
import { FC } from 'react';
import cn from 'classnames';
import styles from './styles.module.scss';

const navList = [
  {
    label: 'AI Transformation',
    href: '/ai-transformation',
  },
  {
    label: 'Product Development',
    href: '/product-development',
  },
  {
    label: 'IT Recruiting',
    href: '/it-recruiting',
  },
  {
    label: 'Case Studies',
    href: '/case-studies',
  },
  {
    label: 'Blog',
    href: '/blog',
  },
  {
    label: 'Careers',
    href: '/careers',
  },
  {
    label: 'Build Team with Scrum AI',
    href: '/build-team',
  },
];

type Props = {
  className?: string;
  isMobile?: boolean;
  onClose?: () => void;
};

const NavList: FC<Props> = ({ className, isMobile = false, onClose }) => {
  const handleClick = () => {
    if (isMobile && onClose) {
      onClose();
    }
  };

  return (
    <nav className={cn(styles['nav-list'], className)}>
      {isMobile && (
        <Link
          href="/"
          className={styles['nav-list__item']}
          onClick={handleClick}
        >
          Home
        </Link>
      )}

      {navList.map((item) => {
        if (item.href === '/build-team') {
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                styles['nav-list__item'],
                styles['nav-list__item--button']
              )}
              onClick={handleClick}
            >
              {item.label}
            </Link>
          );
        }

        return (
          <Link
            key={item.href}
            href={item.href}
            className={styles['nav-list__item']}
            onClick={handleClick}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
};

export default NavList;
