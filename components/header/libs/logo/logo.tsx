import LogoIcon from '@/assets/icons/logo.svg';
import Link from 'next/link';
import { FC } from 'react';

type Props = {
  className?: string;
};

const Logo: FC<Props> = ({ className }) => {
  return (
    <Link href="/">
      <LogoIcon className={className} />
    </Link>
  );
};

export default Logo;
