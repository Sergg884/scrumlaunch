'use client';

import { useStore } from '@/store/useStore';
import BaseButton from '@/components/ui/base-button';

interface ScheduleCallButtonProps {
  className?: string;
  children?: React.ReactNode;
}

const ScheduleCallButton = ({
  className,
  children = 'Schedule a call',
}: ScheduleCallButtonProps) => {
  const { openModal } = useStore();

  return (
    <BaseButton className={className} onClick={() => openModal('scheduleCall')}>
      {children}
    </BaseButton>
  );
};

export default ScheduleCallButton;
