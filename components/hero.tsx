import pages from '@/app/pages';
import { Button } from '@nextui-org/react';
import Link from 'next/link';

interface HeroProps {
  title: string;
  desc: string;
  slug: string;
}

export default function Hero({ title, desc, slug }: HeroProps) {
  return (
    <div className='h-15 flex h-[75vh] max-h-[600px] flex-col items-center bg-[#191919] bg-hero-mobile bg-contain bg-center bg-no-repeat text-white sm:bg-hero-tablet lg:bg-hero-desktop'>
      <div className='flex h-full w-full flex-col items-center justify-center gap-10 px-6 lg:max-w-[1110px] lg:items-start'>
        <div className='flex flex-col gap-6 text-center uppercase lg:max-w-[380px] lg:text-start'>
          <p className='text-overline text-white opacity-50'>New Product</p>
          <h1 className='text-h2 md:text-h1'>{title}</h1>
          <p className='text-regular font-[400] normal-case opacity-75'>
            {desc}
          </p>
        </div>
        <Link href={pages.productPage(slug)}>
          <Button
            type='button'
            className='rounded-none bg-orange px-8 py-4 text-subtitle uppercase text-white outline-none duration-250 transition-all hover:bg-light-orange'
          >
            See Product
          </Button>
        </Link>
      </div>
    </div>
  );
}
