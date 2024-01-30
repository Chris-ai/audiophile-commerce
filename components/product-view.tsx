import { Product } from '@/model/types';
import formatPrice from '@/utils';
import Image from 'next/image';
import Counter from './counter';

interface ProductViewProps {
  product: Product;
}

export default function ProductView({ product }: ProductViewProps) {
  return (
    <section>
      <ProductCard product={product} />
      <ProductFeatures
        features={product.features}
        includes={product.includes}
      />
    </section>
  );
}

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className='grid grid-cols-1 grid-rows-2 gap-4 lg:grid-cols-2 lg:grid-rows-1'>
      <div className={'grid h-full w-full place-items-center'}>
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
          <p className='text-regular text-black'>
            {formatPrice(product.price)}
          </p>
          <Counter product={product} />
        </div>
      </div>
    </div>
  );
};

const ProductFeatures = ({
  features,
  includes,
}: {
  features: string;
  includes: {
    quantity: number;
    item: string;
  }[];
}) => {
  return (
    <div className='mt-20 flex flex-col gap-12 md:flex-row md:justify-between'>
      <div className='flex flex-col gap-8 md:w-2/3'>
        <h1 className='text-h3 text-black'>FEATURES</h1>
        <p className='text-regular text-black opacity-50'>{features}</p>
      </div>
      <div className='flex flex-col justify-between gap-8 sm:flex-row md:flex-col lg:justify-normal'>
        <h1 className='text-h3 text-black'>IN THE BOX</h1>
        <div className='flex flex-col gap-2'>
          {includes.map((prodcutInclude) => {
            return (
              <div key={prodcutInclude.item} className='flex gap-6'>
                <p className='text-bold text-regular text-orange'>
                  {prodcutInclude.quantity}x
                </p>
                <p className='text=regular text-black opacity-50'>
                  {prodcutInclude.item}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
