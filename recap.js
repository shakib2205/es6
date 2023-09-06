//1. var let const 
// breakup with var 

const numbers =[12,232,45,66];
let salary = 450;
salary = 660;

//2. default parameter

function calculateSalary( salary, tax = 0.25, bonus = 0){
    const remaining = salary - salary*tax;
    const total = remaining + bonus;
    return total;
}

//3. template string 

const elementHTMl = `
<div>
    <h3>name: </h3>
    <p>address: ${calculateSalary(10000, 0, 0)}</p>
    <p>salary: ${numbers[2]}</p>
</div>
` 

//4.arrow function 

const doubleIT = x => x * 2;
const calculateSalary2 = (salary, tax, bonus) => salary- salary * tax + bonus;

//5. spread

const ages = [ 12,45,43,55,43];
const newAges = [45,...ages,22];
 
//6. destructuring 

const {x, y,}= {x: 23, y: 12, z: 45, name:'Shakibur Rahman', salary: 34000};

const [ a, b] =[ 23,56,56,45,67 ];