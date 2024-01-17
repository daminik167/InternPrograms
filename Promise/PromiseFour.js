const PromiseFour=new Promise(function(resolve,reject){
    setTimeout(() => {
        let error=true;
        if(!error){
            resolve({username:"Daminik",email:"Daminik@gmail.com"})
        }
        else{
            reject('ERROR: Somthing Went Wrong')
        }
    }, 2000);
})
PromiseFour.then(function(user){  //callback Chaining
    console.log(user);
    return user.username;
}).then((username)=>{
    console.log(username);
}).catch((error)=>{
    console.log(error);
}).finally(()=>{
    console.log("The Promise is either resolved or rejected");
})