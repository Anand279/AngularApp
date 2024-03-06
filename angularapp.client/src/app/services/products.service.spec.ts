import { TestBed, inject } from '@angular/core/testing';

import { ProductsService } from './products.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('ProductsService', () => {
  let service: ProductsService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ProductsService]
    });
    service = TestBed.inject(ProductsService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });
  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get product details', inject(
    [HttpTestingController, ProductsService],
    (httpClient: HttpTestingController, productsService: ProductsService) => {
      const id = 2;
      const baseApiUrl: string = "https://localhost:7203";
      const expectedData = {
            "id": 2,
            "name": "Airpords",
            "type": "Earphones",
            "color": "black",
            "price": 13000
      };

      productsService.getProduct(id).subscribe(data => {
        expect(data).toEqual(expectedData);
      });

      const req = httpTestingController.expectOne(
        `${baseApiUrl}/api/Products/GetProduct/${id}`
      );

      expect(req.request.method).toEqual('GET');

      req.flush(expectedData);
    }
  ));

  it('should display product list', inject(
    [HttpTestingController, ProductsService],
    (httpClient: HttpTestingController, productsService: ProductsService) => {
      const pageNo = 2;
      const pageSize = 1;
      const baseApiUrl: string = "https://localhost:7203";
      const expectedData = [{
        "id": 18,
        "name": "iWatch",
        "type": "Smartwatch",
        "color": "black",
        "price": 24999
      }];

      productsService.getAllProducts(pageNo, pageSize).subscribe(data => {
        expect(data).toEqual(expectedData);
      });

      const req = httpTestingController.expectOne(
        `${baseApiUrl}/api/Products/GetPaginatedProducts/${pageNo}/${pageSize}`
      );

      expect(req.request.method).toEqual('GET');

      req.flush(expectedData);
    }
  ));

});
