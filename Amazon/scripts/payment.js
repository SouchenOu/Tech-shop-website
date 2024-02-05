import { arrayCheckout } from "../data/ArrayCheckout.js";
import { deliveryOptions } from "./delivery.js";
import { products } from "./products.js";

export function paymentFunction(){
    let codeHtml = '';
    let resultPrice;
    let TaxHTML = '';
    let orderTotalHTml = '';
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
        console.log("elem delivery-->",elem);
        console.log("elem check-->", element);
        if(elem.deliveryId === element.deliveryId){
            Shipping = Shipping + elem.priceCent;
            console.log("shipping heree-->", Shipping);
        }
    })
    afterChipping = price + Shipping;
    

        
        
    });
    const numberproduct = arrayCheckout.length;
    const tax = price * 0.1;
    const orderTotal = price + Shipping + tax;

    codeHtml= codeHtml + `
        <div>Items (${numberproduct}):</div>
        <div class="payment-summary-money">${price}</div>
    `

    shippingHtml = shippingHtml + ` 
    
    <div>Shipping &amp; handling:</div>
    <div class="payment-summary-money">${afterChipping}</div>`


    TaxHTML = TaxHTML + `
            <div>Total before tax:</div>
            <div class="payment-summary-money">${tax}</div>
    `
    orderTotalHTml = orderTotalHTml = `
            <div>Order total:</div>
            <div class="payment-summary-money">${orderTotal}</div>
    `
    document.querySelector('.js-payment-summary-row1').innerHTML = codeHtml;
    document.querySelector('.js-payment-summary-row2').innerHTML = shippingHtml;
    document.querySelector('.js-subtotal-row').innerHTML = TaxHTML;
    document.querySelector('.js-total-row').innerHTML = orderTotalHTml;
}