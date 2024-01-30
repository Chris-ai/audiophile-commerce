'use client';

import React from 'react';
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  Button,
  Badge,
} from '@nextui-org/react';
import { useCartContext } from '@/context/CartProvider';
import Image from 'next/image';
import pages from '@/app/pages';
import Link from 'next/link';
import CartIcon from '@/components/icons/cart';
import { CartItem } from '@/model/types';
import formatPrice from '@/utils';
import { InCartCounter } from '@/components/in-cart-counter';

export default function Cart() {
  const { cart, clearCart, cartTotalPrice, updateQuantity, removeItem } =
    useCartContext();

  return (
    <Popover backdrop='opaque' placement='bottom-end'>
      <Badge
        content={cart.length}
        className='bg-orange text-white'
        showOutline={false}
        size='sm'
        isInvisible={cart.length === 0}
      >
        <PopoverTrigger>
          <div className='group cursor-pointer'>
            <CartIcon className='duration-250 transition-all group-hover:fill-orange' />
          </div>
        </PopoverTrigger>
      </Badge>
      <PopoverContent>
        <div className='flex w-full flex-col items-center gap-10 rounded-lg bg-white px-6 py-8 sm:w-[380px]'>
          <div className='flex w-full items-center justify-between'>
            <h3 className='text-h6 text-black'>Cart ({cart.length})</h3>
            <button
              className='text-regular text-black underline opacity-50 outline-none'
              onClick={clearCart}
            >
              Remove all
            </button>
          </div>
          <div className='flex max-h-80 w-full flex-col gap-6 overflow-y-auto'>
            {cart.map((cartItem: CartItem) => (
              <div
                key={cartItem.slug}
                className='flex items-center justify-between'
              >
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
                <div className='w-24'>
                  <InCartCounter
                    itemsInCart={cartItem.quantity}
                    slug={cartItem.slug}
                    updateQuantity={updateQuantity}
                    removeItem={() => removeItem(cartItem)}
                  />
                </div>
              </div>
            ))}
          </div>
          <div className='flex w-full items-center justify-between'>
            <p className='text-regular uppercase text-black opacity-50'>
              Total
            </p>
            <p className='rext-h6 font-bold text-black'>
              {formatPrice(cartTotalPrice)}
            </p>
          </div>
          <Link href={pages.checkout} className='w-full'>
            <Button className='w-full cursor-pointer rounded-none bg-orange px-6 py-4 uppercase text-white duration-250 transition-all hover:bg-light-orange'>
              CHECKOUT
            </Button>
          </Link>
        </div>
      </PopoverContent>
    </Popover>
  );
}
