import { arrayCheckout } from "../data/ArrayCheckout.js";
import { deliveryOptions } from "./delivery.js";
import { products } from "./products.js";

export function paymentFunction(){
    let codeHtml = '';
    let resultPrice;
    let price = 0;
    let Shipping = 0;
    let shippingHtml = '';
    let afterChipping = 0;

    arrayCheckout.forEach((element) => {
        let quantityResult = 0;
        quantityResult = 
        products.forEach((pro)=>{
            if(element.productId === pro.id)
            {
               
                price = price + (pro.price * element.quantity);
                
            }
        })
    
    deliveryOptions.forEach((elem)=>{
        if(elem.deliveryId === element.deliveryId){
            Shipping = 0;
            Shipping = elem.priceCent;
        }
    })
    afterChipping = price + Shipping;
    

        
        
    });
    const numberproduct = arrayCheckout.length;
    console.log("price-->", price);
    console.log("length here-->", numberproduct);

    codeHtml= codeHtml + `
        <div>Items (${numberproduct}):</div>
        <div class="payment-summary-money">${price}</div>
    `

    shippingHtml = shippingHtml + ` 
    
    <div>Shipping &amp; handling:</div>
    <div class="payment-summary-money">${afterChipping}</div>`

    document.querySelector('.js-payment-summary-row1').innerHTML = codeHtml;
    document.querySelector('.js-payment-summary-row2').innerHTML = shippingHtml;
}