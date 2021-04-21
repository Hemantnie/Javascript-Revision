function b(){
    console.log('B1 value',b1);
    var b1 = 'Hello world!! from B!!'
}
function a(){
    b();
    console.log('A1 value',a1);
    var a1 = 'Hello world!! from A!!'
}

a();