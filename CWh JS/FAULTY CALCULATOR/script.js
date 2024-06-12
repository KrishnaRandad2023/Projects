let random = Math.random();
let a = prompt("enter first number");
let c = prompt("enter operation");
let b = prompt("enter Scecond number");

let obj ={
    "+" : "-",
    "*" : "+",
    "-" : "/",
    "/" : "**"
}



if(random>0.1){
    //perform correct calculator
    alert(`the result is :${eval(`${a} ${c} ${b}`)}`);
}
else{
    //perform wrong calculations 
    c=obj[c];
    alert(`the result is :${eval(`${a} ${c} ${b}`)}`);
}