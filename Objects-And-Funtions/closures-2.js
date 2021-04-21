
function buildFunction(){

    var arr = []

    for(var i = 0;i < 3 ;i++){
        
        arr.push(
            function(){
                console.log(i);
            }
        )

    }

    return arr;
}

var fs = buildFunction()

fs[0](); 
fs[1]();
fs[2]();

/**
 * Always remember the execution context is created when we call a function, now when a fucntion is decalred
 * When 'buildFunction' execution is completed then for closure JS Engine will keep 2 things in memory
 * 1 . 'arr' -> ['f()','f()','f()'] // Why this is in memory ? Because 'fs' variable is referncing this.
 * 2 . 'i = 3' // Why this is in memory ? Because each function in 'arr' is referencing to 'i'
 */

//Soultions to above problem : 

//Solution 1
function buildFunction2(){

    var arr = []

    for(var i = 0;i < 3 ;i++){
        
        let j = i
        arr.push(
            function(){
                console.log(j);
            }
        )

    }

    return arr;
}

var fs1 = buildFunction2()

fs1[0](); 
fs1[1]();
fs1[2]();

//Solution 2
/**
 * Why this solution works ?
 * We know that IIFE has its own namesapce. So wrapping the function inside an iffe has allowed us to create a separate environmanet and there we
 * decalred j. Hence each return functions are having their own namesapce with the different vlaues of 'j'.
 * @returns 
 */
function buildFunction3(){

    var arr = []

    for(var i = 0;i < 3 ;i++){
        arr.push(
            (function(j){
                return function(){
                    console.log(j);
                }
            }(i))
        )

    }

    return arr;
}

var fs3 = buildFunction3()

fs3[0](); 
fs3[1]();
fs3[2]();
