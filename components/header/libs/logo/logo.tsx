import Link from 'next/link';
import { FC } from 'react';
import { LogoIcon } from '@/components/ui/icons';

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
