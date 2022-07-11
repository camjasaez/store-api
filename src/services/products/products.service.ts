import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto, UpdateProductDto } from 'src/dtos/products.dtos';
import { Product, ProductType } from 'src/entities/product.entity';

@Injectable()
export class ProductsService {
  private counterId = 1
  private products: Product[] = [{
    id: 1,
    name: 'Product 1',
    description: 'Product 1 description',
    price: 10.99,
    stock: 19
  }]
  public count = this.products.length

  findAll(): Product[] {
    return this.products;
  }

  findOne(id: number): Product {
    const myProduct = this.products.find(product => product.id === id);
    if (!myProduct) {
      throw new NotFoundException(`Product #${id} not found`);
    }
    return myProduct;
  }

  create(product: CreateProductDto): Product {
    this.counterId++
    const newProduct = {
      id: this.counterId,
      ...product,
    }
    this.products.push(newProduct);
    return newProduct
  }

  update(id: number, product: UpdateProductDto): UpdateProductDto {
    const productIndex = this.products.findIndex(product => product.id === id);
    if (productIndex < 0) {
      throw new NotFoundException(`Product #${id} not found`);
    }
    this.products[productIndex] = { ...this.products[productIndex], ...product };
    return this.products[productIndex]
  }

  eliminate(id: number): Product {
    const productIndex = this.products.findIndex(product => product.id === id);
    if (productIndex < 0) {
      throw new Error(`Product #${id} not found`);
    }
    this.products.splice(productIndex, 1);
    return this.products[productIndex]
  }
}
