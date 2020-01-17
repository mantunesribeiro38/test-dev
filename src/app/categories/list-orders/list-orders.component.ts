import { OrderComponent } from './../order/order.component';
import { Component, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { LocalStorageService } from 'angular-web-store';
import { AlertService } from 'ngx-alerts';
import { Cart} from '../../utils/cart';

@Component({
  templateUrl: './list-orders.component.html',
  styleUrls: ['./list-orders.component.scss']
})
export class ListOrderComponent implements OnInit {
  
  title;
  
  listOrder;
  
  priceFinal: number;
  
  cart

  constructor(
    private local: LocalStorageService,
    private modalService: BsModalService,
    public modalRef: BsModalRef,
    private alertService: AlertService,

  ) { 
    this.cart = new Cart(this.local);
  }

  ngOnInit() {    
      this.priceFinal = this.cart.totalPriceOrder();
      
      this.listOrder = this.cart.getOrders();
  }

  finishOrder () {
    this.modalRef.hide();
   
    this.cart.finishOrder();
   
    this.alertService.success('Pedido enviado com sucesso!');
  }

  editOrder(idProduct, nameProduct, price) {
    this.modalRef.hide();
    this.modalRef = this.modalService.show(OrderComponent,
      {
        initialState: {
          title: nameProduct,
          data: {idProduct, price, nameProduct}
        }
      }
    );
  }

}
