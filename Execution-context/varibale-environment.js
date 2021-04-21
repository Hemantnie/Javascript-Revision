function b(){
    var myVar // Execution context of b()
    console.log('B -> ',myVar) // undefined
    console.log('B Window -> ',this.myVar);
}

function a(){
    var myVar = 2 // Execution context of a()
    console.log('A 1-> ',myVar) //2
    b()
    console.log('A 2-> ',myVar) //2
    console.log('A Window -> ',this.myVar);
}

var myVar = 1  // global context
console.log('Global 1 -> ',myVar) //1
a()
console.log('Global 2 -> ',myVar) //1
console.log('Global Window -> ',this.myVar);

// when a fuction is called it has its own Execution context and once execution ends that execution is poped out of execution stack