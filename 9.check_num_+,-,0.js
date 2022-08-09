const prompt = require("prompt-sync")();
let num = prompt("Enter the number:");
if(num>0){
    console.log("number is positive");
}else if(num==0){
    console.log("number is zero");
}else{
    console.log("number is negative");
}