
function makeGreet(language){

    return function(fName,lName){

        if(language === 'en'){
            console.log('Hello ' + fName + ' ' + lName);
        }
        if(language === 'hin'){
            console.log('Namaste ' + fName + ' ' + lName);
        }
    }
}

/**
 * 
 * Since we are calling makeGreet two times, there will be 2 execution contxext of 'makeGreet'
 * One will have language = 'en' and other language = 'hin'
 */

var greetEng = makeGreet('en')
var greetHin = makeGreet('hin')

greetEng('Hemant','Kumar')
greetHin('Hemant','Kumar')