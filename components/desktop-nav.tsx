import { menuItems } from '@/utils';
import Link from 'next/link';
import Cart from './cart';
import Logo from './logo';
import pages from '@/app/pages';

export default function DesktopNav() {
  return (
    <div className='hidden w-full max-w-[1110px] items-center justify-between border-b border-white border-opacity-10 px-6 py-9 md:flex min-[1110px]:px-0'>
      <Logo />
      <div className='flex items-center gap-9'>
        <Link
          href={pages.home}
          className='text-subtitle uppercase tracking-[2px] text-white duration-250 transition-all hover:text-orange'
        >
          Home
        </Link>
        {menuItems.map((menuItem) => (
          <Link
            key={menuItem}
            href={pages.categoryPage(menuItem)}
            className='text-subtitle uppercase tracking-[2px] text-white duration-250 transition-all hover:text-orange'
          >
            {menuItem}
          </Link>
        ))}
      </div>
      <Cart />
    </div>
  );
}
