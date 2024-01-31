'use server';
import { Product } from '@/model/types';
import { promises as fs } from 'fs';

export async function getCategoryProducts(
  category: string
): Promise<Product[]> {
  try {
    const file = await fs.readFile(process.cwd() + '/app/data.json', 'utf8');
    const response: Product[] = JSON.parse(file);

    return response.filter((product) => product.category === category);
  } catch (e: unknown) {
    if (e instanceof Error) {
      console.error(e.message);
    }

    return [];
  }
}
