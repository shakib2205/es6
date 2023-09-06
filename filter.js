const numbers = [23,45,67,54,7,83];
const bigNums = numbers.filter(number => number > 20);
const tiny = numbers.filter(number => number <10)
const even =numbers.filter(num => num % 2 === 0);
// console.log(tiny);
// console.log(bigNums);
// console.log(even); 

const products = [
    {id: 1, name:' laptop', price: 3445},
    {id: 2, name:' charger', price: 1445},
    {id: 3, name:' head phone', price: 345},
    {id: 4, name:' cable', price: 35}
];
const expensive = products.filter(num => num.price > 400);
console.log(expensive);