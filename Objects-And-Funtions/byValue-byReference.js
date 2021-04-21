/**
 * For primitive datatypes JS supports pass by value
 * Eg
 * var a = 2;
 * b = a ; here a new 2 will be created and will be assigned to b. So b is immune to any changes to a
 * 
 * a and b are two different spots in memory
 */

var a = 3
var b = a

a = 1

console.log(a);
console.log(b);

/**
 * For Objects(including funtions) JS supports pass by reference
 */

var c = {greeting : 'Hii!!'}
var d = c

d.greeting = 'No HI !!' // this mutated i.e not immutable

console.log(c);
console.log(d);

function chageGreet(obj){
    obj.greeting = 'Hola!!'
}

chageGreet(d);

console.log(c);
console.log(d);


d = {greet : 'Hello'}

console.log(c);
console.log(d);
