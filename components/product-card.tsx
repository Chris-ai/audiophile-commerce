import pages from '@/app/pages';
import { Product } from '@/model/types';
import { Button } from '@nextui-org/react';
import Image from 'next/image';
import Link from 'next/link';

interface ProductCardProps {
  product: Product;
  isReverse: boolean;
}

export default function ProductCard({ product, isReverse }: ProductCardProps) {
  return (
    <div className='grid grid-cols-1 grid-rows-2 gap-4 lg:grid-cols-2 lg:grid-rows-1'>
      <div
        className={`grid h-full w-full place-items-center ${
          isReverse ? 'lg:order-2' : ''
        }`}
      >
        <Image
          src={`/product-${product.slug}/desktop/image-product.jpg`}
          alt='image-product'
          height={1024}
          width={1024}
          className='aspect-square h-full max-h-[560px] w-full max-w-[540px] rounded-lg'
        />
      </div>
      <div className='flex w-full flex-col items-center gap-6 lg:justify-center'>
        <div className='flex w-full max-w-[445px] flex-col items-center gap-6 lg:items-start'>
          <p className='text-center text-overline text-orange lg:text-start'>
            {product.new ? 'NEW PRODUCT' : ''}
          </p>
          <h1 className='text-center text-h6 uppercase text-black sm:text-h2 lg:text-start'>
            {product.name}
          </h1>
          <p className='break-all text-regular text-black opacity-50'>
            {product.description}
          </p>
          <Link href={pages.productPage(product.slug)}>
            <Button
              radius='none'
              className='cursor-pointer bg-orange px-6 py-4 uppercase text-white duration-250 transition-all hover:bg-light-orange'
            >
              See Product
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
