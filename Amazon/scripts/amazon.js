console.log("yes");

// const products = [
    
//     {
//         image : "images/products/1.jpeg",
//         name : "Black and Gray Athletic Cotton Socks - 6 Pairs",
//         price : "$10.90",
//         rating : {
//             stars : 4.5,
//             count : 87,
//         }
//     },
//     {
//         image : "images/products/2.jpeg",
//         name : "Intermediate Size Basketball",
//         price : "$20.95",
//         rating : {
//             stars: 3,
//             count: 127,

//         }
//     },
//     {
//         image : "images/products/3.jpeg",
//         name : "Adults Plain Cotton T-Shirt - 2 Pack",
//         price : "$7.99",
//         rating : {
//             stars : 4.5,
//             count : 56,
//         }
//     },
//     {
//         image : "images/products/4.jpeg",
//         name : "Adults Plain Cotton T-Shirt - 2 Pack",
//         price : "$7.99",
//         rating : {
//             stars : 4.5,
//             count : 56,
//         }
//     }, {
//         image : "images/products/5.jpeg",
//         name : "Adults Plain Cotton T-Shirt - 2 Pack",
//         price : "$7.99",
//         rating : {
//             stars : 4.5,
//             count : 56,
//         }
//     }, {
//         image : "images/products/6.jpeg",
//         name : "Adults Plain Cotton T-Shirt - 2 Pack",
//         price : "$7.99",
//         rating : {
//             stars : 4.5,
//             count : 56,
//         }
//     }
// ]

let productHTML = '';

products.forEach((elem)=>{
   productHTML  +=  `<div class="product-container">
   <div class="product-image-container">
     <img class="product-image"
       src=${elem.image}>
   </div>

   <div class="product-name limit-text-to-2-lines">
     ${elem.name}
   </div>

   <div class="product-rating-container">
     <img class="product-rating-stars"
       src="images/ratings/rating-45.png">
     <div class="product-rating-count link-primary">
       ${elem.rating.count}
     </div>
   </div>

   <div class="product-price">
     ${elem.price}
   </div>

   <div class="product-quantity-container">
     <select>
       <option selected value="1">1</option>
       <option value="2">2</option>
       <option value="3">3</option>
       <option value="4">4</option>
       <option value="5">5</option>
       <option value="6">6</option>
       <option value="7">7</option>
       <option value="8">8</option>
       <option value="9">9</option>
       <option value="10">10</option>
     </select>
   </div>

   <div class="product-spacer"></div>

   <div class="added-to-cart">
     <img src="images/icons/checkmark.png">
     Added
   </div>

   <button class="add-to-cart-button button-primary  btn-click" data-product-name="${elem.name}" >
     Add to Cart
   </button>
 </div>
`

})


document.querySelector('.products-grid').innerHTML = productHTML;


document.querySelectorAll(".btn-click").forEach((button)=>{
    button.addEventListener( 'click', () =>{
      console.log("name hare", button.dataset);
      const productName = button.dataset.productName;

      let itemQuantity;

      arrayCheckout.forEach((elem) =>{
        if(productName === elem.productName){
          itemQuantity = elem;
        }
      })

      if(itemQuantity){
        itemQuantity.quantity++;
      }else{
        arrayCheckout.push({
          productName : productName,
          quantity : 1,
        });

      }

      
      console.log("array here-->", arrayCheckout);
    })
})