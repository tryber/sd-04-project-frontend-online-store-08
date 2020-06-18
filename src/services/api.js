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

export async function getProductsFromQuery(query) {
  const search = fetch(
    `https://api.mercadolibre.com/sites/MLB/search?q=${query}`,
  ).then((data) => data.json());
  return search;
}

export async function getProductsFromCategoryID(categoryID) {
  const search = fetch(
    `https://api.mercadolibre.com/sites/MLB/search?category=${categoryID}`,
  ).then((data) => data.json());
  return search;
}
