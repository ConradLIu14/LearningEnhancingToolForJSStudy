import { jsadvanced } from "./jsadvanced2.js"
import { Component, createElement, Sign_workspace } from "../framework.js"
import { Paper } from "../paper.js"
import {Sign_advanced_workspace, Block, Submit, Block_Canvase, Dispaly_handler} from "./parse.js"

let curr_chapter = jsadvanced[13]

let target_name = "iframe_target"
console.log(jsadvanced)
let blocks = <Block_Canvase obj = {curr_chapter} target_name = {target_name}></Block_Canvase> 
blocks.mountTo(document.body)
// let dispaly = <Iframe_dispaly_handler></Iframe_dispaly_handler>
let dispaly = new Dispaly_handler()
dispaly.start(blocks, document.body, target_name)




