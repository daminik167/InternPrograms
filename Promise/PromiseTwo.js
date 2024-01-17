//Promise example Two
new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async Tasks Are completed");
        resolve()
    },5000)
}).then(function(){
    console.log("Promise Resolved");
})