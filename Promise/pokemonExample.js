// in this we will make a real time promise using pokeAPI 
// first we have to create a promise for this purpose 
// const XMLHttpRequest = require('x')
var XMLHttpRequest = require('xhr2');
function getPromise(URL){
    let promise = new Promise(function(resolve, reject){
        let req = new XMLHttpRequest();
        req.open("GET", URL)
        req.onload = function(){
            if (req.status == 200)
            {
                // then we have to resolve the promise saying that we have got the value 
                resolve(req.response)
            }
            else
            {
                reject("There was an error\n")
            }
        };

        req.send();
    });

    // say everything went fine 
    return promise;
}


// now we have to make a consumre for this promise which will use the api and the api call will return the promise for this puropse and for learning purpose 
const ALL_POKEMONS_URL = 'https://pokeapi.co/api/v2/pokemon?limit=50';

let promise = getPromise(ALL_POKEMONS_URL);

const consumer = ()=>{
    promise.then((result)=>{
        console.log("The final result is as follows " ,result);

    }).catch((err)=>{
        console.log("We have encountered an error while fetching from the api for this purpose")
        console.log(err)
    })
}

// now we have to call the consumer for this purpose 
consumer();