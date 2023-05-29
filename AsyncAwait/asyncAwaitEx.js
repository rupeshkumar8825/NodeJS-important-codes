// in this we will see the example for the async await how we use them with an proper example

// the async function is same as that of the promise defined function which returns the promise 
// the async await reduces the complexity of handling the promise chaining that we have already discussed somewhere 
// when you add the async keyword before any function definition it always returns promise 
// function 
// similarly the await is nothing but it waits the promise to fullfil and it stores the result whenever the result comes 

// lets take an example for this purpose 
const resolveAfter3Second = ()=>{
    // in this we will be returning a promise after 3 seconds using the set timeout function for this purpose 
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve("The promise has been resolved after 3 seconds for testing purpose")
        }, 3000);
    })
};


// now we  will define the asyn function and we will use the await inside to handle the promise that will be returned by the resolveAfter3Second function for this purpose 
async function exampleAsynFunction(){
    const result = await resolveAfter3Second();
    console.log("The final result for this code is as follows\n", result)
    // do note that the below code will be run after the above line is executed. that means until and unless the above statement is executed the below statement will not be executed for this purpose 
    console.log("Hi i statement after the statement of printing the result ")

    // say everything went fine 
    return;

}

// now we will call this function to test the code 
exampleAsynFunction()