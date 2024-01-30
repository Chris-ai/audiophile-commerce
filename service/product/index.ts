import { Product } from '@/model/types';
import { promises as fs } from 'fs';

export async function getProduct(slug: string): Promise<Product | null> {
  const file = await fs.readFile(process.cwd() + '/data.json', 'utf8');
  const response: Product[] = JSON.parse(file);

  const product = response.find((product) => product.slug === slug);

  if (product) return product;

  return null;
}
