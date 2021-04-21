/**
 * a = 3 ; This is an expression because this return a value. The equal operator return the right side value. Type this in chrome-console
 * Examples of statestments are like if-statements. Because if statements does not return anything.
 * 
 */

greet()


//this is a function statement, as it does not return anything
function greet(){
    console.log('Hi!!!!');
}

// Why this line fails ???? Because at initial phase annonymous = undefined
// annonymous();

//this is a funtion expression
var annonymous = function(){
    console.log('Hi !');
}

annonymous();

//This is also a funtion expression

function log(a){
    a()
}

log(function(){
    console.log('Hi !!!!!!!!');
})