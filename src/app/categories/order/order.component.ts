import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { LocalStorageService } from 'angular-web-store';
import { Cart} from '../../utils/cart';

@Component({
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  
  data: any;
  orderProducts = null;
  resultSearchOrder = [];
  title
  productItem
  cart

  constructor(  
    public modalRef: BsModalRef,
    private local: LocalStorageService
  ) {
    this.cart = new Cart(this.local);
   }

  ngOnInit() {
    this.cart.init(this.data.idProduct, this.data.price, this.data.nameProduct);
    this.productItem = this.cart.getProductItem();
  }

  removeItem () {
    this.cart.deleteItem();
   
    let itemProduct = this.cart.getProductItem();

    if(itemProduct.length === 0) {
      this.modalRef.hide();
    }
  }

  addMoreItem () {
    this.cart.updateItem();
   
  }
}
