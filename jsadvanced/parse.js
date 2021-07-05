import { jsadvanced } from "./jsadvanced.js"
import { Component, createElement, Sign_workspace } from "../framework.js"
import { Paper } from "../paper.js"
// import { Chunk } from "webpack";

// import {aaa} from "./nodeServer.js"
// import {problems} from "../1js类型"


// console.log(jsadvanced)
// let a = jsadvanced[0]

class Sign_advanced_workspace extends Component {
    constructor() {
        super();
        this.attributes = new Object(null)
        this.root = document.createElement("div")
        this.keydownEvents = []
    }

    render() {
        this.root.style.width = "1500px"
        // this.root.style.height = "2000px"
        this.root.contentEditable = true
        this.root.style.border = "1px solid black"
        this.root.style.marginTop = "10px"
        let events = this.keydownEvents
        let mouseup = event => {
            // console.log("mouseup1")

            if (event.button === 0 && window.getSelection().toString()) {

                let pressUp = event => {
                    // event.preventDefault()
                    if ((event.key === "(" || event.key === "（") && event.shiftKey) {
                        // console.log("keypress2")
                        console.log("trigger")
                        // event.preventDefault()

                        let selection = window.getSelection()
                        let string = selection.toString()
                        string = "#qs:( " + string + " )#qs"
                        let sp = document.createElement("span")
                        sp.style.color = "red"
                        sp.appendChild((document.createTextNode(string)))

                        console.log(string)
                        // selection.deleteFromDocument()
                        let range = selection.getRangeAt(0)
                        console.log("the ranges are ", range.toString(), range)
                        range.deleteContents()
                        range.insertNode(sp)
                        // selection.setSelectionRange



                        this.root.removeEventListener("keydown", events.pop())
                        this.root.removeEventListener("keyup", events.pop())
                        selection.removeAllRanges()
                    } else {
                        this.root.removeEventListener("keydown", events.pop())
                        this.root.removeEventListener("keyup", events.pop())
                        window.getSelection().removeAllRanges()
                    }
                }
                let keyDown = event => {
                    if (event.key === "(" && event.shiftKey) {
                        event.preventDefault()
                    }


                }
                this.root.addEventListener("keyup", pressUp)
                this.root.addEventListener("keydown", keyDown)

                events.push(pressUp)
                events.push(keyDown)

            }


        }
        this.root.addEventListener("mouseup", mouseup)
        this.root.addEventListener("mousedown", event => {
            if (events) {
                this.root.removeEventListener("keyup", events.pop())
                // this.root.removeEventListener("mouseup", mouseup)
                window.getSelection().removeAllRanges()
            }
        })

        // this.root.addEventListener("keydown", event =>{
        //     // if(event.key === "(" && event.shiftKey) show_next_answer(event)
        //     console.log(event.keyCode, event.key, event.shiftKey)

        // })

        return this.root
    }
}

class Block extends Component {
    constructor() {
        super();
        this.attributes = new Object(null)
        this.root = document.createElement("div")
        this.header = document.createElement("h1")
    }

    render() {
        if (this.attributes.name) this.root.setAttribute("name", this.attributes.name)
        if (this.attributes.class) this.root.setAttribute("class", this.attributes.class)
        if (this.attributes.id) this.root.setAttribute("id", this.attributes.id)
        this.root.style.display = "flex"
        this.root.style.flexDirection = "column"
        this.root.style.width = "1500px"
        // this.root.style.height = "100px"
        this.root.style.border = "solid 1px black"
        this.header.appendChild(document.createTextNode(this.attributes.obj.title))
        this.root.appendChild(this.header)

        return this.root
    }
}

class Section_Block extends Component { // 必须要有 object(chapter 格式的) 和 counts（array) 才能用
    constructor() {
        super();
        this.attributes = new Object(null)
        this.root = document.createElement("div")
        this.header = document.createElement("h1")
    }

    render() {
        if (this.attributes.name) this.root.setAttribute("name", this.attributes.name)
        if (this.attributes.class) this.root.setAttribute("class", this.attributes.class)
        if (this.attributes.id) this.root.setAttribute("id", this.attributes.id)
        this.root.style.display = "flex"
        this.root.style.flexDirection = "column"
        this.root.style.width = "1500px"
        // this.root.style.height = "100px"
        this.root.style.border = "solid 1px black"
        let count = String(this.attributes.count[0])
        for (let i = 1; i < this.attributes.count.length; i++) {
            count = count + "." + String(this.attributes.count[i])
        }
        this.header.appendChild(document.createTextNode(count + "  " + this.attributes.obj.title))
        this.root.appendChild(this.header)

        return this.root
    }
}

class Chapter_Block extends Component { // 必须要有 object(chapter 格式的) 和 counts（array) 才能用
    constructor() {
        super();
        this.attributes = new Object(null)
        this.root = document.createElement("div")
        this.header = document.createElement("h1")
    }

    render() {
        if (this.attributes.name) this.root.setAttribute("name", this.attributes.name)
        if (this.attributes.class) this.root.setAttribute("class", this.attributes.class)
        if (this.attributes.id) this.root.setAttribute("id", this.attributes.id)
        this.root.style.display = "flex"
        this.root.style.flexDirection = "column"
        this.root.style.width = "1500px"
        // this.root.style.height = "100px"
        this.root.style.border = "solid 1px black"
        let count = String(this.attributes.count[0])
        for (let i = 1; i < this.attributes.count.length; i++) {
            count = count + "." + String(this.attributes.count[i])
        }
        this.header.appendChild(document.createTextNode("Chapter " + count + "  " + this.attributes.obj.title))
        this.root.appendChild(this.header)

        return this.root
    }
}

console.log(jsadvanced)

let curr_chapter = jsadvanced[0]

// let sign_try = <Sign_advanced_workspace>{String(curr_chapter.content)}</Sign_advanced_workspace>
// sign_try.mountTo(document.body)

// let b = <Block obj = {curr_chapter} class = {"block"} id = {curr_chapter.title} ></Block>

// b.mountTo(document.body)
// for(let i of curr_chapter.content){
//     // console.log(i)
//     for(let ii of i){
//         if(ii !== "/n"){
//             let line = <Sign_advanced_workspace>{ii}</Sign_advanced_workspace>
//             line.mountTo(b.root)
//         }    
//     }
// }

function generate_section(curr_section,canvase, section_count) {
    if(!arguments[1]) canvase = document.body // ！！！！！！！！！！！！！！！！！默认值！！！！！！！！！！！！！！！！
    if(!arguments[2]) section_count = [curr_section.count]
    let b = <Section_Block obj={curr_section} class={"block"} id={curr_section.title} count={section_count} ></Section_Block>
    // canvase ? canvase : document.body
    // section_count ? section_count : [curr_section.count]
    
    console.log(canvase, section_count)
    b.mountTo(canvase)
    for (let i of curr_section.content) {
        for (let ii of i) {
            let line = <Sign_advanced_workspace>{ii}</Sign_advanced_workspace>
            line.mountTo(b.root)
        }
    }
}
function generate_sections(sections,section_count) {
    if(!arguments[1])section_count = [1]
    for(let i = 0; i < sections.length; i++){
        section_count.push(i+1)
        generate_section(sections[i],undefined, section_count)
        section_count.pop()
    }
    
}

function generate_chapter(curr, canvase) {
    let section_count = [curr.count]
    if(!arguments[1]) canvase = document.body // ！！！！！！！！！！！！！！！！！默认值！！！！！！！！！！！！！！！！
    let section = [curr.count]
    let b = <Chapter_Block obj={curr} class={"block"} id={curr.title} count={section_count} ></Chapter_Block>
    b.mountTo(canvase)
    for (let i of curr.content) {
        for (let ii of i) {
            let line = <Sign_advanced_workspace>{ii}</Sign_advanced_workspace>
            line.mountTo(b.root)
        }
    }
    generate_sections(curr.children, [1])
    let root = curr.children
    let section_count = [curr.count]


    let travse = function (curr_section,canvase, section_count) {
        generate_section(curr_section,canvase, section_count)
    }
}

generate_chapter(jsadvanced[0])