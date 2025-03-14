import { FC, ReactNode } from 'react';
import cn from 'classnames';
import styles from './styles.module.scss';

type Props = {
  children: ReactNode;
  className?: string;
};

const Container: FC<Props> = ({ children, className }) => {
  return <div className={cn(styles.container, className)}>{children}</div>;
};

export default Container;
