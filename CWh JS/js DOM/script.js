// console.log("hello world")
// document.body
// console.log(document.body.childNodes)
// console.log(document.body.childNodes[0])
// console.log(document.body.childNodes[1])
let Const = document.body.childNodes[1]
// console.log(Const)
// console.log(Const.firstElementChild)
console.log(Const)
Const.firstElementChild.style.backgroundColor="green"
Const.lastElementChild.style.backgroundColor="blue"


/// how to get a parent node
Const.lastElementChild.parentNode
