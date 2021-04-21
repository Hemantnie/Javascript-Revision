function b(){
    console.log(myVar); // 1
}

function a(){
    var myVar = 2;
    b();
}

var myVar = 1
a()

/*
This concept is called scope chain.
First a global execution context will be created with a global object and this keyword
Then execution context for a will be created, which will has a new varibale called myVar
Then execution context for b will be created. This will check for the myVar value inside its execution context , but its not there. So it will check for the 
Outer execution context. And sicne it has refernce to the global execution context, so it will take the value of myVar as 1 from the global refernce.
*/
