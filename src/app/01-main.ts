import axios from "axios";

import { Product } from "./models/product.model";

(async () => {

  async function getProducts(): Promise<Product[]> {
    // Typing directly in axios
    const { data } = await axios.get<Product[]>('https://api.escuelajs.co/api/v1/products');
    return data;

    // Typing using Casting.
    // const rta = await axios.get<Product[]>('https://api.escuelajs.co/api/v1/products');
    // const data = rta.data as Product[];
  }

  console.log('-'.repeat(20));
  const products = await getProducts();
  console.log(products.map(item => `${item.id}: ${item.title}`));
})()
