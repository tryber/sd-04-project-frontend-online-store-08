export async function getCategories() {
  const search = fetch(
    'https://api.mercadolibre.com/sites/MLB/categories',
  ).then((data) => data.json());
  return search;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const search = fetch(
    `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`,
  ).then((data) => data.json());
  return search;
}

export async function getProductFromID(productID) {
  const search = fetch(
    `https://api.mercadolibre.com/items/${productID}`,
  ).then((data) => data.json());
  return search;
}
