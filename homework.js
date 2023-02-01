
console.log('=======Exercise #1=========')
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

function fav_food (person3){
    for (const [key, value] of Object.entries(person3)) {
        console.log(`${key}: ${value}`);
       
    }
};
fav_food(person3);
fav_food(person3.shakes[0])
console.log('=======Exercise #2=========')
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype
class person{
    constructor(name,age){
    this.name= name;
    this.age = age;
    }

    printinfo() {
        return `My name is ${this.name} , my age is ${this.age} !!`
    }
    // age_up(){
    //     counter = 0
    //     if (this.age in this.age)( counter++);
    //     return `${this.name} ${this.age}`
    // }
};
let brett = new person('Brett', 39)

// Use an arrow to create the printInfo method

console.log(brett.printinfo())
// console.log(brett.age_up())

// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 

let add_age = ( function() {
    let counter = 0;
    console.log('Year later')
    return  counter ++

});
add_age(brett)
console.log(brett.printinfo())

// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/
const str = 'wow'

function check(str) {
    if( str.length >= 10){
     console.log('Big word')
    }
    else{
    console.log('Small Number')
    }
};


check(str)