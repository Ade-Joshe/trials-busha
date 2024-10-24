import React from 'react';
import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";

interface IButtonProps extends HTMLButtonElement {
  variant: "transparent" | "default" | "danger" | "secondary" | "ghost" | "white";
  label?: string;
  suffixIcon?: React.ReactNode;
  prefixIcon?: React.ReactNode;
  href?: string;
  loading?: boolean;
};

const Button = (
  {
    variant = 'transparent',
    children,
    label,
    className,
    suffixIcon,
    prefixIcon,
    href,
    loading,
    disabled,
    ...rest
  }: IButtonProps & any
) => {
  const content = (
    <>
      {prefixIcon && <>{prefixIcon}</>}
      <>{loading ? 'Processing...' : children || label ? label : ''}</>
      {suffixIcon && <>{suffixIcon}</>}
    </>
  );

  const dangerClassName =
    'text-white bg-orange-dark hover:text-gray-dark hover:bg-orange-medium';
  const defaultClassName = twMerge(
    'text-white bg-green hover:text-gray-dark hover:bg-green-medium',
    loading && 'text-gray-dark bg-green-medium hover:text-white hover:bg-green'
  );
  const disabledClassName =
    'bg-gray-light hover:bg-gray-silver cursor-not-allowed';
  const ghostButtonClassName =
    'bg-none border border-gray-medium dark:border-gray-dark hover:bg-green-medium';
  const preClassName =
    'h-auto min-w-[48px] px-3 py-2 rounded-lg flex flex-row items-center justify-center gap-2 font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-200 focus:ring-green';
  const secondaryClassName = 'bg-none text-green border border-green';
  const transparentClassName = 'bg-transparent border-none';
  const whiteButtonClassName =
    'bg-white text-green border-none hover:bg-gray-100';

  const globalClassName = twMerge(
    preClassName,
    variant === 'danger' && dangerClassName,
    variant === 'default' && defaultClassName,
    variant === 'ghost' && ghostButtonClassName,
    variant === 'secondary' && secondaryClassName,
    variant === 'transparent' && transparentClassName,
    variant === 'white' && whiteButtonClassName,
    className,
    disabled && disabledClassName,
  );

  return href ? (
    <Link
      href={disabled ? href : '#'}
      className={globalClassName}
      {...rest}
    >
      {content}
    </Link>
  ) : (
    <button
      disabled={loading || disabled}
      className={globalClassName}
      {...rest}
    >
      {content}
    </button>
  );
};

export default Button;
