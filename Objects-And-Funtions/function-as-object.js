function greet(){
    console.log('Hi Am a first class');
}

greet.language = 'English'

console.log(greet);
console.log(greet.name); // Prints the name of function
console.log(greet.language); //Prints English 

//Since functions are objects we can attach more funtions to it as a property
greet.attachFunction = function foo(){
    console.log("JS LOL !!!");
}


console.log(greet.attachFunction);
greet.attachFunction();
console.log(greet.attachFunction.name);



/**
 * In JS funtions are first class, so we can use functions as an object
 * Functions are objects, we can pass it around
 */

