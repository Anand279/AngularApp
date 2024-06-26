import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaginationService {
  //Pagination Variables  

  temppage: number = 0;
  pageField: any[] = []
  exactPageList: any; 
  constructor() {
  }
  // On page load   
  pageOnLoad() {
    if (this.temppage == 0) {
      this.pageField = [];
      for (let a = 0; a < this.exactPageList; a++) {
        this.pageField[a] = this.temppage + 1;
        this.temppage = this.temppage + 1;
      }
    }  

  }
}
