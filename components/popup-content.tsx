'use client';
import { useCartContext } from '@/context/CartProvider';
import formatPrice from '@/utils';
import { Divider } from '@nextui-org/react';
import Image from 'next/image';
import { useMemo } from 'react';

export default function PopupContent() {
  const { cart, cartTotalPrice } = useCartContext();

  const cartItem = useMemo(() => cart.at(0), [cart]);

  return (
    <>
      {cartItem && (
        <div className='flex flex-col rounded-lg sm:flex-row'>
          <div className='flex flex-col gap-3 rounded-t-lg bg-dark-grey p-8 sm:rounded-l-lg sm:rounded-tr-none'>
            <div className='flex items-center justify-between'>
              <div className='flex max-w-[70%] items-center gap-4'>
                <Image
                  src={`/cart/image-${cartItem.slug}.jpg`}
                  alt='product-cart-image'
                  height={200}
                  width={200}
                  className='h-16 w-16 rounded-lg'
                />
                <div className='max-w-[1/4]'>
                  <h3 className='text-regular uppercase text-black'>
                    {cartItem.name}
                  </h3>
                  <p className='text-overline tracking-normal text-black opacity-50'>
                    {formatPrice(cartItem.price)}
                  </p>
                </div>
              </div>
              <div className='flex h-full items-start'>
                <p className='text-regular text-black opacity-50'>
                  x{cartItem.quantity}
                </p>
              </div>
            </div>
            {cart.length !== 1 && <Divider />}
            {cart.length !== 1 && (
              <p className='text-center text-subtitle text-black opacity-50'>{`and ${
                cart.length - 1
              } other item(s)`}</p>
            )}
          </div>
          <div className='flex flex-col justify-center gap-2 rounded-b-lg bg-black px-6 pb-5 pt-3 text-white sm:rounded-r-lg sm:rounded-bl-none md:w-1/2'>
            <h3 className='text-regular font-[400px] uppercase opacity-50'>
              GRAND TOTAL
            </h3>
            <p className=' text-h6 '>{formatPrice(cartTotalPrice)}</p>
          </div>
        </div>
      )}
    </>
  );
}
