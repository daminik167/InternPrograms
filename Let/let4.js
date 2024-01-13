//we cam declare the variable with the same name in different block using the let keyword
let a=10;
if(true)
{
    let a=9;
    console.log(a); //it will print 9
}
console.log(a); //it will print 10