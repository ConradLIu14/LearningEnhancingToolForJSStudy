import { Component, createElement } from "./framework.js"
import { MousePosititonListener, SpaceListener, codeLineOnclick, MouseLeftOnclick, EnterListener, KeyPressListener } from "./listener.js"


class CodeEditarea extends Component {
    constructor() {
        super()
        this.attributes = Object.create(null)// 必须有 this.attributes.problems 才可以生成，单独生成一个

        this.count = null
        this.linesSet = []
        this.onclickLine = null
        this.root = document.createElement('div')
    }

    render() {
        for (let key in this.attributes) this.root.setAttribute(key, this.attributes[key])
        this.count = 1
        return this.root
    }

    add_line(line, count) {
        this.linesSet.splice(count - 1, 0, line)

        for (let i = count; i < this.linesSet.length; i++) {
            this.linesSet[i].attributes.lineCount += 1
            this.linesSet[i].refresh_count()
        }

        console.log("children", this.root.children)

        line.mountTo(this.root)// 底层设计缺陷，必须先render；所以 先moutto render 一下。 可以写一个inserbefore 的方法 中调用render 可以解决
        if(this.linesSet.length > 1 && count < this.linesSet.length) this.root.insertBefore(line.root, this.linesSet[count].root)

        line.focus()
    }

    remove_line(count) {
        if (this.linesSet.length > 1) {
            this.root.removeChild(this.linesSet[count - 1].root)
            this.linesSet.splice(count - 1, 1)
            this.linesSet[count - 2].focus()
            for (let i = count - 1; i < this.linesSet.length; i++) {
                this.linesSet[i].attributes.lineCount -= 1
                this.linesSet[i].refresh_count()// 需要更新 dispatch
            }

            let counts = []
            for (let l of this.linesSet) {
                counts.push(l.attributes.lineCount)
            }
        }
    }
}
class CodeEditMargin extends Component {
    constructor() {
        super()
        this.attributes = Object.create(null) // 必须有 this.attributes.problems 才可以生成，单独生成一个
        this.root = document.createElement('div')

        this.marginsSet = []
    }

    render() {
        for (let key in this.attributes) this.root.setAttribute(key, this.attributes[key])
        return this.root
    }

    add_line(count) {
        let new_margin
        if (count > 0) {
            new_margin = <CodeEditMarginUnit class="codeEditMarginUnit">{String(count)}</CodeEditMarginUnit>
        }
        else if (count === -1) {
            new_margin = <CodeEditMarginUnit class="codeEditMarginUnit">{String(this.marginsSet.length + 1)}</CodeEditMarginUnit>
        }
        new_margin.mountTo(this.root)
        this.marginsSet.push(new_margin)
    }

    remove_line(count) {
        if (this.marginsSet.length > 1) {
            if (count > 0) {

            }
            else if (count === -1) {
                this.root.removeChild(this.root.lastChild)
            }
            this.marginsSet.pop()
        }
    }
}

export class CodeEditorAreaLine extends Component {

    constructor() {
        super()
        this.attributes = Object.create(null)// 必须有 this.attributes.problems 才可以生成，单独生成一个

        this.currinput = null
        this.codeEditor = null
        this.root = document.createElement('div')
        this.root.contentEditable = true;
        this.root.addEventListener("keydown", event => {
            if (event.keyCode === 13) {
                event.preventDefault();
            }
            else if (event.keyCode === 8) {

            }
        })
        this.root.tabIndex = -1
        new MouseLeftOnclick(this.root, this.onclick)

        this.disaptch = function (count, codeEditor) {
            return function (e) {
                console.log("keycode", e.keyCode, e.key)
                if (e.keyCode === 13) {// enter
                    console.log("disaptch", this)
                    let event = new Event("lineEnter")
                    event["count"] = count
                    codeEditor.root.dispatchEvent(event)
                }
                else if (e.keyCode === 8) {
                    let event = new Event("lineBackspace")
                    event["count"] = count
                    if (this.lastChild === null) { 
                        codeEditor.root.dispatchEvent(event) 
                    }
                }
                else if(e.keyCode === 38 ){
                    if(count === 1) return 
                    else{
                        console.log(this.parentNode.children[count - 2])
                        this.parentNode.children[count - 2].focus()
                    }
                }
                else if(e.keyCode === 40 ){
                    if(count === this.parentNode.children.length) return 
                    else{
                        console.log(this.parentNode.children[count ])
                        this.parentNode.children[count].focus()
                    }
                }
                
            }

        }
        this.func = null
        this.backspace_event = null
    }

    render() {


        if (this.attributes.class) this.root.setAttribute("class", this.attributes["class"])
        if (this.attributes.id) this.root.setAttribute("id", this.attributes["id"])

        let codeEditor = this.attributes.codeEditor
        let count = this.attributes.lineCount
        console.log("render", this)
        let func = this.disaptch(count, codeEditor)

        if (this.func === null) {
            this.root.addEventListener("keyup", func)
            this.root.addEventListener("mouseup", func)
            this.root.addEventListener("mouseup", this.mouseup)
            this.func = func
        }
        return this.root
    }

    focus() {
        this.root.focus();
    }

    onclick(element, event) {
        console.log(element, event.offsetX, event.offsetY)
    }

    mouseup(event){
        // console.log(event.button)
        if(event.button === 0){
            console.log("left")

        }
    }

    refresh_count() {
        this.root.removeEventListener("keyup", this.func)
        this.root.removeEventListener("mouseup", this.func)
        let func = this.disaptch(this.attributes.lineCount, this.attributes.codeEditor)

        this.root.addEventListener("keyup", func)
        this.root.addEventListener("mouseup", func)
        this.func = func


    }
}

class CodeEditMarginUnit extends Component {
    constructor() {
        super()
        this.attributes = Object.create(null)// 必须有 this.attributes.problems 才可以生成，单独生成一个
        this.root = document.createElement('div')
    }

    render() {

        for (let key in this.attributes) this.root.setAttribute(key, this.attributes[key])


        return this.root
    }
}

export class CodeLineInput extends Component {
    constructor() {
        super()
        this.attributes = Object.create(null)// 必须有 this.attributes.problems 才可以生成，单独生成一个

        this.state = "start"
        this.content = ''
        this.root = document.createElement('div')
    }

    render() {
        this.root.addEventListener("keydown", function (e) {
            if (e.keyCode === 13) {
                e.preventDefault();
            }
        })
        this.root.contentEditable = true;
        this.root.tabIndex = -1

        for (let key in this.attributes) this.root.setAttribute(key, this.attributes[key])
        this.root.setAttribute("class", "codeLineInput")
        this.root.contentEditable = true
        this.root.tabIndex = "-1"
        return this.root
    }
}

class codeLineInput extends Component{
    constructor(){
        this.attributes = Object.create(null)
        // this.root = document.createElement('div')
        this.root = render()
    }

    render(){
        this.root = document.createElement("div")
        this.root.contentEditable = true
        this.root.setAttribute("class", "codeLineInput")

        return this.root
    }
}

class CodeEditor extends Component {
    constructor() {
        super()
        this.attributes = Object.create(null)// 必须有 this.attributes.problems 才可以生成，单独生成一个
        this.line_height = 24;// unit px

        this.onclickFocus = null
        this.count = 0
        this.lines = []

        this.input = <CodeLineInput class="codeLineInput"></CodeLineInput>
        this.root = document.createElement('div')
        // this.input = <codeLineInput></codeLineInput>
    }

    render() {

        for (let key in this.attributes) this.root.setAttribute(key, this.attributes[key])
        let margin = <CodeEditMargin class="codeEditMargin" line_height="24"></CodeEditMargin>// 应该把class 定义到constructor中去。
        let textArea = <CodeEditarea class="codeEditArea" line_height="24" line_input = {this.input}></CodeEditarea>
        this.margin = margin
        this.textArea = textArea
        margin.mountTo(this.root)
        textArea.mountTo(this.root)
        textArea.parent = this

        this.add_line(this.count)
        let element = this
        this.root.addEventListener('lineEnter', function (e) {
            element.add_line(e.count)
        })
        this.root.addEventListener("lineBackspace", function (e) {
            element.remove_line(e.count)
        })
        return this.root
    }

    // lineOnclick(element, event) {
    //     this.onclickFocus = element
    //     this.input.mountTo(this.onclickFocus)
    // }

    add_line(curr_count) {
        this.count += 1
        let line = <CodeEditorAreaLine class='codeEditLine' codeEditor={this} lineCount={curr_count + 1}></CodeEditorAreaLine>
        this.margin.add_line(-1)
        this.textArea.add_line(line, curr_count + 1)
    }

    remove_line(count) {
        this.margin.remove_line(-1)
        this.textArea.remove_line(count)
    }
}



let editor = <CodeEditor class="codeEditor" id="id"></CodeEditor>
editor.mountTo(document.body)

// let firstMargin = <CodeEditMarginUnit class = "codeEditMarginUnit">1</CodeEditMarginUnit> // !!!!
// firstMargin.mountTo(document.body)
