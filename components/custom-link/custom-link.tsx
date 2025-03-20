import { ReactNode, FC } from 'react';
import Link from 'next/link';
import styles from './styles.module.scss';

type Props = {
  href: string;
  children: ReactNode;
  className?: string;
};

const CustomLink: FC<Props> = ({ href, children, className }) => {
  return (
    <Link href={href} className={`${styles['custom-link']} ${className}`}>
      {children}
    </Link>
  );
};

export default CustomLink;
