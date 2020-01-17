export default function (oldItems: any, keyIndex: number) {
    let indexOfProduct = null;
        
    oldItems.forEach(( item , index ) => {
     
      if( item.id_product === keyIndex) {
        indexOfProduct = index;
      }
    });

    return indexOfProduct;
}