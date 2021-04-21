//Global execution context this
console.log(this); // window object


function greet(){
    console.log(this); //window object
    this.newvariable = 'Hello!!' // since this is a global window object(see Comment - 1) this can be aacessed outside this function with this.newvariable Or newvariable
}

var b = function(){
    console.log(this); //window object
}

greet()
console.log(newvariable); // This is the proof for Comment - 1
b()

/** 
 * Comment - 1
 * At this point we have 3 execution context but in all of them 'this' is pointing to the same window object i.e same location in memory where this is stored.
 * 
 */


var c = {
    name: 'This is c Object',
    log: function(){
        this.name = 'Updated !! This is c Object' // Update the name property of the enclosing object
        console.log(this);

        var setName = function(newName){
            this.name = newName  // Comment - 3
        }

        setName('Updated name again !! This is c Object')
        console.log(this);
    }
}

c.log() // This points to the Object 'c'



/**
 * Comment -2
 * when we have a function attached to an object its called method.
 * In method the value of 'this' is the enclosing object, not the global window object.
 */

/**
 * Comment - 3
 * Inside a method when we have another function the 'this' inside it points to the window object from global context
 * The solution to the above problem is to use a local varible to store the refernce of this inside an object
 * var c = {
    name: 'This is c Object',
    log: function(){
        var self = this; // Since objects in JS are passed by reference, so the reference of this will be passed
        self.name = 'Updated !! This is c Object' // Update the name property of the enclosing object
        console.log(self)
        var setName = function(newName){
            self.name = newName  // Since self is not declared in this setName function scope it will look in scope chain of enclosing object.
        }

        setName('Updated name again !! This is c Object')
        console.log(self);
    }
}
 */




// Try This

var outer = {
    name : 'hemant - Outer',
    inner : {
        name : 'hemant Kumar - Inner',
        log : function(){
            console.log('Test',this.name);
            var setName = function(newName){
                this.name = newName
                console.log('Test',this); // This also points to the Global window object
            }
            setName('Hemant Kumar in Caps')
            console.log('Test',this);
        }
    }
}

outer.inner.log()