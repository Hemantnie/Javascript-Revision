var person = 
{
    firstName : 'Hemant',
    lastaName : 'Doe',

    getFullName : function(){
        return this.firstName + ' ' + this.lastaName;
    }

}

var logName = function(lang1, lang2){
    console.log('Logged : ' + this.getFullName());
    console.log('Arguments : ' + lang1 + ' ' + lang2);
    console.log('----------');
}

var logPersonName = logName.bind(person) // Bind creates a new object and return it

logPersonName('en','hind')

logName.call(person, 'en', 'hin') // Call does not create a news object

logName.apply(person,['en','hind']); // apply does not create a news object

(function(lang1, lang2){
    console.log('Logged : ' + this.getFullName());
    console.log('Arguments : ' + lang1 + ' ' + lang2);
    console.log('----------');
}).apply(person,['en','hind'])


//function borrowing

var person2 = {
    firstName : 'John',
    lastaName : 'Wick'
}

console.log(person.getFullName.call(person2));

//function currying
// Currying means creating a copy of function with a preset parameters
function multiply(a,b){
    return a * b
}

var multiplyByTwo = multiply.bind(this,2) // Here passing 2 means we are premanantly setting the first param value i.e 'a' as 2

console.log(multiplyByTwo(10)); // here 10 will be the second parameter
