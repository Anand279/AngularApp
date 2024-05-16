import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';
import { ProductsService } from '../../services/products.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductType } from '../../models/productType';
import { ProductTypeService } from '../../services/product-type.service';
import { Validators, FormBuilder } from '@angular/forms'

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrl: './edit-product.component.css'
})
export class EditProductComponent implements OnInit {
  updateProductReq: Product = {
    id: 0,
    name: '',
    type: '',
    color: '',
    price: 0
  }
  ngProductForm = this.fb.group({
    Id: this.fb.control(0),
    Name: this.fb.control('', Validators.required),
    Type: this.fb.control('', Validators.required),
    Color: this.fb.control('', Validators.required),
    Price: this.fb.control(0, Validators.required)
  });
  productType: ProductType[];
  constructor(private fb: FormBuilder, private productService: ProductsService, private router: Router, private route: ActivatedRoute, private productTypeService: ProductTypeService) {
    this.productType = productTypeService.getAllProductType();
  }
  ngOnInit(): void{
    const param = this.route.snapshot.paramMap.get('id');
    if (param) {
      const id = +param;
      this.getProduct(id);
    }
  }
  getProduct(id: number): void {
    this.productService.getProduct(id).subscribe((res: any) => {
      let productdata: any;
      productdata = res;
      if (productdata != null) {
        this.ngProductForm.setValue({
          Id: productdata.id, Name: productdata.name,
          Color: productdata.color, Price: productdata.price, Type: productdata.type
        })
      }
    });
  }
  updateProduct() {
    this.productService.updateProduct(this.ngProductForm.get("Id")?.getRawValue(), this.ngProductForm.getRawValue())
      .subscribe({
        next: (response) => {
          this.router.navigate(['products']);
        },
        error: (err) => {
          console.log(err);
        }
      })
  }
}
