
// Crating an array
let myheros= ['Spiderman', 'thor']

//creating an Object
let heroCatgr= {
    catgr1: "hammerpower",
    catgr2: "slingpower"
}

// creating a string for demonstration
let hero = ""

// craeting a function

const prak  = function() {
    console.log("Function is wokring");

}

Object.prototype.prakash= function() {
    console.log("New property is added to object which can be added to string, array and object");
}



// console.log(prak.prakash());



// Now injecting property to array and cehcking either it is injected to object or not
Array.prototype.aks = function(){
    console.log("Array property has been added");
}
console.log(myheros.aks());
