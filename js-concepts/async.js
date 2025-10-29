//async is a keyword that is used before a function to create a async function
// 💡 async function always returns a promise, even if I return a simple string from below function, async keyword will wrap it under Promise and then return.

//code
// async function getData(){
//     return "hello world";
// }
// const dataPromise = getData();
// console.log(dataPromise);

// //Extract data from promise
// dataPromise.then(res=>console.log(res));


//=>async function returning a real promise

async function getData(){
    return new Promise((resolve , reject)=>{
        resolve("promise is resolved");
    })
}

const dataPromise = getData();
dataPromise.then(res => console.log(res));