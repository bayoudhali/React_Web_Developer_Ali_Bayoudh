import { ApiPaths } from "@/enum/api";
import { ProductResponse } from "@/interfaces/product.interface";
import { get } from "@/utils/functions/httpMethods";

class ProductService {
  // Service to get the list of products
  async getListProducts() {
    try {
      const result: ProductResponse = await get(ApiPaths.GET_PRODUCTS, {});
      return result;
    } catch (error: any) {
      throw error;
    }
  }
}

const productService = new ProductService();
export default productService;
