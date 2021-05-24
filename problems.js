import { Component, createElement, Underline, TextBox, Answer, Display_button } from "./framework.js"
export class Problem extends Component {
    constructor(...Children){
        super();
        this.attributes = Object.create(null)
    }
    // setAttribute(name,value){// 这里重写了一下
    //     this.attributes[name] = value;
    // }

    render(){
        this.root = document.createElement("div")
        this.root.id = this.attributes.id
        this.root.className = this.attributes.class
        this.root.style.fontSize = "x-large"
        this.root.style.border = "1px solid blue" // 边框颜色
        this.root.style.width = "1400px"
        this.root.style.margin = "0 auto" 
        
        let problem_index = 0; let curr_count; let a; let u
        this.root.appendChild(document.createTextNode(""))
        let reset_but = document.createElement("button")
        let dispaly_ans_but = document.createElement("button")
        // let questions = []
        // let qs_count = 0

        reset_but.appendChild(document.createTextNode("Reset"))
        dispaly_ans_but.appendChild(document.createTextNode("Answer"))
        
        let count = 0;
        for(let que of this.attributes.ques){
            count += 1
            if(que === "#qs") {
                curr_count = String(problem_index)
                if(problem_index > this.attributes.ans.length) {
                    a = 0
                    alert("wrong question")
                }
                else a = this.attributes.ans[problem_index].ans
                // console.log(a,a.length,a.type)
                if(this.attributes.ans[problem_index].type === "UnderLine") u = <Underline class = {problem_index} ans = {a}></Underline>
                else if(this.attributes.ans[problem_index].type === "TextBox") u = <TextBox class = {problem_index} ans = {a}></TextBox>
                else u = <Underline class = {problem_index} ans = {a}></Underline>;
                if(a.type === "TextBox") this.root.appendChild(document.createElement("br"))
                u.mountTo(this.root)
                // u.addListener
                // 这里下面最好写一个 新的标签叫answer 下下下下下下下下下下下下下下下下下下下下下下下下下
                let s = document.createElement("span")

                s.className = problem_index
                // s.className = count - 1

                s.appendChild(document.createTextNode(this.attributes.ans[problem_index].ans))
                s.style.display = "inline" 
                s.style.backgroundColor = "black"

                dispaly_ans_but = document.createElement("button")
                dispaly_ans_but.className = curr_count
                dispaly_ans_but.appendChild(document.createTextNode("button"))
                this.root.appendChild(s)

                // 按钮...........

                dispaly_ans_but.onclick =function(){
                    let parent_node = this.parentNode
                    let spans = parent_node.getElementsByTagName("span")
                    for (let span of spans){
                        console.log(span, span.className, this.className)
                        if(span.className === this.className){
                            if (span.style.backgroundColor === "pink") span.style.backgroundColor = "black"
                            else if (span.style.backgroundColor === "black") span.style.backgroundColor = "pink"
                        }
                        // if (span.style.backgroundColor === "pink") span.style.backgroundColor = "black"
                    }
                }

                this.root.appendChild(dispaly_ans_but)
                // 这里上面最好写一个 新的标签叫answer 上上上上上上上上上上上上上上上上上上上上上上上上上上上上

                // 添加 alt 提交的监听事件 下下下下下下下下下下下下下下下下下下下下下下下下下




                // 添加 alt 提交的监听事件 上上上上上上上上上上上上上上上上上上上上上上上上上

                problem_index += 1
            }
            else this.root.appendChild(document.createTextNode(que))
        }
        if(this.attributes.id) this.root.id = this.attributes.id
        if(this.attributes.class) this.root.className = this.attributes.class

        
        return this.root
    }

    showall(){
        let spans = this.root.getElementsByTagName("span")
        for(let s of spans){
            s.style.backgroundColor = "pink"
        }
    }


    // mountTo(parent){
    //     parent.appendChild(this.render())
    // }
}

class Underline extends Component{
    constructor(){
        super();
        this.attributes = Object.create(null)
        this.attributes.ans = " "
    }


    render(){
        length = this.attributes.ans.length
        this.root = document.createElement("input")
        this.root.type = "text"
        this.root.style.height = "35px"
        this.root.style.backgroundColor = ""
        this.root.style.fontSize = "x-large"
        this.root.style.width = String(length * 30) + "px"
        if (length * 20 >= 1000) this.root.style.width = "1000px"
        if(this.attributes.id) this.root.id = this.attributes.id
        if(this.attributes.class) this.root.className = this.attributes.class

        // let s = document.createElement("span")
        // s.appendChild(document.createTextNode(this.attributes.ans))
        // s.style.display = "none" 
        // this.root.appendChild(s)
        return this.root
    }


}

class TextBox extends Component{
    constructor(){
        super();
        this.attributes = Object.create(null)
        this.attributes.ans = " "
    }

    render(){
        this.root = document.createElement("textarea")
        this.root.style.fontSize = "x-large"
        this.root.rows = "5"
        this.root.cols = "70"
        if(this.attributes.id) this.root.id = this.attributes.id
        if(this.attributes.class) this.root.className = this.attributes.class
        let s = document.createElement("span")

        return this.root
    }
}

class answer extends Component{// 必须传一个当前problem 的id进来；以及 answer进来
    constructor(){
        super()
        this.attributes = Object.create(null)
        this.attributes.ans = " "
        this.attributes.id = null
        this.attributes.father = null
    }

    render(){
        this.root = document.createElement("button")

        return this.root
    }
}


// let Problem_Attributes = {
//     ques: [],
//     ans:  [],
// }

// let ans_Attribures =  {
//     ans: "XXXX",
//     type:  ["underLine"],
// }