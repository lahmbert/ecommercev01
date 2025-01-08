import React from 'react';

interface ButtonProps {
  label: string;
  onClick: () => void;
  color?: 'primary' | 'secondary' | 'danger' | 'default';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  color = 'primary',
  size = 'medium',
  disabled = false,
  className = '',
}) => {
  // Set up class names based on the props
  const colorClasses = {
    primary: 'bg-blue-500 text-white hover:bg-blue-600',
    secondary: 'bg-gray-500 text-white hover:bg-gray-600',
    danger: 'bg-red-500 text-white hover:bg-red-600',
    default: 'bg-black text-white',
  };

  const sizeClasses = {
    small: 'px-4 pt-2 pb-3 text-sm',
    medium: 'px-6 py-3 text-base',
    large: 'px-8 py-4 text-lg',
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`rounded-full ${colorClasses[color]} ${sizeClasses[size]} ${className} transition duration-300 ease-in-out`}
    >
      {label}
    </button>
  );
};

export default Button;
