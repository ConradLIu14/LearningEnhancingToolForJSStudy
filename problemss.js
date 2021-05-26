import { Component, createElement, Underline, TextBox, Answer, Display_button } from "./framework.js"

const QUESTIONS = Symbol("questions")

export class Problem extends Component {// ques={question_array} ans={answer_array} this two is very important ques is inevitable
    constructor(...Children) {
        super();
        this.attributes = Object.create(null)
        this.attributes.ans = []
        this.attributes.ques = []
        this.questions = []
    }

    render() {
        this.root = document.createElement("div")
        
        if (this.attributes.id) this.root.id = this.attributes.id
        if (this.attributes.class) this.root.className = this.attributes.class
        this.root.style.fontSize = "x-large"
        this.root.style.border = "1px solid blue" // 边框颜色
        this.root.style.width = "1400px"
        this.root.style.margin = "0 auto"

        let problem_index = 0; let curr_count; let a; let u
        this.root.appendChild(document.createTextNode(""))
        let reset_but = document.createElement("reset")
        let dispaly_ans_but = document.createElement("button")
        // let questions = []
        // let qs_count = 0

        reset_but.appendChild(document.createTextNode("Reset"))
        dispaly_ans_but.appendChild(document.createTextNode("Answer"))

        let count = 0;
        for (let que of this.attributes.ques) {
            count += 1
            if (que === "#qs") {
                curr_count = String(problem_index)
                if (problem_index > this.attributes.ans.length) {
                    a = 0
                    alert("wrong question")
                }
                else a = this.attributes.ans[problem_index].ans
                // console.log(a,a.length,a.type)
                if (this.attributes.ans[problem_index].type === "UnderLine") u = <Underline class={this.root.className + " ans_type " + String(problem_index)} ans={a}></Underline>
                else if (this.attributes.ans[problem_index].type === "TextBox") u = <TextBox class={this.root.className + " ans_type " + String(problem_index)} ans={a}></TextBox>
                else u = <Underline class={this.root.className + " ans_type " + String(problem_index)} ans={a}></Underline>;
                this.questions.push(u)
                if (a.type === "TextBox") this.root.appendChild(document.createElement("br"))
                u.mountTo(this.root)
                let s = <Answer class={String(count - 1)} ans={this.attributes.ans[problem_index].ans}></Answer>
                s.mountTo(this.root)
                let butt = <Display_button class={String(count - 1)} parent={this.root}></Display_button>
                butt.mountTo(this.root)

                // 添加 alt 提交的监听事件 下下下下下下下下下下下下下下下下下下下下下下下下下

                // 添加 alt 提交的监听事件 上上上上上上上上上上上上上上上上上上上上上上上上上

                problem_index += 1
            }
            else this.root.appendChild(document.createTextNode(que))
        }

        // let p_index = 0

        // this.root.addEventListener("keyup", function(event){
        //     if (event.key === "Enter" && event.altKey){
        //         console.log(p_index)
        //         p_index += 1

        //     }

        // })
        

        return this.root
    }
    showall() {
        


    }
    mountTo(parent) {
        parent.appendChild(this.render())
    }
}


