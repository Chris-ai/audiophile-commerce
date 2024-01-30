import { ImageSizes } from '@/model/types';
import Image from 'next/image';

export default function ProductGallery({
  gallery,
}: {
  gallery: {
    first: ImageSizes;
    second: ImageSizes;
    third: ImageSizes;
  };
}) {
  return (
    <section className='my-24 grid grid-cols-1 grid-rows-4 gap-8 sm:grid-cols-2 sm:grid-rows-2'>
      <div className='h-[174px] lg:h-[280px]'>
        <ResponsiveImage imgSizes={gallery.first} />
      </div>
      <div className='h-[174px] sm:col-start-1 sm:row-start-2 lg:h-[280px]'>
        <ResponsiveImage imgSizes={gallery.second} />
      </div>
      <div className='row-span-2 h-full sm:col-start-2 sm:row-start-1'>
        <ResponsiveImage imgSizes={gallery.third} />
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
