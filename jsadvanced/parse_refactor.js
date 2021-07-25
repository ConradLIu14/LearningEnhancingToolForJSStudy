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