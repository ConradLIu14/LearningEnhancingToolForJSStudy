// import {Problem} from "./problems"

export {problems} 
let problems = [
    [
        {
            "problem_index": "p1"
        },
        {
            "content": [
                {
                    "type": "string",
                    "string": "p1.JavaScript 语言的每一个值都属于某一种数据类型。JavaScript 语言规定了 "
                },
                {
                    "type": "question",
                    "question": {
                        "answer": " (7)",
                        "type": "UnderLine"
                    }
                },
                {
                    "type": "string",
                    "string": " 种语言类型。"
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
                    "string": "p2. 这 7 种语言类型是: "
                },
                {
                    "type": "question",
                    "question": {
                        "answer": " Undefined; Null； Boolean； String； Number； Symbol；Object ",
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
                    "string": "p3. 为什么有的编程规范要求用 void 0 代替 undefined？ "
                },
                {
                    "type": "question",
                    "question": {
                        "answer": "(因为 JavaScript 的代码 undefined 是一个变量，而并非是一个关键字，这是 JavaScript 语言公认的设计失误之一，所以，我们为了避免无意中被篡改，我建议使用 void 0 来获取 undefined 值。)",
                        "type": "TextBox"
                    }
                },
                {
                    "type": "string",
                    "string": " 现在我们就分别来看一下。)"
                },
                {
                    "type": "question",
                    "question": {
                        "answer": " 使用 var 或 let 声明 了 变量 但没 有 初始化 时 ",
                        "type": "UnderLine"
                    }
                },
                {
                    "type": "string",
                    "string": "， 就 相当于 给 变量 赋予 了 undefined 值："
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
                    "string": "p4. Undefined 跟 Null 有一定的表意差别，   Undefined 表示的是："
                },
                {
                    "type": "question",
                    "question": {
                        "answer": "(没有定义)",
                        "type": "UnderLine"
                    }
                },
                {
                    "type": "string",
                    "string": "   Null 表示的是：  "
                },
                {
                    "type": "question",
                    "question": {
                        "answer": "(空值,定义了但是为空)",
                        "type": "UnderLine"
                    }
                },
                {
                    "type": "string",
                    "string": "  "
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
                    "string": "p5. js 在这(Undefined 跟 Null )方面的设计失误是 "
                },
                {
                    "type": "question",
                    "question": {
                        "answer": "(JavaScript 的代码 undefined 是一个变量，而并非是一个关键字，这是 JavaScript 语言公认的设计失误之一，)",
                        "type": "TextBox"
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
            "problem_index": "p6"
        },
        {
            "content": [
                {
                    "type": "string",
                    "string": "p6. 我们为了避免无意中被篡改，我建议使用 "
                },
                {
                    "type": "question",
                    "question": {
                        "answer": " (void 0) ",
                        "type": "UnderLine"
                    }
                },
                {
                    "type": "string",
                    "string": " 来获取 undefined 值。 "
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
                    "string": "p7. 所以在任何代码中，你都可以放心用 null 关键字来获取 null 值, 因为 "
                },
                {
                    "type": "question",
                    "question": {
                        "answer": " null 是 JavaScript 关键字 ",
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
                    "string": "p8. Boolean 很简单，写一写吧："
                },
                {
                    "type": "question",
                    "question": {
                        "answer": "(Boolean 类型有两个值， true 和 false，它用于表示逻辑意义上的真和假，同样有关键字 true 和 false 来表示两个值。这个类型很简单，我就不做过多介绍了。) ",
                        "type": "TextBox"
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
                    "string": "p9. String 用于表示 "
                },
                {
                    "type": "question",
                    "question": {
                        "answer": "(文本数据)",
                        "type": "UnderLine"
                    }
                },
                {
                    "type": "string",
                    "string": ", String 有最大长度是 "
                },
                {
                    "type": "question",
                    "question": {
                        "answer": "(2^53 - 1)",
                        "type": "UnderLine"
                    }
                },
                {
                    "type": "string",
                    "string": "，这在一般开发中都是够用的"
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
                    "string": "p10. 因为 String 的意义并非“字符串”，而是"
                },
                {
                    "type": "question",
                    "question": {
                        "answer": "(字符串的 UTF16 编码)",
                        "type": "UnderLine"
                    }
                },
                {
                    "type": "string",
                    "string": "，我们字符串的操作 "
                },
                {
                    "type": "question",
                    "question": {
                        "answer": "(charAt、charCodeAt、length)",
                        "type": "UnderLine"
                    }
                },
                {
                    "type": "string",
                    "string": " 等方法针对的都是 "
                },
                {
                    "type": "question",
                    "question": {
                        "answer": "(UTF16 编码)",
                        "type": "UnderLine"
                    }
                },
                {
                    "type": "string",
                    "string": "。所以，字符串的最大长度，实际上是"
                },
                {
                    "type": "question",
                    "question": {
                        "answer": "(受字符串的编码长度影响的)",
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
            "problem_index": "p11"
        },
        {
            "content": [
                {
                    "type": "string",
                    "string": "p11. JavaScript 中的字符串是(可以 or 无法） "
                },
                {
                    "type": "question",
                    "question": {
                        "answer": "(无法)",
                        "type": "UnderLine"
                    }
                },
                {
                    "type": "string",
                    "string": " 变更的，一旦字符串构造出来，"
                },
                {
                    "type": "question",
                    "question": {
                        "answer": "(值)",
                        "type": "UnderLine"
                    }
                },
                {
                    "type": "string",
                    "string": "类型的特征。"
                }
            ]
        }
    ],
    [
        {
            "problem_index": "p12"
        },
        {
            "content": [
                {
                    "type": "string",
                    "string": "p12. JavaScript 字符串把"
                },
                {
                    "type": "question",
                    "question": {
                        "answer": "(每个 UTF16 单元)",
                        "type": "UnderLine"
                    }
                },
                {
                    "type": "string",
                    "string": "当作一个字符来处理，所以处理非 "
                },
                {
                    "type": "question",
                    "question": {
                        "answer": "(BMP（超出 U+0000 - U+FFFF 范围）)",
                        "type": "UnderLine"
                    }
                },
                {
                    "type": "string",
                    "string": "的字符时，"
                }
            ]
        }
    ],
    [
        {
            "problem_index": "p13"
        },
        {
            "content": [
                {
                    "type": "string",
                    "string": "p13. 你应该格外小心。JavaScript 这个设计继承自 Java，最新标准中是这样解释的，这样设计是为了 "
                },
                {
                    "type": "question",
                    "question": {
                        "answer": " (“性能和尽可能实现起来简单”。因为现实中很少用到 BMP 之外的字符。)",
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
            "problem_index": "p14"
        },
        {
            "content": [
                {
                    "type": "string",
                    "string": "p14. JavaScript 中的 Number 类型有 "
                },
                {
                    "type": "question",
                    "question": {
                        "answer": "(18437736874454810627(即 2^64-2^53+3))",
                        "type": "UnderLine"
                    }
                },
                {
                    "type": "string",
                    "string": " 个值。JavaScript 中的 Number 类型基本符合 "
                },
                {
                    "type": "question",
                    "question": {
                        "answer": "(IEEE 754-2008 规定的双精度浮点数)",
                        "type": "UnderLine"
                    }
                },
                {
                    "type": "string",
                    "string": "规则，但是 JavaScript 为了表达几个额外的语言场景（比如不让除以 0 出错，而引入了无穷大的概念），规定了几个例外情况：(三个)"
                },
                {
                    "type": "question",
                    "question": {
                        "answer": "(NaN，占用了 9007199254740990，这原本是符合 IEEE 规则的数字；Infinity，无穷大；-Infinity，负无穷大。)",
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
            "problem_index": "p15"
        },
        {
            "content": [
                {
                    "type": "string",
                    "string": "p15. 另外，值得注意的是，JavaScript 中0有 "
                },
                {
                    "type": "question",
                    "question": {
                        "answer": "(+0 和 -0)",
                        "type": "UnderLine"
                    }
                },
                {
                    "type": "string",
                    "string": "，在加法类运算中它们没有区别，但是除法的场合则需要特别留意区分，而区分 0 的方式，正是检测 1/x "
                },
                {
                    "type": "question",
                    "question": {
                        "answer": "(是 Infinity 还是 -Infinity)",
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
            "problem_index": "p16"
        },
        {
            "content": [
                {
                    "type": "string",
                    "string": "p16. 根据双精度浮点数的定义，Number 类型中有效的整数范围是 "
                },
                {
                    "type": "question",
                    "question": {
                        "answer": "(-0x1fffffffffffff 至 0x1fffffffffffff)",
                        "type": "UnderLine"
                    }
                },
                {
                    "type": "string",
                    "string": "，所以 Number 无法精确表示此范围外的整数。同样根据浮点数的定义，非整数的 Number 类型(可以 or 无法)"
                },
                {
                    "type": "question",
                    "question": {
                        "answer": " 不可以 ",
                        "type": "UnderLine"
                    }
                },
                {
                    "type": "string",
                    "string": " 用 ==（===） 来比较. console.log( 0.1 + 0.2 == 0.3);输出是 "
                },
                {
                    "type": "question",
                    "question": {
                        "answer": "(false)",
                        "type": "UnderLine"
                    }
                },
                {
                    "type": "string",
                    "string": "小数比较方式是 "
                },
                {
                    "type": "question",
                    "question": {
                        "answer": "使用 JavaScript 提供的最小精度值",
                        "type": "UnderLine"
                    }
                },
                {
                    "type": "string",
                    "string": " 代码是 "
                },
                {
                    "type": "question",
                    "question": {
                        "answer": "(console.log( Math.abs(0.1 + 0.2 - 0.3) <= Number.EPSILON); ) ",
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
            "problem_index": "p17"
        },
        {
            "content": [
                {
                    "type": "string",
                    "string": "p17. Symbol 是 ES6 中引入的新类型，它是 "
                },
                {
                    "type": "question",
                    "question": {
                        "answer": " (一切非字符串的对象 key 的集合)",
                        "type": "UnderLine"
                    }
                },
                {
                    "type": "string",
                    "string": "，在 ES6 规范中，整个对象系统被用 Symbol 重塑。"
                }
            ]
        }
    ],
    [
        {
            "problem_index": "p18"
        },
        {
            "content": [
                {
                    "type": "string",
                    "string": "p18. 我们创建 Symbol 的方式是使用全局的 Symbol 函数。例如："
                },
                {
                    "type": "question",
                    "question": {
                        "answer": " (var mySymbol = Symbol(\"my symbol\");) ",
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
            "problem_index": "p19"
        },
        {
            "content": [
                {
                    "type": "string",
                    "string": "p19. 全局的 Symbol 函数的属性。例如我们可以使用"
                },
                {
                    "type": "question",
                    "question": {
                        "answer": "var o = new Object；o[Symbol.iterator] = function() {var v = 0；return {next: function() {return { value: v++, done: v > 10 }；}}        };for(var v of o) console.log(v); // 0 1 2 3 ... 9 ",
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
            "problem_index": "p20"
        },
        {
            "content": [
                {
                    "type": "string",
                    "string": "p20. 在 JavaScript 中，对象的定义是"
                },
                {
                    "type": "question",
                    "question": {
                        "answer": "(“属性的集合”)",
                        "type": "UnderLine"
                    }
                },
                {
                    "type": "string",
                    "string": "。属性分为"
                },
                {
                    "type": "question",
                    "question": {
                        "answer": "(数据属性) ",
                        "type": "UnderLine"
                    }
                },
                {
                    "type": "string",
                    "string": "和"
                },
                {
                    "type": "question",
                    "question": {
                        "answer": "(访问器属性)",
                        "type": "UnderLine"
                    }
                },
                {
                    "type": "string",
                    "string": "，二者都是 "
                },
                {
                    "type": "question",
                    "question": {
                        "answer": "( key-value )",
                        "type": "UnderLine"
                    }
                },
                {
                    "type": "string",
                    "string": "结构，key "
                },
                {
                    "type": "question",
                    "question": {
                        "answer": "(可以是字符串)",
                        "type": "UnderLine"
                    }
                },
                {
                    "type": "string",
                    "string": "或者 "
                },
                {
                    "type": "question",
                    "question": {
                        "answer": "(Symbol 类型)",
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
            "problem_index": "p21"
        },
        {
            "content": [
                {
                    "type": "string",
                    "string": "p21. 提到对象，我们必须要提到一个概念：类。因为 C++ 和 Java 的成功，在这两门语言中，每个类都是一个类型，二者几乎等同，以至于很多人常常会把 JavaScript 的“类”与类型混淆。事实上，JavaScript 中的“类”仅仅是"
                },
                {
                    "type": "question",
                    "question": {
                        "answer": "(运行时对象的一个私有属性)",
                        "type": "UnderLine"
                    }
                },
                {
                    "type": "string",
                    "string": "，而 JavaScript 中是无法"
                },
                {
                    "type": "question",
                    "question": {
                        "answer": "(自定义类型的)",
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
            "problem_index": "p22"
        },
        {
            "content": [
                {
                    "type": "string",
                    "string": "p22. JavaScript 中的几个基本类型(数字，字符串\"\",true or false; {})，都在对象类型中有一个“亲戚”。它们是："
                },
                {
                    "type": "question",
                    "question": {
                        "answer": "(Number；String；Boolean；Symbol。) ",
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
            "problem_index": "p23"
        },
        {
            "content": [
                {
                    "type": "string",
                    "string": "p23. 所以，我们必须认识到 3 与 new Number(3) 是完全(相同 or 不同) "
                },
                {
                    "type": "question",
                    "question": {
                        "answer": "(不同)",
                        "type": "UnderLine"
                    }
                },
                {
                    "type": "string",
                    "string": "的值，它们一个是 "
                },
                {
                    "type": "question",
                    "question": {
                        "answer": "(Number)",
                        "type": "UnderLine"
                    }
                },
                {
                    "type": "string",
                    "string": " 类型， 一个是"
                },
                {
                    "type": "question",
                    "question": {
                        "answer": "(对象)",
                        "type": "UnderLine"
                    }
                },
                {
                    "type": "string",
                    "string": "类型。"
                }
            ]
        }
    ],
    [
        {
            "problem_index": "p24"
        },
        {
            "content": [
                {
                    "type": "string",
                    "string": "p24. Number、String 和 Boolean，三个构造器是两用的，当跟 new 搭配时，"
                },
                {
                    "type": "question",
                    "question": {
                        "answer": "(它们产生对象)",
                        "type": "UnderLine"
                    }
                },
                {
                    "type": "string",
                    "string": "，当直接调用时，它们表示"
                },
                {
                    "type": "question",
                    "question": {
                        "answer": "(强制类型转换)",
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
            "problem_index": "p25"
        },
        {
            "content": [
                {
                    "type": "string",
                    "string": "p25. Symbol 函数比较特殊，直接用 new 调用它会"
                },
                {
                    "type": "question",
                    "question": {
                        "answer": "(抛出错误)",
                        "type": "UnderLine"
                    }
                },
                {
                    "type": "string",
                    "string": "，但它仍然是 Symbol 对象的构造器。"
                }
            ]
        }
    ],
    [
        {
            "problem_index": "p26"
        },
        {
            "content": [
                {
                    "type": "string",
                    "string": "p26. JavaScript 语言设计上试图模糊对象和基本类型之间的关系，我们日常代码可以把对象的方法在基本类型上使用，比如(代码)："
                },
                {
                    "type": "question",
                    "question": {
                        "answer": "(console.log(\"abc\".charAt(0)); //a) ",
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
            "problem_index": "p27"
        },
        {
            "content": [
                {
                    "type": "string",
                    "string": "p27. 甚至我们在原型上添加方法，都可以应用于基本类型，比如以下代码，在 Symbol 原型上添加了 hello 方法，在任何 Symbol 类型变量都可以调用。"
                },
                {
                    "type": "question",
                    "question": {
                        "answer": "(Symbol.prototype.hello = () => console.log(\"hello\");var a = Symbol(\"a\");console.log(typeof a); //symbol，a并非对象a.hello(); //hello，有效)",
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
            "problem_index": "p28"
        },
        {
            "content": [
                {
                    "type": "string",
                    "string": "p28. 因为 JS 是弱类型语言，所以类型转换发生非常频繁，大部分我们熟悉的运算都会先进行类型转换。大部分类型转换符合人类的直觉，但是如果我们不去理解类型转换的严格定义，很容易造成一些代码中的判断失误。其中最为臭名昭著的是 JavaScript 中的“ == ”运算，因为试图实现跨类型的比较，它的规则复杂到几乎没人可以记住。这里我们当然也不打算讲解 == 的规则，它属于设计失误，并非语言中有价值的部分，很多实践中推荐禁止使用“ ==”，而要求程序员进行显式地类型转换后，用 === 比较。较为复杂的部分是 Number 和 String 之间的转换，以及对象跟基本类型之间的转换。我们分别来看一看这几种转换的规则。"
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
            "problem_index": "p29"
        },
        {
            "content": [
                {
                    "type": "string",
                    "string": "p29. 字符串到数字的类型转换，存在一个语法结构，类型转换支持(进制) "
                },
                {
                    "type": "question",
                    "question": {
                        "answer": "(十进制、二进制、八进制和十六进制)",
                        "type": "UnderLine"
                    }
                },
                {
                    "type": "string",
                    "string": " 比如 "
                },
                {
                    "type": "question",
                    "question": {
                        "answer": "(30；0b111；0o13；0xFF。) ",
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
            "problem_index": "p30"
        },
        {
            "content": [
                {
                    "type": "string",
                    "string": "p30. 此外，JavaScript 支持的字符串语法还包括正负号科学计数法，可以使用"
                },
                {
                    "type": "question",
                    "question": {
                        "answer": " (E or e)",
                        "type": "UnderLine"
                    }
                },
                {
                    "type": "string",
                    "string": " 来表示例如"
                },
                {
                    "type": "question",
                    "question": {
                        "answer": "(1e3；-1e-2。)",
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
            "problem_index": "p31"
        },
        {
            "content": [
                {
                    "type": "string",
                    "string": "p31. 需要注意的是，parseInt 和 parseFloat 并不使用这个转换，所以支持的语法跟这里不尽相同。在不传入第二个参数的情况下，"
                },
                {
                    "type": "question",
                    "question": {
                        "answer": "(parseInt 只支持 16 进制前缀“0x”，而且会忽略非数字字符)",
                        "type": "UnderLine"
                    }
                },
                {
                    "type": "string",
                    "string": "，也不支持"
                },
                {
                    "type": "question",
                    "question": {
                        "answer": "(科学计数法。)",
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
            "problem_index": "p32"
        },
        {
            "content": [
                {
                    "type": "string",
                    "string": "p32. 在较小的范围内，数字到字符串的转换是完全符合你直觉的十进制表示。当 Number 绝对值较大或者较小时，字符串表示则是使用科学计数法表示的。这个算法细节繁多，我们从感性的角度认识，它其实就是保证了产生的字符串不会过长。具体的算法，你可以去参考 JavaScript 的语言标准。由于这个部分内容，我觉得在日常开发中很少用到，所以这里我就不去详细地讲解了。"
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
            "problem_index": "p33"
        },
        {
            "content": [
                {
                    "type": "string",
                    "string": "p33. 每一种基本类型 Number、String、Boolean、Symbol 在对象中都有对应的类，所谓装箱转换，正是把"
                },
                {
                    "type": "question",
                    "question": {
                        "answer": " (基本类型转换为对应的对象，)",
                        "type": "UnderLine"
                    }
                },
                {
                    "type": "string",
                    "string": "它是类型转换中一种相当重要的种类"
                }
            ]
        }
    ],
    [
        {
            "problem_index": "p34"
        },
        {
            "content": [
                {
                    "type": "string",
                    "string": "p34. 前文提到，全局的 Symbol 函数无法使用 new 来调用，但我们仍可以利用装箱机制来得到一个 Symbol 对象，我们可以利用一个函数的 call 方法来强迫产生装箱。"
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
            "problem_index": "p35"
        },
        {
            "content": [
                {
                    "type": "string",
                    "string": "p35. 装箱转换是："
                },
                {
                    "type": "question",
                    "question": {
                        "answer": "(我们定义一个函数，函数里面只有 return this，然后我们调用函数的 call 方法到一个 Symbol 类型的值上，这样就会产生一个 symbolObject。我们可以用 console.log 看一下这个东西的 type of，它的值是 object，我们使用 symbolObject instanceof 可以看到，它是 Symbol 这个类的实例，我们找它的 constructor 也是等于 Symbol 的，所以我们无论从哪个角度看，它都是 Symbol 装箱过的对象：)",
                        "type": "UnderLine"
                    }
                },
                {
                    "type": "string",
                    "string": "代码："
                },
                {
                    "type": "question",
                    "question": {
                        "answer": "(var symbolObject = (function(){ return this; }).call(Symbol(\"a\"));console.log(typeof symbolObject); //objectconsole.log(symbolObject instanceof Symbol); //trueconsole.log(symbolObject.constructor == Symbol); //true)",
                        "type": "UnderLine"
                    }
                },
                {
                    "type": "string",
                    "string": "每一类装箱对象皆有私有的 Class 属性，这些属性可以用 "
                },
                {
                    "type": "question",
                    "question": {
                        "answer": "(var symbolObject = Object(Symbol(\"a\"));console.log(Object.prototype.toString.call(symbolObject)); //[object Symbol])",
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
            "problem_index": "p36"
        },
        {
            "content": [
                {
                    "type": "string",
                    "string": "p36. 在 JavaScript 中，没有任何方法可以更改私有的 Class 属性，因此 Object.prototype.toString 是可以准确识别对象对应的基本类型的方法，它比 instanceof 更加准确。但需要注意的是，call 本身会产生装箱操作，所以需要配合 typeof 来区分基本类型还是对象类型。"
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
            "problem_index": "p37"
        },
        {
            "content": [
                {
                    "type": "string",
                    "string": "p37. 在 JavaScript 标准中，规定了 "
                },
                {
                    "type": "question",
                    "question": {
                        "answer": "(ToPrimitive)",
                        "type": "UnderLine"
                    }
                },
                {
                    "type": "string",
                    "string": " 函数，它是对象类型到基本类型的转换（即，拆箱转换）。"
                }
            ]
        }
    ],
    [
        {
            "problem_index": "p38"
        },
        {
            "content": [
                {
                    "type": "string",
                    "string": "p38. 对象到 String 和 Number 的转换都遵循"
                },
                {
                    "type": "question",
                    "question": {
                        "answer": "(“先拆箱再转换”)",
                        "type": "UnderLine"
                    }
                },
                {
                    "type": "string",
                    "string": "的规则。通过拆箱转换，先把对象变成"
                },
                {
                    "type": "question",
                    "question": {
                        "answer": "(基本类型)",
                        "type": "UnderLine"
                    }
                },
                {
                    "type": "string",
                    "string": "，再从其转换为对应的 String 或者 Number。"
                }
            ]
        }
    ],
    [
        {
            "problem_index": "p39"
        },
        {
            "content": [
                {
                    "type": "string",
                    "string": "p39. 拆箱转换会尝试调用 "
                },
                {
                    "type": "question",
                    "question": {
                        "answer": "(valueOf)",
                        "type": "UnderLine"
                    }
                },
                {
                    "type": "string",
                    "string": " 和 "
                },
                {
                    "type": "question",
                    "question": {
                        "answer": "(var o = {valueOf : () => {console.log(\"valueOf\"); return {}},toString : () => {console.log(\"toString\"); return {}}}o * 2// valueOf// toString// TypeError)",
                        "type": "UnderLine"
                    }
                },
                {
                    "type": "string",
                    "string": "代码说明："
                },
                {
                    "type": "question",
                    "question": {
                        "answer": "代码说明：",
                        "type": "UnderLine"
                    }
                },
                {
                    "type": "string",
                    "string": "：(我们定义了一个对象 o，o 有 valueOf 和 toString 两个方法，这两个方法都返回一个对象，然后我们进行 o*2 这个运算的时候，你会看见先执行了 valueOf，接下来是 toString，最后抛出了一个 TypeError，这就说明了这个拆箱转换失败了。)"
                }
            ]
        }
    ],
    [
        {
            "problem_index": "p40"
        },
        {
            "content": [
                {
                    "type": "string",
                    "string": "p40. 到 String 的拆箱转换会优先调用 "
                },
                {
                    "type": "question",
                    "question": {
                        "answer": "(var o = {valueOf : () => {console.log(\"valueOf\"); return {}},toString : () => {console.log(\"toString\"); return {}}}String(o)// toString// valueOf// TypeError)",
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
            "problem_index": "p41"
        },
        {
            "content": [
                {
                    "type": "string",
                    "string": "p41. 在 ES6 之后，还允许对象通过显式指定 "
                },
                {
                    "type": "question",
                    "question": {
                        "answer": "(@@toPrimitive Symbol)",
                        "type": "UnderLine"
                    }
                },
                {
                    "type": "string",
                    "string": " 来覆盖原有的行为。 代码"
                },
                {
                    "type": "question",
                    "question": {
                        "answer": "(var o = {valueOf : () => {console.log(\"valueOf\"); return {}},toString : () => {console.log(\"toString\"); return {}}}o[Symbol.toPrimitive] = () => {console.log(\"toPrimitive\"); return \"hello\"}console.log(o + \"\")// toPrimitive// hello)",
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
            "problem_index": "p42"
        },
        {
            "content": [
                {
                    "type": "string",
                    "string": "p42. 除了这七种语言类型，还有一些语言的实现者更关心的规范类型。"
                },
                {
                    "type": "question",
                    "question": {
                        "answer": "(List 和 Record)",
                        "type": "UnderLine"
                    }
                },
                {
                    "type": "string",
                    "string": "： 用于描述函数传参过程。Set：主要用于解释字符集等。"
                },
                {
                    "type": "question",
                    "question": {
                        "answer": "(Completion Record)",
                        "type": "UnderLine"
                    }
                },
                {
                    "type": "string",
                    "string": "：用于描述异常、跳出等语句执行过程。"
                },
                {
                    "type": "question",
                    "question": {
                        "answer": "(Reference)",
                        "type": "UnderLine"
                    }
                },
                {
                    "type": "string",
                    "string": "：用于描述对象属性访问、delete 等。"
                },
                {
                    "type": "question",
                    "question": {
                        "answer": "(Property Descriptor)",
                        "type": "UnderLine"
                    }
                },
                {
                    "type": "string",
                    "string": "：用于描述对象的属性。"
                },
                {
                    "type": "question",
                    "question": {
                        "answer": "(Lexical Environment)",
                        "type": "UnderLine"
                    }
                },
                {
                    "type": "string",
                    "string": " 和 "
                },
                {
                    "type": "question",
                    "question": {
                        "answer": "(Environment Record)",
                        "type": "UnderLine"
                    }
                },
                {
                    "type": "string",
                    "string": "：用于描述变量和作用域。"
                },
                {
                    "type": "question",
                    "question": {
                        "answer": "(Data Block)",
                        "type": "UnderLine"
                    }
                },
                {
                    "type": "string",
                    "string": "：用于描述二进制数据。"
                }
            ]
        }
    ],
    [
        {
            "problem_index": "p43"
        },
        {
            "content": [
                {
                    "type": "string",
                    "string": "p43. 最后我们留一个实践问题，如果我们不用原生的 Number 和 parseInt，用 JavaScript 代码实现 String 到 Number 的转换，该怎么做呢？"
                },
                {
                    "type": "question",
                    "question": {
                        "answer": "()",
                        "type": "TextBox"
                    }
                },
                {
                    "type": "string",
                    "string": ""
                }
            ]
        }
    ]
]