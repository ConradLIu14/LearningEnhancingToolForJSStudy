import { jsadvanced } from "./jsadvanced.js"
import { Component, createElement, Sign_workspace } from "../framework.js"
import { Paper } from "../paper.js"

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
            if (event.button === 0 && window.getSelection().toString()) {

                let pressUp = event => {
                    if ((event.key === "(" || event.key === "（") && event.shiftKey) {
                        console.log("trigger")

                        let selection = window.getSelection()
                        let string = selection.toString()
                        string = "#qs:( " + string + " )#qs"
                        let sp = document.createElement("span")
                        sp.style.color = "red"
                        sp.appendChild((document.createTextNode(string)))

                        console.log(string)
                        let range = selection.getRangeAt(0)
                        console.log("the ranges are ", range.toString(), range)
                        range.deleteContents()
                        range.insertNode(sp)

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
                window.getSelection().removeAllRanges()
            }
        })
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
        this.header = document.createElement("h3")
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

function generate_section(curr_section,canvase, section_count) {
    if(!arguments[1]) canvase = document.body // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!默认值!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    if(!arguments[2]) section_count = [curr_section.count]
    let b = <Section_Block obj={curr_section} class={"block"} id={curr_section.title} count={section_count} ></Section_Block>
    
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
    if(!arguments[1]) canvase = document.body // !!!!!!!!!!!!!!!!!默认值!!!!!!!!!!!!!!!!!
    let section = [curr.count]
    let b = <Chapter_Block obj={curr} class={"block"} id={curr.title} count={section_count} ></Chapter_Block>
    b.mountTo(canvase)
    for (let i of curr.content) {
        for (let ii of i) {
            let line = <Sign_advanced_workspace>{ii}</Sign_advanced_workspace>
            line.mountTo(b.root)
        }
    }
    // generate_sections(curr.children, [1])
    // let root = curr.children
    // let section_count = [curr.count]

    let travse = function (section, canvase, section_count) {
        if(!section) return 
        generate_section(section, canvase, section_count)

        // console.log(section.children)

        for(let i = 0; i < section.children.length; i++){
            section_count.push(i+1)
            travse(section.children[i], canvase, section_count)
            section_count.pop()
        }
    }

    for(let i = 0; i < curr.children.length; i++){
        section_count.push(i + 1)
        travse(curr.children[i], canvase, section_count)
        section_count.pop()
    }
}

let d = document.createElement("div")
document.body.appendChild(d)
generate_chapter(jsadvanced[11], d)