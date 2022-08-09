/* const prompt = require("prompt-sync")();
let num = prompt("enter the number:");
let isPrime = true;
if(num>1){
    for(let i=2;i<num;i++){
        if(num % i == 0){
            isPrime=false;
            break;
        }
    }if(isPrime==true){
        console.log("number is prime");
    }else{
        console.log("number is not prime");
    }
} */


// FIND PRIME B/W TWO NUMBER
let num1 = 15;
let num2 = 85;
for(let i=num1;i<num2;i++){
    if(i>1){
        let isPrime=true;
        for(let j=2;j<i;j++){
            if(i%j == 0){
                isPrime=false;
                break;
            }
        }if(isPrime==true){
            console.log(i)
        }
    }
}