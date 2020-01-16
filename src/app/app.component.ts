import { ListOrderComponent } from './categories/list-orders/list-orders.component';
import { Component, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
  title = 'test-tecprime';
  modalRef: BsModalRef | null;
  constructor (  private modalService: BsModalService,) {
  }

  openModalListOrder(idProduct, nameProduct, price) {

    this.modalRef = this.modalService.show(ListOrderComponent,
      {
        initialState: {
          title: 'Items do Pedido',
    
        }
      }
    );
  }
}
