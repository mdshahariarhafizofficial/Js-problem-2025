let age = 20;
// console.log(age);

// Normal Function
function sum(a, b){
    return a+b;
}
const result = sum(5, 2);
// console.log(result);

// arrow function
const mul = (n1, n2) => n1*n2;
// console.log(mul(5, 2));

// Template String
const v1 = 50;
const val = "Value: ";
console.log(`${val}${v1}`);

// spread operator
const arr = [1, 2, 3, 4];
const newArr = [...arr,5, 6, 7, 8];
console.log(newArr);
