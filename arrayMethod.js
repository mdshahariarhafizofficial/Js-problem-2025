const mobile = [
    {id:1, name: 'Nokia', color: 'black', price:2000},
    {id:2, name: 'iphone', color: 'gold', price:1800},
    {id:3, name: 'Infinix', color: 'black', price:500},
    {id:4, name: 'i-tel', color: 'red', price:1500},
    {id:5, name: 'Samsung', color: 'gold', price:1200},
]
// Map
const mobilePrice = mobile.map( mobile => mobile.price);
// console.log(mobilePrice);

// For Each
mobile.forEach(mobile => mobile.price+500);

// Filter
const findGold = mobile.filter(mobile => mobile.color === 'gold' );
// console.log(findGold);

// find
const find = mobile.find( mobile => mobile.id === 3);
console.log(find);

