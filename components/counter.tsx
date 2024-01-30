'use client';

import { useCartContext } from '@/context/CartProvider';
import { CartItem, Product } from '@/model/types';
import { Button } from '@nextui-org/react';
import { useState } from 'react';

export default function Counter({ product }: { product: Product }) {
  const [quantity, setQuantity] = useState<number>(1);
  const { cart, addToCart, updateQuantity } = useCartContext();

  const increment = () => {
    setQuantity(quantity + 1);
  };

  const decrement = () => {
    if (quantity !== 0) setQuantity(quantity - 1);
  };

  const handleOnClick = () => {
    let cartProduct = cart.find((item) => item.slug === product.slug);

    if (cartProduct) {
      updateQuantity(product.slug, cartProduct.quantity + quantity);
    } else {
      const newProduct: CartItem = {
        quantity: quantity,
        slug: product.slug,
        name: product.name,
        price: product.price,
      };
      addToCart(newProduct);
    }
  };

  return (
    <div className='flex gap-4'>
      <div className='grid w-[120px] grid-cols-3 grid-rows-1 place-items-center bg-dark-grey'>
        <button
          onClick={decrement}
          className='text-subtitle text-black opacity-25 duration-250 transition-all hover:text-orange hover:opacity-100'
        >
          -
        </button>
        <div className='flex items-center justify-center text-center text-subtitle text-black '>
          {quantity}
        </div>
        <button
          onClick={increment}
          className='text-subtitle text-black opacity-25 duration-250 transition-all hover:text-orange hover:opacity-100'
        >
          +
        </button>
      </div>
      <Button
        onClick={handleOnClick}
        radius={'none'}
        className='cursor-pointer bg-orange px-6 py-4 uppercase text-white duration-250 transition-all hover:bg-light-orange'
      >
        ADD TO CART
      </Button>
    </div>
  );
}
