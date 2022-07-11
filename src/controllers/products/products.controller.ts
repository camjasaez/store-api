import { Body, Controller, Delete, Get, HttpException, Param, Post, Put, ParseIntPipe } from '@nestjs/common';
import { ProductsService } from '../../services/products/products.service'
import { CreateProductDto, UpdateProductDto } from 'src/dtos/products.dtos';


@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) { }

  @Get()
  getAll() {
    return {
      message: `You have ${this.productsService.count} products!`,
      data: this.productsService.findAll()
    }
  }

  @Get(':id')
  getById(@Param('id', ParseIntPipe) id: number) {
    try {
      return {
        message: `El producto con id ${id} es:`,
        data: this.productsService.findOne(id)
      }
    } catch (error) {
      const { statusCode, message } = error.response
      throw new HttpException(message, statusCode)
    }
  }

  @Post()
  create(@Body() payload: CreateProductDto) {
    try {
      return {
        message: `Producto creado exitosamente!`,
        data: this.productsService.create(payload)
      }
    } catch (error) {
      const { statusCode, message } = error.response
      throw new HttpException(message, statusCode)
    }
  }

  @Put(':id')
  updateById(@Param('id', ParseIntPipe) id: number, @Body() payload: UpdateProductDto) {
    try {
      return {
        message: ` El producto con id ${id} a sido actualizado:`,
        data: this.productsService.update(+id, payload)
      }
    } catch (error) {
      const { statusCode, message } = error.response
      throw new HttpException(message, statusCode)
    }
  }

  @Delete(':id')
  deleteById(@Param('id', ParseIntPipe) id: number) {
    try {
      return {
        message: ` El producto con id ${id} a sido eliminado:`,
        data: this.productsService.eliminate(+id)
      }
    } catch (error) {
      const { statusCode, message } = error.response
      throw new HttpException(message, statusCode)
    }
  }

}
