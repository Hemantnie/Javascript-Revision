

function a(){
    var myVar = 2;

    function b(){
        console.log(myVar); // 2
        console.log(myVarOuter); // 10
    }

    b();
}

var myVar = 1
var myVarOuter = 10
a()

/*
This concept is called scope chain.
First a global execution context will be created with a global object and this keyword
Then execution context for a will be created, which will has a new varibale called myVar
Then execution context for b will be created. This will check for the myVar value inside its execution context , but its not there. So it will check for the 
Outer execution context. And sicne it has refernce to the execution context for a, so it will take the value of myVar as 2 from the execution context for a.
*/