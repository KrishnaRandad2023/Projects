// create a bussiness Name generator  by combining list of adjectives and shop name and another word

// adjectives are 
// crazy amazing fire 

//shop names are 
// engine ,  foods, garments


// another word
// bros , limited , hub



// dont use arrays
console.log("hello")


function adjective(){
    let a = "crazy";
    let b = "amazing";
    let c = "fire";

    let random = Math.floor(Math.random()*3)
    {
        switch(random)
        {
            case 0:
                return a;
                break;
            case 1:
                return b;
                break;
            case 2:
                return c;
                break;
        }
    }
}
function shopname(){
    let a = "engine";
    let b = "foods";
    let c = "garments";

    let random = Math.floor(Math.random()*3)
    {
        switch(random)
        {
            case 0:
                return a;
                break;
            case 1:
                return b;
                break;
            case 2:
                return c;
                break;
        }
    }
}
function anotherword(){
    let a = "bros";
    let b = "limited";
    let c = "hub";

    let random = Math.floor(Math.random()*3)
    {
        switch(random)
        {
            case 0:
                return a;
                break;
            case 1:
                return b;
                break;
            case 2:
                return c;
                break;
        }
    }
}



console.log("the bussiness name is : "+adjective()+""+shopname()+""+anotherword())