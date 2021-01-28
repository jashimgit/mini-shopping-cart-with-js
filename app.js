
//  get add phone quantity button

document.querySelector('.addPhoneQtyBtn').addEventListener('click', function () {

    totalPhonePrice(true);
})

document.querySelector('.removePhoneQtyBtn').addEventListener('click', function () {
    totalPhonePrice(false)

})

function totalPhonePrice(isIncrease) {
    // get current input quantity for phone input box
    let phoneQty = parseInt(document.querySelector('.add-product-qty').value);
    let newPhoneQty = phoneQty;

    if (isIncrease == true) {
        newPhoneQty = newPhoneQty + 1;
    }
    if (isIncrease == false && newPhoneQty > 0) {
        newPhoneQty = newPhoneQty - 1;
    }
    // total phone quanity 
    let totalPhoneQty = document.querySelector('.add-product-qty').value = newPhoneQty;
    let totalPhonePrice = parseInt(document.querySelector('#iphone-price').innerText);
    // total Phone Price 
    totalPhonePrice = totalPhoneQty * 1219;
    // console.log(typeof totalPhonePrice);
    // set total price in the innerText 
    document.querySelector('#iphone-price').innerText = totalPhonePrice;
}

// cover section
document.querySelector('.add-cover-btn').addEventListener('click', function () {
    // get cover quantity value from input box
    let coverQty = parseInt(document.querySelector('.cover-qty').value);
    // increase new Cover quantity  by 1 per click 
    let newCoverQty = coverQty + 1;
    // set total new cover quantity after increase to input box
    let totalCoverQty = document.querySelector('.cover-qty').value = newCoverQty;
    // count total cover price as per total input quantity
    let totalCoverPrice = parseInt(document.querySelector('#total-cover-price').innerText);
    // count total price for total cover counted
    totalCoverPrice = totalCoverQty * 59;
    // set total price to price area
    document.querySelector('#total-cover-price').innerText = totalCoverPrice;
})
document.querySelector('.remove-cover-btn').addEventListener('click', function () {
    // get cover quntity value from input box
    let coverQty = parseInt(document.querySelector('.cover-qty').value);
    // decrease quantity by 1 per click
    let newCoverQty = coverQty - 1;
    // set new cover count quantity
    let totalCoverQty = document.querySelector('.cover-qty').value = newCoverQty;
    // set total cover price to a variable
    let totalCoverPrice = parseInt(document.querySelector('#total-cover-price').innerText);
    // count total cover price for selected quantity
    totalCoverPrice = totalCoverQty * 59;
    // set total price to price area
    document.querySelector('#total-cover-price').innerText = totalCoverPrice;
})