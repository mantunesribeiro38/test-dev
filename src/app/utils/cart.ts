import { LocalStorageService } from 'angular-web-store';
import findIndexArray from "../utils/findIndexArray";
import * as Constants from '../constants';

class Cart {

    private orderProducts = null;
    private resultSearchOrder = [];
    private productItem
    private priceFinal: number;

    constructor(
        private local: LocalStorageService
    ) {}

    init(idProduct, price, nameProduct) {
   
        this.add(idProduct, price, nameProduct);
        
        if (this.resultSearchOrder.length > 0) {
        
          this.productItem = this.resultSearchOrder[0];
    
        }else {
    
          this.productItem = {id_product: idProduct, quantity: 1, price: price, nameProduct: nameProduct };
        
        }
      }

    add(idProduct, price, nameProduct) {

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

    updateItem() {

        this.orderProducts = this.local.get(Constants.KEY_ORDERS);
        
        let indexOfProduct = findIndexArray( this.orderProducts, this.productItem.id_product);
        
        this.productItem.quantity++;
        
        this.updateOrderByIndex( this.productItem.quantity, indexOfProduct );
        
        this.local.set( Constants.KEY_ORDERS,  this.orderProducts );
      }

    deleteItem() {
    
        this.orderProducts = this.getOrders();
    
        let indexOfProduct = findIndexArray( this.orderProducts, this.productItem.id_product);
        
        if(this.productItem.quantity === 1) {
    
          this.orderProducts.splice(indexOfProduct, 1);
          this.productItem = [] ;
        }
        
        if(this.productItem.quantity > 1) {
          
          this.productItem.quantity--;
        
          this.updateOrderByIndex( this.productItem.quantity, indexOfProduct );
        }
    
        this.local.set( Constants.KEY_ORDERS,  this.orderProducts );
    }

    updateOrderByIndex(quantity, indexOfProduct) {

        this.orderProducts[indexOfProduct].quantity = quantity;

    }

    totalPriceOrder () {

        this.orderProducts = this.getOrders();
    
        if(this.orderProducts !== null) {
          
          let totalOrder = 0;
          
          this.orderProducts.forEach( (item)=> {
              
            let totalPrice = item.price * item.quantity
              
            totalOrder = totalPrice + totalOrder;
          
          });
      
          this.priceFinal = totalOrder;
        }

        return this.priceFinal;
    }

    finishOrder() {
        this.local.clear();
    }


    getOrders() {
        return this.local.get(Constants.KEY_ORDERS);
    }

    getProductItem() {
        return  this.productItem;
    }
}

export { Cart };