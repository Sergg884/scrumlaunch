'use client';

import { useEffect, useState } from 'react';
import { useStore } from '@/store/useStore';
import ScheduleCall from '@/components/modals/schedule-call/schedule-call';

export function ModalProvider() {
  const { modalType } = useStore();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  switch (modalType) {
    case 'scheduleCall':
      return <ScheduleCall />;
    default:
      return null;
  }
} 