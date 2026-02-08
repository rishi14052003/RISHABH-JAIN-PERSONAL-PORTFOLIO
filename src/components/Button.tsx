import React from 'react';
import type { ButtonProps } from '../types';
import '../styles/Button.css';

/**
 * Reusable button component with multiple variants and states
 * Supports loading states, icons, and accessibility features
 */
export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'medium',
  children,
  onClick,
  disabled = false,
  isLoading = false,
  icon,
  fullWidth = false,
  type = 'button',
  ariaLabel,
}) => {
  const baseClasses = 'btn';
  const variantClasses = `btn--${variant}`;
  const sizeClasses = `btn--${size}`;
  const widthClass = fullWidth ? 'btn--full-width' : '';
  const loadingClass = isLoading ? 'btn--loading' : '';
  const disabledClass = disabled ? 'btn--disabled' : '';

  const buttonClasses = [
    baseClasses,
    variantClasses,
    sizeClasses,
    widthClass,
    loadingClass,
    disabledClass,
  ]
    .filter(Boolean)
    .join(' ');

  const handleClick = () => {
    if (!disabled && !isLoading && onClick) {
      onClick();
    }
  };

  const buttonProps = {
    className: buttonClasses,
    onClick: handleClick,
    disabled: disabled || isLoading,
    type,
    'aria-label': ariaLabel,
    'aria-disabled': disabled || isLoading,
    'aria-busy': isLoading,
  };

  return (
    <button {...buttonProps}>
      {icon && !isLoading && (
        <span className="btn__icon" aria-hidden="true">
          {icon}
        </span>
      )}
      
      {isLoading && (
        <span className="btn__spinner" aria-hidden="true">
          <svg
            className="btn__spinner-svg"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              className="btn__spinner-circle"
              cx="12"
              cy="12"
              r="10"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeDasharray="31.416"
              strokeDashoffset="31.416"
            />
          </svg>
        </span>
      )}
      
      <span className="btn__text">{children}</span>
      
      {/* Ripple effect container */}
      <span className="btn__ripple" />
    </button>
  );
};

export default Button;
