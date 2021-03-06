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
                    "string": "p1. 原型系统的“复制操作”有两种实现思路：一个是 "
                },
                {
                    "type": "question",
                    "question": {
                        "answer": " 并不真的去复制一个原型对象，而是使得新对象持有一个原型的引用 ",
                        "type": "UnderLine"
                    }
                },
                {
                    "type": "string",
                    "string": "；另一个是 "
                },
                {
                    "type": "question",
                    "question": {
                        "answer": " 切实地复制对象，从此两个对象再无关联。",
                        "type": "UnderLine"
                    }
                },
                {
                    "type": "string",
                    "string": "历史上的基于原型语言因此产生了两个流派，显然，JavaScript 选择了 "
                },
                {
                    "type": "question",
                    "question": {
                        "answer": " 前一种 ",
                        "type": "UnderLine"
                    }
                },
                {
                    "type": "string",
                    "string": "方式。"
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
                    "string": "p2. 如果我们抛开 JavaScript 用于模拟 Java 类的复杂语法设施（如 new、Function Object、函数的 prototype 属性等），原型系统可以说相当简单，我可以用两条概括："
                },
                {
                    "type": "question",
                    "question": {
                        "answer": " 如果所有对象都有私有字段[[prototype]]，就是对象的原型；",
                        "type": "UnderLine"
                    }
                },
                {
                    "type": "string",
                    "string": " 以及 "
                },
                {
                    "type": "question",
                    "question": {
                        "answer": " 读一个属性，如果对象本身没有，则会继续访问对象的原型，直到原型为空或者找到为止。",
                        "type": "UnderLine"
                    }
                },
                {
                    "type": "string",
                    "string": "这个模型在 ES 的各个历史版本中并没有很大改变，但从 ES6 以来，JavaScript 提供了一系列内置函数，以便更为直接地访问操纵原型。三个方法分别为："
                },
                {
                    "type": "question",
                    "question": {
                        "answer": " Object.create 根据指定的原型创建新对象，原型可以是 null；Object.getPrototypeOf 获得一个对象的原型；Object.setPrototypeOf 设置一个对象的原型。",
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
                    "string": "p3. 利用这三个方法，我们可以完全抛开类的思维，利用原型来实现抽象和复用。我用下面的代码展示了用原型来抽象猫和虎的例子。根据猫，生成虎，虎的叫声是 ”roar!\"var cat = {say(){console.log(\"meow~\");},jump(){console.log(\"jump\");}}"
                },
                {
                    "type": "question",
                    "question": {
                        "answer": "var tiger = Object.create(cat,  {say:{writable:true,configurable:true,enumerable:true,value:function(){console.log(\"roar!\");}}})var anotherCat = Object.create(cat);anotherCat.say();var anotherTiger = Object.create(tiger);anotherTiger.say(); ",
                        "type": "UnderLine"
                    }
                },
                {
                    "type": "string",
                    "string": "这段代码创建了一个“猫”对象，又根据猫做了一些修改创建了虎，之后我们完全可以用Object.create来创建另外的猫和虎对象，我们可以通过“原始猫对象”和“原始虎对象”来控制所有猫和虎的行为。但是，在更早的版本中，程序员只能通过 Java 风格的类接口来操纵原型运行时，可以说非常别扭。考虑到 new 和 prototype 属性等基础设施今天仍然有效，而且被很多代码使用，学习这些知识也有助于我们理解运行时的原型工作原理."
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
                    "string": "p4. 在早期版本的 JavaScript 中，“类”的定义是一个 "
                },
                {
                    "type": "question",
                    "question": {
                        "answer": " 私有属性 [[class]] ",
                        "type": "UnderLine"
                    }
                },
                {
                    "type": "string",
                    "string": "，语言标准为内置类型诸如 "
                },
                {
                    "type": "question",
                    "question": {
                        "answer": "  Number、String、Date ",
                        "type": "UnderLine"
                    }
                },
                {
                    "type": "string",
                    "string": " 等指定了"
                },
                {
                    "type": "question",
                    "question": {
                        "answer": " [[class]]属性 ",
                        "type": "UnderLine"
                    }
                },
                {
                    "type": "string",
                    "string": " ，以表示它们的类。语言使用者唯一可以访问[[class]]属性的方式是 "
                },
                {
                    "type": "question",
                    "question": {
                        "answer": " Object.prototype.toString ",
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
            "problem_index": "p5"
        },
        {
            "content": [
                {
                    "type": "string",
                    "string": "p5. 内置class 属性 "
                },
                {
                    "type": "question",
                    "question": {
                        "answer": " Object; Number; String; Boolean; Date; arg; RegExp; Function; Array; Error ",
                        "type": "UnderLine"
                    }
                },
                {
                    "type": "string",
                    "string": "代码 "
                },
                {
                    "type": "question",
                    "question": {
                        "answer": " var o = new Object;var n = new Number;var s = new String;var b = new Boolean;var d = new Date;var arg = function(){ return arguments }();var r = new RegExp;var f = new Function;var arr = new Array;var e = new Error;console.log([o, n, s, b, d, arg, r, f, arr, e].map(v => Object.prototype.toString.call(v)));  ",
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
            "problem_index": "p6"
        },
        {
            "content": [
                {
                    "type": "string",
                    "string": "p6. 因此，在 ES3 和之前的版本，JS 中类的概念是相当弱的，它仅仅是运行时的一个字符串属性。在 ES5 开始，[[class]] 私有属性被 "
                },
                {
                    "type": "question",
                    "question": {
                        "answer": " Symbol.toStringTag ",
                        "type": "UnderLine"
                    }
                },
                {
                    "type": "string",
                    "string": " 代替，其意义从命名上不再跟 "
                },
                {
                    "type": "question",
                    "question": {
                        "answer": " class ",
                        "type": "UnderLine"
                    }
                },
                {
                    "type": "string",
                    "string": " 相关。我们甚至可以自定义 Object.prototype.toString 的行为，请在这里创建了一个新对象，并且给它唯一的一个属性 Symbol.toStringTag，我们用字符串加法触发了 Object.prototype.toString 的调用，发现这个属性最终对 Object.prototype.toString 的结果产生了影响。代码  "
                },
                {
                    "type": "question",
                    "question": {
                        "answer": " var o = { [Symbol.toStringTag]: \"MyObject\" }; console.log(o + \"\"); ",
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
                    "string": "p7. 我们仍然要把 new 理解成 JavaScript 面向对象的一部分，下面我就来讲一下 new 操作具体做了哪些事情。new 运算接受"
                },
                {
                    "type": "question",
                    "question": {
                        "answer": " 一个构造器",
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
                        "answer": "一组调用参数",
                        "type": "UnderLine"
                    }
                },
                {
                    "type": "string",
                    "string": "，实际上做了几件事："
                },
                {
                    "type": "question",
                    "question": {
                        "answer": " 以构造器的 prototype 属性（注意与私有字段[[prototype]]的区分）为原型，创建新对象；将 this 和调用参数传给构造器，执行；",
                        "type": "UnderLine"
                    }
                },
                {
                    "type": "string",
                    "string": "如果构造器返回的是对象，则返回，否则返回 "
                },
                {
                    "type": "question",
                    "question": {
                        "answer": " 第一步创建的对象",
                        "type": "UnderLine"
                    }
                },
                {
                    "type": "string",
                    "string": "。new 这样的行为，试图让函数对象在语法上跟类变得相似，但是，它客观上提供了两种方式添加属性一是"
                },
                {
                    "type": "question",
                    "question": {
                        "answer": " 在构造器中添加属性 ",
                        "type": "UnderLine"
                    }
                },
                {
                    "type": "string",
                    "string": "，二是 "
                },
                {
                    "type": "question",
                    "question": {
                        "answer": " 在构造器的 prototype 属性上添加属性 ",
                        "type": "UnderLine"
                    }
                },
                {
                    "type": "string",
                    "string": "。代码展示用构造器模拟类的两种方法:第一种方法是"
                },
                {
                    "type": "question",
                    "question": {
                        "answer": "第一种方法是",
                        "type": "UnderLine"
                    }
                },
                {
                    "type": "string",
                    "string": ": 直接在构造器中修改 this，给 this 添加属性"
                },
                {
                    "type": "question",
                    "question": {
                        "answer": " 直接在构造器中修改 this，给 this 添加属性",
                        "type": "UnderLine"
                    }
                },
                {
                    "type": "string",
                    "string": "。第二种方法是 "
                },
                {
                    "type": "question",
                    "question": {
                        "answer": " 修改构造器的 prototype 属性指向的对象 ",
                        "type": "UnderLine"
                    }
                },
                {
                    "type": "string",
                    "string": "，它是从这个构造器构造出来的所有对象的原型。代码："
                },
                {
                    "type": "question",
                    "question": {
                        "answer": " function c1(){this.p1 = 1;this.p2 = function(){console.log(this.p1);}} var o1 = new c1;o1.p2();function c2(){}c2.prototype.p1 = 1;c2.prototype.p2 = function(){console.log(this.p1);}var o2 = new c2;o2.p2();",
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
                    "string": "p8. 没有 Object.create、Object.setPrototypeOf 的早期版本中，"
                },
                {
                    "type": "question",
                    "question": {
                        "answer": " new ",
                        "type": "UnderLine"
                    }
                },
                {
                    "type": "string",
                    "string": " 运算是唯一一个可以指定[[prototype]]的方法（当时的 mozilla 提供了私有属性 __proto__，但是多数环境并不支持），所以，当时已经有人试图用它来代替后来的 Object.create，我们甚至可以用它来实现一个 Object.create 的不完整的 polyfill，见以下代码："
                },
                {
                    "type": "question",
                    "question": {
                        "answer": " Object.create = function(prototype){var cls = function(){};cls.prototype = prototype;return new cls;} ",
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
                    "string": "p9. 好在 ES6 中加入了新特性 class，new 跟 function 搭配的怪异行为终于可以退休了（虽然运行时没有改变），在任何场景，我都推荐使用 ES6 的语法来定义类，而令 function 回归原本的函数语义。下面我们就来看一下 ES6 中的类。ES6 中引入了 class 关键字，并且在标准中删除了所有[[class]]相关的私有属性描述，类的概念正式从属性升级成语言的基础设施，从此，基于类的编程方式成为了 JavaScript 的官方编程范式。我们先看下类的基本写法：写一个，Rectangle 创建getter 获取 area； 创建Method calcArea获取area"
                },
                {
                    "type": "question",
                    "question": {
                        "answer": " class Rectangle {constructor(height, width) {this.height = height;this.width = width;}// Getter;get area() {return this.calcArea();}// Method;calcArea() {return this.height * this.width;}}",
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
            "problem_index": "p10"
        },
        {
            "content": [
                {
                    "type": "string",
                    "string": "p10. 在现有的类语法中，getter/setter 和 method 是兼容性最好的。我们通过 "
                },
                {
                    "type": "question",
                    "question": {
                        "answer": " get/set 关键字 ",
                        "type": "UnderLine"
                    }
                },
                {
                    "type": "string",
                    "string": " 来创建 getter，通过"
                },
                {
                    "type": "question",
                    "question": {
                        "answer": " 括号和大括号 ",
                        "type": "UnderLine"
                    }
                },
                {
                    "type": "string",
                    "string": "来创建方法，数据型成员最好写在构造器里面。并且类提供了继承能力。代码， 创造一个 Animal 类，并且通过 extends 关键字让 Dog 继承了它，展示了最终调用子类的 speak 方法获取了父类的 name。"
                },
                {
                    "type": "question",
                    "question": {
                        "answer": " class Animal { constructor(name) {this.name = name;}speak() {console.log(this.name + ' makes a noise.');}}class Dog extends Animal {constructor(name) {super(name); // call the super class constructor and pass in the name parameter}speak() {console.log(this.name + ' barks.');}}let d = new Dog('Mitzie');d.speak(); // Mitzie barks. ",
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
            "problem_index": "p11"
        },
        {
            "content": [
                {
                    "type": "string",
                    "string": "p11. 所以当我们使用类的思想来设计代码时，应该尽量使用 class 来声明类，而不是用旧语法，拿函数来模拟对象。一些激进的观点认为，class 关键字和箭头运算符可以完全替代旧的 function 关键字，它更明确地区分了定义函数和定义类两种意图，我认为这是有一定道理的。"
                },
                {
                    "type": "string",
                    "string": ""
                }
            ]
        }
    ]
]