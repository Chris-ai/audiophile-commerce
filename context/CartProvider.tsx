'use client';

import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { CartItem } from '@/model/types';

function useCartData() {
  const [cart, setCart] = useState<CartItem[]>([]);

  const cartTotalPrice = useMemo(
    () => cart.reduce((acc, item) => acc + item.price * item.quantity, 0),
    [cart]
  );

  useEffect(() => {
    const ls = localStorage.getItem('cart');
    setCart(JSON.parse(ls ?? '[]'));
  }, []);

  const setLocalStorage = useCallback((cart: CartItem[]) => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, []);

  const addToCart = useCallback(
    (cartItem: CartItem) => {
      const updatedCart = [...cart, cartItem];
      setCart(updatedCart);
      setLocalStorage(updatedCart);
    },
    [cart]
  );

  const updateQuantity = useCallback(
    (slug: string, quantity: number) => {
      const updatedCart = cart.map((item) => {
        if (item.slug === slug) item.quantity = quantity;

        return item;
      });
      setCart(updatedCart);
      setLocalStorage(updatedCart);
    },
    [cart]
  );

  const removeItem = useCallback(
    (cartItem: CartItem) => {
      const updatedCart = cart.splice(cart.indexOf(cartItem), 1);
      setCart(updatedCart);
      setLocalStorage(updatedCart);
    },
    [cart]
  );

  const clearCart = useCallback(() => {
    setCart([]);
    setLocalStorage([]);
  }, []);

  return {
    cart,
    cartTotalPrice,
    addToCart,
    updateQuantity,
    clearCart,
    removeItem,
  };
}

type CartContextType = ReturnType<typeof useCartData>;

const CartContext = React.createContext<CartContextType | undefined>(undefined);

function CartProvider({ children }: { children: React.ReactNode }) {
  const data = useCartData();
  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
}

function useCartContext() {
  const context = React.useContext(CartContext);

  if (!context)
    throw new Error('useCartContext must be used within a CartProvider');

  return context;
}

export { CartProvider, useCartContext };
