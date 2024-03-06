import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';
import { ProductsService } from '../../services/products.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductType } from '../../models/productType';
import { ProductTypeService } from '../../services/product-type.service';

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
  productType: ProductType[];
  constructor(private productService: ProductsService, private router: Router, private route: ActivatedRoute, private productTypeService: ProductTypeService) {
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
    this.productService.getProduct(id)
      .subscribe({
        next: (response) => {
          this.updateProductReq = response;
        }
      });
  }
  updateProduct() {
    this.productService.updateProduct(this.updateProductReq.id, this.updateProductReq)
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
