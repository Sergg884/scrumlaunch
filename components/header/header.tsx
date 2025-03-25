'use client';

import { useEffect, useState } from 'react';
import Logo from '@/components/header/libs/logo';
import CloseIcon from '@/components/ui/icons/close-icon';
import Container from '@/components/ui/container';
import NavList from '@/components/header/libs/nav-list';
import MobileMenu from './libs/mobile-menu/mobile-menu';
import cn from 'classnames';
import styles from './styles.module.scss';
import BurgerMenu from '@/components/ui/icons/burger-menu';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;
    document.documentElement.style.setProperty(
      '--scrollbar-width',
      `${scrollbarWidth}px`
    );

    if (isMenuOpen) {
      document.documentElement.classList.add('scroll-lock');
    } else {
      document.documentElement.classList.remove('scroll-lock');
    }

    return () => {
      document.documentElement.classList.remove('scroll-lock');
    };
  }, [isMenuOpen]);

  return (
    <>
      <header
        className={cn(styles.header, {
          [styles['header--menu-open']]: isMenuOpen,
        })}
      >
        <Container>
          <div className={styles.header__inner}>
            <Logo
              className={cn({ [styles['header__logo--inverted']]: isMenuOpen })}
            />

            <NavList className={styles.header__nav} />

            <button
              className={styles.header__burger}
              onClick={toggleMenu}
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMenuOpen ? <CloseIcon /> : <BurgerMenu />}
            </button>
          </div>
        </Container>
      </header>

      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
};

export default Header;
