import { Product } from "../models/product.model";
import { BaseHttpService } from "./base-http.service";
import { apiUrl } from "../api";

export class ProductHttpService extends BaseHttpService<Product> {
  anotherRequest() {
    // more logic.
  }
}
