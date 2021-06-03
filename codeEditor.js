import { Component, createElement } from "./framework.js"
import { MousePosititonListener } from "./listener.js"


class CodeEditarea extends Component{
    constructor(){
        super()
        this.attributes = Object.create(null)// 必须有 this.attributes.problems 才可以生成，单独生成一个
        this.root = document.createElement('div')

    }

    render(){
        for(let key in this.attributes) this.root.setAttribute(key, this.attributes[key])


        return this.root
    }

}
class CodeEditMargin extends Component{
    constructor(){
        super()
        this.attributes = Object.create(null)// 必须有 this.attributes.problems 才可以生成，单独生成一个
        this.root = document.createElement('div')
    }

    render(){
        for(let key in this.attributes) this.root.setAttribute(key, this.attributes[key])


        return this.root
    }

}
class CodeEditor extends Component{
    constructor(){
        super()
        this.attributes = Object.create(null)// 必须有 this.attributes.problems 才可以生成，单独生成一个
        this.root = document.createElement('div')

    }

    render(){
        for(let key in this.attributes) this.root.setAttribute(key, this.attributes[key])
        let margin = <CodeEditMargin class = "codeEditMargin"></CodeEditMargin>
        let textArea = <CodeEditarea class = "codeEditArea"></CodeEditarea>
        margin.mountTo(this.root)
        textArea.mountTo(this.root)
        new MousePosititonListener(this.root)
        this.root.addEventListener("MousePosititonListener", event => {
            console.log(event)
        })

        
        return this.root
    }

}


let editor = <CodeEditor class = "codeEditor" id = "id"></CodeEditor>
editor.mountTo(document.body)