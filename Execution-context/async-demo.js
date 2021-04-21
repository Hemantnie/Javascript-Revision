
function waitForThreeSeconds(){
    var ms = 3000 + new Date().getTime()
    while(new Date() < ms){}
    console.log("finsihed Function !!");
}

function clickEvent(){
    console.log("Funtion clicked");
}

document.addEventListener('click',clickEvent);

waitForThreeSeconds()
console.log("finshed execution !!");