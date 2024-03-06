import { Component } from '@angular/core';
import { Product } from '../../models/product.model';
import { ProductsService } from '../../services/products.service';
import { Router } from '@angular/router';
import { ProductTypeService } from '../../services/product-type.service';
import { ProductType } from '../../models/productType';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent {
  newProduct: Product = {
    id: 0,
    name: '',
    type: null,
    color: '',
    price: 0
  };
  productType: ProductType[];
  constructor(private productService: ProductsService, private router: Router, private productTypeService: ProductTypeService) {
    this.productType = productTypeService.getAllProductType();
  }
  addProduct() {
    this.productService.addProduct(this.newProduct)
      .subscribe({
        next: (product) => {
          this.router.navigate(['products']);
        },
        error: (response) => {
          console.log(response);
        }
      });
  }
}
