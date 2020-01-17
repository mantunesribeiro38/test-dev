import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { LocalStorageService } from 'angular-web-store';
import { AlertService } from 'ngx-alerts';
import * as Constants from '../../constants';

@Component({
  templateUrl: './list-orders.component.html',
  styleUrls: ['./list-orders.component.scss']
})
export class ListOrderComponent implements OnInit {
  title;
  oldItems;
  priceFinal: number;
  constructor(
    private local: LocalStorageService,
    public modalRef: BsModalRef,
    private alertService: AlertService,
    
  ) { }

  ngOnInit() {
    
    this.oldItems = this.local.get(Constants.KEY_ORDERS);
    
    if(this.oldItems !== null) {
      let totalOrder = 0;
      this.oldItems.forEach( (item)=> {
          let totalPrice = item.price * item.quantity
          totalOrder = totalPrice + totalOrder;
      });
  
      this.priceFinal = totalOrder;
    }
  }

  finishOrder () {
    this.modalRef.hide();
    this.local.clear();
    this.alertService.success('Pedido enviado com sucesso!');
  }

}
