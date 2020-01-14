import { Order } from './../../core/models/order';
import { Product } from './../../core/models/product';
import { CategoriesService } from './../../core/services/categories.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LocalStorageService } from 'angular-web-store'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  public orders: Order[];

  products: Product[];
  constructor(
    private route: ActivatedRoute,
    private categoriesService: CategoriesService,
    private local: LocalStorageService
  ) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    this.categoriesService.getProductsByCategory(id).subscribe(
      data => this.products = data
    );
  }


  addItemInCart(idProduct) {
    console.log(idProduct);
    //this.local.set(this.KEY, { a: 1, now: +new Date }, '4s')
  }

}
