const price = document.querySelector('#price');
const coupon = document.querySelector('#coupon');
const pay = document.querySelector('#pay');
const applyBtn = document.querySelector('#applyBtn');
const payBtn = document.querySelector('#payBtn');


price.addEventListener('blur', ()=>{
    if ((Number(price.value) <= 0) && (price.value !== '')) {
        alert('Please input valid amount.');
        pay.value = '';
    } else {
        pay.value = price.value;
    }
});


applyBtn.addEventListener('click', ()=> {
    let Price = price.value;
    let couponCode = coupon.value;
    let priceAmount = Number(Price);
    // let payAmount = pay.value;
    if (couponCode === 'DISC30' && Price !== '') {
        let loadingTime = (Math.floor(Math.random() * 5 + 4)) * 1000;
        payLoading('Congratulations!! You have successfully got 30% discount', loadingTime);
        setTimeout(()=>{
            pay.value = priceAmount - (priceAmount * 0.30);
        }, loadingTime);
    } else {
        if (Price === '') {
            pay.value = '';
        } else {
            pay.value = priceAmount;
        }
    }
})

payBtn.addEventListener('click', ()=> {
    if (pay.value !== '') {
        let loadingTime = (Math.floor(Math.random() * 5 + 4)) * 1000;
        payLoading(`You have successfully paid ${pay.value} tk`, loadingTime);
        // toastMessage(`You have successfully paid ${pay.value} tk`);
        setTimeout(()=>{
        price.value = '';
        coupon.value = '';
        pay.value = '';
    }, loadingTime);
    }
})