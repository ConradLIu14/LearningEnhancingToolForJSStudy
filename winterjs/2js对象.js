export { problems }
let problems =[
    [
        {
            "problem_index": "p1"
        },
        {
            "content": [
                {
                    "type": "string",
                    "string": "p1. JavaScript 对象的两类属性 "
                },
                {
                    "type": "question",
                    "question": {
                        "answer": " 数据属性 ",
                        "type": "UnderLine"
                    }
                },
                {
                    "type": "string",
                    "string": "  和 "
                },
                {
                    "type": "question",
                    "question": {
                        "answer": " 访问属性 ",
                        "type": "UnderLine"
                    }
                },
                {
                    "type": "string",
                    "string": ""
                }
            ]
        }
    ],
    [
        {
            "problem_index": "p2"
        },
        {
            "content": [
                {
                    "type": "string",
                    "string": "p2. 数据属性。它比较接近于其它语言的属性概念。数据属性具有四个特征。"
                },
                {
                    "type": "question",
                    "question": {
                        "answer": " value：就是属性的值。writable：决定属性能否被赋值。enumerable：决定 for in 能否枚举该属性。configurable：决定该属性能否被删除或者改变特征值。 ",
                        "type": "UnderLine"
                    }
                },
                {
                    "type": "string",
                    "string": ""
                }
            ]
        }
    ],
    [
        {
            "problem_index": "p3"
        },
        {
            "content": [
                {
                    "type": "string",
                    "string": "p3. 第二类属性是访问器（getter/setter）属性，它也有四个特征。 "
                },
                {
                    "type": "question",
                    "question": {
                        "answer": " getter：函数或 undefined，在取属性值时被调用。setter：函数或 undefined，在设置属性值时被调用。enumerable：决定 for in 能否枚举该属性。configurable：决定该属性能否被删除或者改变特征值。",
                        "type": "UnderLine"
                    }
                },
                {
                    "type": "string",
                    "string": ""
                }
            ]
        }
    ],
    [
        {
            "problem_index": "p4"
        },
        {
            "content": [
                {
                    "type": "string",
                    "string": "p4. 在大多数情况下，我们只关心 "
                },
                {
                    "type": "question",
                    "question": {
                        "answer": " 数据属性 ",
                        "type": "UnderLine"
                    }
                },
                {
                    "type": "string",
                    "string": "的值即可。"
                }
            ]
        }
    ],
    [
        {
            "problem_index": "p5"
        },
        {
            "content": [
                {
                    "type": "string",
                    "string": "p5. 访问器属性使得属性在 "
                },
                {
                    "type": "question",
                    "question": {
                        "answer": " 读和写时 ",
                        "type": "UnderLine"
                    }
                },
                {
                    "type": "string",
                    "string": " 执行代码，它允许使用者在写和读属性时，"
                },
                {
                    "type": "question",
                    "question": {
                        "answer": " 得到完全不同的值 ",
                        "type": "UnderLine"
                    }
                },
                {
                    "type": "string",
                    "string": "，它可以视为一种函数的语法糖。"
                }
            ]
        }
    ],
    [
        {
            "problem_index": "p6"
        },
        {
            "content": [
                {
                    "type": "string",
                    "string": "p6. 我们通常用于定义属性的代码会产生数据属性，其中的 writable、enumerable、configurable 都默认为 "
                },
                {
                    "type": "question",
                    "question": {
                        "answer": " true ",
                        "type": "UnderLine"
                    }
                },
                {
                    "type": "string",
                    "string": "。我们可以使用内置函数 "
                },
                {
                    "type": "question",
                    "question": {
                        "answer": " getOwnPropertyDescriptor ",
                        "type": "UnderLine"
                    }
                },
                {
                    "type": "string",
                    "string": "来查看，如以下代码所示："
                },
                {
                    "type": "question",
                    "question": {
                        "answer": " var o = { a: 1 };o.b = 2;//a和b皆为数据属性Object.getOwnPropertyDescriptor(o,\"a\") // {value: 1, writable: true, enumerable: true, configurable: true}Object.getOwnPropertyDescriptor(o,\"b\") // {value: 2, writable: true, enumerable: true, configurable: true} ",
                        "type": "UnderLine"
                    }
                },
                {
                    "type": "string",
                    "string": ""
                }
            ]
        }
    ],
    [
        {
            "problem_index": "p7"
        },
        {
            "content": [
                {
                    "type": "string",
                    "string": "p7. 如果我们要想改变属性的特征，或者定义访问器属性，我们可以使用 "
                },
                {
                    "type": "question",
                    "question": {
                        "answer": " Object.defineProperty ",
                        "type": "UnderLine"
                    }
                },
                {
                    "type": "string",
                    "string": "，这样定义属性可以改变属性的"
                },
                {
                    "type": "question",
                    "question": {
                        "answer": " writable 和 enumerable ",
                        "type": "UnderLine"
                    }
                },
                {
                    "type": "string",
                    "string": "。示例如下："
                },
                {
                    "type": "question",
                    "question": {
                        "answer": "  var o = { a: 1 };Object.defineProperty(o, \"b\", {value: 2, writable: false, enumerable: false, configurable: true});//a和b都是数据属性，但特征值变化了Object.getOwnPropertyDescriptor(o,\"a\"); // {value: 1, writable: true, enumerable: true, configurable: true}Object.getOwnPropertyDescriptor(o,\"b\"); // {value: 2, writable: false, enumerable: false, configurable: true}o.b = 3;console.log(o.b); // 2 ",
                        "type": "UnderLine"
                    }
                },
                {
                    "type": "string",
                    "string": ""
                }
            ]
        }
    ],
    [
        {
            "problem_index": "p8"
        },
        {
            "content": [
                {
                    "type": "string",
                    "string": "p8. 在创建对象时，也可以使用 "
                },
                {
                    "type": "question",
                    "question": {
                        "answer": " get 和 set ",
                        "type": "UnderLine"
                    }
                },
                {
                    "type": "string",
                    "string": " 关键字来创建访问器属性，代码如下所示："
                },
                {
                    "type": "question",
                    "question": {
                        "answer": " var o = { get a() { return 1 } };console.log(o.a); // 1 ",
                        "type": "UnderLine"
                    }
                },
                {
                    "type": "string",
                    "string": ""
                }
            ]
        }
    ],
    [
        {
            "problem_index": "p9"
        },
        {
            "content": [
                {
                    "type": "string",
                    "string": "p9.  var o = { get a() { return 1 } };console.log(o.a); // 1 访问器属性跟数据属性不同，每次访问属性都会执行 "
                },
                {
                    "type": "question",
                    "question": {
                        "answer": " getter 或者 setter 函数 ",
                        "type": "UnderLine"
                    }
                },
                {
                    "type": "string",
                    "string": "。这里我们的 getter 函数返回了"
                },
                {
                    "type": "question",
                    "question": {
                        "answer": " 1 ",
                        "type": "UnderLine"
                    }
                },
                {
                    "type": "string",
                    "string": "，所以 o.a 每次都得到 "
                },
                {
                    "type": "question",
                    "question": {
                        "answer": " 1 ",
                        "type": "UnderLine"
                    }
                },
                {
                    "type": "string",
                    "string": "。"
                }
            ]
        }
    ],
    [
        {
            "problem_index": "p10"
        },
        {
            "content": [
                {
                    "type": "string",
                    "string": "p10. 对象是一个属性的索引结构（索引结构是一类常见的数据结构，我们可以把它理解为一个能够以比较快的速度用 key 来查找 value 的字典）。我们以上面的对象 o 为例，你可以想象一下"
                },
                {
                    "type": "question",
                    "question": {
                        "answer": " “a” ",
                        "type": "UnderLine"
                    }
                },
                {
                    "type": "string",
                    "string": " 是 key。"
                },
                {
                    "type": "question",
                    "question": {
                        "answer": " {writable:true,value:1,configurable:true,enumerable:true} ",
                        "type": "UnderLine"
                    }
                },
                {
                    "type": "string",
                    "string": "是 value。我们在前面的类型课程中，已经介绍了 Symbol 类型，能够以 Symbol 为属性名，这是 JavaScript 对象的一个特色。"
                }
            ]
        }
    ]
]