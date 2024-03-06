import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../../models/product.model';
import { ProductsService } from '../../services/products.service';
import { PaginationService } from '../../services/pagination.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  pageNo: any = 1;
  pageNumber: boolean[] = [];
  //Pagination Variables  
  pageField: any = [];
  exactPageList: any;
  paginationData: number = 0;
  recordsPerPage: any = 5;
  totalRecords: any;
  totalRecordsCount: any;
  constructor(public productService: ProductsService, public paginationService: PaginationService, private router: Router) { }
  ngOnInit(): void {
    this.pageNumber[0] = true;
    this.paginationService.temppage = 0;
    this.getAllProducts();
  }

  getAllProducts() {
    this.productService.getAllProducts(this.pageNo, this.recordsPerPage).subscribe((data: any) => {
      this.products = data;
      this.getAllProductsCount();
    });
  }

  deleteProduct(id: number) {
    this.productService.deleteProduct(id)
      .subscribe({
        next: (response) => {
          let currentUrl = this.router.url;
          this.router.navigateByUrl('/', { skipLocationChange: true })
            .then(() => {
              this.router.navigate([currentUrl]);
            })
        }
      })
  }


  //Method For Pagination  
  totalNoOfPages() {

    this.paginationData = Number(this.totalRecordsCount / this.recordsPerPage);
    let tempPageData = this.paginationData.toFixed();
    if (Number(tempPageData) < this.paginationData) {
      this.exactPageList = Number(tempPageData) + 1;
      this.paginationService.exactPageList = this.exactPageList;
    } else {
      this.exactPageList = Number(tempPageData);
      this.paginationService.exactPageList = this.exactPageList
    }
    this.paginationService.pageOnLoad();
    this.pageField = this.paginationService.pageField;

  }
  showRecordsByPageNumber(page: any, i: number) {
    this.products = [];
    this.pageNumber = [];
    this.pageNumber[i] = true;
    this.pageNo = page;
    this.getAllProducts();
  }

  getAllProductsCount() {
    this.productService.getAllProductsCount().subscribe((res: any) => {
      this.totalRecordsCount = res;
      this.totalNoOfPages();
    })
  }
}
