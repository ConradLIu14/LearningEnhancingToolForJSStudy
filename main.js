// import { Problem } from "./problems.js"
import { Problem } from "./problemss.js"
import { Component, createElement } from "./framework.js"
import {Paper} from "./paper.js"


import { problems } from "./winterjs/1js类型.js"


let p1 = <Paper class = {"paper1"}></Paper>
let p2 = <Paper problems={problems} class={"paper2"}></Paper> 
p1.mountTo(document.body)

p2.mountTo(document.body)


