const PromiseOne=new Promise(function(resolve,reject){
    //Some Async Tasks
    //DB tasks
    //Networking tasks
    setTimeout(function(){
        console.log("Task Completed");
    },5000)
    resolve()
})
PromiseOne.then(function(){
    console.log("Promise Consumed")
})