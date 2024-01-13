let a=10;
function f(){
    if(true)
    {
        let b=10;
        console.log(b); //print 9 
    }
    console.log(b); //will give error beacause it is defined in if block
}
f();
console.log(a); 

//output
// 10 b is not defined