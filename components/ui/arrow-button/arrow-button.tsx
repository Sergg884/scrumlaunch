import { FC, ButtonHTMLAttributes } from 'react';
import ArrowIcon from '@/components/ui/icons/arrow-icon';
import cn from 'classnames';
import styles from './styles.module.scss';

type ArrowButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  direction?: 'prev' | 'next';
};

const ArrowButton: FC<ArrowButtonProps> = ({
  direction = 'prev',
  className,
  ...props
}) => {
  return (
    <button
      className={cn(styles['arrow-button'], styles[`arrow-button--${direction}`], className)}
      aria-label={direction === 'prev' ? 'Previous' : 'Next'}
      {...props}
    >
      <ArrowIcon />
    </button>
  );
};

export default ArrowButton; 