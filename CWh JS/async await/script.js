// function getData() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(455)
//         }, 3500)
//     })
// }
// console.log("loading module");


// console.log("do something else");


// console.log("load data");
// let data = getData()

// data.then((v)=>{
//     console.log(data)
//     console.log("process data");

//     console.log("task 2");
// })

// instead of above approach we can use async and await



// asynch functions work in background 

// async function getData() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(455)
//         }, 3500)
//     })
// }


async function getData() {
    let x= await fetch('https://jsonplaceholder.typicode.com/todos/1')//fetch returns a promise 
    // let data = await x.json() //we can also parse in text or string
    let text  =  await x.text()
    console.log(text)
}
async function main(){

    console.log("loading module");
    console.log("do something else");
    
    console.log("load data");
    
    let data = await getData()
    console.log(data)
    
    console.log("process data");
    
    console.log("task 2");
}

main()

// now as i have converted function into async so it will run in background and the thread will be to next line  now if i dont want that to happen and wait for the function there itself and want the thread to finish the function and wait for it ... then i will use --------await ....in order to do that we have to wrap it in a function 

//note that await can only be used inside async function 



// resolve  = promise has been settled successfully 
// reject means promise has not been settled successfully 