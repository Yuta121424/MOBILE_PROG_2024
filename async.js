// ? Async functions are a way to work with asynchronous way. They are built on top promises and are syntatic sugar

//Creating a promise 
const pizzapROMISE = () => {
    return new Promise((resolve, reject) =>{ 
        //resolve and reject are callback functions 
        //what is calback function?
        // a callback function is a function that is passed as an argument to another function, to be "called back" at a letter time.
        let order = true;
        if (order){
            setTimeout (() => { //setTimeout is used to simulate a delay 
                resolve (" Afterr 5 seconds, Pizza delivered!");
            },5000);
        }else{

            setTimeout(() => { //setTimeout is used to simulate a delay 
                reject("After 5 seconds, Pizza not delivered!");

        },5000);
        }
    });
};
//callinf g the function with a promise
//use.then() to handle the resolved promise
//use catch() to handle the rejected promise 
pizzaPromise()
.then((result) =>{
    console.log(result);
})
.catch((error) => {
    console.log(error);
});

console.log("Waiting for your pizza...");
//Terminoly 
//Promise:An object that represents the eventual
//Competion (or failure) of an asynchronous operation and its resulting value
//Resolve: A callback function that is used to when the promise is fulfilled 
//Reject: A callback fucntion that is used when the promise is rejected
//.then (): A method that is used to handle the reolved promise
// .catch(): a method that is used to handle the rejecte promise

