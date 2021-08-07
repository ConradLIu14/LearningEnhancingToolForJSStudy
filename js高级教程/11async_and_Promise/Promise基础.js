let p = new Promise(() => {})
console.log(p) // Promise pending // 永远也无法继续

let p1 = Promise.resolve()
let p2 = Promise.reject(2)
console.log(p1) // Promise {undefined}
console.log(p2) // Promise {<rejct> 2}

let p4 = new Promise((resolve, reject) => resolve())
let p5 = new Promise((resolve, reject) => {
    reject()
})


console.log(p4)
console.log(p5)


