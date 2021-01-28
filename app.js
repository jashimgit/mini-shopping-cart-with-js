
//  get add phone quantity button

document.querySelector('.addPhoneQtyBtn').addEventListener('click', function () {

    // get current input quantity for phone input box
    let phoneQty = parseInt(document.querySelector('.add-product-qty').value);
    // total phone quanity 
    let totalPhoneQty = document.querySelector('.add-product-qty').value = phoneQty + 1;
    let totalPhonePrice = parseInt(document.querySelector('#iphone-price').innerText);
    // total Phone Price 
    totalPhonePrice = totalPhoneQty * 1219;
    // console.log(typeof totalPhonePrice);
    // set total price in the innerText 
    document.querySelector('#iphone-price').innerText = totalPhonePrice;
})
