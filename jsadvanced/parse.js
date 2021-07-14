import { jsadvanced } from "./jsadvanced.js"
import { Component, createElement, Sign_workspace } from "../framework.js"
import { Paper } from "../paper.js"

class Sign_advanced_workspace extends Component {// 1 for underline 2 for textarea 3 for code
    constructor() {
        super();
        this.attributes = new Object(null) //submit is needed 
        this.root = document.createElement("div")
        this.keydownEvents = []
        this.init_text = ""
    }

    render() {
        this.setAllAttributes()
        this.root.style.width = "1500px"
        this.root.style.border = "1px solid black"
        this.root.style.marginTop = "10px"

        this.init_text = this.root.innerText.toString()
        this.root.contentEditable = true
        let events = this.keydownEvents
        let mouseup = event => {
            if (event.button === 0 && window.getSelection().toString()) {

                let pressUp = event => {
                        if(events)this.root.removeEventListener("keydown", events.pop())
                        if(events) this.root.removeEventListener("keyup", events.pop())
                }
                let keyDown = event => {
                    let selection = window.getSelection()
                    if ((event.key === "(" || event.key === "（") && event.shiftKey) {
                        console.log("trigger")

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
                    } 
                    else if(event.key === "1" && event.altKey){
                        console.log("alt trigger")

                        let string = selection.toString()
                        string = "#qs1:( " + string + " )#qs"
                        let sp = document.createElement("span")
                        sp.style.color = "red"
                        sp.appendChild((document.createTextNode(string)))

                        console.log(string)
                        let range = selection.getRangeAt(0)
                        console.log("the ranges are ", range.toString(), range)
                        range.deleteContents()
                        range.insertNode(sp)
                    }
                    else if(event.key === "2" && event.altKey){
                        console.log("alt trigger")

                        let string = selection.toString()
                        string = "#qs2:( " + string + " )#qs"
                        let sp = document.createElement("span")
                        sp.style.color = "red"
                        sp.appendChild((document.createTextNode(string)))

                        console.log(string)
                        let range = selection.getRangeAt(0)
                        console.log("the ranges are ", range.toString(), range)
                        range.deleteContents()
                        range.insertNode(sp)
                    }
                    else if(event.key === "3" && event.altKey){
                        console.log("alt trigger")

                        let string = selection.toString()
                        string = "#qs3:( " + string + " )#qs"
                        let sp = document.createElement("span")
                        sp.style.color = "red"
                        sp.appendChild((document.createTextNode(string)))

                        console.log(string)
                        let range = selection.getRangeAt(0)
                        console.log("the ranges are ", range.toString(), range)
                        range.deleteContents()
                        range.insertNode(sp)
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

        let on_focuse = () => {
            this.attributes.__submit.mountTo(this.root)
            let str = this.root.innerText
            this.attributes.__submit.textarea.innerHTML = ''
            this.attributes.__submit.textarea.appendChild(document.createTextNode("q. " + str.toString()))
            
        }
        this.root.onfocus = on_focuse
        return this.root
    }
}

class Block extends Component {
    constructor() {
        super();
        this.attributes = new Object(null) // block_type attribute is necessary
        this.root = document.createElement("div")
        this.submit = <Submit addr="http://localhost:" port = {8109} target = {target_name}></Submit>
    }

    render() {
        this.setAllAttributes()
        this.root.classList.add("block")

        let count = String(this.attributes.count[0])
        for (let i = 1; i < this.attributes.count.length; i++) {
            count = count + "." + String(this.attributes.count[i])
        }
        if(this.attributes.obj.type === "chapter"){
            this.header = document.createElement("h1")
            
            this.header.appendChild(document.createTextNode("Chapter " + count + "  " + this.attributes.obj.title))
            this.root.appendChild(this.header)
        }
        else if(this.attributes.obj.type === "section"){
            this.header = document.createElement("h3")
            this.header.appendChild(document.createTextNode(count + "  " + this.attributes.obj.title))
            this.root.appendChild(this.header)
        }
        this.header.tabIndex = 0 // 不然不能focuse

        let on_focuse = () => {
            console.log("onfocuse")
            this.attributes.__submit.mountTo(this.header)
            let str = this.getAllTexts()
            this.attributes.__submit.textarea.innerHTML = ''
            this.attributes.__submit.textarea.appendChild(document.createTextNode("q. " + str.toString()))
            
        }
        this.header.onfocus = on_focuse
        return this.root
    }

    getAllTexts() {
        let lines = this.root.getElementsByClassName(this.root.id)
        let res = ''
        for(let line of lines){
            res += line.textContent.toString()
        }
        return res
        
    }
}

class Block_Canvase extends Component{// object is necessary
    constructor() {
        super();
        this.root = document.createElement("div")
        this.submit = <Submit addr="http://localhost:" port = {8109} target = {target_name}></Submit>
        this.blocks = []
    }

    render(){
        

    }

    add_block(block){
        block.mountTo(this.root)
        this.blocks.push(block)
    }

    collect_all(){
        let res = []
        for(let blcok of this.blocks){
            curr = blcok.getAllTexts()
            res.push(curr)
        }
    }

    generate_section(curr_section, section_count) {
        if(!arguments[1]) section_count = [curr_section.count]
        // let b = <Section_Block obj={curr_section} class={"block"} id={curr_section.title} count={section_count} ></Section_Block>
        let b = <Block obj={curr_section} class={"block"} id = {curr_section.title} count={section_count} __submit = {submit} ></Block>
        
        this.add_block(b)
        for (let i of curr_section.content){
            for (let ii of i) {
                let line = <Sign_advanced_workspace __submit = {submit} class = {curr_section.title}>{ii}</Sign_advanced_workspace>
                line.mountTo(b.root)
            }
        }
    }

    generate_chapter() {
        let section_count = [this.attributes.obj.count]
    
        let travse = function (section, section_count) {
            if(!section) return 
            generate_section(section, section_count)
    
            for(let i = 0; i < section.children.length; i++){
                section_count.push(i+1)
                travse(section.children[i], section_count)
                section_count.pop()
            }
        }
        travse(curr, section_count)
    }
}


let curr_chapter = jsadvanced[0]

function generate_section(curr_section, canvase, section_count) {
    if(!arguments[1]) canvase = document.body // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!默认值!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    if(!arguments[2]) section_count = [curr_section.count]
    // let b = <Section_Block obj={curr_section} class={"block"} id={curr_section.title} count={section_count} ></Section_Block>
    let b = <Block obj={curr_section} class={"block"} id = {curr_section.title} count={section_count} __submit = {submit} ></Block>
    
    b.mountTo(canvase)
    for (let i of curr_section.content){
        for (let ii of i) {
            let line = <Sign_advanced_workspace __submit = {submit} class = {curr_section.title}>{ii}</Sign_advanced_workspace>
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

    let travse = function (section, canvase, section_count) {
        if(!section) return 
        generate_section(section, canvase, section_count)

        for(let i = 0; i < section.children.length; i++){
            section_count.push(i+1)
            travse(section.children[i], canvase, section_count)
            section_count.pop()
        }
    }
    travse(curr, canvase, section_count)
}

class Submit extends Component{
    constructor(){
        super()
        this.attributes = new Object(null) // addr; port; method; count; target
        // this.iframe = document.createElement("iframe")
        this.root = document.createElement("form")
        this.root.method = "Post" // !!!!!!!!!!! post 传送比较好一点。textarea 中的东西会过去。
        this.root.enctype = "text/plain" // !!!!!!!!!!!!!!!!!!!!!!!!!!!
        this.button = document.createElement("button")
        this.button.style.height = "20px"
        this.button.style.width = "80px"
        this.button.appendChild(document.createTextNode("submit"))
        this.textarea = document.createElement("textarea")
        this.textarea.name = "submit_text"
        // this.textarea.style.display = "none"
        this.root.appendChild(this.textarea)
        
    }

    render(){
        this.root.action = this.attributes.addr + String(this.attributes.port)
        let submit_button = this.button
        if(this.attributes.method) this.root = this.attributes.method
        let submit_name
        if(this.attributes.target) submit_name = this.attributes.target
        else submit_name = "submitForm0"


        // this.iframe.name = submit_name
        this.root.target = this.attributes.target
        
        let butt_onclick = () => {
            console.log(this.root)
            console.log(this.textarea.textContent.toString())
            this.root.submit()
            // this.textarea.innerHTML = ''
            setTimeout(() => {
                this.textarea.innerHTML = ''
            }, 20);
        }

        submit_button.onclick = butt_onclick
        this.root.appendChild(submit_button)

        // this.iframe.html.body.appendChild(this.root)

        return this.root
    }
}

class Iframe_control_button extends Component{// iframe_target is necessary; onclick action is important.
    constructor(){
        super();
        this.root = document.createElement("button")
        this.root.classList.add("iframe_button")
    }

    render(){
        if(this.attributes.onclick_action){
            this.root.onclick = this.attributes.onclick_action
        }
    }
}



class Iframe_dispaly_handler {
    constructor() {
        this.iframe = document.createElement("iframe")
        this.butt_box = document.createElement("div")
        
    }
}


let target_name =  "iframe_target"
console.log(jsadvanced)
let submit = <Submit addr="http://localhost:" port = {8109} target = {target_name}></Submit>
// submit.mountTo(document.body)
let d = document.createElement("div")
document.body.appendChild(d)
generate_chapter(jsadvanced[11], d)



let iframe_target = document.createElement("iframe")


iframe_target.classList.add("submit_target")

iframe_target.name = target_name
iframe_target.tabIndex = 0
iframe_target.onfocus = () => {
    iframe_target.style.height = ""
    iframe_target.style.width = ""
    console.log("focuse")
}
iframe_target.blur = () => {
    iframe_target.width = ""
    iframe_target.height = ""
}

let iframe_zoomout_butt = document.createElement("button")
iframe_zoomout_butt.classList.add("iframe_button")
iframe_zoomout_butt.appendChild(document.createTextNode("iframe"))
document.body.appendChild(iframe_zoomout_butt)
let on_click_count = 0
iframe_zoomout_butt.onclick = () => {
    if(on_click_count === 0){
    iframe_target.style.height = "1000px"
    iframe_target.style.width = "1500px"
    on_click_count = 1
    }else{
    iframe_target.style.height = ""
    iframe_target.style.width = ""
    on_click_count = 0
    }
    
}



document.body.appendChild(iframe_target)



let the_form = document.createElement("form")
the_form.target = target_name

document.body.appendChild(the_form)

let clear_butt = document.createElement("button")
clear_butt.style.width = "100px"
clear_butt.style.height = "50px"
clear_butt.appendChild(document.createTextNode("clear"))
let clear_onclick = () => {
    document.body.appendChild(iframe_target) // !!!!!!!!!!!!!!!!!!!!!!!!!!! 这里要注意，执行 target 之后，iframe已经脱离 当前的文档了。！！！！！！！！！
    console.log("window",iframe_target.contentWindow )
    console.log("target", iframe_target.contentDocument )
    console.log(iframe_target)
    if (iframe_target.contentDocument) {
        iframe_target.contentDocument.write("Hello");
    }
    else if (iframe_target.contentWindow) {
        iframe_target.contentWindow.document.body.innerHTML = "Hello";
    }
}
clear_butt.onclick = clear_onclick
document.body.appendChild(clear_butt)


