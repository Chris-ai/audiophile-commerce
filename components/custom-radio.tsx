'use client';
import React from 'react';
import {
  RadioGroup,
  useRadio,
  VisuallyHidden,
  cn,
  RadioProps,
} from '@nextui-org/react';

export const CustomRadio = (props: RadioProps) => {
  const {
    Component,
    children,
    isSelected,
    getBaseProps,
    getWrapperProps,
    getInputProps,
    getLabelProps,
    getLabelWrapperProps,
    getControlProps,
  } = useRadio(props);

  return (
    <Component
      {...getBaseProps()}
      className={cn(
        'group flex items-center justify-start tap-highlight-transparent hover:opacity-70 active:opacity-50',
        'w-full cursor-pointer gap-4 rounded-lg border-1 border-grey p-4 font-bold text-black',
        'data-[selected=true]:border-orange'
      )}
    >
      <VisuallyHidden>
        <input {...getInputProps()} />
      </VisuallyHidden>
      <span {...getWrapperProps()}>
        <span {...getControlProps()} />
      </span>{' '}
      <div {...getLabelWrapperProps()}>
        {children && <span {...getLabelProps()}>{children}</span>}
      </div>
    </Component>
  );
};
