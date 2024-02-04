import { arrayCheckout, saveToLocalStorage } from "../data/ArrayCheckout.js";
import { deliveryOptions } from "./delivery.js";

export function deliveryFunction(product, item)
{
  
  let htmlCode = '';

  deliveryOptions.forEach((elem) =>{
    const today = dayjs();
  
    const deliveryDay = today.add(elem.deliveryDays, "days");
  
    const dayString = deliveryDay.format('dddd, MMMM D');
  
    const price = elem.priceCent === 0 ? 'FREE' : `$$${elem.priceCent}`;
    const isChecked =  elem.deliveryId === item.deliveryId;
   
    htmlCode = htmlCode +  
    
    `<div class="delivery-option js-delivery-option" data-product-id="${product.id}" data-delivery-option-id="${elem.deliveryId}">
    <input type="radio" ${isChecked ? 'checked' : ''}
      class="delivery-option-input"
      name="delivery-option-${product.id}">
    <div>
      <div class="delivery-option-date">
        ${dayString}
      </div>
      <div class="delivery-option-price">
       ${price} - Shipping
      </div>
    </div>
  </div>`
  
  })
  return htmlCode;
}




export function deleteElement  (productId) {
    const  NewArray = [];
    // for (let i = 0; i < arrayCheckout.length; i++){
    //     if(arrayCheckout[i].productId !== productId){
    //         NewArray[i] = arrayCheckout[i];
    //     }
    // }
    //other sollution
    arrayCheckout.forEach((elem) =>{
      if(elem.productId !== productId){
        NewArray.push(elem);
      }
    })

    arrayCheckout.length = 0;  // Clear the original array
    arrayCheckout.push(...NewArray); 
    saveToLocalStorage();


}



// export function updateDeliveryOption(productId, deliveryId) {
//   // Find the index of the matching product in arrayCheckout
//   const index = arrayCheckout.findIndex(elem => elem.productId === productId);

//   // Update the deliveryId if the product is found
//   if (index !== -1) {
//       arrayCheckout[index].deliveryId = deliveryId;
//     saveToLocalStorage();
//   }


//   console.log("arraycheckout heree update-->", arrayCheckout);
// }

export function updateDeliveryOption(productId, deliveryOptionId) {
  let matchingItem;

  arrayCheckout.forEach((cartItem) => {
    if (productId === cartItem.productId) {
      matchingItem = cartItem;
    }
  });

  matchingItem.deliveryId = deliveryOptionId;

  saveToLocalStorage();
}

