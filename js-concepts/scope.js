let a = 10;  //available globally but not attached to window (find inside script scope)
var b=20;   //global scope
{
    var c = 30;  //not bound by block scope 
    let e = 50;   // block scope
    const z = 30;  //block scope
}

function x(){
    var f = 40;  //local
    let m = 60;  //local
    const n = 70;  //local
}
x();

// in global let and const kept 