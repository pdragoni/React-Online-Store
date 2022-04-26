const fetchUrl = async (url) => {
  const request = await fetch(url);
  const data = await request.json();
  return data;
};

const CATEGORY_ENDPOINT = 'https://api.mercadolibre.com/sites/MLB/categories';
const SEARCH_ENDPOINT = 'https://api.mercadolibre.com/sites/MLB/search';

export async function getCategories() {
  const category = fetchUrl(CATEGORY_ENDPOINT);
  return category;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const params = new URLSearchParams();
  if (categoryId) params.set('category', categoryId);
  if (query) params.set('query', query);

  const products = await fetchUrl(`${SEARCH_ENDPOINT}?${params.toString()}`);
  return products;
}
