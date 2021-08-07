async function asy_fun(){
    return "asy"
}

let asy = asy_fun()
setTimeout(() => {
    console.log(asy)
}, 0);

