export default function (listProducts: any, idProduct: number) {
    let indexOfProduct = null;
        
    listProducts.forEach(( product , index ) => {
     
      if( product.id_product === idProduct) {
        indexOfProduct = index;
      }
    });

    return indexOfProduct;
}