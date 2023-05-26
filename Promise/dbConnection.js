// in this we will again see the example for the promise when we go for database connection for this purpose 
// in this we will be connecting to the mysql database 
const mysql = require('mysql')

// const connection = mysql.createConnection({
//     host : 'localhost',
//     user : 'root',
//     password : '',
//     database : 'chatroom'
// });


// // now we have to call the connection function in order to connect with the db 
// connection.connect(function(err){
//     if(err){
//         console.log("There was as error sorry");
//         return;
//     }

//     console.log("Connection is successfull for this purpose");
//     connection.end();
// })

// for the above case we can write a whole new promise to make this function more better 
function connectToDatabase(config){
    // now we will create a new promise here itself for this purpose 
    return new Promise(function(resolve, reject){
        const connection = mysql.createConnection(config);

        connection.connect(function(err){
            if (err)
            {
                // then we have to reject the promise 
                reject(err);

                // say everything went fine 
                return;
            }

            resolve(connection)
        })
    })
}


// and here finally we can use the promise .then and .catch methods to handle it more better 
connectToDatabase({
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'chatroom'
}).then(function(connect){
    console.log("The connection is successfull for this purpose ");
    connect.end();
}).catch(function(err){
    console.log("There is some error , the error is shown below\n");
    console.log(err)
})