const pages = {
  home: '/',
  categoryPage: (category: string) => `/${category}`,
  productPage: (slug: string) => `/product/${slug}`,
  checkout: '/checkout',
};

export default pages;
