import React, { FC, HTMLAttributes, ElementType } from 'react';
import { ReactNode } from 'react';
import cn from 'classnames';
import styles from './styles.module.scss';

type Props = HTMLAttributes<HTMLHeadingElement> & {
  children: ReactNode;
  className?: string;
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
};

const Title: FC<Props> = ({ children, className, variant = 'h1' }) => {
  const Component = variant as ElementType;
  return (
    <Component
      className={cn(styles.title, styles[`title--${variant}`], className)}
    >
      {children}
    </Component>
  );
};

export default Title;
