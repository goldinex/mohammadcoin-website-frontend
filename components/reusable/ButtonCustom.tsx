'use client';
import { loginText } from '@/utils/text';
import React, { useEffect, useRef, ReactNode, useState } from 'react';

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  handleClick?: () => Promise<void> | void;
  textClassName?: string;
  className?: string;
  children?: ReactNode;
}

const ButtonCustom = ({
  text = `${loginText.confirm}`,
  handleClick,
  textClassName = 'text-white',
  className = 'w-full flex justify-center text-white px-4 py-3 rounded-lg transition bg-primary-600 disabled:bg-primary-300 disabled:cursor-not-allowed',
  type = 'button',
  disabled = false,
  children,
  ...props
}: IProps) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [internalDisabled, setInternalDisabled] = useState(false);
  const [internalLoading, setInternalLoading] = useState(false);

  const isButtonDisabled = disabled || internalDisabled;

  const handleDebouncedClick = async () => {
    if (!isButtonDisabled && handleClick) {
      try {
        setInternalDisabled(true);
        setInternalLoading(true);
        await handleClick(); 
      } finally {
        setInternalDisabled(false);
        setInternalLoading(false);
      }
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Enter' && !isButtonDisabled) {
        if (
          document.activeElement !== buttonRef.current &&
          document.activeElement?.tagName !== 'TEXTAREA'
        ) {
          handleDebouncedClick();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isButtonDisabled, handleClick]);

  return (
    <button
      ref={buttonRef}
      type={type}
      disabled={isButtonDisabled}
      onClick={handleDebouncedClick}
      className={className}
      {...props}
    >
      {internalLoading ? (
        <div className='w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin' />
      ) : (
        children ?? text
      )}
    </button>
  );
};

export default ButtonCustom;
