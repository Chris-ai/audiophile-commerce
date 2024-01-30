import ProductCard from '@/components/product-card';
import { getCategoryProducts } from '@/service/category';

type PageProps = {
  params: { category: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export default async function CategoryPage({ params }: PageProps) {
  const headphones = await getCategoryProducts(params.category);

  return (
    <section className='flex flex-col gap-8'>
      {headphones.map((headphone, index) => {
        return (
          <ProductCard
            key={headphone.slug}
            product={headphone}
            isReverse={(index + 1) % 2 === 0}
          />
        );
      })}
    </section>
  );
}
