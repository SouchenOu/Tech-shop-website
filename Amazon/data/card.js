export let arrayCheckout = JSON.parse(localStorage.getItem('arrayCheckout'));

if(!arrayCheckout)
{
    arrayCheckout = [
        {
            productId: "1",
            quantity: 2
        },{
            productId: "2",
            quantity: 3
        },{
            productId: "3",
            quantity: 4
        },{
            productId: "4",
            quantity: 5
        }
    ];

}




/* i want to save my arrayCheckout in the localStorage so because if i delete a product from the arrayCheckout and i reset the browser the product will 
back so that is why i need to put it in the localStorage*/

export function saveToLocalStorage(){
    localStorage.setItem('arrayCheckout', JSON.stringify(arrayCheckout));
  }
  


