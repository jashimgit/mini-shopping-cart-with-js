
//  get add phone quantity button
const addPhoneQtyBtn = document.querySelector('.addPhoneQtyBtn');
const addCoverBtn = document.querySelector('.add-cover-btn');

addCoverBtn.addEventListener('click', function () {
    let phonePerCoverPrice = 59;
    // get input value
    let coverQtyInput = parseFloat(document.querySelector('.add-cover-qty').value);
    let totalCoverQty = document.querySelector('.add-cover-qty').value = coverQtyInput + 1;
    // console.log(parseFloat(totalCoverQty));

})






addPhoneQtyBtn.addEventListener('click', function () {
    totalPhonePrice();

    totalExpense(phonePrice, phoneCoverPrice);
})

function totalPhonePrice() {
    let phonePrice = 1219;
    // get add-product quantity value
    const productQty = parseInt(document.querySelector('.add-product-qty').value);

    const totalPhoneQty = document.querySelector('.add-product-qty').value = productQty + 1;
    // get phone price 
    const price = parseInt(document.querySelector('#iphone-price').innerText);
    // count total phone price 
    let totalPhonePrice = document.querySelector('#iphone-price').innerText = totalPhoneQty * phonePrice;
    return totalPhonePrice;
}



function totalExpense(phonePrice, phoneCoverPrice) {
    let totalExpense = parseFloat(document.querySelector('#totalExpense').innerText);
    totalExpense = document.querySelector('#totalExpense').innerText = phonePrice + phoneCoverPrice;
    return totalExpense;
}