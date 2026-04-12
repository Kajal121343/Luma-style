const isDev = import.meta.env.DEV;

const BASE_URL = isDev
  ? "/api"
  : "https://fakestoreapi.com";

export const fetchProducts = async () => {
  try {
    const res = await fetch(`${BASE_URL}/products`);

    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    return await res.json();
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};