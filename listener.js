// export class Dispatcher {
//     constructor(element) {
//       this.element = element;
//     }
// dispatch(type, properties) {
//     let event = new Event(type);
//     for (let name in properties) {
//       event[name] = properties[name];
//     }
//     this.element.dispatchEvent(event);
//   }
// }

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

// export class MousePositionRecognizer{
//     constructor(dispatcher) {
//         this.dispatcher = dispatcher;
//       }
// }