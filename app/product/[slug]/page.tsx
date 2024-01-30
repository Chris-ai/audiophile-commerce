import pages from '@/app/pages';
import Others from '@/components/others';
import ProductGallery from '@/components/product-gallery';
import ProductView from '@/components/product-view';
import { getProduct } from '@/service/product';
import Link from 'next/link';

type PageProps = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export default async function ProductPage({ params }: PageProps) {
  const product = await getProduct(params.slug);

  if (!product) {
    return (
      <section className='grid place-items-center'>
        {'Ooops! There is no such a product! :('}
      </section>
    );
  }

  return (
    <section className='flex flex-col gap-8'>
      <Link
        href={pages.categoryPage(product.category)}
        className='max-w-auto text-regular text-black opacity-50'
      >
        Go Back
      </Link>
      <ProductView product={product} />
      <ProductGallery gallery={product.gallery} />
      <Others others={product.others} />
    </section>
  );
}
