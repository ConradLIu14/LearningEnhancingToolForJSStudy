import { jsadvanced } from "./jsadvanced.js"
import { Component, createElement, Sign_workspace } from "../framework.js"
import { Paper } from "../paper.js"

// handler。。。。。 把control 的部分全部写成handler

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
        let is_added = 0
        let mouseup = event => {
            if (event.button === 0 && window.getSelection().toString()) {

                let pressUp = event => {
                    if (events) this.root.removeEventListener("keydown", events.pop())
                    if (events) this.root.removeEventListener("keyup", events.pop())
                    is_added = 0
                }
                let keyDown = event => {
                    let selection = window.getSelection()
                    if (is_added === 0) {
                        if ((event.key === "(" || event.key === "（") && event.shiftKey) {
                            console.log("trigger")

                            let string = selection.toString()
                            string = "#*qs:( " + string + " )*qs#"
                            let sp = document.createElement("span")
                            sp.style.color = "red"
                            sp.appendChild((document.createTextNode(string)))

                            console.log(string)
                            let range = selection.getRangeAt(0)
                            console.log("the ranges are ", range.toString(), range)
                            range.deleteContents()
                            range.insertNode(sp)
                            is_added = 1
                        }
                        else if (event.key === "1" && event.altKey) {
                            console.log("alt trigger")

                            let string = selection.toString()
                            string = "#*qs1:( " + string + " )*qs#"
                            let sp = document.createElement("span")
                            sp.style.color = "red"
                            sp.appendChild((document.createTextNode(string)))

                            console.log(string)
                            let range = selection.getRangeAt(0)
                            console.log("the ranges are ", range.toString(), range)
                            range.deleteContents()
                            range.insertNode(sp)
                            is_added = 1
                        }
                        else if (event.key === "2" && event.altKey) {
                            console.log("alt trigger")

                            let string = selection.toString()
                            string = "#*qs2:( " + string + " )*qs#"
                            let sp = document.createElement("span")
                            sp.style.color = "red"
                            sp.appendChild((document.createTextNode(string)))

                            console.log(string)
                            let range = selection.getRangeAt(0)
                            console.log("the ranges are ", range.toString(), range)
                            range.deleteContents()
                            range.insertNode(sp)
                            is_added = 1
                        }
                        else if (event.key === "3" && event.altKey){
                            console.log("alt trigger")

                            let string = selection.toString()
                            string = "#*qs3:( " + string + " )*qs#"
                            let sp = document.createElement("span")
                            sp.style.color = "red"
                            sp.appendChild((document.createTextNode(string)))

                            console.log(string)
                            let range = selection.getRangeAt(0)
                            console.log("the ranges are ", range.toString(), range)
                            range.deleteContents()
                            range.insertNode(sp)
                            is_added = 1
                        }
                        if(is_added === 1){
                            let str = this.root.innerText
                            this.attributes.__submit.textarea.innerHTML = ''
                            this.attributes.__submit.textarea.appendChild(document.createTextNode("q. " + '#' + str.toString()))
                        }
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
            this.attributes.__submit.textarea.appendChild(document.createTextNode("q. " + '#' + str.toString()))
            let preview_parent = document.getElementsByClassName("preview_target")[0]
            if(preview_parent.parentNode === document.body){
                document.getElementsByClassName("iframe_button")[0].click()
            }
        }
        this.root.onfocus = on_focuse
        return this.root
    }
}

class Block extends Component {
    constructor() {
        super();
        this.attributes = new Object(null) // block_type attribute is necessary; submit_target is optional
        this.root = document.createElement("div")
        // this.submit = <Submit addr="http://localhost:" port = {8109} target = {target_name}></Submit>
    }

    render() {
        this.setAllAttributes()
        let target_name = "iframe_target"
        let addr = "http://localhost:"
        if (this.attributes.target_name) target_name = this.attributes.target_name
        if (this.attributes.addr) addr = this.attributes.addr
        if (!this.attributes.__submit) this.attributes.__submit = <Submit addr={addr} port={8109} target={target_name}></Submit>

        this.root.classList.add("block")

        let count = String(this.attributes.count[0])
        for (let i = 1; i < this.attributes.count.length; i++) {
            count = count + "." + String(this.attributes.count[i])
        }
        if (this.attributes.obj.type === "chapter") {
            this.header = document.createElement("h1")

            this.header.appendChild(document.createTextNode("Chapter " + count + "  " + this.attributes.obj.title))
            this.root.appendChild(this.header)
        }
        else if (this.attributes.obj.type === "section") {
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
            // let str_content = str.toString()
            let head = this.root.children[0].textContent.toString()


            this.attributes.__submit.textarea.appendChild(document.createTextNode(head + "#" + str.toString()))
            let preview_parent = document.getElementsByClassName("preview_target")[0]
            if(preview_parent.parentNode === document.body){
                document.getElementsByClassName("iframe_button")[0].click()
            }

        }
        this.header.onfocus = on_focuse
        return this.root
    }

    getAllTexts() {
        let lines = this.root.getElementsByClassName(this.root.id)
        let res = ''
        for (let line of lines) {
            res += line.textContent.toString()

        }
        return res
    }
}

export class Submit extends Component {
    constructor() {
        super()
        this.attributes = new Object(null) // addr; port; method; count; target; class must be set block
        // this.iframe = document.createElement("iframe")
        this.root = document.createElement("form")
        this.root.method = "Post" // !!!!!!!!!!! post 传送比较好一点。textarea 中的东西会过去。
        this.root.enctype = "text/plain" // !!!!!!!!!!!!!!!!!!!!!!!!!!!
        this.button = document.createElement("button")
        this.button.style.height = "20px"
        this.button.style.width = "80px"
        this.button.appendChild(document.createTextNode("submit"))

        this.parse_button = document.createElement("button")
        this.parse_button.style.height = "20px"
        this.parse_button.style.width = "80px"
        this.parse_button.appendChild(document.createTextNode("preview"))

        this.textarea = document.createElement("textarea")
        this.textarea.name = "submit_text"
        // this.textarea.style.display = "none"
        this.root.appendChild(this.textarea)
    }

    render() {
        this.root.action = this.attributes.addr + String(this.attributes.port)
        let submit_button = this.button
        if (this.attributes.method) this.root = this.attributes.method
        let submit_name
        if (this.attributes.target) submit_name = this.attributes.target
        else submit_name = "submitForm0"


        // this.iframe.name = submit_name
        this.root.target = this.attributes.target

        let submit_onclick = () => {
            console.log(this.root)
            console.log(this.textarea.textContent.toString())
            let text_submit = this.textarea.textContent.toString()
            let parse = this.parse(text_submit)
            this.textarea.innerHTML = ''
            this.textarea.appendChild(document.createTextNode(JSON.stringify(parse)))

            this.root.submit()
            // this.textarea.innerHTML = ''
            setTimeout(() => {
                this.textarea.innerHTML = ''
            }, 20);
        }

        let parse_onclick = () => {
            let text_content = this.textarea.textContent.toString()
            let parse = this.parse(text_content)
            let paper = <Paper problems={[parse]} class={"parse"}></Paper> 
            // let the_frame = document.getElementsByClassName("submit_target")[0]
            console.log("parse", [parse])
            let preview_parent = document.getElementsByClassName("preview_target")[0]
            preview_parent.focus()
            // paper.mountTo(this.root.parentNode)
            preview_parent.innerHTML = ''
            paper.mountTo(preview_parent)


        }

        submit_button.onclick = submit_onclick
        this.parse_button.onclick = parse_onclick
        this.root.appendChild(submit_button)
        this.root.appendChild(this.parse_button)

        // this.iframe.html.body.appendChild(this.root)

        return this.root
    }

    parse(text_parse) {
        let curr_str = ''
        let res = []
        let splits = []
        let state = state0_readhead
        function state0_readhead (c) {
            if(c === "#") {
                state = state1_readstring 
                res.push({problem_index:curr_str}, {content:[]})
                curr_str = ''
            }
            else curr_str += c
        }
    
    
        function state1_readstring (c) {
            if(c === "#") {
                state = stat2_read_sign
            }
            else curr_str += c
        }
    
        function stat2_read_sign(c){ // ### first # represent read targ; seconde * represent read confirm 
            if(c === "*"){
                state = state3_readtage
                
                splits.push(curr_str)
                res[1].content.push({type: "string", string: curr_str})
                curr_str = '#'
            }
            else {
                state = state1_readstring
                curr_str += "#"
                curr_str += c
            }
        }
    
        function state3_readtage(c) {
            if(c === "("){
                state = state4_readproblem
                splits.push(curr_str)
                if(curr_str === "#qs1:"){
                    res[1].content.push({type: "question", question:{
                        type: "underline",
                        answer:''
                    }})
                }
                // else if(curr_str === "#qs2:")
                curr_str = ''
                
            }
            else{
                curr_str += c
            }
        }
    
        function state4_readproblem(c) {
            if(c === ")"){
                state = state5_readTagEndComfirm
            }
            else{
                curr_str += c
            }
    
        }
    
        function state5_readTagEndComfirm(c){
            if(c === "*"){
                state = state6_readtagend
                res[1].content[res[1].content.length - 1].question.answer = curr_str
                splits.push(curr_str)
                curr_str = "*"
            }
            else{
                curr_str += ")"
                curr_str += c
                state = state4_readproblem
            }
        }
    
        function state6_readtagend(c) {
            // let splits = 
            if(c === "#"){
                splits.push(curr_str)
                curr_str = ''
                state = state1_readstring
            }
            else {
                curr_str += c
            }
        }
    
        for(let c of text_parse){
            state(c)
        }
        splits.push(res)
        res[1].content.push({type: "string", string: curr_str})
        return res    
        // state = 0
    
        // for(let split of splits){ // 这是为了更复杂的情况设计的，暂时用不到
        //     if 
        // }
    }


}

export class Block_Canvase extends Component {// object(obj) is necessary// 
    constructor() {
        super();
        this.root = document.createElement("div")

        this.blocks = []
    }

    render() {

        this.setAllAttributes()
        let target_name = "iframe_target"
        let addr = "http://localhost:"
        if (this.attributes.target_name) target_name = this.attributes.target_name
        if (this.attributes.addr) addr = this.attributes.addr

        if (!this.attributes.__submit) this.attributes.__submit = <Submit addr={addr} port={8109} target={target_name}></Submit>
        let section_count = [this.attributes.obj.count]

        let travse = (section, section_count) => {
            if (!section) return
            this.generate_section(section, section_count)

            for (let i = 0; i < section.children.length; i++) {
                section_count.push(i + 1)
                travse(section.children[i], section_count)
                section_count.pop()
            }

        }
        travse(this.attributes.obj, section_count)

        return this.root
    }

    add_block(block) {
        block.mountTo(this.root)
        this.blocks.push(block)
    }

    collect_all() {
        let res = []
        for (let blcok of this.blocks) {
            curr = blcok.getAllTexts()
            res.push(curr)
        }
    }

    generate_section(curr_section, section_count) {
        if (!arguments[1]) section_count = [this.attributes.obj.count]
        let b = <Block obj={curr_section} class={"block"} id={this.attributes.obj.title} count={section_count} __submit={this.attributes.__submit} ></Block>

        this.add_block(b)
        for (let i of curr_section.content) {
            for (let ii of i) {
                let line = <Sign_advanced_workspace __submit={this.attributes.__submit} class={this.attributes.obj.title}>{ii}</Sign_advanced_workspace>
                line.mountTo(b.root)
            }
        }
    }

    generate_chapter() {
        let section_count = [this.attributes.obj.count]

        let travse = function (section, section_count) {
            if (!section) return
            this.generate_section(section_count)

            for (let i = 0; i < section.children.length; i++) {
                section_count.push(i + 1)
                travse(section.children[i], section.children[i], section_count)
                section_count.pop()
            }
        }
        travse(this.attributes.obj, section_count)
    }

    submit_all() {
        // document.body.appendChild(this.attributes.__submit)
        // let submit = this.attributes.__submit
        // for(let block of this.blocks){
        //     submit.textarea.appendChild()
        // }
        // submit.button.click()
        alert("not implement")
    }
}


let curr_chapter = jsadvanced[0]

// ..................................................................................

// function generate_section(curr_section, canvase, section_count) {
//     if(!arguments[1]) canvase = document.body // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!默认值!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//     if(!arguments[2]) section_count = [curr_section.count]
//     // let b = <Section_Block obj={curr_section} class={"block"} id={curr_section.title} count={section_count} ></Section_Block>
//     let b = <Block obj={curr_section} class={"block"} id = {curr_section.title} count={section_count} __submit = {submit} ></Block>

//     b.mountTo(canvase)
//     for (let i of curr_section.content){
//         for (let ii of i) {
//             let line = <Sign_advanced_workspace __submit = {submit} class = {curr_section.title}>{ii}</Sign_advanced_workspace>
//             line.mountTo(b.root)
//         }
//     }
// }

// function generate_sections(sections,section_count) {
//     if(!arguments[1])section_count = [1]
//     for(let i = 0; i < sections.length; i++){
//         section_count.push(i+1)
//         generate_section(sections[i],undefined, section_count)
//         section_count.pop()
//     }
// }

// function generate_chapter(curr, canvase) {
//     let section_count = [curr.count]

//     let travse = function (section, canvase, section_count) {
//         if(!section) return 
//         generate_section(section, canvase, section_count)

//         for(let i = 0; i < section.children.length; i++){
//             section_count.push(i+1)
//             travse(section.children[i], canvase, section_count)
//             section_count.pop()
//         }
//     }
//     travse(curr, canvase, section_count)
// }

// // function parse(){

// // }



// let target_name =  "iframe_target"
// console.log(jsadvanced)
// let submit = <Submit addr="http://localhost:" port = {8109} target = {target_name}></Submit>
// // submit.mountTo(document.body)
// let d = document.createElement("div")
// document.body.appendChild(d)
// generate_chapter(jsadvanced[11], d)



// let iframe_target = document.createElement("iframe")


// iframe_target.classList.add("submit_target")

// iframe_target.name = target_name
// iframe_target.tabIndex = 0
// iframe_target.onfocus = () => {
//     iframe_target.style.height = ""
//     iframe_target.style.width = ""
//     console.log("focuse")
// }
// iframe_target.blur = () => {
//     iframe_target.width = ""
//     iframe_target.height = ""
// }

// let iframe_zoomout_butt = document.createElement("button")
// iframe_zoomout_butt.classList.add("iframe_button")
// iframe_zoomout_butt.appendChild(document.createTextNode("iframe"))
// document.body.appendChild(iframe_zoomout_butt)
// let on_click_count = 0
// iframe_zoomout_butt.onclick = () => {
//     if(on_click_count === 0){
//     iframe_target.style.height = "1000px"
//     iframe_target.style.width = "1500px"
//     on_click_count = 1
//     }else{
//     iframe_target.style.height = ""
//     iframe_target.style.width = ""
//     on_click_count = 0
//     }

// }



// document.body.appendChild(iframe_target)



// let the_form = document.createElement("form")
// the_form.target = target_name

// document.body.appendChild(the_form)

// let clear_butt = document.createElement("button")
// // clear_butt.tabIndex = "1"
// clear_butt.style.width = "100px"
// clear_butt.style.height = "50px"
// clear_butt.appendChild(document.createTextNode("clear"))
// let clear_onclick = () => {
//     document.body.appendChild(iframe_target) // !!!!!!!!!!!!!!!!!!!!!!!!!!! 这里要注意，执行 target 之后，iframe已经脱离 当前的文档了。！！！！！！！！！
//     console.log("window",iframe_target.contentWindow )
//     console.log("target", iframe_target.contentDocument )
//     console.log(iframe_target)
//     if (iframe_target.contentDocument) {
//         iframe_target.contentDocument.write("Hello");
//     }
//     else if (iframe_target.contentWindow) {
//         iframe_target.contentWindow.document.body.innerHTML = "Hello";
//     }
// }
// clear_butt.onclick = clear_onclick
// document.body.appendChild(clear_butt)


// .................................................................................................................
// class Iframe_control_button extends Component{// iframe_target is necessary; onclick_action is important.
//     constructor(){
//         super();
//         this.root = document.createElement("button")
//         this.root.classList.add("iframe_button")
//     }

//     render(){            
//         console.log(this.attributes.onclick_action)

//         if(this.attributes.onclick_action){
//             this.root.onclick = this.attributes.onclick_action
//         }
//         return this.root
//     }
// }

// let iframe_button_try = <Iframe_control_button onclick_action = {()=>{
//     console.log("click")
// }}>try</Iframe_control_button>
// iframe_button_try.mountTo(document.body)



export class Dispaly_handler {
    constructor() {
        this.iframe = document.createElement("iframe")
        this.div_preview = document.createElement("div")
        this.div_preview.tabIndex = 0

        this.display_box = document.createElement("div")
        this.display_box.classList.add("display_box")
        this.iframe.classList.add("submit_target")// in parse.css
        this.div_preview.classList.add("preview_target")
        

        this.iframe_submit_target = "iframe_target"
        this.div_preview_target = "preview_target"
        this.butt_box = document.createElement("div")
        this.butt_box.classList.add("butt_box")
        this.butts = []
        this.dispaly_state = 0
        this.preview_state = 0

        
    }

    start(curr_canvase, parent, iframe_submit_target, preview_target ) {
        if (!arguments[1]) parent = document.body
        if (!arguments[2]) this.iframe_submit_target = iframe_submit_target
        if (!arguments[3]) this.div_preview_target = preview_target

        this.iframe.name = iframe_submit_target
        let size_toggle = () => {
            console.log(this.dispaly_state)
            if (this.dispaly_state === 0) {
                this.iframe.style.height = "500px"
                // this.iframe.style.width = "1500px"
                // this.iframe.style.zIndex = "10px"
                this.dispaly_state = 1
            }
            else {
                this.iframe.style.height = ""
                // this.iframe.style.width = ""
                // this.iframe.style.zIndex = ""
                this.dispaly_state = 0
            }
        }

        let preview_size_toggle = () => {
            if (this.preview_state === 0) {
                this.div_preview.style.height = "1000px"
                this.div_preview.style.width = "1500px"
                this.div_preview.style.position = "fixed"
                this.div_preview.style.top = "0px"
                this.div_preview.style.right = "0px"
                this.div_preview.style.zIndex = "20px"

                document.body.appendChild(this.div_preview)
                this.preview_state = 1
                this.div_preview.focus()
            }
            else {
                this.div_preview.style.height = ""
                this.div_preview.style.width = ""
                this.div_preview.style.position = ''
                this.div_preview.style.top =''
                this.div_preview.style.right = ""
                this.div_preview.style.zIndex = ''
                this.display_box.appendChild(this.div_preview)
                this.preview_state = 0
            }
        }

        let submit_all = () => {
            curr_canvase.submit_all()

        }

        let preview_onblur = () => {
            
            
            
        }

        let preview_onfocuse = () => {
            if(this.preview_state === 0){
                preview_size_toggle()
            }
        }

        // this.div_preview.onblur = preview_onblur
        this.div_preview.onfocus = preview_onfocuse

        


        parent.appendChild(this.display_box)
        parent.appendChild(this.butt_box)
        // this.display_box.appendChild(this.iframe)
        parent.appendChild(this.iframe)
        this.display_box.appendChild(this.div_preview)

        let display_butt = document.createElement("button")
        display_butt.classList.add("iframe_button")
        display_butt.onclick = size_toggle
        display_butt.appendChild(document.createTextNode("iframe"))

        let preview_butt = document.createElement("button")
        preview_butt.classList.add("iframe_button")
        preview_butt.appendChild(document.createTextNode("preview"))
        preview_butt.onclick = preview_size_toggle

        let submit_all_butt = document.createElement("button")
        submit_all_butt.classList.add("iframe_button")
        submit_all_butt.appendChild(document.createTextNode("submit all"))
        submit_all_butt.onclick = submit_all

        this.add_button(preview_butt)
        this.add_button(display_butt)
        this.add_button(submit_all_butt)
        // this.butt_box.appendChild(display_butt)
        console.log(this.butts)
        for (let butt of this.butts) {
            this.butt_box.appendChild(butt)
        }
    }

    add_button(butt) {
        this.butts.push(butt)
        this.butt_box.appendChild(butt)
    }
}

// let ifream_handler = new Iframe_dispaly_handler() 
// ifream_handler.start()

// ............................................................................