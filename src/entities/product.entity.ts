export class ProductType {
  name: string
  description: string
  price: number
  stock?: number
  image?: string
}

export class Product extends ProductType {
  id: number
}