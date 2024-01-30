import { Product } from '@/model/types';
import { promises as fs } from 'fs';

export async function getCategoryProducts(
  category: string
): Promise<Product[]> {
  const file = await fs.readFile(process.cwd() + '/data.json', 'utf8');
  const response: Product[] = JSON.parse(file);

  return response.filter((product) => product.category === category);
}
