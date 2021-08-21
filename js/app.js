//16gb memory
document.getElementById('16gb-memory').addEventListener('click', function () {
    const memoryCost16gb = 180;
    const memoryCost = document.getElementById('extra-memory-cost');
    memoryCost.innerText = memoryCost16gb;
    const extraMemoryCost = parseFloat(memoryCost.innerText);

    // storage512
    const storageCost512gb = 100;
    const storageCost = document.getElementById('extra-storage-cost');
    // storageCost.innerText = storageCost512gb;
    const extraStorageCost = parseFloat(storageCost.innerText);

    //total price
    const bestPrice = 1299;
    const totalPrice = document.getElementById('total-price');
    totalPrice.innerText = bestPrice + memoryCost16gb + extraStorageCost;
    const totalPriceNumber = parseFloat(totalPrice.innerText);

    //total
    const total = document.getElementById('total');
    total.innerText = totalPriceNumber;
});



// 8gb memory
document.getElementById('8gb-memory').addEventListener('click', function () {
    const memoryCost16gb = 0;
    const memoryCost = document.getElementById('extra-memory-cost');
    memoryCost.innerText = memoryCost16gb;

    // storage512
    const storageCost512gb = 100;
    const storageCost = document.getElementById('extra-storage-cost');
    const extraStorageCostNumber = parseFloat(storageCost.innerText);

    //total price
    const bestPrice = 1299;
    const totalPrice = document.getElementById('total-price');
    totalPrice.innerText = bestPrice + memoryCost16gb + extraStorageCostNumber;
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

    // memory 16gb
    const memoryCost16gb = 180;
    const memoryCost = document.getElementById('extra-memory-cost');
    const extraMemoryCost = parseFloat(memoryCost.innerText);

    //total price
    const bestPrice = 1299;
    const totalPrice = document.getElementById('total-price');
    totalPrice.innerText = bestPrice + storageCost512gb + extraMemoryCost;
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

    // memory 16gb
    const memoryCost16gb = 180;
    const memoryCost = document.getElementById('extra-memory-cost');
    const extraMemoryCost = parseFloat(memoryCost.innerText);

    //total price
    const bestPrice = 1299;
    const totalPrice = document.getElementById('total-price');
    totalPrice.innerText = bestPrice + storageCost256gb + extraMemoryCost;
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

    // memory 16gb
    const memoryCost16gb = 180;
    const memoryCost = document.getElementById('extra-memory-cost');
    const extraMemoryCost = parseFloat(memoryCost.innerText);

    //total price
    const bestPrice = 1299;
    const totalPrice = document.getElementById('total-price');
    totalPrice.innerText = bestPrice + storageCost1TB + extraMemoryCost;
    const totalPriceNumber = parseFloat(totalPrice.innerText);

    //total
    const total = document.getElementById('total');
    total.innerText = totalPriceNumber;
});


// Choose your deluvery option $20
document.getElementById('aug-21-delivery').addEventListener('click', function () {
    const deliveryCost21aug = 20;
    const deliveryCost = document.getElementById('delivery-charge');
    deliveryCost.innerText = deliveryCost21aug;

    // memory 16gb
    const memoryCost16gb = 180;
    const memoryCost = document.getElementById('extra-memory-cost');
    const extraMemoryCost = parseFloat(memoryCost.innerText);

    // storage 1tb
    const storageCost1TB = 180;
    const storageCost = document.getElementById('extra-storage-cost');
    const extraStorageCostNumber1tb = parseFloat(storageCost.innerText);

    //total price
    const bestPrice = 1299;
    const totalPrice = document.getElementById('total-price');
    totalPrice.innerText = bestPrice + extraStorageCostNumber1tb + extraMemoryCost + deliveryCost21aug;
    const totalPriceNumber = parseFloat(totalPrice.innerText);

    //total
    const total = document.getElementById('total');
    total.innerText = totalPriceNumber;
});


// Choose your deluvery option $0
document.getElementById('aug-25-delivery').addEventListener('click', function () {
    const deliveryCost25aug = 0;
    const deliveryCost = document.getElementById('delivery-charge');
    deliveryCost.innerText = deliveryCost25aug;

    // memory 16gb
    const memoryCost16gb = 180;
    const memoryCost = document.getElementById('extra-memory-cost');
    const extraMemoryCost = parseFloat(memoryCost.innerText);

    // storage 1tb
    const storageCost1TB = 180;
    const storageCost = document.getElementById('extra-storage-cost');
    const extraStorageCostNumber1tb = parseFloat(storageCost.innerText);

    //total price
    const bestPrice = 1299;
    const totalPrice = document.getElementById('total-price');
    totalPrice.innerText = bestPrice + extraStorageCostNumber1tb + extraMemoryCost + deliveryCost25aug;
    const totalPriceNumber = parseFloat(totalPrice.innerText);

    //total
    const total = document.getElementById('total');
    total.innerText = totalPriceNumber;
});