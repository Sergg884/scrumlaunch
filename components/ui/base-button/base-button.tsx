import { ButtonHTMLAttributes, FC, ReactNode } from 'react';
import styles from './styles.module.scss';
import cn from 'classnames';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  className?: string;
};

const BaseButton: FC<Props> = ({ children, className, ...props }) => {
  return (
    <button
      className={cn(styles['base-button'], className)}
      {...props}
    >
      {children}
    </button>
  );
};

export default BaseButton;
