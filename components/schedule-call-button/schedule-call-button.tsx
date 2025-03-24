'use client';

import { FC } from 'react';
import { useStore } from '@/store/useStore';
import BaseButton from '@/components/ui/base-button';

type Props = {
  className?: string;
  children?: React.ReactNode;
}

const ScheduleCallButton: FC<Props> = ({
  className,
  children = 'Schedule a call',
}) => {
  const { openModal } = useStore();

  return (
    <BaseButton className={className} onClick={() => openModal('scheduleCall')}>
      {children}
    </BaseButton>
  );
};

export default ScheduleCallButton;
