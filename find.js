const numbers = [25,45,67,54,7,83];
const fives = numbers.find( num => num % 5 === 0);
const fivesALl = numbers.filter(num => num % 5 === 0);
// console.log(fives);
// console.log(fivesALl);

const products = [
    {id: 1, name:' laptop', price: 65000},
    {id: 2, name:' charger', price: 80000},
    {id: 3, name:' head phone', price: 30000},
    {id: 4, name:' cable', price: 20000}
];
const cheap = products.find(product => product.price< 40000);
console.log(cheap);