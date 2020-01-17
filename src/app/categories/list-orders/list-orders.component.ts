import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
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

}
