import { OrderComponent } from './categories/order/order.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AngularWebStoreModule } from 'angular-web-store';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { AlertModule } from 'ngx-alerts';
import { ModalModule } from 'ngx-bootstrap';
import { ListOrderComponent } from './categories/list-orders/list-orders.component';
@NgModule({
  declarations: [
    AppComponent,
    ListOrderComponent,
    OrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularWebStoreModule.forRoot(),
    AlertModule.forRoot({maxMessages: 5, timeout: 5000, position: 'right'}),
    BrowserAnimationsModule,
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ListOrderComponent, OrderComponent ]
})
export class AppModule { }
