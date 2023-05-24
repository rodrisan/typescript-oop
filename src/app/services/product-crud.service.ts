import { apiUrl } from '../api';
import { UpdateProductDto } from '../dtos/product.dto';
import { Product } from '../models/product.model';
import { BaseHttpService } from './base-http.service';
import { ProductHttpService } from './product-http2.service';

export class ProductCRUDService {
  private http = new ProductHttpService(apiUrl);

  async update(id: Product['id'], dto: UpdateProductDto) {
    // permissions
    // logic
    // this.http.anotherRequest(); // Comming from product-http2.service
    return this.http.update(id, dto);
  }
}
