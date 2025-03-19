'use client';

import { useEffect, useState } from 'react';
import ScheduleCall from '@/components/modals/schedule-call/schedule-call';

export function ModalProvider() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return <ScheduleCall />;
}
