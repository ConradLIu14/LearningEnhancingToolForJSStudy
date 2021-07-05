import { Problem } from "./problems.js"
// import { Problem } from "./problemss.js"
import { Component, createElement, Sign_workspace} from "./framework.js"
import {Paper} from "./paper.js"


// import { problems } from "./winterjs/1js类型.js"
import { problems } from "./js高级教程/12BOM.js"
import {jsadvanced} from "./jsadvanced/jsadvanced.js"


let p1 = <Paper class = {"paper1"}></Paper>
let p2 = <Paper problems={problems} class={"paper2"}></Paper> 
let sign_box = <Sign_workspace class={"sign"}></Sign_workspace>

p1.mountTo(document.body)
p2.mountTo(document.body)


sign_box.mountTo(document.body)

// console.log(jsadvanced)
