
export function createElement(type,attributes,...children){ 
    let element;
    if (typeof type == 'string') element = new ElementWrapper(type);
    else element = new type;
    for (let name in attributes){
        element.setAttribute(name,attributes[name]);
    }
    for (let child of children){
        if (typeof child === "string") 
           child = new TextWrapper(child);   
           
        element.appendChild(child);
    }
    return element;
}
export class Component{
    constructor(type){
        // this.root = this.render();
        
    }



    setAttribute(name,value){
        this.attributes[name] = value;
    }

    appendChild(child){
        child.mountTo(this.root)
    }

    mountTo(parent){
        parent.appendChild(this.render())
    }

    add_id(){
        if (this.attributes.id && this.root) this.root.id = thsi.attributes.id
    }

    add_classes(){
        if(this.attributes.class){
            let regExp = /\S+/g
            let classes = this.attributes.class.match(regExp)
            for(let c of classes){
                this.root.classList.add(c)
            }
        }

    }

    // addListener(problemClass, question_class){
    //     this.root.addEventListener('keyup', function(event){
    //         if (event.keyCode === 18) {
                

    //         }

    //     })
    // }
}

class TextWrapper extends Component{
    constructor(content){
        super();
        this.root = document.createTextNode(content);
    }



}
class ElementWrapper extends Component{
    constructor(type){
        super();
        this.root = document.createElement(type);
    }
}


export class Underline extends Component{
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

export class TextBox extends Component{
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



export class Answer extends Component {
    // 必须传一个当前problem 的id进来；以及 answer进来
    constructor() {
        super()
        this.attributes = Object.create(null)
        this.root = document.createElement("span")
    }

    render(ans) {
        // if(ans) this.attributes.ans = ans
        if (this.attributes.id) this.root.id = this.attributes.id
        if (this.attributes.class) this.root.className = this.attributes.class
        this.root.appendChild(document.createTextNode(this.attributes.ans))
        this.root.style.display = "inline"
        this.root.style.backgroundColor = "black"

        return this.root
    }
}

// export class Display_button extends Component {// parent and class
//     constructor() {
//         super()
//         this.attributes = new Object(null)
//         this.root = document.createElement("button")
//     }

//     render() {
//         this.root.appendChild(document.createTextNode("Answer"))// parent and class
//         if (this.attributes.class) this.root.className = this.attributes.class
//         if (this.attributes.id) this.root.id = this.attributes.id
//         // this.root.onclick = function () {
//         //     // console.log(this.attributes)// 在 onclick 里面，找不到this 了

//         //     let parent = this.parentNode
//         //     let spans = parent.getElementsByTagName("span")
//         //     for (let s of spans) {
//         //         if (s.className === this.className) {
//         //             if (s.style.backgroundColor === "pink") s.style.backgroundColor = "black"
//         //             else if (s.style.backgroundColor === "black") s.style.backgroundColor = "pink"
//         //         }
//         //     }
//         // }

//         this.root.onclick = new onclikcs().display_ans
//         return this.root
//     }
// }
export class Button extends Component{
    constructor(){
        super();
        this.attributes = new Object(null)
        this.root = document.createElement("button")
        this.onclick = null
        this.text = "button"
    }

    render(onclick = null, text = null) {
        this.root.appendChild(document.createTextNode(this.text))// parent and class
        if (this.attributes.class) this.root.className = this.attributes.class
        if (this.attributes.id) this.root.id = this.attributes.id

        if(onclick) this.root.onclick = onclick
        else if(this.onclick) this.root.onclick = this.onclick

        return this.root
    }
}

