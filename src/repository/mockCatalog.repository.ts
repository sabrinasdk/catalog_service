import { ICatalogRepository } from "../interface/catalogRepository.interface";
import { Product } from "../models/product.model";

export class MockCatalogRepository implements ICatalogRepository {
  async create(data: Product): Promise<Product> {
    return data;
  }

  async update(data: Product): Promise<Product> {
    return data;
  }

  async delate(id: any): Promise<{}> {
    return {};
  }

  async find(): Promise<Product[]> {
    return [];
  }

  async findOne(id: number): Promise<Product> {
    throw new Error("Method not implemented.");
  }
}
