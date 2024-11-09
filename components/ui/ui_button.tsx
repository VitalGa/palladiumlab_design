import React from 'react';

interface UiButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  variant?: 'outline' | 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
  className?: string;
}

const variant = {
  primary:
    'bg-[#ffffff] text-[#222222] font-["Gilroy"] text-sm font-extrabold leading-5 text-center underline-offset-[from-font] decoration-skip-ink-none',
  secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300 active:bg-gray-400',
  outline: 'border border-blue-500 text-blue-500 hover:bg-blue-50 active:bg-blue-100',
};

const size = {
  small: 'px-4 py-2 text-sm',
  medium: 'px-12 py-2.5 text-base border border-[#2222224D]',
  large: 'px-8 py-4 text-lg',
};

export const UiButton = ({
  onClick,
  children,
  variant: variantProp = 'outline',
  size: sizeProp = 'small',
  className,
}: UiButtonProps) => {
  return (
    <button className={`${variant[variantProp]} ${size[sizeProp]} ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};
