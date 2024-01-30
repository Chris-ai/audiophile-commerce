'use client';

import {
  Navbar,
  NavbarContent,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarMenu,
  NavbarMenuItem,
} from '@nextui-org/react';
import Link from 'next/link';
import { useState } from 'react';
import Logo from './logo';
import Cart from './cart';
import pages from '@/app/pages';
import { menuItems } from '@/utils';

export default function MobileNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Navbar
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className='bg-transparent md:hidden'
    >
      <NavbarContent className='md:hidden' justify='start'>
        <NavbarMenuToggle
          className='text-white'
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        />
      </NavbarContent>

      <NavbarContent className='pr-3 md:hidden' justify='center'>
        <NavbarBrand>
          <Logo />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent justify='end'>
        <Cart />
      </NavbarContent>

      <NavbarMenu className='bg-black bg-opacity-20'>
        <Link
          className='text-subtitle uppercase tracking-[2px] text-white duration-250 transition-all hover:text-orange'
          href={pages.home}
        >
          Home
        </Link>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className='text-subtitle uppercase tracking-[2px] text-white duration-250 transition-all hover:text-orange'
              href={pages.categoryPage(item)}
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
