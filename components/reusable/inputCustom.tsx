'use client';
import { useState } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import { Ref } from 'react';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa6';
interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
  register?: UseFormRegisterReturn;
  name?: string;
  type?: string;
  maxlength?: number;
  isOtp?: boolean;
  customRequired?: { value: boolean; message: string };
  customPattern?: { value: RegExp; message: string };
  inputRef?: Ref<HTMLInputElement>;
  dir?: string;
  className?: string;
  customIcon?: React.ReactNode;
}

const InputCustom = ({
  inputRef,
  register,
  isOtp,
  className,
  type = 'text',
  customIcon,
  ...props
}: IProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const isPasswordType = type === 'password';

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div
      className={`relative !rtl block space-y-2 border-none rounded-[8px] shadow-base ${className}`}
    >
      <label
        htmlFor={props.id}
        className='relative z-10 block rounded-lg border  !bg-white shadow-base'
      >
        <input
          {...props}
          className={`utofill:bg-transparent peer w-full rounded-lg border-none bg-transparent p-3 px-4 placeholder-transparent text-right focus:bg-transparent focus:outline-none focus:ring-0 ${
            isOtp ? 'text-center' : 'text-left'
          } ${props.dir === 'rtl' ? 'text-right' : ''} ${className}`}
          type={isPasswordType ? (showPassword ? 'text' : 'password') : type}
          placeholder={props.placeholder}
          ref={inputRef}
          {...register}
          dir={props.dir || 'ltr'}
        />

        {props.placeholder && (
          <span className='pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white px-2 py-0.5 text-sm text-text/90 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:text-sm'>
            {props.placeholder}
          </span>
        )}
        {(isPasswordType || customIcon) && (
          <div
            onClick={isPasswordType ? togglePasswordVisibility : undefined}
            className='absolute end-3 top-1/2 z-20 -translate-y-1/2 cursor-pointer text-gray-500'
          >
            {customIcon ? (
              customIcon
            ) : showPassword ? (
              <FaRegEye className='text-primary-300' size={18} />
            ) : (
              <FaRegEyeSlash className='text-primary-300' size={18} />
            )}
          </div>
        )}
      </label>
    </div>
  );
};

export default InputCustom;
