import { ProductMemoryService } from './services/product-memory.service';

const productService = new ProductMemoryService();
productService.create({
  title: 'Product 1',
  description: 'Desc product 1',
  price: 100,
  categoryId: 1,
  images: [],
});

const products = productService.getAll();
// console.log(productService.getAll());

const productId = products[0].id;

productService.update(productId, {
  title: 'New product 1 name',
});

const rta = productService.findOne(productId);
console.log(rta);
