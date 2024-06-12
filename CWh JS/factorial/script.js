// let a = prompt("enter the number whose factorial you waqnt to calculate")
// // let a = 5

// for(let i = a-1;i>0;i--){
//     a=a*i;
// }

// alert(a);



// calculating factorial of a number using reduce 


/// reduce fuction takes an array of values and reduces it down to one single value 


const arr =  [];
let a = 6
for(let i = 1;i<a+1;i++){
    arr.push(i);
}

console.log(arr)

function getfact(total,num){
    return total*num;
}

console.log(arr.reduce(getfact,1));