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

// memory function
function memory() {
    const memoryCost = document.getElementById('extra-memory-cost');
    const extraMemoryCost = parseFloat(memoryCost.innerText);
    return extraMemoryCost;
}




//16gb memory
document.getElementById('16gb-memory').addEventListener('click', function () {
    const memoryCost16gb = 180;
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

    //total
    const total = document.getElementById('total');
    total.innerText = totalPriceNumber;
});



// 8gb memory
document.getElementById('8gb-memory').addEventListener('click', function () {
    const memoryCost8gb = 0;
    const memoryCost = document.getElementById('extra-memory-cost');
    memoryCost.innerText = memoryCost8gb;

    // storage
    const extraStorageCost = storage();

    // delivery
    const deliveryCharge = delivery();

    //total price
    const bestPrice = 1299;
    const totalPrice = document.getElementById('total-price');
    totalPrice.innerText = bestPrice + memoryCost8gb + extraStorageCost + deliveryCharge;
    const totalPriceNumber = parseFloat(totalPrice.innerText);

    //total
    const total = document.getElementById('total');
    total.innerText = totalPriceNumber;
});


// 512gb SSD storage
document.getElementById('512gb-storage').addEventListener('click', function () {
    const storageCost512gb = 100;
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

    //total
    const total = document.getElementById('total');
    total.innerText = totalPriceNumber;
});


// 256GB SSD storage
document.getElementById('256gb-storage').addEventListener('click', function () {
    const storageCost256gb = 0;
    const storageCost = document.getElementById('extra-storage-cost');
    storageCost.innerText = storageCost256gb;

    // memory
    const extraMemoryCost = memory();

    // delivery
    const deliveryCharge = delivery();

    //total price
    const bestPrice = 1299;
    const totalPrice = document.getElementById('total-price');
    totalPrice.innerText = bestPrice + storageCost256gb + extraMemoryCost + deliveryCharge;
    const totalPriceNumber = parseFloat(totalPrice.innerText);

    //total
    const total = document.getElementById('total');
    total.innerText = totalPriceNumber;
});


// 1TB SSD storage
document.getElementById('1TB-storage').addEventListener('click', function () {
    const storageCost1TB = 180;
    const storageCost = document.getElementById('extra-storage-cost');
    storageCost.innerText = storageCost1TB;

    // memory
    const extraMemoryCost = memory();

    // delivery
    const deliveryCharge = delivery();

    //total price
    const bestPrice = 1299;
    const totalPrice = document.getElementById('total-price');
    totalPrice.innerText = bestPrice + storageCost1TB + extraMemoryCost + deliveryCharge;
    const totalPriceNumber = parseFloat(totalPrice.innerText);

    //total
    const total = document.getElementById('total');
    total.innerText = totalPriceNumber;
});


// Choose your deluvery option $20
document.getElementById('aug-21-delivery').addEventListener('click', function () {
    const deliveryCharge = 20;
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

    //total
    const total = document.getElementById('total');
    total.innerText = totalPriceNumber;
});


// Choose your deluvery option $0
document.getElementById('aug-25-delivery').addEventListener('click', function () {
    const deliveryCharge = 0;
    const deliveryCost = document.getElementById('delivery-charge');
    deliveryCost.innerText = deliveryCharge;

    // memory
    const extraMemoryCost = memory();

    // storage
    const extraStorageCost = storage();

    //total price
    const bestPrice = 1299;
    const totalPrice = document.getElementById('total-price');
    totalPrice.innerText = bestPrice + extraStorageCostNumber1tb + extraMemoryCost + deliveryCharge;
    const totalPriceNumber = parseFloat(totalPrice.innerText);

    //total
    const total = document.getElementById('total');
    total.innerText = totalPriceNumber;
});



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