import Image from 'next/image';
import ChevronRight from '@/components/icons/chevron-right';
import pages from '@/app/pages';
import Link from 'next/link';
import { menuItems } from '@/utils';

export default function CategoryList() {
  return (
    <section className='grid grid-cols-1 grid-rows-3 gap-16 sm:grid-cols-3 sm:grid-rows-1'>
      {menuItems.map((category, index) => (
        <CategoryCard key={index} category={category} />
      ))}
    </section>
  );
}

interface CategoryCardProps {
  category: string;
}

const CategoryCard = ({ category }: CategoryCardProps) => {
  return (
    <div>
      <div className='flex flex-col items-center justify-center gap-8'>
        <Image
          src={`/image-category-thumbnail-${category}.png`}
          alt='category-card-image'
          height={180}
          width={120}
          className='z-10 -mb-20 md:scale-125'
        />
        <div className='flex w-full flex-col gap-3 justify-self-end rounded-lg bg-dark-grey pb-3 pt-20 text-center'>
          <p className='text-regular uppercase text-dark md:text-h6'>
            {category}
          </p>
          <Link
            href={pages.categoryPage(category)}
            className='group flex items-center justify-center gap-2 uppercase'
          >
            <p className='text-subtitle text-black opacity-50 duration-250 transition-all group-hover:text-orange group-hover:opacity-100'>
              Shop
            </p>
            <ChevronRight />
          </Link>
        </div>
      </div>
    </div>
  );
};
