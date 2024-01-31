import pages from '@/app/pages';
import { Button } from '@nextui-org/react';
import Image from 'next/image';
import Link from 'next/link';

interface ProductBestsellerProps {
  title: string;
  desc?: string;
  slug: string;
}

export default function Bestsellers() {
  return (
    <section className='grid grid-cols-1 grid-rows-4 gap-12 lg:gap-0'>
      <Bestseller
        title='ZX9 SPEAKER'
        slug='zx9-speaker'
        desc='Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.'
      />
      <Speaker title='ZX7 SPEAKER' slug='zx7-speaker' />
      <Earphones title='YX1 EARPHONES' slug='yx1-earphones' />
    </section>
  );
}

const Bestseller = ({ title, slug, desc }: ProductBestsellerProps) => {
  return (
    <div className='row-span-2 flex flex-col items-center gap-6 overflow-hidden rounded-lg bg-orange py-14 lg:max-h-[560px] lg:flex-row'>
      <div className='relative mb-12 flex w-1/2 justify-center lg:-mb-16 lg:h-full lg:items-end'>
        <Image
          src={`/home/mobile/image-${slug}.png`}
          alt='product-image'
          width={320}
          height={200}
          className='z-10 block h-[200px] w-full max-w-[180px] rounded-lg sm:hidden'
        />
        <Image
          src={`/home/tablet/image-${slug}.png`}
          alt='product-image'
          width={320}
          height={320}
          className='z-10 hidden h-[220px] w-full max-w-[200px] rounded-lg sm:block lg:hidden'
        />
        <Image
          src={`/home/desktop/image-${slug}.png`}
          alt='product-image'
          width={320}
          height={320}
          className='z-10 hidden h-[320px] w-[290px] scale-125 rounded-lg lg:block'
        />
        <Image
          src={'/home/desktop/pattern-circles.svg'}
          alt='some-pattern'
          fill
          className='absolute inset-0 m-auto scale-[2] lg:-mb-16 lg:scale-[1.75]'
        />
      </div>
      <div className='flex flex-col items-center gap-8 lg:items-start'>
        <h1 className='text-center text-h1 text-white lg:text-start'>
          {title}
        </h1>
        {desc && (
          <p className='text-center text-regular text-white opacity-75 lg:text-start'>
            {desc}
          </p>
        )}
        <LinkButton slug={slug} variant='dark' />
      </div>
    </div>
  );
};

const Speaker = ({ title, slug }: ProductBestsellerProps) => {
  return (
    <div className='relative rounded-lg bg-dark-grey lg:mb-6'>
      <Image
        src={`/home/desktop/image-${slug}.jpg`}
        alt='bg-for-product-card'
        fill
        className='aboslute margin-auto inset-0 hidden rounded-lg lg:block'
      />
      <Image
        src={`/home/tablet/image-${slug}.jpg`}
        alt='bg-for-product-card'
        fill
        className='aboslute margin-auto inset-0 hidden rounded-lg sm:block lg:hidden'
      />
      <Image
        src={`/home/mobile/image-${slug}.jpg`}
        alt='bg-for-product-card'
        fill
        className='aboslute margin-auto inset-0 block rounded-lg sm:hidden'
      />
      <div className='justify-startbg-dark-grey mx-6 flex h-full items-center rounded-lg py-10 sm:mx-10 lg:mx-16'>
        <div className='z-0 flex flex-col gap-8'>
          <h1 className='text-h4 text-black'>{title}</h1>
          <LinkButton slug={slug} variant='light' />
        </div>
      </div>
    </div>
  );
};

const Earphones = ({ title, slug }: ProductBestsellerProps) => {
  return (
    <div className='grid grid-cols-1 grid-rows-2 gap-4 sm:grid-cols-2 sm:grid-rows-1'>
      <div className='h-auto max-h-[200] w-full'>
        <ResponsiveImage slug={slug} />
      </div>
      <div className='grid place-items-center rounded-lg bg-dark-grey py-10'>
        <div className='flex flex-col gap-8'>
          <h1 className='text-h4 text-black'>{title}</h1>
          <LinkButton slug={slug} variant='light' />
        </div>
      </div>
    </div>
  );
};

const LinkButton = ({
  slug,
  variant,
}: {
  slug: string;
  variant: 'light' | 'dark';
}) => {
  const variantClassNames =
    variant === 'light' ? 'text-black bg-transparent' : 'bg-black text-white';
  return (
    <Link href={pages.productPage(slug)}>
      <Button
        radius='none'
        className={`border border-black px-6 py-4 ${variantClassNames} cursor-pointer uppercase`}
      >
        See Product
      </Button>
    </Link>
  );
};

const ResponsiveImage = ({ slug }: { slug: string }) => {
  return (
    <>
      <Image
        src={`/home/mobile/image-${slug}.jpg`}
        alt='product-image'
        width={320}
        height={200}
        className='block h-[200px] w-full rounded-lg sm:hidden'
      />
      <Image
        src={`/home/tablet/image-${slug}.jpg`}
        alt='product-image'
        width={840}
        height={320}
        className='hidden h-[320px] w-full rounded-lg sm:block lg:hidden'
      />
      <Image
        src={`/home/desktop/image-${slug}.jpg`}
        alt='product-image'
        width={840}
        height={320}
        className='hidden h-[320px] w-full rounded-lg lg:block'
      />
    </>
  );
};
