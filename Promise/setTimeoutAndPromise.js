// in this we will be using the settimeout function and promise together to learn more concepts about the promise 

function wait(ms)
{
    return new Promise(function(resolve, reject){

        if (ms <= 0)
        {
            // then we will have to reject the promise for this purpose 
            reject(new Error("We cannot wait for 0 or negative milliseconds hence you have got the error thanks"))

            // say everything went fine 
            return;
        }

        // here we will perform the main logic for this purpose
        setTimeout(() => {
            resolve();
        }, ms);
    });
}




// this promise we will are waiting for 1 second and then we are resolving the promise for this purpose we will be using the settimeout function for this puropse. 
wait(1000).then(function() {
    console.log("We have waited for 1 second!!")
}).catch(function(error){
    console.log("some error occurred")
    console.log(error.message)
})