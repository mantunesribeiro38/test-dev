import { OrderComponent } from './order/order.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { CategoriesComponent } from './categories/categories.component';
import { ProductsComponent } from './products/products.component';
import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
  declarations: [CategoriesComponent, ProductsComponent, OrderComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ModalModule.forRoot()
  ],
  entryComponents: [ OrderComponent ]
})
export class HomeModule { }
