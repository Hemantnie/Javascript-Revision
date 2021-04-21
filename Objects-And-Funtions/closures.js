
function greet(whatToSay){

    return function(name){
        console.log(whatToSay + ' ' + name);
    }
}

// greet('Hi')('Hemant')

var sayHi = greet('Hi') // after the execution of this line, the greet funtion execution stack will be poped of from the execution stac stack, then
// How come the reference to 'whatToSay' is still there in the memory ?

sayHi('Hemant')

/**
 * The answer is, JS Engine creates something called closures for us , allowing a funtion to access all of the refernced variables in the functions.
 * All the vaiables are seached in its scope chain, and are referncenced through it.
 * 
 * When the Execution context of greet function is poped, the local variable inside it i.e 'whatToSay' will not be garbage collected as it is refernced
 * by the return funtion.
 */
