import { Component, OnInit } from '@angular/core';
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
export class AddProductComponent implements OnInit {
  newProduct: Product = {
    id: 0,
    name: '',
    type: null,
    color: '',
    price: 0
  };
  productType: ProductType[];
  ngProductForm!: FormGroup;
  constructor(private fb: FormBuilder, private productService: ProductsService, private router: Router, private productTypeService: ProductTypeService) {
    this.productType = productTypeService.getAllProductType();
  }
  ngOnInit() {
    this.ngProductForm = this.fb.group({
      ProductId: ['', [Validators.required]],
      productName: [
        '',
        [
          Validators.required
        ],
      ],
      color: [
        '',
        Validators.compose([
          Validators.required
        ]),
      ],
      price: [
        '',
        Validators.compose([
          Validators.required
        ]),
      ]
    });
  }
  addProduct(formdata: any) {
    const data:any = {
      id: 0,
      name: formdata.productName,
      type: formdata.ProductId,
      color: formdata.color,
      price: formdata.price
    };
    this.productService.addProduct(data)
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
