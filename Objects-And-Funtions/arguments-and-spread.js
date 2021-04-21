/**
 * The parameter we pass to a function
 */

function greetBasic(firstName, lastName, language){

    console.log(firstName);
    console.log(lastName);
    console.log(language);
    console.log('-----------------------------');
}

greetBasic()
greetBasic('Hemant')
greetBasic('Hemant','Kumar')
greetBasic('Hemant','Kumar','Hindi')

//Ways to have default parameter

function greetDefault(firstName, lastName, language = 'English'){

    lastName = lastName || 'Kumar'

    console.log(firstName);
    console.log(lastName);
    console.log(language);
    console.log('-----------------------------');
}

greetDefault()
greetDefault('Hemant')
greetDefault('Hemant','Kumar')
greetDefault('Hemant','Kumar','Hindi')

//Argument

function greetArg(firstName, lastName, language ){

    if(arguments.length === 0){
        console.log('Missing Arguments');
        return;
    }

    console.log(firstName);
    console.log(lastName);
    console.log(language);
    console.log(arguments);
    console.log('arg 0 ' + arguments[0]);
    console.log('arg 1 ' + arguments[1]);
    console.log('arg 2 ' + arguments[2]);
    console.log('-----------------------------');
}
greetArg()
greetArg('Hemant','Kumar','Hindi')


//Spread Operator
// '...others' means take everything passed and make it a new array with name as 'other'

function greetSpred(fName, lName, lang, ...other){
    console.log(fName);
    console.log(lName);
    console.log(lang);
    console.log(other);
}

greetSpred('H','k','Eng','A','Random','Things')