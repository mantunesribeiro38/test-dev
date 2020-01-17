import * as Constants from '../../constants';
import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { LocalStorageService } from 'angular-web-store';
import findIndexArray from "../../utils/findIndexArray";

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

  constructor(  
    public modalRef: BsModalRef,
    private local: LocalStorageService
  ) { }

  ngOnInit() {
   
    this.addItemInCart(this.data.idProduct, this.data.price, this.data.nameProduct);
    
    if (this.resultSearchOrder.length > 0) {
    
      this.productItem = this.resultSearchOrder[0];

    }else {

      this.productItem = {id_product: this.data.idProduct, quantity: 1, price: this.data.price, nameProduct: this.data.nameProduct };
    
    }
  }

  addItemInCart(idProduct, price, nameProduct) {

    this.orderProducts = this.local.get(Constants.KEY_ORDERS);
 
    if( this.orderProducts == null) {
      this.local.set( Constants.KEY_ORDERS, [{id_product: idProduct, quantity: 1, price: price, nameProduct: nameProduct }] );
    }

    if(this.orderProducts !== null) {
      
      this.resultSearchOrder = this.orderProducts.filter(function(order) {
        return order.id_product === idProduct;
      });
        
      if (this.resultSearchOrder.length === 0) {
        this.orderProducts.push({id_product: idProduct, quantity: 1, price: price, nameProduct: nameProduct });
        this.local.set( Constants.KEY_ORDERS,  this.orderProducts );
      }
  
    }
  }

  removeItem () {
    
    this.orderProducts = this.local.get(Constants.KEY_ORDERS);

    let indexOfProduct = findIndexArray( this.orderProducts, this.productItem.id_product);
    
    if(this.productItem.quantity === 1) {

      this.orderProducts.splice(indexOfProduct, 1);
      
      this.modalRef.hide();
    }
    
    if(this.productItem.quantity > 1) {
      this.productItem.quantity--;
    
      this.orderProducts[indexOfProduct].quantity =  this.productItem.quantity;
    }

    this.local.set( Constants.KEY_ORDERS,  this.orderProducts );
  }

  addMoreItem () {

    this.orderProducts = this.local.get(Constants.KEY_ORDERS);
    
    let indexOfProduct = findIndexArray( this.orderProducts, this.productItem.id_product);
    
    this.productItem.quantity++;
    
    this.orderProducts[indexOfProduct].quantity =  this.productItem.quantity;
    
    this.local.set( Constants.KEY_ORDERS,  this.orderProducts );
  }
}
