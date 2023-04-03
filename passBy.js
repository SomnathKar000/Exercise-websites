// Primitive Datatype
let number = 10;
// Pass by value
let number2 = number;
number = 15;

console.log(number);
console.log(number2);

// Reference Datatype 
let obj = { number : 20};
// Pass by Reference
let obj2 = obj;

obj.number = 25;

console.log(obj);
console.log(obj2);