// console.log("hello world")

var colorArray = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6', '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D', '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A',
    '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
    '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC',
    '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
    '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680',
    '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
    '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3',
    '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'];

a=colorArray.length;
console.log(a)
let temp1 =Math.floor(Math.random()*a)
let temp2 =Math.floor(Math.random()*a)
let temp3 =Math.floor(Math.random()*a)
let temp4 =Math.floor(Math.random()*a)
let temp5 =Math.floor(Math.random()*a)

// console.log(colorArray[temp])
// console.log(temp)


let variable1 =document.getElementById("a1")
let variable2 =document.getElementById("a2")
let variable3 =document.getElementById("a3")
let variable4 =document.getElementById("a4")
let variable5 =document.getElementById("a5")

variable1.style.backgroundColor=colorArray[temp1]  
variable2.style.backgroundColor=colorArray[temp2]  
variable3.style.backgroundColor=colorArray[temp3]  
variable4.style.backgroundColor=colorArray[temp4]  
variable5.style.backgroundColor=colorArray[temp5]  




// function getRandomColor(){
//     var colorArray = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6', '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D', '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A',
//     '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
//     '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC',
//     '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
//     '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680',
//     '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
//     '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3',
//     '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'];
//     a=colorArray.length;
//     let temp1 =Math.floor(Math.random()*a)
//     return colorArray[temp1]

// }