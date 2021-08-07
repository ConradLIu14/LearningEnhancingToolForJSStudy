let now = Date.now()
setTimeout(() => {
    setTimeout(() => {
        setTimeout(() => {
            console.log("3 second later", Date.now() - now)
        }, 1000);
        console.log("2 second later", Date.now() - now)
    }, 1000)
    console.log("1 second later", Date.now() - now)
}, 1000)