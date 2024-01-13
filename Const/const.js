//The const keyword has all the properties that are the same as the let keyword except the user cannot update it
//Const has Blocked Scope

const a=10;
function f(){
    a=9;
    console.log(a);
}
f();

//it will give an error