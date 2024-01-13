// let keyword is a improved version of var in js
//let have Blocked Scope
let a=10;
function f(){
    let b=6;
    console.log(b);
    console.log(a);
}
f();

//output 6 10