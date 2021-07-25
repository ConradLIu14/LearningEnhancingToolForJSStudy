export {node_type}
let node_type= [
    [
    {
        "problem_index": "14.1.1  Node类型\nsubmitpreview"
    },
    {
        "content": [
            {
                "type": "string",
                "string": "DOM Level 1描述了名为Node的接口，这个接口是所有DOM节点类型都必须实现的。Node接口在JavaScript中被实现为Node类型，在除IE之外的所有浏览器中都可以直接访问这个类型。在JavaScript中，所有节点类型都继承Node类型，因此所有类型都共享相同的基本属性和方法。每个节点都有nodeType属性，表示该节点的类型。节点类型由定义在Node类型上的12个数值常量表示："
            },
            {
                "type": "question",
                "question": {
                    "type": "underline",
                    "answer": " Node.ELEMENT_NODE "
                }
            },
            {
                "type": "string",
                "string": "（1）Node."
            },
            {
                "type": "question",
                "question": {
                    "type": "underline",
                    "answer": " ATTRIBUTE_NODE "
                }
            },
            {
                "type": "string",
                "string": "（2）Node."
            },
            {
                "type": "question",
                "question": {
                    "type": "underline",
                    "answer": " TEXT_NODE "
                }
            },
            {
                "type": "string",
                "string": "（3）Node."
            },
            {
                "type": "question",
                "question": {
                    "type": "underline",
                    "answer": " CDATA_SECTION_NODE "
                }
            },
            {
                "type": "string",
                "string": "（4）Node."
            },
            {
                "type": "question",
                "question": {
                    "type": "underline",
                    "answer": " ENTITY_REFERENCE_NODE "
                }
            },
            {
                "type": "string",
                "string": "（5）Node."
            },
            {
                "type": "question",
                "question": {
                    "type": "underline",
                    "answer": " ENTITY_NODE "
                }
            },
            {
                "type": "string",
                "string": "（6）Node."
            },
            {
                "type": "question",
                "question": {
                    "type": "underline",
                    "answer": " PROCESSING_INSTRUCTION_NODE "
                }
            },
            {
                "type": "string",
                "string": "（7）Node."
            },
            {
                "type": "question",
                "question": {
                    "type": "underline",
                    "answer": " COMMENT_NODE "
                }
            },
            {
                "type": "string",
                "string": "（8）Node."
            },
            {
                "type": "question",
                "question": {
                    "type": "underline",
                    "answer": " DOCUMENT_NODE "
                }
            },
            {
                "type": "string",
                "string": "（9）Node."
            },
            {
                "type": "question",
                "question": {
                    "type": "underline",
                    "answer": " DOCUMENT_TYPE_NODE "
                }
            },
            {
                "type": "string",
                "string": "（10）Node."
            },
            {
                "type": "question",
                "question": {
                    "type": "underline",
                    "answer": " DOCUMENT_FRAGMENT_NODE "
                }
            },
            {
                "type": "string",
                "string": "（11）Node."
            },
            {
                "type": "question",
                "question": {
                    "type": "underline",
                    "answer": " NOTATION_NODE "
                }
            },
            {
                "type": "string",
                "string": "（12）节点类型可通过与这些常量比较来确定，比如："
            },
            {
                "type": "question",
                "question": {
                    "type": "underline",
                    "answer": " if (someNode.nodeType == Node.ELEMENT_NODE) "
                }
            },
            {
                "type": "string",
                "string": "{ alert(\"Node is an element.\"); }这个例子比较了someNode.nodeType与Node.ELEMENT_NODE常量。如果两者相等，则意味着someNode是一个元素节点。浏览器并不支持所有节点类型。开发者最常用到的是"
            },
            {
                "type": "question",
                "question": {
                    "type": "underline",
                    "answer": " 元素节点 "
                }
            },
            {
                "type": "string",
                "string": "和"
            },
            {
                "type": "question",
                "question": {
                    "type": "underline",
                    "answer": " 文本节点 "
                }
            },
            {
                "type": "string",
                "string": "。本章后面会讨论每种节点受支持的程度及其用法。 "
            },
            {
                "type": "question",
                "question": {
                    "type": "underline",
                    "answer": " nodeName "
                }
            },
            {
                "type": "string",
                "string": "与"
            },
            {
                "type": "question",
                "question": {
                    "type": "underline",
                    "answer": " nodeValue "
                }
            },
            {
                "type": "string",
                "string": ""
            },
            {
                "type": "question",
                "question": {
                    "type": "underline",
                    "answer": " nodeName "
                }
            },
            {
                "type": "string",
                "string": "与"
            },
            {
                "type": "question",
                "question": {
                    "type": "underline",
                    "answer": " nodeValue "
                }
            },
            {
                "type": "string",
                "string": "保存着有关节点的信息。这两个属性的值完全取决于"
            },
            {
                "type": "question",
                "question": {
                    "type": "underline",
                    "answer": " 节点类型 "
                }
            },
            {
                "type": "string",
                "string": "。在使用这两个属性前，最好先检测节点类型，如下所示："
            },
            {
                "type": "question",
                "question": {
                    "type": "underline",
                    "answer": " if (someNode.nodeType == 1) "
                }
            },
            {
                "type": "string",
                "string": "{ value = someNode.nodeName; // 会显示元素的标签名 }在这个例子中，先检查了节点是不是元素。如果是，则将其nodeName的值赋给一个变量。对元素而言，nodeName始终等于"
            },
            {
                "type": "question",
                "question": {
                    "type": "underline",
                    "answer": " 元素的标签名 "
                }
            },
            {
                "type": "string",
                "string": "，而nodeValue则"
            },
            {
                "type": "question",
                "question": {
                    "type": "underline",
                    "answer": " 始终为null。 "
                }
            },
            {
                "type": "string",
                "string": "\n节点关系文档中的所有节点都与其他节点有关系。这些关系可以形容为"
            },
            {
                "type": "question",
                "question": {
                    "type": "underline",
                    "answer": " 家族关系 "
                }
            },
            {
                "type": "string",
                "string": "，相当于把文档树比作家谱。在HTML中，<body>元素是<html>元素的"
            },
            {
                "type": "question",
                "question": {
                    "type": "underline",
                    "answer": " 子元素 "
                }
            },
            {
                "type": "string",
                "string": "，而<html>元素则是<body>元素的"
            },
            {
                "type": "question",
                "question": {
                    "type": "underline",
                    "answer": " 父元素 "
                }
            },
            {
                "type": "string",
                "string": "。<head>元素是<body>元素的"
            },
            {
                "type": "question",
                "question": {
                    "type": "underline",
                    "answer": " 同胞元素 "
                }
            },
            {
                "type": "string",
                "string": "，因为它们有共同的父元素<html>。每个节点都有一个childNodes属性，其中包含一个"
            },
            {
                "type": "question",
                "question": {
                    "type": "underline",
                    "answer": " NodeList "
                }
            },
            {
                "type": "string",
                "string": "的实例。NodeList是一个类数组对象，用于存储可以按位置存取的有序节点。注意，NodeList是/不是 "
            },
            {
                "type": "question",
                "question": {
                    "type": "underline",
                    "answer": " 是    "
                }
            },
            {
                "type": "string",
                "string": "Array的实例，可以使用"
            },
            {
                "type": "question",
                "question": {
                    "type": "underline",
                    "answer": " 中括号 "
                }
            },
            {
                "type": "string",
                "string": "访问它的值，而且它也有length属性。NodeList对象独特的地方在于，它其实是一个对"
            },
            {
                "type": "question",
                "question": {
                    "type": "underline",
                    "answer": " DOM结构 "
                }
            },
            {
                "type": "string",
                "string": "的查询，因此DOM结构的变化会"
            },
            {
                "type": "question",
                "question": {
                    "type": "underline",
                    "answer": " 自动地在NodeList中反映出来 "
                }
            },
            {
                "type": "string",
                "string": "。我们通常说NodeList是"
            },
            {
                "type": "question",
                "question": {
                    "type": "underline",
                    "answer": " 实时的活动对象 "
                }
            },
            {
                "type": "string",
                "string": "，而不是"
            },
            {
                "type": "question",
                "question": {
                    "type": "underline",
                    "answer": " 第一次访问时所获得内容的快照 "
                }
            },
            {
                "type": "string",
                "string": "。下面的例子展示了如何使用中括号或使用item()方法访问NodeList中的元素：let firstChild = "
            },
            {
                "type": "question",
                "question": {
                    "type": "underline",
                    "answer": " someNode.childNodes[0] "
                }
            },
            {
                "type": "string",
                "string": "; let secondChild = "
            },
            {
                "type": "question",
                "question": {
                    "type": "underline",
                    "answer": " someNode.childNodes.item(1) "
                }
            },
            {
                "type": "string",
                "string": "; let node_length_count = "
            },
            {
                "type": "question",
                "question": {
                    "type": "underline",
                    "answer": " someNode.childNodes.length; "
                }
            },
            {
                "type": "string",
                "string": "无论是使用中括号还是item()方法都是可以的，但多数开发者倾向于使用中括号，因为它是一个类数组对象。注意，length属性表示那一时刻NodeList中节点的数量。使用"
            },
            {
                "type": "question",
                "question": {
                    "type": "underline",
                    "answer": " Array.prototype.slice() "
                }
            },
            {
                "type": "string",
                "string": "可以像前面介绍arguments时一样把NodeList对象转换为数组。比如："
            },
            {
                "type": "question",
                "question": {
                    "type": "underline",
                    "answer": " let arrayOfNodes = Array.prototype.slice.call(someNode.childNodes,0);\n "
                }
            },
            {
                "type": "string",
                "string": "当然，使用ES6的"
            },
            {
                "type": "question",
                "question": {
                    "type": "underline",
                    "answer": " Array.from() "
                }
            },
            {
                "type": "string",
                "string": "静态方法，可以替换这种笨拙的方式："
            },
            {
                "type": "question",
                "question": {
                    "type": "underline",
                    "answer": " let arrayOfNodes = Array.from(someNode.childNodes);\n "
                }
            },
            {
                "type": "string",
                "string": "每个节点都有一个指向其DOM树中的父元素 的 "
            },
            {
                "type": "question",
                "question": {
                    "type": "underline",
                    "answer": " parentNode "
                }
            },
            {
                "type": "string",
                "string": "属性。childNodes中的所有节点都有同一个父元素，因此它们的parentNode属性都指向同一个节点。此外，childNodes列表中的每个节点都是同一列表中其他节点的同胞节点。而使用"
            },
            {
                "type": "question",
                "question": {
                    "type": "underline",
                    "answer": " previousSibling "
                }
            },
            {
                "type": "string",
                "string": "和"
            },
            {
                "type": "question",
                "question": {
                    "type": "underline",
                    "answer": " nextSibling "
                }
            },
            {
                "type": "string",
                "string": "可以在这个列表的节点间导航。这个列表中第一个节点的previousSibling属性是"
            },
            {
                "type": "question",
                "question": {
                    "type": "underline",
                    "answer": " null "
                }
            },
            {
                "type": "string",
                "string": "，"
            },
            {
                "type": "question",
                "question": {
                    "type": "underline",
                    "answer": " 最后一个节点 "
                }
            },
            {
                "type": "string",
                "string": "的nextSibling属性也是null，如下所示：if ("
            },
            {
                "type": "question",
                "question": {
                    "type": "underline",
                    "answer": " someNode.nextSibling === null "
                }
            },
            {
                "type": "string",
                "string": "){ alert(\"Last node in the parent's childNodes list.\"); } else if ("
            },
            {
                "type": "question",
                "question": {
                    "type": "underline",
                    "answer": " someNode.previousSibling === null "
                }
            },
            {
                "type": "string",
                "string": "){ alert(\"First node in the parent's childNodes list.\"); }注意，如果childNodes中只有一个节点，则它的previousSibling和nextSibling属性都是null。父节点和它的第"
            },
            {
                "type": "question",
                "question": {
                    "type": "underline",
                    "answer": " 一 "
                }
            },
            {
                "type": "string",
                "string": "个及"
            },
            {
                "type": "question",
                "question": {
                    "type": "underline",
                    "answer": " 最后 "
                }
            },
            {
                "type": "string",
                "string": "一个子节点也有专门属性："
            },
            {
                "type": "question",
                "question": {
                    "type": "underline",
                    "answer": " firstChild "
                }
            },
            {
                "type": "string",
                "string": "和"
            },
            {
                "type": "question",
                "question": {
                    "type": "underline",
                    "answer": " lastChild "
                }
            },
            {
                "type": "string",
                "string": "分别指向childNodes中的第一个和最后一个子节点。someNode.firstChild的值始终等于someNode.childNodes"
            },
            {
                "type": "question",
                "question": {
                    "type": "underline",
                    "answer": " [0] "
                }
            },
            {
                "type": "string",
                "string": "，而someNode.lastChild的值始终等于someNode.childNodes["
            },
            {
                "type": "question",
                "question": {
                    "type": "underline",
                    "answer": " someNode.childNodes.length-1 "
                }
            },
            {
                "type": "string",
                "string": "]。如果只有一个子节点，则firstChild和lastChild指向同一个节点。如果没有子节点，则firstChild和lastChild都是null。上述这些节点之间的关系为在文档树的节点之间导航提供了方便。图14-2形象地展示了这些关系。图　画一下"
            },
            {
                "type": "question",
                "question": {
                    "type": "underline",
                    "answer": " 14-2 "
                }
            },
            {
                "type": "string",
                "string": "有了这些关系，childNodes属性的作用远远不止是必备属性那么简单了。这是因为利用这些关系指针，几乎可以访问到文档树中的任何节点，而这种便利性是childNodes的最大亮点。还有一个便利的方法是   "
            },
            {
                "type": "question",
                "question": {
                    "type": "underline",
                    "answer": " hasChildNodes() "
                }
            },
            {
                "type": "string",
                "string": "，这个方法如果返回true则说明节点有一个或多个子节点。相比查询childNodes的length属性，这个方法无疑更方便。最后还有一个所有节点都共享的关系。"
            },
            {
                "type": "question",
                "question": {
                    "type": "underline",
                    "answer": " ownerDocument "
                }
            },
            {
                "type": "string",
                "string": "属性是一个指向代表整个文档的文档节点的指针。所有节点都被创建它们（或自己所在）的文档所拥有，因为一个节点不能/ 能 "
            },
            {
                "type": "question",
                "question": {
                    "type": "underline",
                    "answer": " 不能 "
                }
            },
            {
                "type": "string",
                "string": "同时存在于两个或者多个文档中。这个属性为迅速访问文档节点提供了便利，因为无需在文档结构中逐层上溯了。注意　虽然所有节点类型都继承了Node，但并非所有节点都有子节点。本章后面会讨论不同节点类型的差异。\n操纵节点因为所有关系指针都是只读的，所以DOM又提供了一些操纵节点的方法。最常用的方法是"
            },
            {
                "type": "question",
                "question": {
                    "type": "underline",
                    "answer": " appendChild "
                }
            },
            {
                "type": "string",
                "string": "()，用于在childNodes列表末尾添加节点。添加新节点会更新相关的关系指针，包括父节点和之前的最后一个子节点。appendChild()方法返回新添加的节点，如下所示：let returnedNode = someNode."
            },
            {
                "type": "question",
                "question": {
                    "type": "underline",
                    "answer": " appendChild "
                }
            },
            {
                "type": "string",
                "string": "(newNode); alert(returnedNode == newNode); // true alert(someNode."
            },
            {
                "type": "question",
                "question": {
                    "type": "underline",
                    "answer": " lastChild  "
                }
            },
            {
                "type": "string",
                "string": "== newNode); // true如果把文档中已经存在的节点传给appendChild()，则"
            },
            {
                "type": "question",
                "question": {
                    "type": "underline",
                    "answer": " 这个节点会从之前的位置被转移到新位置 "
                }
            },
            {
                "type": "string",
                "string": "。即使DOM树通过各种关系指针维系，一个节点也会/不会 "
            },
            {
                "type": "question",
                "question": {
                    "type": "underline",
                    "answer": " 不会 "
                }
            },
            {
                "type": "string",
                "string": "在文档中同时出现在两个或更多个地方。因此，如果调用appendChild()传入父元素的第一个子节点，则这个节点会成为父元素的最后一个子节点，如下所示：// 假设someNode有多个子节点 let returnedNode = someNode.appendChild(someNode.firstChild); alert(returnedNode == someNode.firstChild); // "
            },
            {
                "type": "question",
                "question": {
                    "type": "underline",
                    "answer": " false "
                }
            },
            {
                "type": "string",
                "string": " true/false alert(returnedNode == someNode.lastChild); // "
            },
            {
                "type": "question",
                "question": {
                    "type": "underline",
                    "answer": " true "
                }
            },
            {
                "type": "string",
                "string": " true/false如果想把节点放到childNodes中的特定位置而不是末尾，则可以使用"
            },
            {
                "type": "question",
                "question": {
                    "type": "underline",
                    "answer": " insertBefore() "
                }
            },
            {
                "type": "string",
                "string": "方法。这个方法 也就是接收两个参数："
            },
            {
                "type": "question",
                "question": {
                    "type": "underline",
                    "answer": " 要插入的节点 "
                }
            },
            {
                "type": "string",
                "string": "和"
            },
            {
                "type": "question",
                "question": {
                    "type": "underline",
                    "answer": " 参照节点 "
                }
            },
            {
                "type": "string",
                "string": "。调用这个方法后，要插入的节点会变成参照节点的前一个同胞节点，并被返回。如果参照节点是null，则insertBefore()与"
            },
            {
                "type": "question",
                "question": {
                    "type": "underline",
                    "answer": " appendChild() "
                }
            },
            {
                "type": "string",
                "string": "效果相同，如下面的例子所示：// 作为最后一个子节点插入 returnedNode = someNode.insertBefore(newNode, null); alert(newNode == someNode.lastChild); // "
            },
            {
                "type": "question",
                "question": {
                    "type": "underline",
                    "answer": " true "
                }
            },
            {
                "type": "string",
                "string": " true/false // 作为新的第一个子节点插入 returnedNode = someNode.insertBefore(newNode, someNode.firstChild); alert(returnedNode == newNode); // "
            },
            {
                "type": "question",
                "question": {
                    "type": "underline",
                    "answer": " true "
                }
            },
            {
                "type": "string",
                "string": " true/false alert(newNode == someNode.firstChild); // "
            },
            {
                "type": "question",
                "question": {
                    "type": "underline",
                    "answer": " true  "
                }
            },
            {
                "type": "string",
                "string": " true/false // 插入最后一个子节点前面 returnedNode = someNode.insertBefore(newNode, someNode.lastChild); // altert should be true-> alert(newNode == someNode.childNodes["
            },
            {
                "type": "question",
                "question": {
                    "type": "underline",
                    "answer": " someNode.childNodes.length - 2 "
                }
            },
            {
                "type": "string",
                "string": "]); // trueappendChild()和insertBefore()在插入节点时不会删除任何已有节点。相对地，"
            },
            {
                "type": "question",
                "question": {
                    "type": "underline",
                    "answer": " replaceChild() "
                }
            },
            {
                "type": "string",
                "string": "方法接收两个参数：要插入的节点和要替换的节点。要替换的节点会被"
            },
            {
                "type": "question",
                "question": {
                    "type": "underline",
                    "answer": " 返回 "
                }
            },
            {
                "type": "string",
                "string": "并"
            },
            {
                "type": "question",
                "question": {
                    "type": "underline",
                    "answer": " 从文档树中完全移除 "
                }
            },
            {
                "type": "string",
                "string": "，要插入的节点会取而代之。下面看一个例子：// 替换第一个子节点-> "
            },
            {
                "type": "question",
                "question": {
                    "type": "underline",
                    "answer": " let returnedNode = someNode.replaceChild(newNode, someNode.firstChild); "
                }
            },
            {
                "type": "string",
                "string": " // 替换最后一个子节点-> "
            },
            {
                "type": "question",
                "question": {
                    "type": "underline",
                    "answer": " returnedNode = someNode.replaceChild(newNode, someNode.lastChild); "
                }
            },
            {
                "type": "string",
                "string": "使用replaceChild()插入一个节点后，所有关系指针都会从被替换的节点"
            },
            {
                "type": "question",
                "question": {
                    "type": "underline",
                    "answer": " 复制过来 "
                }
            },
            {
                "type": "string",
                "string": "。虽然被替换的节点从技术上说仍然被同一个文档所拥有，但文档中已经没有它的位置。要移除节点而不是替换节点，可以使用"
            },
            {
                "type": "question",
                "question": {
                    "type": "underline",
                    "answer": " removeChild() "
                }
            },
            {
                "type": "string",
                "string": "方法。这个方法接收一个参数，即要移除的节点。被移除的节点会被返回，如下面的例子所示：// 删除第一个子节点 "
            },
            {
                "type": "question",
                "question": {
                    "type": "underline",
                    "answer": " let formerFirstChild = someNode.removeChild(someNode.firstChild); "
                }
            },
            {
                "type": "string",
                "string": " // 删除最后一个子节点 "
            },
            {
                "type": "question",
                "question": {
                    "type": "underline",
                    "answer": " let formerLastChild = someNode.removeChild(someNode.lastChild); "
                }
            },
            {
                "type": "string",
                "string": "与replaceChild()方法一样，通过removeChild()被移除的节点从技术上说仍然被同一个文档所拥有，但文档中已经没有它的位置。上面介绍的4个方法都用于操纵某个节点的子元素，也就是说使用它们之前必须先取得"
            },
            {
                "type": "question",
                "question": {
                    "type": "underline",
                    "answer": " 父节点 "
                }
            },
            {
                "type": "string",
                "string": "（使用前面介绍的"
            },
            {
                "type": "question",
                "question": {
                    "type": "underline",
                    "answer": " parentNode "
                }
            },
            {
                "type": "string",
                "string": "属性）。并非所有节点类型都有子节点，如果在不支持子节点的节点上调用这些方法，则会导致抛出错误。\n其他方法所有节点类型还共享了两个方法。第一个是"
            },
            {
                "type": "question",
                "question": {
                    "type": "underline",
                    "answer": " cloneNode() "
                }
            },
            {
                "type": "string",
                "string": "，会返回与调用它的节点一模一样的节点。cloneNode()方法接收"
            },
            {
                "type": "question",
                "question": {
                    "type": "underline",
                    "answer": " 一个布尔值参数 "
                }
            },
            {
                "type": "string",
                "string": "，表示"
            },
            {
                "type": "question",
                "question": {
                    "type": "underline",
                    "answer": " 是否深复制 "
                }
            },
            {
                "type": "string",
                "string": "。在传入true参数时，会进行深复制，即复制节点及其整个子DOM树。如果传入false，则只会复制调用该方法的节点。复制返回的节点属于文档所有，但尚未指定父节点，所以可称为"
            },
            {
                "type": "question",
                "question": {
                    "type": "underline",
                    "answer": " 孤儿节点 "
                }
            },
            {
                "type": "string",
                "string": "（"
            },
            {
                "type": "question",
                "question": {
                    "type": "underline",
                    "answer": " orphan "
                }
            },
            {
                "type": "string",
                "string": "）。可以通过"
            },
            {
                "type": "question",
                "question": {
                    "type": "underline",
                    "answer": " appendChild() "
                }
            },
            {
                "type": "string",
                "string": "、"
            },
            {
                "type": "question",
                "question": {
                    "type": "underline",
                    "answer": " insertBefore() "
                }
            },
            {
                "type": "string",
                "string": "或"
            },
            {
                "type": "question",
                "question": {
                    "type": "underline",
                    "answer": " replaceChild() "
                }
            },
            {
                "type": "string",
                "string": "方法把孤儿节点添加到文档中。以下面的HTML片段为例：<ul> <li>item 1</li> <li>item 2</li> <li>item 3</li> </ul>如果myList保存着对这个<ul>元素的引用，则下列代码展示了使用cloneNode()方法的两种方式：let deepList = myList.cloneNode(true); alert(deepList.childNodes.length); // "
            },
            {
                "type": "question",
                "question": {
                    "type": "underline",
                    "answer": " 3 "
                }
            },
            {
                "type": "string",
                "string": "（IE9之前的版本）或7（其他浏览器） let shallowList = myList.cloneNode(false); alert(shallowList.childNodes.length); // "
            },
            {
                "type": "question",
                "question": {
                    "type": "underline",
                    "answer": " 0 "
                }
            },
            {
                "type": "string",
                "string": "在这个例子中，deepList保存着myList的副本。这意味着deepList有3个列表项，每个列表项又各自包含文本。变量shallowList则保存着myList的浅副本，因此没有子节点。deepList.childNodes.length的值会因IE8及更低版本和其他浏览器对空格的处理方式而不同。IE9之前的版本不会为空格创建节点。注意　cloneNode()方法会不会 "
            },
            {
                "type": "question",
                "question": {
                    "type": "underline",
                    "answer": " 不会   "
                }
            },
            {
                "type": "string",
                "string": "复制添加到DOM节点的JavaScript属性，比如事件处理程序。这个方法"
            },
            {
                "type": "question",
                "question": {
                    "type": "underline",
                    "answer": " 只复制HTML属性 "
                }
            },
            {
                "type": "string",
                "string": "，以及可选地复制"
            },
            {
                "type": "question",
                "question": {
                    "type": "underline",
                    "answer": " 子节点 "
                }
            },
            {
                "type": "string",
                "string": "。除此之外则一概不会复制。IE在很长时间内会复制事件处理程序，这是一个bug，所以推荐在复制前先删除事件处理程序。本节要介绍的最后一个方法是处理文档子树中的文本节点："
            },
            {
                "type": "question",
                "question": {
                    "type": "underline",
                    "answer": " normalize() "
                }
            },
            {
                "type": "string",
                "string": "。这个方法唯一的任务就是处理文档子树中的文本节点。由于解析器实现的差异或DOM操作等原因，可能会出现并不包含文本的文本节点，或者文本节点之间互为同胞关系。在节点上调用normalize()方法会检测这个节点的所有后代，从中搜索上述两种情形。如果发现空文本节点，则将其删除；如果两个同胞节点是相邻的，则将其合并为一个文本节点。这个方法将在本章后面进一步讨论。\n"
            }
        ]
    }
]
]