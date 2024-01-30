import Link from 'next/link';
import pages from '../pages';
import CheckoutForm from '@/components/checkout-form';

export default function Checkout() {
  return (
    <section>
      <Link
        href={pages.home}
        className='max-w-auto text-regular text-black opacity-50'
      >
        Go Back
      </Link>
      <CheckoutForm />
    </section>
  );
}
