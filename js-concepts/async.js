//async is a keyword that is used before a function to create a async function
// 💡 async function always returns a promise, even if I return a simple string from below function, async keyword will wrap it under Promise and then return.



//code
// async function getData(){
//     return "hello world";   //it wrps to promise like => Promise.resolve("hello world")
// }
// const dataPromise = getData();
// console.log(dataPromise);

// //Extract data from promise
// dataPromise.then(res=>console.log(res));


//=>here async function returning a real promise

// async function getData(){
//     return new Promise((resolve , reject)=>{
//         resolve("promise is resolved");
//     })
// }

// const dataPromise = getData();
// dataPromise.then(res => console.log(res));

//we write the above code using normal promise , async function and async await

//normal promise
// const pr1 = new Promise((resolve , reject)=>{
//     resolve("promise resolved");
// })

// function getData(){
//     pr1.then(res => console.log(res));
// }
// getData();  //getdata is a noraml function containg promise


// //using async function always guarentee to return a promise
// const pr2 = new Promise((resolve , reject)=>{
//      resolve("promise resolved within async function");
// });

// async function getData2(){
//     return pr2 ;
// }

// getData2().then(res=>console.log(res));
// // or 
// const dataPromise = getData2();
// dataPromise.then(res=>console.log(res));
// //but never like before 
// //getData2() //WRONG(it always return a promise so don't use async func like this)

// //

// //using async with await
// console.log("async await:")
// const pr = new Promise((resolve,reject)=>{
//     resolve("promise resolve using async await");
// })

// async function getData3(){
//     const val = await pr;  //return "promise resolv using async await"
//     console.log(val);

// }
// getData3();




///////////////////////////////////////////////////////////
///  GOOGLE V8 ENGINEE CSAE ONLY
//Understanding why async-await prints first even though async function was called earlier

// async-microtask-order.js
// ------------------------------------------
// Example: Understanding microtask execution order
// between async/await and Promise.then()
// ------------------------------------------

// const pr2 = new Promise((resolve, reject) => {
//   resolve("promise resolved within async function");
// });

// async function getData2() {
//   // returning a promise directly
//   return pr2;
// }

// // .then callback is registered here
// getData2().then(res => console.log(res));

// console.log("async await:"); // synchronous - runs immediately

// const pr = new Promise((resolve, reject) => {
//   resolve("promise resolve using async await");
// });

// async function getData3() {
//   // await pauses and queues continuation as a microtask
//   const val = await pr;
//   console.log(val);
// }

// getData3();

/*
Expected Output (in Chrome):

async await:
promise resolve using async await
promise resolved within async function

------------------------------------------
💡 Explanation:

1. `getData2().then(...)`
   - Registers a `.then()` callback for pr2.
   - This callback goes into the **microtask queue**.

2. `console.log("async await:")`
   - Runs immediately (synchronous).

3. `getData3()` runs:
   - Encounters `await pr`.
   - Since `pr` is already resolved, the continuation
     (code after await) is queued as another **microtask**.

4. Microtasks run after synchronous code finishes.
   - The `await` continuation (from getData3)
     runs before `.then()` (from getData2) in Chrome’s V8 engine.

  Final Order:
   1. Synchronous logs
   2. Await continuation
   3. Then() callback
------------------------------------------
*/

/* note****** 
--await can only be use inside async function
--always write await kewword infront of a promise
--if await is used inside the async function then  async is not mandatory to return
*/



//------------------------------------------------

//Now showing the difference between handling the promise using async await vs in normal way
 
//to show this use examples like  returning real promise by using setTimeout function call
// const pr = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("promise resolved value");
//     },10000);
// });

// //normal promise
// function getData(){
//     pr.then(res=>console.log(res));
//     //doesnot wait for promise to resolve first
//     console.log("coding practice");
// }

// //using async await
// async function  getByAsync(){
//     const data = await pr ; //await before promise
//     //wait until the promise resolved
//     //next it print the below line
//     console.log("after promise resolved");
// }


// Lets's play with code
//1
// const p1=  new Promise((resolve , reject)=>{
//     setTimeout(()=>{
//         resolve("promise resolved value p1!")
//     } , 5000);
// })

// const p2 = new Promise((resolve , reject)=>{
//     setTimeout(()=>{
//         resolve("promise resolved value p2!")
//     } , 5000);
// })

// async function handlePromise(){
//     const val = await p1;
//     console.log("javascript 1");
//     console.log(val);

//     const val2 = await p2;
//     console.log("javascript 2");
//     console.log(val2);
// }

// handlePromise();



//case-2
// const p1=  new Promise((resolve , reject)=>{
//     setTimeout(()=>{
//         resolve("promise resolved value p1!")
//     } , 10000);
// })

// const p2 = new Promise((resolve , reject)=>{
//     setTimeout(()=>{
//         resolve("promise resolved value p2!")
//     } , 5000);
// })

// async function handlePromise(){
//     const val = await p1;
//     console.log("javascript 1");
//     console.log(val);

//     const val2 = await p2;
//     console.log("javascript 2");
//     console.log(val2);
// }

// handlePromise();

// here even though p2 resolve first still it waits for p1  just because of await
//what the lines write after await in that async function all are gone to  suspend for later execution
//so  await p2 can't execute even though p2 resolved first

//let's try this using .then approach

//  const p1=  new Promise((resolve , reject)=>{
//     setTimeout(()=>{
//         resolve("promise resolved value p1!")
//     } , 10000);
// })

// const p2 = new Promise((resolve , reject)=>{
//     setTimeout(()=>{
//         resolve("promise resolved value p2!")
//     } , 5000);
// })

//  function handlePromise(){
//    p1.then((res)=>console.log(res));
//    console.log("javascript 1!")
//    p2.then((res)=>console.log(res)) ;
//    console.log("javascript 2");  
// }

// handlePromise();


//here as p2 resolve first so it print first and then p1 print 
//in this case the only callback that write inside .then() goes to microtask queue


//so in which way we can print p2 first since it solved first 
//let's understand what happen in both the above case 
//Actulay when javascript find await it blocks the whole async function within which it's written as long as the first introduce await not resolved
//but in .then..() case it blocks only the callback queue write inside  then()
//and js is also able to execute code right after that then();
// before handlePromise function run p1 and p2 promise are called 
//when handlepromise function call and find first callback then js registered it in to the web apis untill the p1 promise not resolved
//go to next line and it's a simple synchronous cofde and js execute it 
//next it find another  callback inside .then() and also registered it in to the web apis for future resolve expecting.
//now there are two callback for p1 and p2 inside web apis.
//since p2 resolve first in 5 sec so the callback for p2 comes first in to microtask queue and after 10 sec p2 callback for p2 comes.
//event loop constantly checking so when the callstack become empty it allow the microtask queue containing p1 callback first to go into call stack and execute first

//that's why it print so...

//in case of await when js capture an await js totally block all lines of that async function(suspend that function as long as promise is not resolved) write  after that await .
//so it blocks the whole function for later execution and it also ignore another await  write inside that async function which is resolved first.
//so to solve this problem we use await inside different async fynction and we find the same output as in .then().
//and this is the big difference between promise using .then() vs await

const p1=  new Promise((resolve , reject)=>{
    setTimeout(()=>{
        resolve("promise resolved value p1!")
    } , 10000);
})

const p2 = new Promise((resolve , reject)=>{
    setTimeout(()=>{
        resolve("promise resolved value p2!")
    } , 5000);
})

async function handlePromise(){
    const val = await p1;  // await only block this function 
    console.log("javascript 1");
    console.log(val);
}
async function handlePromise2(){
    const val2 = await p2;   
    console.log("javascript 2");
    console.log(val2);
}

handlePromise();
handlePromise2();  // order of call doesn't matter

//--------------------------------------------------------


//.then().catch() vs async/await
const pr = new Promise((resolve,reject)=>{
    resolve("promise resolved")
})

// .then().catch() vs async/await
pr.then(res=>{
    console.log("promise resolved");
})
.catch(err=>{
    console.log(err);
})

//async/await

async function getData(){
    try{
       const data = await pr;
       console.log(pr);
    }
    catch(err){
        console.log(err);
    }
}