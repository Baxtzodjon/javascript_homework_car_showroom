let priceList = [30000, 2000, 11000, 33000, 2000, 100000, 57000, 14000, 18000, 8000];
let from = parseInt(prompt('цена от:'));
let up = parseInt(prompt('цена до:'));

let matchingCars = priceList.filter(price => price >= from && price <= up);

console.log(`Соответсвующие цены: ${matchingCars.join(', ')}`);