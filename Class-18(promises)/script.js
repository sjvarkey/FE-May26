let promise1 = new Promise(function(resolve, reject){
    setTimeout(function(){
        const isHeads = Math.random() >=0.5;

        if(isHeads){
            resolve("Hurray. We got Heads");
        } else{
            reject("Tails. We lose");
        }
    }, 2000);

})

console.log(promise1)

promise1.then(
        function (output) {
                console.log(output);
        }
);

promise1.catch(
        function (failedOutput) {
                console.log(failedOutput);
        }

);

promise1.finally(
        function(){
            console.log("Promise Settled");
        }

);