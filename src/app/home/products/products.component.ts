import { ProductsService } from './../../core/services/products.service';
import { OrderComponent } from './../order/order.component';
import { Order } from './../../core/models/order';
import { Product } from './../../core/models/product';
import { Component, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  public orders: Order[];
  products: Product[];
  modalRef: BsModalRef | null;
  constructor(
    private productsService: ProductsService,
    private modalService: BsModalService,
    private router: Router,
    private route: ActivatedRoute 
  ) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    this.productsService.getProductsByCategory(id).subscribe(
      data => this.products = data
    );
  }

  openModalOrder(idProduct, nameProduct, price) {

    this.modalRef = this.modalService.show(OrderComponent,
      {
        initialState: {
          title: nameProduct,
          data: {idProduct, price, nameProduct}
        }
      }
    );
  }

  backToCategories () {
    this.router.navigate(['/']);
  }
}
