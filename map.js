const numbers = [2, 4, 5, 6];

 
function getDoubled (numbers){
const output =[ ];
for (const number of numbers){
    const doubled = doubleIt(number);
    output.push(doubled); 
    }
    return output;
}

function doubleItOld(num){
    return num * 2;
}

const doubleIt = num => num * 2;

const makeDouble = numbers.map(doubleIt);
// using map and arrow function together
const makeDoubleDirect  = numbers.map(num => num * 2); 
const makeDouble2 = numbers.map(x => x * 2);
const fiveTimes = [1,2,3,4,5].map(x => x * 5);
console.log(fiveTimes);

const result = getDoubled (numbers);
// console.log(result);
// console.log(makeDouble);
// console.log(makeDoubleDirect);

/*
purpose:
1. get an array
2. for every elements of the array do something 
3. store the result in an array 
4.return the result array  
*/