function parse(text_parse) {
    let curr_str = ''
    let res = []
    let splits = []
    let state = state0_readhead
    function state0_readhead (c) {
        if(c === "#") {
            state = state1_readstring 
            res.push({problem_index:curr_str}, {content:[]})
            curr_str = ''
        }
        else curr_str += c
    }


    function state1_readstring (c) {
        if(c === "#") {
            state = stat2_read_sign
        }
        else curr_str += c
    }

    function stat2_read_sign(c){ // ### first # represent read targ; seconde * represent read confirm 
        if(c === "*"){
            state = state3_readtage
            
            splits.push(curr_str)
            res[1].content.push({string: curr_str})
            curr_str = '#'
        }
        else {
            state = state1_readstring
            curr_str += "#"
            curr_str += c
        }
    }

    function state3_readtage(c) {
        if(c === "("){
            state = state4_readproblem
            splits.push(curr_str)
            if(curr_str === "#qs1:"){
                res[1].content.push({question:{
                    type: "underline",
                    answer:''
                }})
            }
            curr_str = ''
        }
        else{
            curr_str += c
        }
    }

    function state4_readproblem(c) {
        if(c === ")"){
            state = state5_readTagEndComfirm
        }
        else{
            curr_str += c
        }

    }

    function state5_readTagEndComfirm(c){
        if(c === "*"){
            state = state6_readtagend
            res[1].content[res[1].content.length - 1].question.answer = curr_str
            splits.push(curr_str)
            curr_str = "*"
        }
        else{
            curr_str += ")"
            curr_str += c
            state = state4_readproblem
        }
    }

    function state6_readtagend(c) {
        // let splits = 
        if(c === "#"){
            splits.push(curr_str)
            curr_str = ''
            state = state1_readstring
        }
        else {
            curr_str += c
        }
    }

    for(let c of text_parse){
        state(c)
    }
    splits.push(res)
    res[1].content.push({string: curr_str})

    console.log(JSON.stringify(res))

    // state = 0

    // for(let split of splits){ // 这是为了更复杂的情况设计的，暂时用不到
    //     if 
    // }
    return res
}

let text = 'q. #文档对象模型（DOM，Document Object Model）是#*qs1:( HTML和XML文档的编程接口 )*qs#。DOM表示#*qs1:( 由多层节点构成的文档 )*qs#，通过它开发者可以#*qs1:( 添加、删除和修改 )*qs#页面的各个部分。脱胎于网景和微软早期的动态HTML（DHTML，Dynamic HTML），DOM现在是真正跨平台、语言无关的表示和操作网页的方式。 submit'

parse(text)

