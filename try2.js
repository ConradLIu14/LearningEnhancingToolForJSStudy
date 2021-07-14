var json = require("./try.json")
console.log(json)
console.log("a" + "b")
console.log("a" + "b" == "ab")

let arr = [2, 7, 11, 15]
arr.sort()
console.log(arr)

let i = 0
let array2 = arr.map(c => [c,i++], arr)
console.log(array2)
array2.sort(function(a, b){b[0] - a[0]})
console.log(array2)

{
    let str = "abcde"
    for(let s of str){
        console.log(s)
    }

    for(let i = 0; i < str.length; i++){
        console.log(str[i])
    }
}

{
    let a = [1, 2, 3]
    let b = [4, 5, 6]

    a.push(...b)
    console.log(a)

}

{
    var relativeSortArray = function(arr1, arr2) {
        let map_arr2 = new Map() 
        for(let i of arr2){
            map_arr2.set(i, 0)
        }

        let remain = []
        for(let i = arr1.length - 1; i >= 0; i--){
            if(map_arr2.has(arr1[i])){
                let new_set = map_arr2.get(arr1[i]) + 1
                map_arr2.set(arr1[i], new_set)
            }else{
                remain.push(arr1[i])
            }
        }

        let res = new Array()
        for(let i of arr2){
            let curr = new Array(map_arr2.get(i))
            curr.fill(i)
            res.push(...curr)
        }
    
        for(let i = 0; i < remain.length; i++){
            for(let ii = 1; ii < remain.length - i; ii++){
                if(remain[ii] < remain[ii - 1]){
                    temp = remain[ii]
                    remain[ii] = remain[ii - 1]
                    remain[ii - 1] = temp
                }
            }
        }
        res.push(...remain)
        return res
    };

    console.log(relativeSortArray([2,3,1,3,2,4,6,7,9,2,19], [2,1,4,3,9,6]))
}