import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { LocalStorageService } from 'angular-web-store';
import { AlertService } from 'ngx-alerts';
@Component({
  templateUrl: './list-order.component.html',
  styleUrls: ['./list-order.component.scss']
})
export class ListOrderComponent implements OnInit {
  title;
  oldItems;
  KEY = 'orders';
  priceFinal: number;
  constructor(
    private local: LocalStorageService,
    public modalRef: BsModalRef,
    private alertService: AlertService,
    
  ) { }

  ngOnInit() {
    
    this.oldItems = this.local.get(this.KEY);
    
    if(this.oldItems !== null) {
      let totalOrder = 0;
      this.oldItems.forEach(function(item,index) {
          let totalPrice = item.price * item.quantidade
          totalOrder = totalPrice + totalOrder;
      });
  
      this.priceFinal = totalOrder;
    }
  }

  finishOrder () {
    this.modalRef.hide();
    this.local.clear();
    this.alertService.success('Pedido finalizado com sucesso!');
  }

}
