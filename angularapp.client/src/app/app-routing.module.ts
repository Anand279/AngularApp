import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { EditProductComponent } from './components/edit-product/edit-product.component';
import { ListingComponent } from './components/listing/listing.component';
import { CreateinvoiceComponent } from './components/createinvoice/createinvoice.component';

const routes: Routes = [
  //{ path: '', component: ProductsComponent },
  //{ path: 'products', component: ProductsComponent },
  //{ path: 'products/add', component: AddProductComponent },
  //{ path: 'products/edit/:id', component: EditProductComponent }
  { component: ListingComponent, path: "" },
  { component: CreateinvoiceComponent, path: "createinvoice" },
  { component: CreateinvoiceComponent, path: "editinvoice/:invoiceno" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
