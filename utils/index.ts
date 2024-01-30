export default function formatPrice(price: number): string {
  return `$ ${price.toLocaleString('en-US', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  })}`;
}

export const menuItems = ['headphones', 'speakers', 'earphones'];
