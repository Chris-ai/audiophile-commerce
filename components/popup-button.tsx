'use-client';

import pages from '@/app/pages';
import { useCartContext } from '@/context/CartProvider';
import { Button } from '@nextui-org/react';
import { useRouter } from 'next/navigation';

export default function PopupButton({
  onOpenChange,
}: {
  onOpenChange: () => void;
}) {
  const router = useRouter();
  const { clearCart } = useCartContext();

  const handleOnClick = () => {
    router.push(pages.home);
    onOpenChange();
    clearCart();
  };

  return (
    <Button
      radius='none'
      onClick={handleOnClick}
      className='w-full cursor-pointer bg-orange px-6 py-4 uppercase text-white duration-250 transition-all hover:bg-light-orange'
    >
      Back to home
    </Button>
  );
}
