'use client';

import { CartProvider } from '@/context/CartProvider';
import { NextUIProvider } from '@nextui-org/react';
import React from 'react';

interface ProvidersProps {
  children: React.ReactNode;
}

export default function Providers({ children }: ProvidersProps) {
  return (
    <NextUIProvider>
      <CartProvider>{children}</CartProvider>
    </NextUIProvider>
  );
}
