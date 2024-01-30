'use client';

import { useCartContext } from '@/context/CartProvider';
import { CartItem } from '@/model/types';
import formatPrice from '@/utils';
import { Skeleton } from '@nextui-org/react';
import Image from 'next/image';
import { useMemo } from 'react';

const SHIPPING_PRICE = 50;
const VAT_PERCENT_AMOUNT = 0.23;

export default function CartSummary() {
  const { cart, cartTotalPrice } = useCartContext();

  return (
    <div className='flex flex-col gap-8'>
      <h6 className='text-h6'>SUMMARY</h6>
      {!cart.length ? (
        <EmptyState />
      ) : (
        <>
          <ItemsSummary cart={cart} />
          <PriceArea
            total={cartTotalPrice}
            shipping={SHIPPING_PRICE}
            cart={cart}
          />
        </>
      )}
    </div>
  );
}

const EmptyState = () => {
  return (
    <>
      <Skeleton className='rounded-lg'>
        <div className='h-40 rounded-lg bg-default-300'></div>
      </Skeleton>
      <Skeleton className='rounded-lg'>
        <div className='h-7 rounded-lg bg-default-300'></div>
      </Skeleton>
      <Skeleton className='rounded-lg'>
        <div className='h-7 rounded-lg bg-default-300'></div>
      </Skeleton>
      <Skeleton className='rounded-lg'>
        <div className='h-7 rounded-lg bg-default-300'></div>
      </Skeleton>
      <Skeleton className='rounded-lg'>
        <div className='h-7 rounded-lg bg-default-300'></div>
      </Skeleton>
    </>
  );
};

const ItemsSummary = ({ cart }: { cart: CartItem[] }) => {
  return (
    <>
      {cart.map((cartItem: CartItem) => (
        <div key={cartItem.slug} className='flex items-center justify-between'>
          <div className='flex max-w-[70%] items-start gap-4'>
            <Image
              src={`/cart/image-${cartItem.slug}.jpg`}
              alt='product-cart-image'
              height={200}
              width={200}
              className='h-16 w-16 rounded-lg'
            />
            <div className='max-w-[1/4]'>
              <p className='text-regular uppercase text-black'>
                {cartItem.name}
              </p>
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
      ))}
    </>
  );
};

const PriceArea = ({
  total,
  shipping,
  cart,
}: {
  total: number;
  shipping: number;
  cart: CartItem[];
}) => {
  const vatPrice = useMemo(() => VAT_PERCENT_AMOUNT * total, [cart, total]);

  const totalPrice = useMemo(() => total + SHIPPING_PRICE, [cart, total]);

  return (
    <div className='flex flex-col gap-2'>
      <div className='flex items-center justify-between'>
        <p className='text-regular text-black opacity-50'>TOTAL</p>
        <p className='text-h6 text-black'>{formatPrice(total)}</p>
      </div>
      <div className='flex items-center justify-between'>
        <p className='text-regular text-black opacity-50'>SHIPPING</p>
        <p className='text-h6 text-black'>{formatPrice(shipping)}</p>
      </div>
      <div className='flex items-center justify-between'>
        <p className='text-regular text-black opacity-50'>VAT (INCLUDED)</p>
        <p className='text-h6 text-black'>{formatPrice(vatPrice)}</p>
      </div>

      <div className='flex items-center justify-between'>
        <p className='text-regular text-black opacity-50'>GRAND TOTAL</p>
        <p className='text-h6 text-black'>{formatPrice(totalPrice)}</p>
      </div>
    </div>
  );
};
