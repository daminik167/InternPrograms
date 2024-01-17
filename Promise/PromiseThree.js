const PromiseThree=new Promise(function(resolve,reject){
    setTimeout(()=>
    {
        console.log("Promise Three");
        resolve({username:"Daminik",email:"daminik167@email.com"})
    },3000)
})
PromiseThree.then((user)=>{
    console.log(user)
})