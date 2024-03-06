import { Injectable } from '@angular/core';
import { ProductType } from '../models/productType';

@Injectable({
  providedIn: 'root'
})
export class ProductTypeService {
  productType: ProductType[] = [
    { id: "Mobile", title: "Mobile" },
    { id: "Smartwatch", title: "Smartwatch" },
    { id: "Headphone", title: "Headphone" },
    { id: "Earphones", title: "Earphones" },
    { id: "Charger", title: "Charger" }
  ]
  constructor() { }
  getAllProductType(): ProductType[] {
    return this.productType;
  }
}
