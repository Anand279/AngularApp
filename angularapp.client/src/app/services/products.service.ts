import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { Observable, catchError} from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  baseApiUrl: string = "https://localhost:7203";
  constructor(private http: HttpClient) { }
  getAllProducts(pageNo: number, pageSize: number): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseApiUrl + "/api/Products/GetPaginatedProducts/" + pageNo + "/" + pageSize); 
  }
  addProduct(newProduct: any): Observable<Product> {
    return this.http.post<any>(this.baseApiUrl + '/api/Products/AddProduct', newProduct); 
  }
  getProduct(id: number): Observable<any> {
    const url = `${this.baseApiUrl}/api/Products/GetProduct/${id}`;
    return this.http.get<any>(url).pipe(catchError(error => { console.error('Error getting product by ID:', error); throw error; }));
  }
  updateProduct(id: number, updateProductRequest: Product): Observable<Product> {
    return this.http.put<Product>(this.baseApiUrl + "/api/Products/UpdateProduct/" + id, updateProductRequest);
  }
  deleteProduct(id: number): Observable<Product> {
    return this.http.delete<Product>(this.baseApiUrl + "/api/Products/DeleteProduct/" + id);
  }
  getAllProductsCount(): Observable<any> {
    return this.http.get<any>(this.baseApiUrl + '/api/Products/GetAllProductsCount'); 
  }
}
