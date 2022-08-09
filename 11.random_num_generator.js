/* console.log(Math.random());
// or
let num = Math.random();
console.log(num);
 */

// find random no b/w 4 to 15
// formula = Math.random()*(Highest number - Lowest number) + lowest number

/* let num;
num = Math.random()*(15-4)+4;
console.log(num);

const prompt = require("prompt-sync")();
let num1 = prompt("Enter largest number");
let num2 = prompt("Enter lowest number");
let ans = Math.random()*(num1-num2)+num2;
console.log(ans);
 */

// finding integer value not floating number
let a = 43;
let b = 98;
num = Math.random()*(98-43)+43;
num = Math.floor(num);
console.log(num);
