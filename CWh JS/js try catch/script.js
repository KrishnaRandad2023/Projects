let a = prompt("enter the first number :- ")
let b = prompt("enter the second number :- ")
if(isNaN(a) || isNaN(b)){
    throw SyntaxError("this is not allowed ")
}
let a1 = parseInt(a);
let b1= parseInt(b);
console.log("the sum is ",a1+b1)// this will give 1417 if a = 14 , b = 17

// by default the prompt will make a string 

// if a string is passed into parse int it will give NAN

let sum = a1+b1

// console.log(sum*x);//x is not defined yet /// this will hive us the error so we can handle it 

try {
    console.log(sum*x);
} catch (error) {
    console.log("error aagya bhai ");
    
}
