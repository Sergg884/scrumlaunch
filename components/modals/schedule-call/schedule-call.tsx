'use client';

import { useEffect } from 'react';
import { useStore } from '@/store/useStore';
import Image from 'next/image';
import styles from './styles.module.scss';

const ScheduleCall = () => {
  const { modalType, closeModal } = useStore();
  
  useEffect(() => {
    if (modalType === 'scheduleCall') {
      document.body.style.overflow = 'hidden';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [modalType]);
  
  useEffect(() => {
    if (modalType === 'scheduleCall') {
      const script = document.createElement('script');
      script.src = 'https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js';
      script.async = true;
      
      document.body.appendChild(script);
      
      return () => {
        if (document.body.contains(script)) {
          document.body.removeChild(script);
        }
      };
    }
  }, [modalType]);
  
  if (modalType !== 'scheduleCall') return null;
  
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };
  
  return (
    <div className={styles.modal} role="dialog" onClick={handleBackdropClick}>
      <div className={styles.modal__content}>
        <header className={styles.modal__header}>
          <button 
            onClick={closeModal} 
            className={styles.modal__closeButton}
            aria-label="Close modal"
          >
            <Image
              src="/icons/black_close.svg"
              alt="Close"
              width={24}
              height={24}
            />
          </button>
        </header>
        
        <div className={styles.modal__body}>
          <div 
            className="meetings-iframe-container" 
            data-src="https://meetings.hubspot.com/andy-daidone?embed=true"
          ></div>
        </div>
      </div>
    </div>
  );
};

export default ScheduleCall;
