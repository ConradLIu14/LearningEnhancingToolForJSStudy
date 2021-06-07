import {CodeLineInput, CodeEditorAreaLine} from "./codeEditor.js"
import { Component, createElement } from "./framework.js"

function dispatch(element, type, properties){
    let event = new Event(type);
    for (let name in properties) {
        event[name] = properties[name];
    }
    element.dispatchEvent(event);
}

export class MousePosititonListener {
    constructor(element) {
        this.element = element
        this.type = "MousePosititonListener"

        element.addEventListener("mousedown", event => {
            if (event.button === 0) {
                let context = Object.create(null);
                this.start(event, context)
               
                let mouseup = event => {
                    if (event.button === 0) {
                        
                        this.end(event, context)
                        
                        document.removeEventListener("mouseup", mouseup)
                    }

                }
                document.addEventListener("mouseup", mouseup)
            }

        })
    }

    start(event, context) {
        context.startX = event.clientX
        context.startY = event.clientY

    }

    end(event, context) {
        context.endX = event.clientX
        context.endY = event.clientY
        dispatch(this.element, this.type, context)
    }
}

export class MouseLeftOnclick{

    constructor(element, processor) {// codeLineListener

        this.element = element
        // this.count = count
        this.type = "CodeLineOnclick" + this.count
        this.processor = processor
        this.res = null

        element.addEventListener("mouseup", event => {
            if(event.button === 0){
                console.log("left")
                if(this.processor)this.processor(this.element, event)
            }
            
        })
    }

}


export class KeyPressListener{

    constructor(element,keyCode, processor, disaptch_args) {// codeLineListener
        this.element = element
        this.type = "CodeLineSpace" + this.count
        this.processor = processor
        element.addEventListener("keyup", event => {
            
            if(event.keyCode === keyCode){// enter: 13; space: 32
                console.log("keyCode", keyCode)
                event.preventDefault();
                event.stopPropagation();

                let props;
                if(this.processor)  props = processor(this.element)
                if(disaptch_args) dispatch(disaptch_args.element, disaptch_args.type, [])
            }
            
            

        })
    }

}



// export class MousePositionRecognizer{
//     constructor(dispatcher) {
//         this.dispatcher = dispatcher;
//       }
// }