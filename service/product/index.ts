import { Product } from '@/model/types';
import { promises as fs } from 'fs';

export async function getProduct(slug: string): Promise<Product | null> {
  try {
    const file = await fs.readFile(process.cwd() + '/app/data.json', 'utf8');
    const response: Product[] = JSON.parse(file);

    const product = response.find((product) => product.slug === slug);

    if (product) return product;

    return null;
  } catch (e: unknown) {
    if (e instanceof Error) {
      console.error(e);
    }
    return null;
  }
}
