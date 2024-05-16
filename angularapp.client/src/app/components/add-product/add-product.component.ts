import { Component} from '@angular/core';
import { Product } from '../../models/product.model';
import { ProductsService } from '../../services/products.service';
import { Router } from '@angular/router';
import { ProductTypeService } from '../../services/product-type.service';
import { ProductType } from '../../models/productType';
import { Validators, FormBuilder, FormGroup } from '@angular/forms'

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent{
  productType: ProductType[];
  constructor(private fb: FormBuilder, private productService: ProductsService, private router: Router, private productTypeService: ProductTypeService) {
    this.productType = productTypeService.getAllProductType();
  }
  ngProductForm = this.fb.group({
    Id: this.fb.control(0, Validators.required),
    Name: this.fb.control('', Validators.required),
    Type: this.fb.control('', Validators.required),
    Color: this.fb.control('', Validators.required),
    Price: this.fb.control(0, Validators.required )
  });
  addProduct() {
    if (this.ngProductForm.valid) {
        this.productService.addProduct(this.ngProductForm.getRawValue())
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
}
