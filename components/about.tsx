import Image from 'next/image';

export default function About() {
  return (
    <section className='flex w-full justify-center'>
      <div className='mt-28 grid w-full max-w-[1110px] grid-cols-1 grid-rows-2 gap-12 px-6 sm:px-10 lg:grid-cols-2 lg:grid-rows-1 lg:gap-0 lg:px-0'>
        <div className='grid place-items-center lg:order-1'>
          <ResponsiveImage />
        </div>
        <div className='flex w-full items-center justify-center text-center lg:justify-start lg:text-start'>
          <div className='flex flex-col gap-8 lg:max-w-[445px]'>
            <h1 className='px-4 text-h3 uppercase sm:px-0 sm:text-h2'>
              Bringing you the <span className='text-orange'>best</span> audio
              gear
            </h1>
            <p className='text-regular opacity-50'>
              Located at the heart of New York City, Audiophile is the premier
              store for high end headphones, earphones, speakers, and audio
              accessories. We have a large showroom and luxury demonstration
              rooms available for you to browse and experience a wide range of
              our products. Stop by our store to meet some of the fantastic
              people who make Audiophile the best place to buy your portable
              audio equipment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

const ResponsiveImage = () => {
  return (
    <>
      <Image
        src={'/image-best-gear/mobile.jpg'}
        alt='man-listening-through-headphones'
        width={320}
        height={300}
        className='block h-[300px] w-[320px] rounded-lg sm:hidden sm:w-full lg:h-[588px] lg:w-[540px]'
      />
      <Image
        src={'/image-best-gear/tablet.jpg'}
        alt='man-listening-through-headphones'
        width={640}
        height={300}
        className='hidden h-[300px] w-[320px] rounded-lg sm:block sm:w-full lg:hidden lg:h-[588px] lg:w-[540px]'
      />
      <Image
        src={'/image-best-gear/desktop.jpg'}
        alt='man-listening-through-headphones'
        width={600}
        height={540}
        className='hidden h-[300px] w-[320px] rounded-lg sm:w-full lg:block lg:h-[588px] lg:w-[540px]'
      />
    </>
  );
};
