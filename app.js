
//  get add phone quantity button

document.querySelector('.addPhoneQtyBtn').addEventListener('click', function () {

    totalPhonePrice();
    // // get current input quantity for phone input box
    // let phoneQty = parseInt(document.querySelector('.add-product-qty').value);
    // // total phone quanity 
    // let totalPhoneQty = document.querySelector('.add-product-qty').value = phoneQty + 1;
    // let totalPhonePrice = parseInt(document.querySelector('#iphone-price').innerText);
    // // total Phone Price 
    // totalPhonePrice = totalPhoneQty * 1219;
    // // console.log(typeof totalPhonePrice);
    // // set total price in the innerText 
    // document.querySelector('#iphone-price').innerText = totalPhonePrice;
})

document.querySelector('.removePhoneQtyBtn').addEventListener('click', function () {
    // get current input qunantity
    // console.log('remove btn cliked');
    let phoneQty = parseInt(document.querySelector('.add-product-qty').value);
    let newPhoneQty = phoneQty - 1; 
    let totalPhoneQty = document.querySelector('.add-product-qty').value = newPhoneQty;
    // total Phone price 
    totalPhonePrice = totalPhoneQty * 1219;
    // set total price in the innerText 
    document.querySelector('#iphone-price').innerText = totalPhonePrice;
})

function totalPhonePrice() {
    // get current input quantity for phone input box
    let phoneQty = parseInt(document.querySelector('.add-product-qty').value);
    let newPhoneQty = phoneQty + 1;
    // total phone quanity 
    let totalPhoneQty = document.querySelector('.add-product-qty').value = newPhoneQty;
    let totalPhonePrice = parseInt(document.querySelector('#iphone-price').innerText);
    // total Phone Price 
    totalPhonePrice = totalPhoneQty * 1219;
    // console.log(typeof totalPhonePrice);
    // set total price in the innerText 
    document.querySelector('#iphone-price').innerText = totalPhonePrice;
}