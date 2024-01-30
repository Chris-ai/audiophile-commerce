import Link from 'next/link';
import Logo from './logo';
import pages from '@/app/pages';
import { menuItems } from '@/utils';

export default function Footer() {
  return (
    <footer className='mt-36 grid place-items-center bg-black px-6 pb-8 sm:px-10'>
      <div className='flex w-full max-w-[1110px] flex-col items-center gap-12 text-center sm:items-start sm:text-start'>
        <div className='h-1 w-[101px] bg-orange'></div>
        <div className='flex flex-col gap-12 lg:w-full lg:flex-row lg:justify-between'>
          <Logo />
          <div className='lg: flex flex-col gap-4 sm:flex-row'>
            <Link
              href={pages.home}
              className='text-subtitle uppercase tracking-[2px] text-white duration-250 transition-all hover:text-orange'
            >
              Home
            </Link>
            {menuItems.map((category) => (
              <Link
                key={category}
                href={pages.categoryPage(category)}
                className='text-subtitle uppercase tracking-[2px] text-white duration-250 transition-all hover:text-orange'
              >
                {category}
              </Link>
            ))}
          </div>
        </div>
        <p className='text-regular font-[400] text-white opacity-50 lg:max-w-[540px]'>
          Audiophile is an all in one stop to fulfill your audio needs.
          We&apos;re a small team of music lovers and sound specialists who are
          devoted to helping you get the most out of personal audio. Come and
          visit our demo facility - we&apos;re open 7 days a week.
        </p>
        <p className='text-regular font-bold text-white opacity-50'>
          Copyright 2024. All Rights Reserved
        </p>
        {/* TODO:: Set up a logos for Instagram/LinkedIn/Github */}
      </div>
    </footer>
  );
}
