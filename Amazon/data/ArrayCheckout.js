export let arrayCheckout = JSON.parse(localStorage.getItem('arrayCheckout'));


// if i delete the localStorage this is the default checkout page ( we can delete the localSorage by using ---> localStorage.removeItem('arrayCheckout'))

if(!arrayCheckout)
{
    arrayCheckout = [
        {
            productId: "1",
            quantity: 2,
            deliveryId : '1',
        },{
            productId: "2",
            quantity: 3,
            deliveryId : '1',
        },{
            productId: "3",
            quantity: 4,
            deliveryId : '1',
        },{
            productId: "4",
            quantity: 5,
            deliveryId : '1',
        }
    ];

}




/* i want to save my arrayCheckout in the localStorage so because if i delete a product from the arrayCheckout and i reset the browser the product will 
back so that is why i need to put it in the localStorage*/

export function saveToLocalStorage(){
    localStorage.setItem('arrayCheckout', JSON.stringify(arrayCheckout));
  }
  


