import { arrayCheckout } from "../data/ArrayCheckout.js";
import { products } from "./products.js";
import { saveToLocalStorage } from "../data/ArrayCheckout.js";
import { deliveryOptions } from "./delivery.js";
import { deleteElement, deliveryFunction, updateDeliveryOption } from "./Functions.js";
import { paymentFunction } from "./payment.js";

// function test(){
//   console.log("checkout here-->", arrayCheckout);
  
//   let htmlResult = '';
//     arrayCheckout.forEach((item) =>{

//       const productId = item.productId;
//       let ThisProduct;
//       products.forEach((product) =>{
//         if(product.id === productId)
//         {
//           ThisProduct = product;
//         }
//       });

//       let deliveryOptionElem;
//       let dayString;
//       deliveryOptions.forEach((option) =>{
//         if(option.deliveryId === item.deliveryId)
//         {
//           const today = dayjs();
  
//           const deliveryDay = today.add(option.deliveryDays, "days");
      
//           dayString = deliveryDay.format('dddd, MMMM D');

//         }

//       })


//       htmlResult  += `  
    
//       <div class="cart-item-container cart-item-container-${ThisProduct.id}">
//       <div class="delivery-date">
//         Delivery date: ${dayString}
//       </div>
  
//       <div class="cart-item-details-grid">
//         <img class="product-image"
//           src=${ThisProduct.image}>
  
//         <div class="cart-item-details">
//           <div class="product-name">
//             ${ThisProduct.name}
//           </div>
//           <div class="product-price">
//             ${ThisProduct.price}
//           </div>
//           <div class="product-quantity">
//             <span>
//               Quantity: <span class="quantity-label">${item.quantity}</span>
//             </span>
//             <span class="update-quantity-link link-primary">
//               Update
//             </span>
//             <span class="delete-quantity-link link-primary js-delete-link" data-product-id="${ThisProduct.id}">
//               Delete
//             </span>
//           </div>
//         </div>
  
//         <div class="delivery-options" >
//           <div class="delivery-options-title">
//             Choose a delivery option:
//           </div>
//               ${deliveryFunction(ThisProduct, item)}
          
          
         
//         </div>
//       </div>
//     </div>`;


    
    
// });

// document.querySelector('.order-summary').innerHTML = htmlResult;

// }

// test();

// document.querySelectorAll('.js-delete-link').forEach((elem)=>{
//   elem.addEventListener('click', ()=>{
//     // i want when i click delete to remove the product from the cart
//     console.log("delete...");
//     const productId = elem.dataset.productId;

//     deleteElement(productId);

//     const element= document.querySelector(`.cart-item-container-${productId}`);
//     element.remove();
//   })
// })


// // Define the event handler function separately
// function handleDeliveryOptionClick() {
//   console.log("clickckckckc");
//   let data = this.dataset;
//   const { productId, deliveryOptionId } = data;

//   updateDeliveryOption(productId, deliveryOptionId);
//   let htmlResult2 = '';
//     arrayCheckout.forEach((item) =>{

//       const productIdTest = item.productId;
//       let ThisProduct;
//       products.forEach((product) =>{
//         if(product.id === productIdTest)
//         {
//           ThisProduct = product;
//         }
//       });

//       let deliveryOptionElem;
//       let dayString;
//       deliveryOptions.forEach((option) =>{
//         if(option.deliveryId === item.deliveryId)
//         {
//           const today = dayjs();
  
//           const deliveryDay = today.add(option.deliveryDays, "days");
      
//           dayString = deliveryDay.format('dddd, MMMM D');

//         }

//       })


//       htmlResult2  += `  
    
//       <div class="cart-item-container cart-item-container-${ThisProduct.id}">
//       <div class="delivery-date">
//         Delivery date: ${dayString}
//       </div>
  
//       <div class="cart-item-details-grid">
//         <img class="product-image"
//           src=${ThisProduct.image}>
  
//         <div class="cart-item-details">
//           <div class="product-name">
//             ${ThisProduct.name}
//           </div>
//           <div class="product-price">
//             ${ThisProduct.price}
//           </div>
//           <div class="product-quantity">
//             <span>
//               Quantity: <span class="quantity-label">${item.quantity}</span>
//             </span>
//             <span class="update-quantity-link link-primary">
//               Update
//             </span>
//             <span class="delete-quantity-link link-primary js-delete-link" data-product-id="${ThisProduct.id}">
//               Delete
//             </span>
//           </div>
//         </div>
  
//         <div class="delivery-options" >
//           <div class="delivery-options-title">
//             Choose a delivery option:
//           </div>
//               ${deliveryFunction(ThisProduct, item)}
          
          
         
//         </div>
//       </div>
//     </div>`;

    
    
// });
// const check = document.querySelector('.js-order-summary').innerHTML = htmlResult2;

// console.log("check-->", check);

// console.log("htmlREsult2-->", htmlResult2);

//   // test();
// }

// // Add click event listener to all .js-delivery-option elements
// document.querySelectorAll('.js-delivery-option').forEach((item) => {
//   item.removeEventListener('click', handleDeliveryOptionClick); // Remove the existing event listener
//   item.addEventListener('click', handleDeliveryOptionClick); // Add the new event listener
// });


export function GlobalFunction() {

  let ResultHtml = '';

  arrayCheckout.forEach((elem) => {

    const productId = elem.productId;

    let matchingProduct;
    products.forEach((product) =>{
      if(product.id === productId)
      {
          matchingProduct = product;
      }
    });

    const deliveryOptionId = elem.deliveryId;

    console.log("checkout here-->", elem);

    let deliveryOption = '';

    deliveryOptions.forEach((option) =>{
      if(option.deliveryId === deliveryOptionId)
      {
        deliveryOption = option;
      }
              
      
    })
      

    const today = dayjs();
    const deliveryDate = today.add(deliveryOption.deliveryDays,'days');
    const dateString = deliveryDate.format('dddd, MMMM D');
    console.log("matching here-->", matchingProduct)

    ResultHtml += `
      <div class="cart-item-container
        cart-item-container-${matchingProduct.id}">
        <div class="delivery-date">
          Delivery date: ${dateString}
        </div>

        <div class="cart-item-details-grid">
          <img class="product-image"
            src="${matchingProduct.image}">

          <div class="cart-item-details">
            <div class="product-name">
              ${matchingProduct.name}
            </div>
            <div class="product-price">
              $${matchingProduct.price}
            </div>
            <div class="product-quantity">
              <span>
                Quantity: <span class="quantity-label">${elem.quantity}</span>
              </span>
              <span class="update-quantity-link link-primary">
                Update
              </span>
              <span class="delete-quantity-link link-primary js-delete-link" data-product-id="${matchingProduct.id}">
                Delete
              </span>
            </div>
          </div>

          <div class="delivery-options">
            <div class="delivery-options-title">
              Choose a delivery option:
            </div>
            ${deliveryOptionsHTML(matchingProduct, elem)}
          </div>
        </div>
      </div>
    `;
  });

  function deliveryOptionsHTML(matchingProduct,cartItem) {
    let html = '';

    deliveryOptions.forEach((deliveryOption) => {
      const today = dayjs();
      const deliveryDate = today.add(
        deliveryOption.deliveryDays,
        'days'
      );
      const dateString = deliveryDate.format(
        'dddd, MMMM D'
      );

      const priceString = deliveryOption.priceCent === 0
        ? 'FREE'
        : `$${deliveryOption.priceCent} -`;


      const isChecked = deliveryOption.deliveryId  === cartItem.deliveryId;

      html += `
        <div class="delivery-option js-delivery-option"
          data-product-id="${matchingProduct.id}"
          data-delivery-option-id="${deliveryOption.deliveryId}">
          <input type="radio"
            ${isChecked ? 'checked' : ''}
            class="delivery-option-input"
            name="delivery-option-${matchingProduct.id}">
          <div>
            <div class="delivery-option-date">
              ${dateString}
            </div>
            <div class="delivery-option-price">
              ${priceString} Shipping
            </div>
          </div>
        </div>
      `
    });

    return html;
  }

  document.querySelector('.js-order-summary').innerHTML = ResultHtml;

  document.querySelectorAll('.js-delete-link').forEach((link) => {
    link.addEventListener('click', () => {
            const productId = link.dataset.productId;

            deleteElement(productId);
        
            const element= document.querySelector(`.cart-item-container-${productId}`);
            element.remove();

      });
    });

  document.querySelectorAll('.js-delivery-option').forEach((element) => {
      element.addEventListener('click', () => {
        const {productId, deliveryOptionId} = element.dataset;
        updateDeliveryOption(productId, deliveryOptionId);
        GlobalFunction();
      });
    });
}

GlobalFunction();
paymentFunction();

