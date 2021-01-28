
//  get add phone quantity button

document.querySelector('.addPhoneQtyBtn').addEventListener('click', function () {

    totalPhonePrice(true);
})

document.querySelector('.removePhoneQtyBtn').addEventListener('click', function () {
    totalPhonePrice(false)

})


// cover section
document.querySelector('.add-cover-btn').addEventListener('click', function () {
    totalCoverPrice(true);
})
document.querySelector('.remove-cover-btn').addEventListener('click', function () {
    totalCoverPrice(false)
})


function totalCoverPrice(isIncrease) {
    // get cover quantity value from input box
    let coverQty = parseInt(document.querySelector('.cover-qty').value);
    // increase new Cover quantity  by 1 per click 
    let newCoverQty = 0;
    //   set condition
    if (isIncrease == true) {
        newCoverQty = coverQty + 1;
    }
    if (isIncrease == false && newCoverQty > 0) {
        newCoverQty = coverQty - 1;
    }

    // set total new cover quantity after increase to input box
    let totalCoverQty = document.querySelector('.cover-qty').value = newCoverQty;
    // count total cover price as per total input quantity
    let totalCoverPrice = parseInt(document.querySelector('#total-cover-price').innerText);
    // count total price for total cover counted
    totalCoverPrice = totalCoverQty * 59;
    // set total price to price area
    document.querySelector('#total-cover-price').innerText = totalCoverPrice;
    subTotal()
}

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
    subTotal()
}

function subTotal() {
    let PhonePrice = parseInt(document.querySelector('#iphone-price').innerText);
    let CoverPrice = parseInt(document.querySelector('#total-cover-price').innerText);
    subTotalPrice = PhonePrice + CoverPrice;
    document.getElementById('sub-total').innerText = subTotalPrice;

}
