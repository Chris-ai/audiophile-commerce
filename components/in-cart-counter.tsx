'use client';
import { useState } from 'react';

interface CounterProps {
  itemsInCart: number;
  slug: string;
  updateQuantity: (id: string, quantity: number) => void;
  removeItem: () => void;
}

export const InCartCounter = ({
  itemsInCart,
  slug,
  updateQuantity,
  removeItem,
}: CounterProps) => {
  const [quantity, setQuantity] = useState<number>(itemsInCart);

  const increment = () => {
    updateQuantity(slug, quantity + 1);
    setQuantity(quantity + 1);
  };

  const decrement = () => {
    if (quantity === 1) {
      removeItem();
    }
    if (quantity > 0) {
      updateQuantity(slug, quantity - 1);
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className='grid h-8 w-full grid-cols-3 grid-rows-1 place-items-center bg-dark-grey'>
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
  );
};
