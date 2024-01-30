import React from 'react';

export default function Wrapper({ children }: { children: React.ReactNode }) {
  return (
    <main className='mt-32 grid w-full place-items-center px-6 lg:px-0'>
      <div className='flex w-full max-w-[1110px] flex-col gap-40'>
        {children}
      </div>
    </main>
  );
}
