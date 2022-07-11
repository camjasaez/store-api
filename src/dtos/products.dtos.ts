import { IsString, IsNumber, IsPositive, IsNotEmpty, IsOptional } from "class-validator"
import { PartialType } from '@nestjs/mapped-types';

export class CreateProductDto {
  @IsNotEmpty()
  @IsString()
  readonly name: string

  @IsNotEmpty()
  @IsString()
  readonly description: string

  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  readonly price: number

  @IsNumber()
  @IsPositive()
  readonly stock?: number

  @IsOptional()
  @IsString()
  readonly image?: string
}

export class UpdateProductDto extends PartialType(CreateProductDto) { }
