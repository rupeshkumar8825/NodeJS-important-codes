// in this we will call the api to get the details and we will ourself will return the promise for this purpose 
var request = require('request')

var userDetails;


// defining the function inside which we will call the get api to get the details of the github user given the proper credentials for this purpose 
function initialize(){
    var options = {
        url : 'https://api.github.com/users/narenaryan',
        headers : {
            'User-Agent' : 'request'
        }
    };

    // here we have to return the promise if the api gets the correct result without any of the error for this purpose 
    return new Promise(function(resolve, reject) {
        // making the get request here for this purpose 
        request.get(options, function(err, resp, body){
            if (err)
            {
                // then we have to reject the promise 
                reject(err)
            }
            else
            {
                resolve(JSON.parse(body))
            }
        })
    })
}


// now we have to implement the main function that will call this initialize function and get the result and print it on the terminal for this purpose 
function main (){
    var initializedPromise = initialize();

    // then we have to handle the promise 
    initializedPromise.then((result) =>{
        console.log("The result is as follows for this purpose \n", result)
    }).catch((err) =>{
        console.log('We have got some error for this case the error in detailed is as shown below\n', err.message)
    })

    // say everything went fine 
    return;
}


// say everything went fine 
main();