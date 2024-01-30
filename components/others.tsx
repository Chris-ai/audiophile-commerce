import pages from '@/app/pages';
import { ImageSizes } from '@/model/types';
import { Button } from '@nextui-org/react';
import Image from 'next/image';
import Link from 'next/link';

export default function Others({
  others,
}: {
  others: {
    slug: string;
    name: string;
    image: ImageSizes;
  }[];
}) {
  return (
    <section className='flex flex-col gap-10'>
      <h1 className='text-center text-h4 uppercase text-black sm:text-h3'>
        you may also like
      </h1>
      <div className='flex w-full flex-col justify-between gap-8 md:flex-row'>
        {others.map((other) => {
          return (
            <div
              key={other.slug}
              className='flex flex-col items-center justify-between gap-10'
            >
              <div>
                <ResponsiveImage imgSizes={other.image} />
              </div>
              <h4 className='w-full px-8 text-center text-h4 uppercase text-black'>
                {other.name}
              </h4>
              <div className='w-[80%]'>
                <Link href={pages.productPage(other.slug)}>
                  <Button
                    radius='none'
                    className='w-full cursor-pointer bg-orange px-6 py-4 uppercase text-white duration-250 transition-all hover:bg-light-orange'
                  >
                    See Product
                  </Button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

const ResponsiveImage = ({ imgSizes }: { imgSizes: ImageSizes }) => {
  return (
    <>
      <Image
        src={imgSizes.mobile}
        alt='gallery-image'
        height={280}
        width={560}
        className='h-full w-full rounded-lg object-cover sm:hidden'
      />
      <Image
        src={imgSizes.tablet}
        alt='gallery-image'
        height={280}
        width={563}
        className='hidden h-full w-full rounded-lg object-cover sm:block lg:hidden'
      />
      <Image
        src={imgSizes.desktop}
        alt='gallery-image'
        height={280}
        width={560}
        className='hidden h-full w-full rounded-lg object-cover lg:block'
      />
    </>
  );
};
