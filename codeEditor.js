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
        // let fristLine = <CodeEditorAreaLine class = "codeEditLine 1"></CodeEditorAreaLine>

        // fristLine.mountTo(this.root)
        // this.add_line()
        return this.root
    }

    add_line(line, count) {
        // let fristLine = <CodeEditorAreaLine class = "codeEditLine 1"></CodeEditorAreaLine>
        // this.linesSet.push(line)
        this.linesSet.splice(count - 1, 0, line)

        for (let i = count; i < this.linesSet.length; i++) {
            this.linesSet[i].attributes.lineCount += 1
            this.linesSet[i].refresh_count()
        }

        // let counts = []
        // for(let l of this.linesSet){
        //     counts.push(l.attributes.lineCount)
        // }
        // console.log("counts", counts)

        // while (this.root.hasChildNodes()) {

        //     this.root.removeChild(this.root.lastChild);
        // }


        // line.mountTo(this.root)


        for (let l of this.linesSet) {
            l.mountTo(this.root)
            // this.root.appendChild(l.render())
            // this.root.appendChild(l.root)
            // console.log("...", l, this.linesSet.length)
        }

        line.focus()
    }

    remove_line(count) {
        if (this.linesSet.length > 1) {
            // console.log("count", count, this.linesSet.length)
            this.root.removeChild(this.linesSet[count - 1].root)
            this.linesSet.splice(count - 1, 1)
            // console.log("length", this.linesSet.length)
            for (let i = count - 1; i < this.linesSet.length; i++) {
                this.linesSet[i].attributes.lineCount -= 1
                this.linesSet[i].refresh_count()
            }

            let counts = []
            for (let l of this.linesSet) {
                counts.push(l.attributes.lineCount)
            }
            // console.log("counts", counts)
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
        // this.add_line(1)
        // let firstMargin = <CodeEditMarginUnit class = "codeEditMarginUnit">1</CodeEditMarginUnit> // !!!!
        // firstMargin.mountTo(this.root)
        return this.root
    }

    add_line(count) {
        let new_margin
        if (count > 0) {
            new_margin = <CodeEditMarginUnit class="codeEditMarginUnit">{String(count)}</CodeEditMarginUnit>
            // let firstMargin = <CodeEditMarginUnit class = "codeEditMarginUnit">1</CodeEditMarginUnit>
            // console.log(new_margin, new_margin.mountTo)
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

        // let count = this.attributes.lineCount
        // let codeEditor = this.attributes.codeEditor

        this.disaptch = function (count, codeEditor) {
            return function (e) {
                console.log("this", this, count, this.lastChild)
                if (e.keyCode === 13) {
                    // console.log("disaptch", this)
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
            }

        }

        // this.back

        this.func = null
        this.backspace_event = null
        // let disaptch_args = Object.create(null)
        // disaptch_args.type = "Enter"
        // disaptch_args.element = this.root.parentNode
        // new KeyPressListener(this.root, 13, null, disaptch_args)
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
            this.func = func
        }


        return this.root
    }

    focus() {
        this.root.focus();
    }

    onclick(element, event) {
        console.log(element, event.offsetX, event.offsetY)
        // inputLine.mountTo(element)

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

        // this.processor = new CodeEditoerProcessor()

    }

    render() {

        for (let key in this.attributes) this.root.setAttribute(key, this.attributes[key])
        let margin = <CodeEditMargin class="codeEditMargin" line_height="24"></CodeEditMargin>// 应该把class 定义到constructor中去。
        let textArea = <CodeEditarea class="codeEditArea" line_height="24"></CodeEditarea>
        this.margin = margin
        this.textArea = textArea
        margin.mountTo(this.root)
        textArea.mountTo(this.root)
        textArea.parent = this
        // margin.add_line(1)
        // margin.add_line(2)
        // let firstLine = <CodeEditorAreaLine class = "codeEditLine"></CodeEditorAreaLine>
        this.add_line(this.count)
        let element = this
        this.root.addEventListener('lineEnter', function (e) {
            element.add_line(e.count)
        })
        this.root.addEventListener("lineBackspace", function (e) {
            // console.log("backspace dispatch", e.count)

            element.remove_line(e.count)
        })

        // new MouseLeftOnclick(this.textArea.root, this.onclick)

        // new KeyPressListener(this.textArea.root, 32)// Space
        // new KeyPressListener(this, 13, this.processor.add_line)// Enter
        return this.root
    }

    onclick(element, event) {
        // console.log(element, event.offsetX, event.offsetY)
    }

    add_line(curr_count) {
        this.count += 1
        let line = <CodeEditorAreaLine class='codeEditLine' codeEditor={this} lineCount={curr_count + 1}></CodeEditorAreaLine>
        // this.lines.push(line)
        this.margin.add_line(-1)
        this.textArea.add_line(line, curr_count + 1)
    }

    remove_line(count) {
        // this.count -=1
        this.margin.remove_line(-1)
        this.textArea.remove_line(count)
    }
}



let editor = <CodeEditor class="codeEditor" id="id"></CodeEditor>
editor.mountTo(document.body)

// let firstMargin = <CodeEditMarginUnit class = "codeEditMarginUnit">1</CodeEditMarginUnit> // !!!!
// firstMargin.mountTo(document.body)
