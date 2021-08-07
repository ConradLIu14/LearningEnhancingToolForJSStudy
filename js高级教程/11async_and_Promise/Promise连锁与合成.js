//............................ 期约连锁 解决回调地狱问题 ..........................................................................

let now = Date.now()
// ............................................................................................................................
// let p1 = new Promise((resolve, reject) =>{
//     setTimeout(() => {
//         let curr = Date.now() - now
//         console.log("1 minute later", curr)
//         resolve(curr)
//     }, 1000);
// })

// let p2 = p1.then((pre) => {
//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 let curr = Date.now() - now
//                 console.log("pre", pre, "2 minutes later", curr)
//                 resolve(curr)
//             }, 1000);
//         })
// })

// let p3 = p2.then((pre) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             let curr = Date.now() - now
//             console.log("pre", pre, "3 minutes later", curr)
//             reject(curr)
//         }, 1000);
//     })
// })

// let p4 = p3.then(undefined, (pre) => {
//     console.log("reject", pre, "curr", Date.now() - now, )
// })
// ............................................................................................................................

// let p = new Promise((resolve, reject) => {
//     let curr = Date.now()
//     console.log("start: ", curr - now)
//     setTimeout(() => {
//         console.log("1 min later", Date.now() - now)
//         resolve(Date.now() - now)
//     }, 1000);
// })

// p.then((pre) => {
//     return new Promise((resolve, reject) => {
        
//         setTimeout(() => {
//         console.log("pre", pre)
//         console.log("2 mins later", "the interval is 1000 ms", Date.now() - now)
//         resolve(Date.now() - now)
//         }, 1000);
//     })
// }).then((pre) => new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log("pre", pre)
//         console.log("2 mins later", "the interval is 1000 ms", Date.now() - now)
//         resolve(Date.now() - now)
//         }, 1000);
// }))


// ......................................... 期约合成 .........................................................
// Promise.all 与 Promise.race

// let p1 = Promise.all([Promise.resolve(5), Promise.resolve(2), Promise.resolve(3), Promise.resolve(4)])

// setTimeout(() => {
//     console.log("p1", p1)
// }, 0);

// let p2 = Promise.all([Promise.resolve(5), Promise.resolve(2), Promise.resolve(3), Promise.reject(4)])
// setTimeout(() => {
//     console.log("p2", p2)
// }, 0);


// let p3 = Promise.race([Promise.resolve(5), Promise.reject(2)])
// let p4 = Promise.race([Promise.reject(5), Promise.reject(2)])

// setTimeout(() => {
//     console.log(p3, p4)
// }, 0);

// ......................................... 串行期约合成 .........................................................


