import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MasterService {
  baseApiUrl: string = "https://localhost:7203";
  constructor(private http: HttpClient) { }

  GetCustomer(): Observable<any>  {
    return this.http.get<any>(this.baseApiUrl + "/Customer/GetAll");
  }
  GetCustomerbycode(code: any): Observable<any>  {
    return this.http.get<any>(this.baseApiUrl + "/Customer/GetByCode?Code=" + code);
  }

  GetProducts(): Observable<any>  {
    return this.http.get<any>(this.baseApiUrl + "/Product/GetAll");
  }
  GetProductbycode(code: any): Observable<any>  {
    return this.http.get<any>(this.baseApiUrl + "/Product/GetByCode?Code=" + code);
  }

  GetAllInvoice(): Observable<any>  {
    return this.http.get<any>(this.baseApiUrl + "/Invoice/GetAllHeader");
  }

  GetInvHeaderbycode(invoiceno: any): Observable<any>  {
    return this.http.get<any>(this.baseApiUrl + "/Invoice/GetAllHeaderbyCode?invoiceno=" + invoiceno);
  }
  GetInvDetailbycode(invoiceno: any): Observable<any> {
    return this.http.get<any>(this.baseApiUrl + "/Invoice/GetAllDetailbyCode?invoiceno=" + invoiceno);
  }
  RemoveInvoice(invoiceno: any): Observable<any>  {
    return this.http.delete<any>(this.baseApiUrl + "/Invoice/Remove?invoiceno=" + invoiceno);
  }

  SaveInvoice(invoicedata: any): Observable<any>  {
    return this.http.post<any>(this.baseApiUrl + "/Invoice/Save", invoicedata);
  }
}
