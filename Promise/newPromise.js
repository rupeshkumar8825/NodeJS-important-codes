// defining the function for demonstrating the use of promise 
function divide(a, b)
{
    // here we will be creating a new promise using the promise constructor function which takes two arguments resolve and reject which is nothing but the reference to the two function which are to the then can catch functions 
    return new Promise(function(resolve, reject){
        if (b === 0)
        {
            // here we are rejecting the promise using the reject function and passing the appropriate error that we have got 
            // we have also used the new Error method in order to create a proper error for this kind 
            reject(new Error('You cannot divide by 0 in division operation hence you are getting this particular error for this purpose'))

            // say everything went fine 
            return;
        }

        // otherwise we have to resolve the promise for this purpose 
        resolve(a/b)
    })
}

// now here we have to call the divide and do note that this divide function is returning a promise hence we have to handle the promise using the .then and .catch function as shown below 
divide(10, 0).then(function(result){
    console.log(`Division Success : ${result}`)
}).catch(function(error){
    console.log('there was an error while doing the division operation for this purpose')
    console.log(error)
})

// say everything went fine 