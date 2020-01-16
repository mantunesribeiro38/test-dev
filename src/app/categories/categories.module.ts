import { OrderComponent } from './order/order.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesRoutingModule } from './categories-routing.module';
import { CategoriesComponent } from './categories.component';
import { ProductsComponent } from './products/products.component';
import { ModalModule } from 'ngx-bootstrap/modal';


@NgModule({
  declarations: [CategoriesComponent, ProductsComponent, OrderComponent],
  imports: [
    CommonModule,
    CategoriesRoutingModule,
    ModalModule.forRoot()
  ],
  entryComponents: [ OrderComponent]
})
export class CategoriesModule { }
