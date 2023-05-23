import { ProductHttpService } from './services/product-http.service';

(async () => {
  const productService = new ProductHttpService();

  try {
    console.log('-'.repeat(20));
    console.log('getAll');
    const products = await productService.getAll();
    console.log(products.length);
    console.log(products.map((item) => item.price));

    const productId = products[0].id;
    console.log('-'.repeat(20));
    console.log('update');
    await productService.update(productId, {
      price: 1001001,
      title: 'New title 1001001',
      description: 'New desc 1001001',
    });

    console.log('-'.repeat(20));
    console.log('findOne');
    const product = await productService.findOne(productId);
    console.log(product);
  } catch (error) {
    console.log(error);
  }
})();
