const fetchUrl = async (url) => fetch(url)
  .then((resposta) => resposta.json())
  .catch((error) => console.log(error));

const CATEGORY_ENDPOINT = 'https://api.mercadolibre.com/sites/MLB/categories';
const SEARCH_ENDPOINT = 'https://api.mercadolibre.com/sites/MLB/search';
const QUERY_ENDPOINT = 'https://api.mercadolibre.com/sites/MLB/search?q=';
const PRODUCT_ENDPOINT = 'https://api.mercadolibre.com/items/';
// Essa função funciona buscando as categorias
export async function getCategories() {
  const category = fetchUrl(CATEGORY_ENDPOINT);
  return category;
}
// Não mexa acima
// Busca pelo click do usuário nas categorias os produtos
export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const params = new URLSearchParams();
  if (categoryId) params.set('category', categoryId);
  if (query) params.set('query', query);
  const products = await fetchUrl(`${SEARCH_ENDPOINT}?${params.toString()}`);
  // console.log(`${SEARCH_ENDPOINT}?${params.toString()}`);
  return products;
}
// Não mexer acima
export async function getProductsFromQuery(categoryId, query) {
  const params = new URLSearchParams();
  if (categoryId) params.set('category', categoryId);
  if (query) params.set('query', query);
  const products = await fetchUrl(`${QUERY_ENDPOINT}?${params.toString()}`);
  return products;
}
export async function getProductsDetails(id) {
  const products = await fetchUrl(`${PRODUCT_ENDPOINT}${id}`);
  return products;
}
