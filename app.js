
//  get add phone quantity button
const addPhoneQtyBtn = document.querySelector('.addPhoneQtyBtn');
const addCoverBtn = document.querySelector('.add-cover-btn');

addCoverBtn.addEventListener('click', function () {
    let phonePerCoverPrice = 59;
    // get input value
    let coverQtyInput = parseFloat(document.querySelector('.add-cover-qty').value);
    let totalCoverQty = document.querySelector('.add-cover-qty').value = coverQtyInput + 1;
    // console.log(parseFloat(totalCoverQty));
    // get total-cover-price 
    var totalCoverPrice = parseFloat(document.querySelector('#total-cover-price').innerText);

    totalCoverPrice = phonePerCoverPrice * totalCoverQty;
    // console.log(totalCoverPrice);
    document.querySelector('#total-cover-price').innerText = totalCoverPrice;
})






addPhoneQtyBtn.addEventListener('click', function () {
    let phonePrice = 1219;
    // get add-product quantity value
    const productQty = parseInt(document.querySelector('.add-product-qty').value);

    const totalPhoneQty = document.querySelector('.add-product-qty').value = productQty + 1;
    // get phone price 
    const price = parseInt(document.querySelector('#iphone-price').innerText);
    // count total phone price 
    document.querySelector('#iphone-price').innerText = totalPhoneQty * phonePrice;

})





function subTotal(phonePrice, phoneCoverPrice) {

}