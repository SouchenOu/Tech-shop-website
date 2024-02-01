import { arrayCheckout } from "../data/ArrayCheckout.js";
import { products } from "./products.js";
import { saveToLocalStorage } from "../data/ArrayCheckout.js";
import { deliveryOptions } from "./delivery.js";

    
  let htmlResult = '';
    arrayCheckout.forEach((item) =>{

      const productId = item.productId;
      let ThisProduct;
      products.forEach((product) =>{
        if(product.id === productId)
        {
          ThisProduct = product;
        }
      })
    htmlResult  += `  
    
    <div class="cart-item-container cart-item-container-${ThisProduct.id}">
    <div class="delivery-date">
      Delivery date: Tuesday, June 21
    </div>

    <div class="cart-item-details-grid">
      <img class="product-image"
        src=${ThisProduct.image}>

      <div class="cart-item-details">
        <div class="product-name">
          ${ThisProduct.name}
        </div>
        <div class="product-price">
          ${ThisProduct.price}
        </div>
        <div class="product-quantity">
          <span>
            Quantity: <span class="quantity-label">${item.quantity}</span>
          </span>
          <span class="update-quantity-link link-primary">
            Update
          </span>
          <span class="delete-quantity-link link-primary js-delete-link" data-product-id="${ThisProduct.id}">
            Delete
          </span>
        </div>
      </div>

      <div class="delivery-options">
        <div class="delivery-options-title">
          Choose a delivery option:
        </div>
        ${deliveryFunction(ThisProduct)}
        
        
       
      </div>
    </div>
  </div>`;
});

document.querySelector('.order-summary').innerHTML = htmlResult;
// working for deliveryOptions


function deliveryFunction(product)
{
  let htmlCode = '';

  deliveryOptions.forEach((elem) =>{
    const today = dayjs();
  
    const deliveryDay = today.add(elem.deliveryDays, "days");
  
    const dayString = deliveryDay.format('dddd, MMMM D');
  
    const price = elem.priceCent === 0 ? 'FREE' : `$$${elem.priceCent}`
  
    htmlCode = htmlCode +  `<div class="delivery-option">
    <input type="radio"
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






// working for delete button

document.querySelectorAll('.js-delete-link').forEach((elem)=>{
  elem.addEventListener('click', ()=>{
    // i want when i click delete to remove the product from the cart
    console.log("delete...");
    const productId = elem.dataset.productId;

    deleteElement(productId);

    const element= document.querySelector(`.cart-item-container-${productId}`);
    element.remove();
  })
})


function deleteElement  (productId) {
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