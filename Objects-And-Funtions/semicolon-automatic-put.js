/**
 * in JS we don't have to put semicolon after end of line, JS engine does that for us
 * 
 */

function getPerson(){

    return
    {
        name: 'Hemant'
    }
}

console.log(getPerson());

/**
 * In line number 8 after return there is a carriage return. When JS engine sees a carriage return after return, it inserts a semicolon there.
 */