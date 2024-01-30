'use client';
import { cn } from '@nextui-org/react';

interface IProps {
  label: string;
  inputClassName?: string;
  className?: string;
  placeholder?: string;
  error: boolean;
  errorMessage?: string;
  name: string;
  onChange: (value: string) => void;
}

export default function Input({
  label,
  className,
  placeholder,
  error,
  errorMessage,
  name,
  inputClassName,
  onChange,
}: IProps) {
  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <div className={`relative flex w-full flex-col gap-2 ${className}`}>
      <label
        className={cn('text-subtitle', error ? 'text-red-500' : 'text-black')}
      >
        {label}
      </label>
      <input
        name={name}
        placeholder={placeholder}
        onChange={handleOnChange}
        className={cn(
          'text-bold w-full rounded-lg border-1 py-4 pl-6 outline-none placeholder:font-bold',
          error
            ? 'border-red-500 focus:border-red-500 active:border-red-500'
            : 'border-grey focus:border-orange active:border-orange ',
          inputClassName
        )}
      />
      {error && (
        <p className='text-[.75rem] uppercase text-red-500'>{errorMessage}</p>
      )}
    </div>
  );
}
