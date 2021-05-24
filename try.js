// {
// "use strict";
// x = 3.14; 
// }
// xx = 3.14

{
    let a = [1]
    console.log(a.push(2,3,4))
    console.log(a)
}

{
    function nextInLine(arr, item) {
        // Only change code below this line
        res = arr.shift()
        arr.push(item)
        
        return res;
        // Only change code above this line
        
      
      }
      
      // Setup
      var testArr = [1,2,3,4,5];
      
      // Display code
      console.log("Before: " + JSON.stringify(testArr));
      console.log(nextInLine(testArr, 6));
      console.log("After: " + JSON.stringify(testArr));
}

{
    let a = {"a":"aa", "b": "ba"}
    let b = {a:"ba", b:"bb"}

    console.log(a,b)
    console.log(a["a"], b["a"], a.a, b.a)


}

{
    function countdown(n){
        let curr = n-1
        if(curr > 0){
          let res =  countdown(curr)
          res.unshift(n)
          return res
        }
        else return [1]
      }

    console.log(countdown(10))


}

{
  console.log(" 继承.............................")

  class grandFather{
    constructor(){
      this.grand = "grandfather Tom"
    }
  }
  
  class father extends grandFather{
    constructor(){
      super()
      this.father = "father David"
    }
  }

  class son extends father {
    constructor(a){
      super()
      this.son = " son Sam"
      this.target = a
    }
  }

  let a = new son("xxx")

  console.log(a)
}