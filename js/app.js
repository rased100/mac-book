/*--------------------------------------start-js---------------------------------------*/


/*--------------------------------------functions-start--------------------------------*/

// memory function
function memory() {
    const memoryCost = document.getElementById('extra-memory-cost');
    const extraMemoryCost = parseFloat(memoryCost.innerText);
    return extraMemoryCost;
}

// storage function
function storage() {
    const storageCost = document.getElementById('extra-storage-cost');
    const extraStorageCost = parseFloat(storageCost.innerText);
    return extraStorageCost;
}

// delivery function
function delivery() {
    const deliveryCost = document.getElementById('delivery-charge');
    const deliveryCharge = parseFloat(deliveryCost.innerText);
    return deliveryCharge;
}

// shared function memory
function shMemory(input) {
    const memoryCost16gb = input;
    const memoryCost = document.getElementById('extra-memory-cost');
    memoryCost.innerText = memoryCost16gb;
    // storage
    const extraStorageCost = storage();
    // delivery
    const deliveryCharge = delivery();
    //total price
    const bestPrice = 1299;
    const totalPrice = document.getElementById('total-price');
    totalPrice.innerText = bestPrice + memoryCost16gb + extraStorageCost + deliveryCharge;
    const totalPriceNumber = parseFloat(totalPrice.innerText);
    return totalPriceNumber;
}

// shared function storage
function shStorage(input) {
    const storageCost512gb = input;
    const storageCost = document.getElementById('extra-storage-cost');
    storageCost.innerText = storageCost512gb;
    // memory
    const extraMemoryCost = memory();
    // delivery
    const deliveryCharge = delivery();
    //total price
    const bestPrice = 1299;
    const totalPrice = document.getElementById('total-price');
    totalPrice.innerText = bestPrice + storageCost512gb + extraMemoryCost + deliveryCharge;
    const totalPriceNumber = parseFloat(totalPrice.innerText);
}

// shared function delivery
function shDelivery(input) {
    const deliveryCharge = input;
    const deliveryCost = document.getElementById('delivery-charge');
    deliveryCost.innerText = deliveryCharge;
    // memory
    const extraMemoryCost = memory();
    // storage
    const extraStorageCost = storage();
    //total price
    const bestPrice = 1299;
    const totalPrice = document.getElementById('total-price');
    totalPrice.innerText = bestPrice + extraMemoryCost + extraStorageCost + deliveryCharge;
    const totalPriceNumber = parseFloat(totalPrice.innerText);
}

/*-------------------------------------functions-end------------------------------------*/


/*-------------------------------------memory-start------------------------------------*/

// 8gb memory
document.getElementById('8gb-memory').addEventListener('click', function () {
    const result = shMemory(0);
    //total
    const total = document.getElementById('total');
    total.innerText = totalPriceNumber;
});

//16gb memory
document.getElementById('16gb-memory').addEventListener('click', function () {
    const result = shMemory(180);
    //total
    const total = document.getElementById('total');
    total.innerText = totalPriceNumber;
});

/*-------------------------------------memory-end------------------------------------*/


/*-------------------------------------storage-start------------------------------------*/
// 256GB SSD storage
document.getElementById('256gb-storage').addEventListener('click', function () {
    const result = shStorage(0);
    //total
    const total = document.getElementById('total');
    total.innerText = totalPriceNumber;
});

// 512gb SSD storage
document.getElementById('512gb-storage').addEventListener('click', function () {
    const result = shStorage(100);
    //total
    const total = document.getElementById('total');
    total.innerText = totalPriceNumber;
});


// 1TB SSD storage
document.getElementById('1TB-storage').addEventListener('click', function () {
    const result = shStorage(180);
    //total
    const total = document.getElementById('total');
    total.innerText = totalPriceNumber;
});

/*-------------------------------------storage-end------------------------------------*/


/*-------------------------------------delivery-start---------------------------------*/
// Choose your deluvery option $0
document.getElementById('aug-25-delivery').addEventListener('click', function () {
    const result = shDelivery(0);
    //total
    const total = document.getElementById('total');
    total.innerText = totalPriceNumber;
});

// Choose your deluvery option $20
document.getElementById('aug-21-delivery').addEventListener('click', function () {
    const result = shDelivery(20);
    //total
    const total = document.getElementById('total');
    total.innerText = totalPriceNumber;
});

/*-------------------------------------delivery-end---------------------------------*/


/*-------------------------------------pomo-start---------------------------------*/
// pomo code
document.getElementById('apply-btn').addEventListener('click', function () {
    const applyInput = document.getElementById('apply-input');
    const applyPomo = applyInput.value;
    const pomo = 'stevekaku';

    const totalPrice = document.getElementById('total-price');
    const totalPriceNumber = parseFloat(totalPrice.innerText);
    const total = document.getElementById('total');
    total.innerText = totalPriceNumber;

    if (applyPomo == pomo) {
        total.innerText = totalPriceNumber - ((totalPriceNumber * 20) / 100);
    }
    else {
        total.innerText = totalPriceNumber;
    }

})

/*-------------------------------------pomo-end---------------------------------*/



/*--------------------------------------end-js---------------------------------------*/