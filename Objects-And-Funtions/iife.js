//function statement

function greet(name){
    console.log('Hello ' + name);
}

greet('Hemant')


// using function expression
var greetFunc = function(name){
    console.log('Hello ' + name);
}

greetFunc('Kumar')

//Using an immediately Invoked Funtion Expression (IIFE)

var greeting = function(name){
    return 'Hello ' + name
}('Hero Kumar');

console.log(greeting);


3; // this is an expression with no errors
'String'; // this is an expression with no errors

/*
This will give error as it . As this is expected to be a statement not an expression. How can we make it as an expression ?? Look below
function(name){
    return 'Hello ' + name
}
*/


(function(name){
    console.log('Hello ' + name);
});

// How to invoke the above funtion ??

var myName = 'IFFE Kumar';

(function(name){
    var greeting = 'Hola'; // Using IIFE does not pollute the golbal execution context
    console.log('Inside IIFE -> ' + name);
}(myName));

// How to access global context inside IIFE ??

(function(global, name){
    var greeting = 'Hola';
    global.greeting = 'Hello'
    console.log('Inside IIFE -> ' + name);
}(window,myName));

console.log(greeting);

/**
 * Suppose you have two js files that you declare in index.html as a script. If any varaiable is defined in one of then, then that variable can be used in other script,
 * because the variable is declare in global context.
 * So using the IIFE in the script you can prevent to polute global scope
 * 
 */