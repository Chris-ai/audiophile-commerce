'use client';

import { useParams } from 'next/navigation';

export default function SubpageHero() {
  const { category } = useParams();

  return (
    <div className='grid place-items-center bg-black py-8 sm:py-24'>
      <h1 className='text-h4 uppercase text-white sm:text-h2'>{category}</h1>
    </div>
  );
}
