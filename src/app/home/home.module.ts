import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { CategoriesComponent } from './categories/categories.component';
import { ProductsComponent } from './products/products.component';


@NgModule({
  declarations: [CategoriesComponent, ProductsComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
