const numbers = [34,56,67,66];
const half = numbers.map(x => x / 2);
// console.log(half);

const friends = ['tom Hanks', 'tom cruise', 'tom solaiman'];
const firstLatter = friends.map(friend => friend[0]);
// console.log(firstLatter);
const nameLengths = friends.map(friend => friend.length);
// console.log(nameLengths);

const products = [
    {id: 1, name:' laptop', price: 3445},
    {id: 2, name:' charger', price: 1445},
    {id: 3, name:' head phone', price: 345},
    {id: 4, name:' cable', price: 35}
];

const items = products.map(product => product.name);
const prices = products.map(p => p.price);
// console.log(items);
console.log(prices);