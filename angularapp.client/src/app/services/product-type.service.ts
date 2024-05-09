import { Injectable } from '@angular/core';
import { ProductType } from '../models/productType';

@Injectable({
  providedIn: 'root'
})
export class ProductTypeService {
  productType: ProductType[] = [
    { ProductId: "Mobile", title: "Mobile" },
    { ProductId: "Smartwatch", title: "Smartwatch" },
    { ProductId: "Headphone", title: "Headphone" },
    { ProductId: "Earphones", title: "Earphones" },
    { ProductId: "Charger", title: "Charger" }
  ]
  constructor() { }
  getAllProductType(): ProductType[] {
    return this.productType;
  }
}
