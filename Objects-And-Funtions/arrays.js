/**
 * 
 * Arrays are collection of anything
 * 
 */

var arr = [
    2,
    false,
    {
        name: 'Hemant',
        address: 'Sipahi Tola'
    },
    function(name){
        var greeting = 'Hi!,'
        console.log(greeting + name);
    },
    "Hello"
]

console.log(arr);

arr[3](arr[2].name)