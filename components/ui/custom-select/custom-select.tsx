'use client';

import { useState, useRef, useEffect } from 'react';
import cn from 'classnames';
import styles from './styles.module.scss';

interface CustomSelectProps {
  label: string;
  options: string[];
  onChange: (value: string) => void;
  value?: string;
  placeholder?: string;
}

export default function CustomSelect({
  label,
  options,
  onChange,
  value,
  placeholder = 'Select option'
}: CustomSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(value || '');
  const selectRef = useRef<HTMLDivElement>(null);

  const handleSelect = (option: string) => {
    setSelectedOption(option);
    onChange(option);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className={styles['custom-select']} ref={selectRef}>
      <label className={styles['custom-select__label']}>{label}</label>
      <div 
        className={cn(styles['custom-select__header'], {
          [styles['custom-select__header--open']]: isOpen
        })}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className={styles['custom-select__value']}>
          {selectedOption || placeholder}
        </span>
        <span className={styles['custom-select__arrow']} />
      </div>
      {isOpen && (
        <div className={styles['custom-select__dropdown']}>
          {options.map((option) => (
            <div
              key={option}
              className={cn(styles['custom-select__option'], {
                [styles['custom-select__option--selected']]: option === selectedOption
              })}
              onClick={() => handleSelect(option)}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
} 