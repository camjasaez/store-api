import { Controller, Get, Param } from '@nestjs/common';

@Controller('categories')
export class CategoriesController {
  @Get()
  getAllCategories() {
    return `Todas las categorias son :`
  }

  @Get(':id')
  getCategoryById(@Param('id') id: string) {
    return `La categoria con id ${id} es: `
  }


}
