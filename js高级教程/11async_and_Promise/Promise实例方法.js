let p1 = new Promise(
    (resolve) => {
        resolve("p1")
    }
)

let p2 = p1.then((curr) =>{
    return curr + " p2"
}, undefined)

let p3 = p1.then((curr) =>{
    return Promise.resolve(curr + " p3")
}, undefined)
setTimeout(() => {
    console.log(p1, p2, p3)
}, 0);

let p4 = Promise.reject(5)
let p5 = p4.then(undefined, (curr) =>{
    return curr + 10
})

setTimeout(() => {
    console.log(p4, p5)
}, 0);

// 如果没有定义 resolve (or reject) 则传递 没有return 则反悔 undefined

let p6 = p1.then()
let p7 = p1.then(() =>{})
setTimeout(() => {
    console.log("p6", p6, "p7", p7)
}, 0);
// 

let p8 = new Promise(() => {})
let p9 = Promise.resolve(p8)

setTimeout(() => {
  console.log(p8 === p9)  
}, 0);

// onfinally

let p10 = Promise.resolve(10)
let p11 = Promise.reject(11)

let p12 = p10.finally(() =>{
    console.log("p10 on finally ")
})

let p13 = p11.finally(() => {
    console.log('p11 on finally')
})

let p14 = p10.finally(() => 14)
let p15 = p10.then(() => 15)
setTimeout(() => {
   console.log("p14", p14, p15) 
}, 0);

