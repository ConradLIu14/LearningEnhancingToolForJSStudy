export {element_type}

let element_type = [
    [
        {
            "problem_index": "14.1.3  Element类型\n submitpreview"
        },
        {
            "content": [
                {
                    "type": "string",
                    "string": "除了Document类型，Element类型就是Web开发中最常用的类型了。Element表示"
                },
                {
                    "type": "question",
                    "question": {
                        "type": "underline",
                        "answer": " XML "
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
                        "answer": " HTML "
                    }
                },
                {
                    "type": "string",
                    "string": "元素，对外暴露出"
                },
                {
                    "type": "question",
                    "question": {
                        "type": "underline",
                        "answer": " 访问元素标签名 "
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
                        "answer": " 子节点 "
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
                        "answer": " 属性 "
                    }
                },
                {
                    "type": "string",
                    "string": "的能力。Element类型的节点具有以下特征：nodeType等于"
                },
                {
                    "type": "question",
                    "question": {
                        "type": "underline",
                        "answer": " 1 "
                    }
                },
                {
                    "type": "string",
                    "string": "；nodeName值为"
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
                    "string": "；nodeValue值为"
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
                    "string": "；parentNode值为"
                },
                {
                    "type": "question",
                    "question": {
                        "type": "underline",
                        "answer": " Document "
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
                        "answer": " Element "
                    }
                },
                {
                    "type": "string",
                    "string": "对象；子节点可以是"
                },
                {
                    "type": "question",
                    "question": {
                        "type": "underline",
                        "answer": " Element "
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
                        "answer": " Text "
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
                        "answer": " Comment "
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
                        "answer": " ProcessingInstruction "
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
                        "answer": " CDATASection "
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
                        "answer": " EntityReference "
                    }
                },
                {
                    "type": "string",
                    "string": "类型。可以通过"
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
                    "string": "或"
                },
                {
                    "type": "question",
                    "question": {
                        "type": "underline",
                        "answer": " tagName "
                    }
                },
                {
                    "type": "string",
                    "string": "属性来获取元素的标签名。这两个属性返回同样的值（添加后一个属性明显是为了不让人误会）。比如有下面的元素：<div id=\"myDiv\"></div>可以像这样取得这个元素的标签名：let div = document.getElementById(\"myDiv\"); alert(div.tagName); // \"DIV\" alert(div.tagName == div.nodeName); // true/false "
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
                    "string": "例子中的元素标签名为div，ID为\"myDiv\"。注意，div.tagName实际上返回的是\""
                },
                {
                    "type": "question",
                    "question": {
                        "type": "underline",
                        "answer": " DIV "
                    }
                },
                {
                    "type": "string",
                    "string": "\"而不是\"div\"。在HTML中，元素标签名始终以"
                },
                {
                    "type": "question",
                    "question": {
                        "type": "underline",
                        "answer": " 全大写 "
                    }
                },
                {
                    "type": "string",
                    "string": "表示；在XML（包括XHTML）中，标签名始终与"
                },
                {
                    "type": "question",
                    "question": {
                        "type": "underline",
                        "answer": " 源代码中的大小写一致 "
                    }
                },
                {
                    "type": "string",
                    "string": "。如果不确定脚本是在HTML文档还是XML文档中运行，最好"
                },
                {
                    "type": "question",
                    "question": {
                        "type": "underline",
                        "answer": " 将标签名转换为小写形式 "
                    }
                },
                {
                    "type": "string",
                    "string": "，以便于比较：if (element.tagName == \"div\"){ // 不要这样做，可能出错！ // do something here } if ("
                },
                {
                    "type": "question",
                    "question": {
                        "type": "underline",
                        "answer": " element.tagName.toLowerCase()  "
                    }
                },
                {
                    "type": "string",
                    "string": "== \"div\"){ // 推荐，适用于所有文档 // 做点什么 }这个例子演示了比较tagName属性的情形。第一个是容易出错的写法，因为HTML文档中tagName返回大写形式的标签名。第二个先把标签名转换为全部小写后再比较，这是推荐的做法，因为这对HTML和XML都适用。HTML元素所有HTML元素都通过"
                },
                {
                    "type": "question",
                    "question": {
                        "type": "underline",
                        "answer": " HTMLElement "
                    }
                },
                {
                    "type": "string",
                    "string": "类型表示，包括其"
                },
                {
                    "type": "question",
                    "question": {
                        "type": "underline",
                        "answer": " 直接实例 "
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
                        "answer": " 间接实例 "
                    }
                },
                {
                    "type": "string",
                    "string": "。另外，HTMLElement直接继承"
                },
                {
                    "type": "question",
                    "question": {
                        "type": "underline",
                        "answer": " Element "
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
                        "answer": " 增加了一些属性 "
                    }
                },
                {
                    "type": "string",
                    "string": "。每个属性都对应下列属性之一，它们是所有HTML元素上都有的标准属性："
                },
                {
                    "type": "question",
                    "question": {
                        "type": "underline",
                        "answer": " id "
                    }
                },
                {
                    "type": "string",
                    "string": "，元素在文档中的唯一标识符；"
                },
                {
                    "type": "question",
                    "question": {
                        "type": "underline",
                        "answer": " title "
                    }
                },
                {
                    "type": "string",
                    "string": "，包含元素的额外信息，通常以提示条形式展示；"
                },
                {
                    "type": "question",
                    "question": {
                        "type": "underline",
                        "answer": " lang "
                    }
                },
                {
                    "type": "string",
                    "string": "，元素内容的语言代码（很少用）；"
                },
                {
                    "type": "question",
                    "question": {
                        "type": "underline",
                        "answer": " dir "
                    }
                },
                {
                    "type": "string",
                    "string": "，语言的书写方向（\"ltr\"表示从左到右，\"rtl\"表示从右到左，同样很少用）；"
                },
                {
                    "type": "question",
                    "question": {
                        "type": "underline",
                        "answer": " className "
                    }
                },
                {
                    "type": "string",
                    "string": "，相当于class属性，用于指定元素的CSS类（因为class是ECMAScript关键字，所以不能直接用这个名字）。所有这些都可以用来获取对应的属性值，也可以用来"
                },
                {
                    "type": "question",
                    "question": {
                        "type": "underline",
                        "answer": " 修改相应的值 "
                    }
                },
                {
                    "type": "string",
                    "string": "。比如有下面的HTML元素：<div id=\"myDiv\" class=\"bd\" title=\"Body text\" lang=\"en\" dir=\"ltr\"></div>这个元素中的所有属性都可以使用下列JavaScript代码读取：let div = document."
                },
                {
                    "type": "question",
                    "question": {
                        "type": "underline",
                        "answer": " getElementById "
                    }
                },
                {
                    "type": "string",
                    "string": "(\"myDiv\"); alert(div.id); // \"myDiv\" alert(div."
                },
                {
                    "type": "question",
                    "question": {
                        "type": "underline",
                        "answer": " className "
                    }
                },
                {
                    "type": "string",
                    "string": "); // \"bd\" alert(div."
                },
                {
                    "type": "question",
                    "question": {
                        "type": "underline",
                        "answer": " title "
                    }
                },
                {
                    "type": "string",
                    "string": "); // \"Body text\" alert(div."
                },
                {
                    "type": "question",
                    "question": {
                        "type": "underline",
                        "answer": " lang "
                    }
                },
                {
                    "type": "string",
                    "string": "); // \"en\" alert(div."
                },
                {
                    "type": "question",
                    "question": {
                        "type": "underline",
                        "answer": " dir "
                    }
                },
                {
                    "type": "string",
                    "string": "); // \"ltr\"而且，可以使用下列代码修改元素的属性：div."
                },
                {
                    "type": "question",
                    "question": {
                        "type": "underline",
                        "answer": " id  "
                    }
                },
                {
                    "type": "string",
                    "string": "= \"someOtherId\"; div.className = \"ft\"; div.title = \"Some other text\"; div.lang = \"fr\"; div.dir =\"rtl\";并非所有这些属性的修改都会对页面产生影响。比如，把id或lang改成其他值对用户是不可见的（假设没有基于这两个属性应用CSS样式），而修改title属性则只会在鼠标移到这个元素上时才会反映出来。修改dir会导致页面文本立即向左或向右对齐。修改className会"
                },
                {
                    "type": "question",
                    "question": {
                        "type": "underline",
                        "answer": " 立即反映应用到新类名的CSS样式 "
                    }
                },
                {
                    "type": "string",
                    "string": "（如果定义了不同的样式）。如前所述，所有HTML元素都是HTMLElement或其子类型的实例。下表列出了所有HTML元素及其对应的类型（斜体表示已经废弃的元素）。元素类型元素类型A HTMLAnchorElement COL HTMLTableColElementABBR HTMLElement COLGROUP HTMLTableColElementACRONYM HTMLElement DD HTMLElementADDRESS HTMLElement DEL HTMLModElementAPPLET HTMLAppletElement DFN HTMLElementAREA HTMLAreaElement DIR HTMLDirectoryElementB HTMLElement DIV HTMLDivElementBASE HTMLBaseElement DL HTMLDListElementBASEFONT HTMLBaseFontElement DT HTMLElementBDO HTMLElement EM HTMLElementBIG HTMLElement FIELDSET HTMLFieldSetElementBLOCKQUOTE HTMLQuoteElement FONT HTMLFontElementBODY HTMLBodyElement FORM HTMLFormElementBR HTMLBRElement FRAME HTMLFrameElementBUTTON HTMLButtonElement FRAMESET HTMLFrameSetElementCAPTION HTMLTableCaptionElement H1 HTMLHeadingElementCENTER HTMLElement H2 HTMLHeadingElementCITE HTMLElement H3 HTMLHeadingElementCODE HTMLElement H4 HTMLHeadingElementH5 HTMLHeadingElement PRE HTMLPreElementH6 HTMLHeadingElement Q HTMLQuoteElementHEAD HTMLHeadElement S HTMLElementHR HTMLHRElement SAMP HTMLElementHTML HTMLHtmlElement SCRIPT HTMLScriptElementI HTMLElement SELECT HTMLSelectElementIFRAME HTMLIFrameElement SMALL HTMLElementIMG HTMLImageElement SPAN HTMLElementINPUT HTMLInputElement STRIKE HTMLElementINS HTMLModElement STRONG HTMLElementISINDEX HTMLIsIndexElement STYLE HTMLStyleElementKBD HTMLElement SUB HTMLElementLABEL HTMLLabelElement SUP HTMLElementLEGEND HTMLLegendElement TABLE HTMLTableElementLI HTMLLIElement TBODY HTMLTableSectionElementLINK HTMLLinkElement TD HTMLTableCellElementMAP HTMLMapElement TEXTAREA HTMLTextAreaElementMENU HTMLMenuElement TFOOT HTMLTableSectionElementMETA HTMLMetaElement TH HTMLTableCellElementNOFRAMES HTMLElement THEAD HTMLTableSectionElementNOSCRIPT HTMLElement TITLE HTMLTitleElementOBJECT HTMLObjectElement TR HTMLTableRowElementOL HTMLOListElement TT HTMLElementOPTGROUP HTMLOptGroupElement U HTMLElementOPTION HTMLOptionElement UL HTMLUListElementP HTMLParagraphElement VAR HTMLElementPARAM HTMLParamElement这里列出的每种类型都有关联的属性和方法。本书会涉及其中的很多类型。\n取得属性每个元素都有零个或多个属性，通常用于为元素或其内容附加更多信息。与属性相关的DOM方法主要有3个："
                },
                {
                    "type": "question",
                    "question": {
                        "type": "underline",
                        "answer": " getAttribute "
                    }
                },
                {
                    "type": "string",
                    "string": "()、"
                },
                {
                    "type": "question",
                    "question": {
                        "type": "underline",
                        "answer": " setAttribute "
                    }
                },
                {
                    "type": "string",
                    "string": "()和"
                },
                {
                    "type": "question",
                    "question": {
                        "type": "underline",
                        "answer": " removeAttribute "
                    }
                },
                {
                    "type": "string",
                    "string": "()。这些方法主要用于操纵属性，包括在HTMLElement类型上定义的属性。下面看一个例子：<div id=\"myDiv\" class=\"bd\" title=\"Body text\" lang=\"en\" dir=\"ltr\"></div>let div = "
                },
                {
                    "type": "question",
                    "question": {
                        "type": "underline",
                        "answer": " document.getElementById(\"myDiv\") "
                    }
                },
                {
                    "type": "string",
                    "string": "; alert(div.getAttribute(\"id\")); // \"myDiv\" alert("
                },
                {
                    "type": "question",
                    "question": {
                        "type": "underline",
                        "answer": " div.getAttribute(\"class\") "
                    }
                },
                {
                    "type": "string",
                    "string": "); // \"bd\" alert("
                },
                {
                    "type": "question",
                    "question": {
                        "type": "underline",
                        "answer": " div.getAttribute(\"title\") "
                    }
                },
                {
                    "type": "string",
                    "string": "); // \"Body text\" alert(div.getAttribute(\"lang\")); // \"en\" alert(div.getAttribute(\"dir\")); // \"ltr\"注意传给getAttribute()的属性名与它们实际的属性名是一样的，因此这里要传'"
                },
                {
                    "type": "question",
                    "question": {
                        "type": "underline",
                        "answer": " class "
                    }
                },
                {
                    "type": "string",
                    "string": "'而非\""
                },
                {
                    "type": "question",
                    "question": {
                        "type": "underline",
                        "answer": " className "
                    }
                },
                {
                    "type": "string",
                    "string": "\"（className是作为对象属性时才那么拼写的）。如果给定的属性不存在，则getAttribute()返回"
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
                    "string": "。getAttribute()方法也能取得不是HTML语言正式属性的自定义属性的值。比如下面的元素：<div id=\"myDiv\" my_special_attribute=\"hello!\"></div>这个元素有一个"
                },
                {
                    "type": "question",
                    "question": {
                        "type": "underline",
                        "answer": " 自定义属性 "
                    }
                },
                {
                    "type": "string",
                    "string": "my_special_attribute，值为\"hello!\"。可以像其他属性一样使用getAttribute()取得这个属性的值：let value = div.getAttribute(\"my_special_attribute\");注意，属性名区分/不区分"
                },
                {
                    "type": "question",
                    "question": {
                        "type": "underline",
                        "answer": " 不区分 "
                    }
                },
                {
                    "type": "string",
                    "string": "大小写，因此\"ID\"和\"id\"被认为是同一个属性。另外，根据HTML5规范的要求，自定义属性名应该"
                },
                {
                    "type": "question",
                    "question": {
                        "type": "underline",
                        "answer": " 前缀data- "
                    }
                },
                {
                    "type": "string",
                    "string": "以方便验证。元素的所有属性也可以通过相应DOM元素对象的属性来取得。当然，这包括HTMLElement上定义的直接映射对应属性的5个属性，还有所有"
                },
                {
                    "type": "question",
                    "question": {
                        "type": "underline",
                        "answer": " 公认 "
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
                        "answer": " 非自定义 "
                    }
                },
                {
                    "type": "string",
                    "string": "）的属性也会被添加为DOM对象的属性。比如下面的例子：<div id=\"myDiv\" align=\"left\" my_special_attribute=\"hello\"></div>因为id和align在HTML中是<div>元素公认的属性，所以DOM对象上也会有这两个属性, my_special_attribute是自定义属性，会/不会 "
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
                    "string": "成为DOM对象的属性。通过DOM对象访问的属性中有"
                },
                {
                    "type": "question",
                    "question": {
                        "type": "underline",
                        "answer": " 两 "
                    }
                },
                {
                    "type": "string",
                    "string": "个返回的值跟使用getAttribute()取得的值不一样。首先是"
                },
                {
                    "type": "question",
                    "question": {
                        "type": "underline",
                        "answer": " style "
                    }
                },
                {
                    "type": "string",
                    "string": "属性，这个属性用于为元素设定CSS样式。在使用getAttribute()访问style属性时，返回的是"
                },
                {
                    "type": "question",
                    "question": {
                        "type": "underline",
                        "answer": " CSS字符串 "
                    }
                },
                {
                    "type": "string",
                    "string": "。而在通过DOM对象的属性访问时，style属性返回的是一个（"
                },
                {
                    "type": "question",
                    "question": {
                        "type": "underline",
                        "answer": " CSSStyleDeclaration "
                    }
                },
                {
                    "type": "string",
                    "string": "）"
                },
                {
                    "type": "question",
                    "question": {
                        "type": "underline",
                        "answer": " 对象 "
                    }
                },
                {
                    "type": "string",
                    "string": "。DOM对象的style属性用于以编程方式读写元素样式，因此不会直接映射为元素中style属性的字符串值。第二个属性其实是一类，即"
                },
                {
                    "type": "question",
                    "question": {
                        "type": "underline",
                        "answer": " 事件处理程序 "
                    }
                },
                {
                    "type": "string",
                    "string": "（或者"
                },
                {
                    "type": "question",
                    "question": {
                        "type": "underline",
                        "answer": " 事件属性 "
                    }
                },
                {
                    "type": "string",
                    "string": "），比如onclick。在元素上使用事件属性时（比如onclick），属性的值是"
                },
                {
                    "type": "question",
                    "question": {
                        "type": "underline",
                        "answer": " 一段JavaScript代码 "
                    }
                },
                {
                    "type": "string",
                    "string": "。如果使用getAttribute()访问事件属性，则返回的是"
                },
                {
                    "type": "question",
                    "question": {
                        "type": "underline",
                        "answer": " 字符串形式的源代码 "
                    }
                },
                {
                    "type": "string",
                    "string": "。而通过DOM对象的属性访问事件属性时返回的则是一个"
                },
                {
                    "type": "question",
                    "question": {
                        "type": "underline",
                        "answer": " JavaScript函数 "
                    }
                },
                {
                    "type": "string",
                    "string": "（未指定该属性则返回"
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
                    "string": "）。这是因为onclick及其他事件属性是可以接受函数作为值的。考虑到以上差异，开发者在进行DOM编程时通常会放弃使用"
                },
                {
                    "type": "question",
                    "question": {
                        "type": "underline",
                        "answer": " getAttribute() "
                    }
                },
                {
                    "type": "string",
                    "string": "而只使用"
                },
                {
                    "type": "question",
                    "question": {
                        "type": "underline",
                        "answer": " 对象属性 "
                    }
                },
                {
                    "type": "string",
                    "string": "。getAttribute()主要用于"
                },
                {
                    "type": "question",
                    "question": {
                        "type": "underline",
                        "answer": " 取得自定义属性的值 "
                    }
                },
                {
                    "type": "string",
                    "string": "。\n设置属性与getAttribute()配套的方法是setAttribute()，这个方法接收两个参数："
                },
                {
                    "type": "question",
                    "question": {
                        "type": "underline",
                        "answer": " 要设置的属性名 "
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
                        "answer": " 属性的值 "
                    }
                },
                {
                    "type": "string",
                    "string": "。如果属性已经存在，则setAttribute()会"
                },
                {
                    "type": "question",
                    "question": {
                        "type": "underline",
                        "answer": " 以指定的值替换原来的值 "
                    }
                },
                {
                    "type": "string",
                    "string": "；如果属性不存在，则"
                },
                {
                    "type": "question",
                    "question": {
                        "type": "underline",
                        "answer": " setAttribute()会以指定的值创建该属性 "
                    }
                },
                {
                    "type": "string",
                    "string": "。下面看一个例子：div.setAttribute(\"id\", \"someOtherId\"); div.setAttribute(\"class\", \"ft\"); div.setAttribute(\"title\", \"Some other text\"); div.setAttribute(\"lang\",\"fr\"); div.setAttribute(\"dir\", \"rtl\");setAttribute()适用于"
                },
                {
                    "type": "question",
                    "question": {
                        "type": "underline",
                        "answer": " HTML属性 "
                    }
                },
                {
                    "type": "string",
                    "string": "，也/不 "
                },
                {
                    "type": "question",
                    "question": {
                        "type": "underline",
                        "answer": " 也 "
                    }
                },
                {
                    "type": "string",
                    "string": "适用于自定义属性。另外，使用setAttribute()方法设置的属性名会"
                },
                {
                    "type": "question",
                    "question": {
                        "type": "underline",
                        "answer": " 规范为小写形式 "
                    }
                },
                {
                    "type": "string",
                    "string": "，因此\"ID\"会变成\"id\"。直接给DOM对象的属性赋值也可以/不可以 "
                },
                {
                    "type": "question",
                    "question": {
                        "type": "underline",
                        "answer": " 可以 "
                    }
                },
                {
                    "type": "string",
                    "string": "设置元素属性的值，因为元素属性也是DOM对象属性，如下所示：div.id = \"someOtherId\"; div.align = \"left\";注意，在DOM对象上添加自定义属性，如下面的例子所示，会/不会 "
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
                    "string": "自动让它变成元素的属性：div.mycolor = \"red\"; alert(div.getAttribute(\"mycolor\")); // "
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
                    "string": "（"
                },
                {
                    "type": "question",
                    "question": {
                        "type": "underline",
                        "answer": " IE "
                    }
                },
                {
                    "type": "string",
                    "string": "除外）这个例子添加了一个自定义属性mycolor并将其值设置为\"red\"。在多数浏览器中，这个属性会/不会 "
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
                    "string": "自动变成元素属性。因此调用getAttribute()取得mycolor的值会返回"
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
                    "string": "。最后一个方法"
                },
                {
                    "type": "question",
                    "question": {
                        "type": "underline",
                        "answer": " removeAttribute "
                    }
                },
                {
                    "type": "string",
                    "string": "()用于从元素中删除属性。这样不单单是清除属性的值，而是会把整个属性完全从元素中去掉，如下所示：div.removeAttribute(\"class\");这个方法用得并不多，但在序列化DOM元素时可以通过它控制要包含的属性。\nattributes 属性Element类型是"
                },
                {
                    "type": "question",
                    "question": {
                        "type": "underline",
                        "answer": " 唯一使用 "
                    }
                },
                {
                    "type": "string",
                    "string": "attributes属性的DOM节点类型。attributes属性包含一个"
                },
                {
                    "type": "question",
                    "question": {
                        "type": "underline",
                        "answer": " NamedNodeMap实例 "
                    }
                },
                {
                    "type": "string",
                    "string": "，是一个类似"
                },
                {
                    "type": "question",
                    "question": {
                        "type": "underline",
                        "answer": " NodeList的“实时”集合 "
                    }
                },
                {
                    "type": "string",
                    "string": "。元素的每个属性都表示为一个"
                },
                {
                    "type": "question",
                    "question": {
                        "type": "underline",
                        "answer": " Attr节点 "
                    }
                },
                {
                    "type": "string",
                    "string": "，并保存在这个NamedNodeMap对象中。NamedNodeMap对象包含下列方法："
                },
                {
                    "type": "question",
                    "question": {
                        "type": "underline",
                        "answer": " getNamedItem(name) "
                    }
                },
                {
                    "type": "string",
                    "string": "，返回nodeName属性等于name的节点；"
                },
                {
                    "type": "question",
                    "question": {
                        "type": "underline",
                        "answer": " removeNamedItem(name) "
                    }
                },
                {
                    "type": "string",
                    "string": "，删除nodeName属性等于name的节点； "
                },
                {
                    "type": "question",
                    "question": {
                        "type": "underline",
                        "answer": " setNamedItem(node) "
                    }
                },
                {
                    "type": "string",
                    "string": "，向列表中添加node节点，以其nodeName为索引；"
                },
                {
                    "type": "question",
                    "question": {
                        "type": "underline",
                        "answer": " item(pos) "
                    }
                },
                {
                    "type": "string",
                    "string": "，返回索引位置pos处的节点。attributes属性中的每个节点的"
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
                    "string": "是对应属性的名字，"
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
                    "string": "是属性的值。比如，要取得元素id属性的值，可以使用以下代码：let id = "
                },
                {
                    "type": "question",
                    "question": {
                        "type": "underline",
                        "answer": " element.attributes.getNamedItem(\"id\").nodeValue "
                    }
                },
                {
                    "type": "string",
                    "string": ";下面是使用中括号访问属性的简写形式：let id = "
                },
                {
                    "type": "question",
                    "question": {
                        "type": "underline",
                        "answer": " element.attributes[\"id\"].nodeValue "
                    }
                },
                {
                    "type": "string",
                    "string": ";同样，也可以用这种语法设置属性的值，即先取得属性节点，再将其nodeValue设置为新值，如下所示：element."
                },
                {
                    "type": "question",
                    "question": {
                        "type": "underline",
                        "answer": " attributes[\"id\"].nodeValue = \"someOtherId\" "
                    }
                },
                {
                    "type": "string",
                    "string": ";"
                },
                {
                    "type": "question",
                    "question": {
                        "type": "underline",
                        "answer": " removeNamedItem "
                    }
                },
                {
                    "type": "string",
                    "string": "()方法与元素上的removeAttribute()方法类似，也是删除指定名字的属性。下面的例子展示了这两个方法唯一的不同之处，就是removeNamedItem()"
                },
                {
                    "type": "question",
                    "question": {
                        "type": "underline",
                        "answer": " 返回表示被删除属性的Attr节点 "
                    }
                },
                {
                    "type": "string",
                    "string": "：let oldAttr = "
                },
                {
                    "type": "question",
                    "question": {
                        "type": "underline",
                        "answer": " element.attributes.removeNamedItem(\"id\") "
                    }
                },
                {
                    "type": "string",
                    "string": ";"
                },
                {
                    "type": "question",
                    "question": {
                        "type": "underline",
                        "answer": " setNamedItem() "
                    }
                },
                {
                    "type": "string",
                    "string": "方法接收一个属性节点，然后给元素添加一个新属性，很少使用 如下所示：element.attributes.setNamedItem(newAttr);一般来说，因为使用起来更简便，通常开发者更喜欢使用getAttribute()、removeAttribute()和setAttribute()方法，而不是刚刚介绍的NamedNodeMap对象的方法。attributes属性最有用的场景是"
                },
                {
                    "type": "question",
                    "question": {
                        "type": "underline",
                        "answer": " 需要迭代元素上所有属性的时候 "
                    }
                },
                {
                    "type": "string",
                    "string": "。这时候往往是要"
                },
                {
                    "type": "question",
                    "question": {
                        "type": "underline",
                        "answer": " 把DOM结构序列化为XML或HTML字符串 "
                    }
                },
                {
                    "type": "string",
                    "string": "。比如，以下代码能够迭代一个元素上的所有属性并以attribute1= \"value1\" attribute2=\"value2\"的形式生成格式化字符串：这个函数使用数组存储每个名/值对，迭代完所有属性后，再将这些名/值对用空格拼接在一起。（这个技术常用于序列化为长字符串。）这个函数中的for循环使用attributes.length属性迭代每个属性，将每个属性的名字和值输出为字符串。function outputAttributes(element) { let pairs = []; for (let i = 0, len = element.attributes.length; i < len; ++i) { "
                },
                {
                    "type": "question",
                    "question": {
                        "type": "underline",
                        "answer": " const attribute = element.attributes[i] "
                    }
                },
                {
                    "type": "string",
                    "string": "; "
                },
                {
                    "type": "question",
                    "question": {
                        "type": "underline",
                        "answer": " pairs.push(`${attribute.nodeName}=\"${attribute.nodeValue}\"`) "
                    }
                },
                {
                    "type": "string",
                    "string": "; } return"
                },
                {
                    "type": "question",
                    "question": {
                        "type": "underline",
                        "answer": "  pairs.join(\" \"); "
                    }
                },
                {
                    "type": "string",
                    "string": " }不同浏览器返回的attributes中的属性顺序也可能不一样。HTML或XML代码中属性出现的顺序不一定与attributes中的顺序一致。\n创建元素可以使用"
                },
                {
                    "type": "question",
                    "question": {
                        "type": "underline",
                        "answer": " document.createElement() "
                    }
                },
                {
                    "type": "string",
                    "string": "方法创建新元素。这个方法接收一个参数，即"
                },
                {
                    "type": "question",
                    "question": {
                        "type": "underline",
                        "answer": " 要创建元素的标签名 "
                    }
                },
                {
                    "type": "string",
                    "string": "。在HTML文档中，标签名是区分/不区分 "
                },
                {
                    "type": "question",
                    "question": {
                        "type": "underline",
                        "answer": " 不区分 "
                    }
                },
                {
                    "type": "string",
                    "string": "大小写的，而XML文档（包括XHTML）是区分/不区分 "
                },
                {
                    "type": "question",
                    "question": {
                        "type": "underline",
                        "answer": " 区分 "
                    }
                },
                {
                    "type": "string",
                    "string": "大小写的。要创建<div>元素，可以使用下面的代码：let div = document.createElement(\"div\");使用createElement()方法创建新元素的同时也会将其"
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
                    "string": "属性设置为"
                },
                {
                    "type": "question",
                    "question": {
                        "type": "underline",
                        "answer": " document "
                    }
                },
                {
                    "type": "string",
                    "string": "。此时，可以再为其添加属性、添加更多子元素。比如：div.id = \"myNewDiv\"; div.className = \"box\";在新元素上设置这些属性只会附加信息。因为这个元素还没有添加到文档树，所以不会影响浏览器显示。要把元素添加到文档树，可以使用"
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
                    "string": "()、"
                },
                {
                    "type": "question",
                    "question": {
                        "type": "underline",
                        "answer": " insertBefore "
                    }
                },
                {
                    "type": "string",
                    "string": "()或"
                },
                {
                    "type": "question",
                    "question": {
                        "type": "underline",
                        "answer": " replaceChild "
                    }
                },
                {
                    "type": "string",
                    "string": "()。比如，以下代码会把刚才创建的元素添加到文档的<body>元素中：document.body."
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
                    "string": "(div);元素被添加到文档树之后，浏览器会"
                },
                {
                    "type": "question",
                    "question": {
                        "type": "underline",
                        "answer": " 立即将其渲染出来 "
                    }
                },
                {
                    "type": "string",
                    "string": "。之后再对这个元素所做的任何修改，都会立即在浏览器中反映出来。\n元素后代元素可以拥有"
                },
                {
                    "type": "question",
                    "question": {
                        "type": "underline",
                        "answer": " 任意多 "
                    }
                },
                {
                    "type": "string",
                    "string": "个子元素和后代元素，因为元素本身也可以是其他元素的子元素。childNodes属性包含元素所有的子节点，这些子节点可能是其他元素、文本节点、注释或处理指令。不同浏览器在识别这些节点时的表现有明显不同。比如下面的代码：<ul id=\"myList\"> <li>Item 1</li> <li>Item 2</li> <li>Item 3</li> </ul>在解析以上代码时，<ul>元素会包含7个子元素，其中3个是<li>元素，还有4个Text节点（表示"
                },
                {
                    "type": "question",
                    "question": {
                        "type": "underline",
                        "answer": " <li>元素周围的空格 "
                    }
                },
                {
                    "type": "string",
                    "string": "）。如果把元素之间的空格删掉，变成下面这样，则所有浏览器都会返回同样数量的子节点：<ul id=\"myList\"><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul>所有浏览器解析上面的代码后，<ul>元素都会包含3个子节点。考虑到这种情况，通常在执行某个操作之后需要先检测一下节点的nodeType，如下所示：for (let i = 0, len = element.childNodes.length; i < len; ++i) { if (element."
                },
                {
                    "type": "question",
                    "question": {
                        "type": "underline",
                        "answer": " childNodes[i].nodeType "
                    }
                },
                {
                    "type": "string",
                    "string": " == 1) { // 执行某个操作 } }以上代码会遍历某个元素的子节点，并且只在nodeType等于1（即Element节点）时执行某个操作。要取得某个元素的子节点和其他后代节点，可以使用元素的getElementsByTagName()方法。在元素上调用这个方法与在文档上调用是一样的，只不过搜索范围限制在当前元素之内，即只会返回当前元素的后代。对于本节前面<ul>的例子，可以像下面这样取得其所有的<li>元素：let ul = document.getElementById(\"myList\"); let items = ul."
                },
                {
                    "type": "question",
                    "question": {
                        "type": "underline",
                        "answer": " getElementsByTagName "
                    }
                },
                {
                    "type": "string",
                    "string": "(\"li\");这里例子中的<ul>元素只有一级子节点，如果它包含更多层级，则所有层级中的<li>元素都会返回。\n"
                }
            ]
        }
    ]
]