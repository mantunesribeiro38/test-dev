import { Product } from './../../core/models/product';
import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ProductsService } from 'src/app/core/services/products.service';
import { LocalStorageService } from 'angular-web-store';
import { AlertService } from 'ngx-alerts';

@Component({
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  data: any;
  products: Product[];
  KEY = 'orders';
  oldItems: any = null;
  resultSearchOrder = [];
  title
  productItem
  constructor(  
    public modalRef: BsModalRef,
    private local: LocalStorageService,
    private alertService: AlertService,
  ) { }

  ngOnInit() {
    
    console.log(this.data);
    
    this.addItemInCart(this.data.idProduct, this.data.price);
    
    if (this.resultSearchOrder.length > 0) {
      this.alertService.warning('Pedido já foi adicionado!');

      this.productItem = this.resultSearchOrder[0];
    }else {
      this.productItem = {id_produto: this.data.idProduct, quantidade: 1, price: this.data.price };
    }
    console.log('Order');
    console.log(this.productItem);
  }

  addItemInCart(idProduct, price) {

    this.oldItems = this.local.get(this.KEY);
 
    if( this.oldItems == null) {
      this.local.set( this.KEY, [{id_produto: idProduct, quantidade: 1, price: price }] );
    }

    if(this.oldItems !== null) {
      
      this.resultSearchOrder = this.oldItems.filter(function(order) {
        console.log(order.id_produto);
        return order.id_produto === idProduct;
      });
      
      console.log('Resultado', this.resultSearchOrder);
      
      if (this.resultSearchOrder.length === 0) {
        this.oldItems.push({id_produto: idProduct, quantidade: 1, price: price });
        this.local.set( this.KEY,  this.oldItems );
      }
  
    }
  }

  removeItem () {
    let idProduto = this.productItem.id_produto;
    let indexOfProduct = null;
    this.oldItems = this.local.get(this.KEY);
    this.oldItems.forEach(function(item,index) {
     
      if( item.id_produto == idProduto) {
        indexOfProduct = index;
      }
    });
   
    console.log('INDEX',indexOfProduct);
    this.productItem.quantidade--;
    this.oldItems[indexOfProduct].quantidade =  this.productItem.quantidade;
    console.log( this.oldItems);
    this.local.set( this.KEY,  this.oldItems );
  }

  addMoreItem () {
    let idProduto = this.productItem.id_produto;
    let indexOfProduct = null;
    this.oldItems = this.local.get(this.KEY);
    this.oldItems.forEach(function(item,index) {
     
      if( item.id_produto == idProduto) {
        indexOfProduct = index;
      }
    });
   
    console.log('INDEX',indexOfProduct);
    this.productItem.quantidade++;
    this.oldItems[indexOfProduct].quantidade =  this.productItem.quantidade;
    console.log( this.oldItems);
    this.local.set( this.KEY,  this.oldItems );
  }
}
