/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./codeEditor.js":
/*!***********************!*\
  !*** ./codeEditor.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CodeEditorAreaLine\": () => (/* binding */ CodeEditorAreaLine),\n/* harmony export */   \"CodeLineInput\": () => (/* binding */ CodeLineInput)\n/* harmony export */ });\n/* harmony import */ var _framework_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./framework.js */ \"./framework.js\");\n/* harmony import */ var _listener_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./listener.js */ \"./listener.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== \"undefined\" && o[Symbol.iterator] || o[\"@@iterator\"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\n\n\nvar CodeEditarea = /*#__PURE__*/function (_Component) {\n  _inherits(CodeEditarea, _Component);\n\n  var _super = _createSuper(CodeEditarea);\n\n  function CodeEditarea() {\n    var _this;\n\n    _classCallCheck(this, CodeEditarea);\n\n    _this = _super.call(this);\n    _this.attributes = Object.create(null); // 必须有 this.attributes.problems 才可以生成，单独生成一个\n\n    _this.count = null;\n    _this.linesSet = [];\n    _this.onclickLine = null;\n    _this.root = document.createElement('div');\n    return _this;\n  }\n\n  _createClass(CodeEditarea, [{\n    key: \"render\",\n    value: function render() {\n      for (var key in this.attributes) {\n        this.root.setAttribute(key, this.attributes[key]);\n      }\n\n      this.count = 1; // let fristLine = <CodeEditorAreaLine class = \"codeEditLine 1\"></CodeEditorAreaLine>\n      // fristLine.mountTo(this.root)\n      // this.add_line()\n\n      return this.root;\n    }\n  }, {\n    key: \"add_line\",\n    value: function add_line(line, count) {\n      // let fristLine = <CodeEditorAreaLine class = \"codeEditLine 1\"></CodeEditorAreaLine>\n      // this.linesSet.push(line)\n      this.linesSet.splice(count - 1, 0, line); // while (this.root.hasChildNodes()) {\n      //     this.root.removeChild(this.root.lastChild);\n      // }\n      // line.mountTo(this.root)\n\n      var _iterator = _createForOfIteratorHelper(this.linesSet),\n          _step;\n\n      try {\n        for (_iterator.s(); !(_step = _iterator.n()).done;) {\n          var l = _step.value;\n          l.mountTo(this.root); // this.root.appendChild(l.render())\n          // this.root.appendChild(l.root)\n          // console.log(\"...\", l, this.linesSet.length)\n        }\n      } catch (err) {\n        _iterator.e(err);\n      } finally {\n        _iterator.f();\n      }\n\n      line.focus();\n    }\n  }]);\n\n  return CodeEditarea;\n}(_framework_js__WEBPACK_IMPORTED_MODULE_0__.Component);\n\nvar CodeEditMargin = /*#__PURE__*/function (_Component2) {\n  _inherits(CodeEditMargin, _Component2);\n\n  var _super2 = _createSuper(CodeEditMargin);\n\n  function CodeEditMargin() {\n    var _this2;\n\n    _classCallCheck(this, CodeEditMargin);\n\n    _this2 = _super2.call(this);\n    _this2.attributes = Object.create(null); // 必须有 this.attributes.problems 才可以生成，单独生成一个\n\n    _this2.root = document.createElement('div');\n    _this2.marginsSet = [];\n    return _this2;\n  }\n\n  _createClass(CodeEditMargin, [{\n    key: \"render\",\n    value: function render() {\n      for (var key in this.attributes) {\n        this.root.setAttribute(key, this.attributes[key]);\n      } // this.add_line(1)\n      // let firstMargin = <CodeEditMarginUnit class = \"codeEditMarginUnit\">1</CodeEditMarginUnit> // !!!!\n      // firstMargin.mountTo(this.root)\n\n\n      return this.root;\n    }\n  }, {\n    key: \"add_line\",\n    value: function add_line(count) {\n      var new_margin;\n\n      if (count) {\n        new_margin = (0,_framework_js__WEBPACK_IMPORTED_MODULE_0__.createElement)(CodeEditMarginUnit, {\n          \"class\": \"codeEditMarginUnit\"\n        }, String(count)); // let firstMargin = <CodeEditMarginUnit class = \"codeEditMarginUnit\">1</CodeEditMarginUnit>\n        // console.log(new_margin, new_margin.mountTo)\n\n        new_margin.mountTo(this.root);\n      } else {\n        new_margin = (0,_framework_js__WEBPACK_IMPORTED_MODULE_0__.createElement)(CodeEditMarginUnit, {\n          \"class\": \"codeEditMarginUnit\"\n        });\n        new_margin.mountTo(this.root);\n      }\n\n      this.marginsSet.push(new_margin);\n    }\n  }]);\n\n  return CodeEditMargin;\n}(_framework_js__WEBPACK_IMPORTED_MODULE_0__.Component);\n\nvar CodeEditorAreaLine = /*#__PURE__*/function (_Component3) {\n  _inherits(CodeEditorAreaLine, _Component3);\n\n  var _super3 = _createSuper(CodeEditorAreaLine);\n\n  function CodeEditorAreaLine() {\n    var _this3;\n\n    _classCallCheck(this, CodeEditorAreaLine);\n\n    _this3 = _super3.call(this);\n    _this3.attributes = Object.create(null); // 必须有 this.attributes.problems 才可以生成，单独生成一个\n\n    _this3.currinput = null;\n    _this3.codeEditor = null;\n    _this3.root = document.createElement('div');\n    _this3.root.contentEditable = true;\n\n    _this3.root.addEventListener(\"keydown\", function (event) {\n      if (event.keyCode === 13) {\n        event.preventDefault();\n      }\n    });\n\n    _this3.root.tabIndex = -1;\n    new _listener_js__WEBPACK_IMPORTED_MODULE_1__.MouseLeftOnclick(_this3.root, _this3.onclick); // let count = this.attributes.lineCount\n    // let codeEditor = this.attributes.codeEditor\n\n    _this3.enter_disaptch = function (count, codeEditor) {\n      return function (e) {\n        console.log(\"this\", this);\n\n        if (e.keyCode === 13) {\n          console.log(\"disaptch\", this);\n          var event = new Event(\"lineEnter\");\n          event[\"count\"] = count;\n          codeEditor.root.dispatchEvent(event);\n        }\n      };\n    };\n\n    _this3.func = null; // let disaptch_args = Object.create(null)\n    // disaptch_args.type = \"Enter\"\n    // disaptch_args.element = this.root.parentNode\n    // new KeyPressListener(this.root, 13, null, disaptch_args)\n\n    return _this3;\n  }\n\n  _createClass(CodeEditorAreaLine, [{\n    key: \"render\",\n    value: function render() {\n      if (this.attributes[\"class\"]) this.root.setAttribute(\"class\", this.attributes[\"class\"]);\n      if (this.attributes.id) this.root.setAttribute(\"id\", this.attributes[\"id\"]);\n      var codeEditor = this.attributes.codeEditor;\n      var count = this.attributes.lineCount;\n      console.log(\"render\", this);\n      var func = this.enter_disaptch(count, codeEditor);\n\n      if (this.func === null) {\n        this.root.addEventListener(\"keyup\", func);\n        this.func = func;\n      }\n\n      return this.root;\n    }\n  }, {\n    key: \"focus\",\n    value: function focus() {\n      this.root.focus();\n    }\n  }, {\n    key: \"onclick\",\n    value: function onclick(element, event) {\n      console.log(element, event.offsetX, event.offsetY); // inputLine.mountTo(element)\n    }\n  }]);\n\n  return CodeEditorAreaLine;\n}(_framework_js__WEBPACK_IMPORTED_MODULE_0__.Component);\n\nvar CodeEditMarginUnit = /*#__PURE__*/function (_Component4) {\n  _inherits(CodeEditMarginUnit, _Component4);\n\n  var _super4 = _createSuper(CodeEditMarginUnit);\n\n  function CodeEditMarginUnit() {\n    var _this4;\n\n    _classCallCheck(this, CodeEditMarginUnit);\n\n    _this4 = _super4.call(this);\n    _this4.attributes = Object.create(null); // 必须有 this.attributes.problems 才可以生成，单独生成一个\n\n    _this4.root = document.createElement('div');\n    return _this4;\n  }\n\n  _createClass(CodeEditMarginUnit, [{\n    key: \"render\",\n    value: function render() {\n      for (var key in this.attributes) {\n        this.root.setAttribute(key, this.attributes[key]);\n      }\n\n      return this.root;\n    }\n  }]);\n\n  return CodeEditMarginUnit;\n}(_framework_js__WEBPACK_IMPORTED_MODULE_0__.Component);\n\nvar CodeLineInput = /*#__PURE__*/function (_Component5) {\n  _inherits(CodeLineInput, _Component5);\n\n  var _super5 = _createSuper(CodeLineInput);\n\n  function CodeLineInput() {\n    var _this5;\n\n    _classCallCheck(this, CodeLineInput);\n\n    _this5 = _super5.call(this);\n    _this5.attributes = Object.create(null); // 必须有 this.attributes.problems 才可以生成，单独生成一个\n\n    _this5.state = \"start\";\n    _this5.content = '';\n    _this5.root = document.createElement('div');\n    return _this5;\n  }\n\n  _createClass(CodeLineInput, [{\n    key: \"render\",\n    value: function render() {\n      this.root.addEventListener(\"keydown\", function (e) {\n        if (e.keyCode === 13) {\n          e.preventDefault();\n        }\n      });\n      this.root.contentEditable = true;\n      this.root.tabIndex = -1;\n\n      for (var key in this.attributes) {\n        this.root.setAttribute(key, this.attributes[key]);\n      }\n\n      this.root.setAttribute(\"class\", \"codeLineInput\");\n      this.root.contentEditable = true;\n      this.root.tabIndex = \"-1\";\n      return this.root;\n    }\n  }]);\n\n  return CodeLineInput;\n}(_framework_js__WEBPACK_IMPORTED_MODULE_0__.Component);\n\nvar CodeEditor = /*#__PURE__*/function (_Component6) {\n  _inherits(CodeEditor, _Component6);\n\n  var _super6 = _createSuper(CodeEditor);\n\n  function CodeEditor() {\n    var _this6;\n\n    _classCallCheck(this, CodeEditor);\n\n    _this6 = _super6.call(this);\n    _this6.attributes = Object.create(null); // 必须有 this.attributes.problems 才可以生成，单独生成一个\n\n    _this6.line_height = 24; // unit px\n\n    _this6.onclickFocus = null;\n    _this6.count = 0;\n    _this6.lines = [];\n    _this6.input = (0,_framework_js__WEBPACK_IMPORTED_MODULE_0__.createElement)(CodeLineInput, {\n      \"class\": \"codeLineInput\"\n    });\n    _this6.root = document.createElement('div'); // this.processor = new CodeEditoerProcessor()\n\n    return _this6;\n  }\n\n  _createClass(CodeEditor, [{\n    key: \"render\",\n    value: function render() {\n      for (var key in this.attributes) {\n        this.root.setAttribute(key, this.attributes[key]);\n      }\n\n      var margin = (0,_framework_js__WEBPACK_IMPORTED_MODULE_0__.createElement)(CodeEditMargin, {\n        \"class\": \"codeEditMargin\",\n        line_height: \"24\"\n      }); // 应该把class 定义到constructor中去。\n\n      var textArea = (0,_framework_js__WEBPACK_IMPORTED_MODULE_0__.createElement)(CodeEditarea, {\n        \"class\": \"codeEditArea\",\n        line_height: \"24\"\n      });\n      this.margin = margin;\n      this.textArea = textArea;\n      margin.mountTo(this.root);\n      textArea.mountTo(this.root);\n      textArea.parent = this; // margin.add_line(1)\n      // margin.add_line(2)\n      // let firstLine = <CodeEditorAreaLine class = \"codeEditLine\"></CodeEditorAreaLine>\n\n      this.add_line(this.count);\n      var element = this;\n      this.root.addEventListener('lineEnter', function (e) {\n        element.add_line(e.count);\n      }); // new MouseLeftOnclick(this.textArea.root, this.onclick)\n      // new KeyPressListener(this.textArea.root, 32)// Space\n      // new KeyPressListener(this, 13, this.processor.add_line)// Enter\n\n      return this.root;\n    }\n  }, {\n    key: \"onclick\",\n    value: function onclick(element, event) {\n      console.log(element, event.offsetX, event.offsetY);\n    }\n  }, {\n    key: \"add_line\",\n    value: function add_line(curr_count) {\n      this.count += 1;\n      var line = (0,_framework_js__WEBPACK_IMPORTED_MODULE_0__.createElement)(CodeEditorAreaLine, {\n        \"class\": \"codeEditLine\",\n        codeEditor: this,\n        lineCount: curr_count + 1\n      }); // this.lines.push(line)\n\n      this.margin.add_line(curr_count + 1);\n      this.textArea.add_line(line, curr_count + 1);\n    }\n  }]);\n\n  return CodeEditor;\n}(_framework_js__WEBPACK_IMPORTED_MODULE_0__.Component);\n\nvar editor = (0,_framework_js__WEBPACK_IMPORTED_MODULE_0__.createElement)(CodeEditor, {\n  \"class\": \"codeEditor\",\n  id: \"id\"\n});\neditor.mountTo(document.body); // let firstMargin = <CodeEditMarginUnit class = \"codeEditMarginUnit\">1</CodeEditMarginUnit> // !!!!\n// firstMargin.mountTo(document.body)\n\n//# sourceURL=webpack://npmbasis/./codeEditor.js?");

/***/ }),

/***/ "./framework.js":
/*!**********************!*\
  !*** ./framework.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createElement\": () => (/* binding */ createElement),\n/* harmony export */   \"Component\": () => (/* binding */ Component),\n/* harmony export */   \"Underline\": () => (/* binding */ Underline),\n/* harmony export */   \"TextBox\": () => (/* binding */ TextBox),\n/* harmony export */   \"Answer\": () => (/* binding */ Answer),\n/* harmony export */   \"Button\": () => (/* binding */ Button)\n/* harmony export */ });\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== \"undefined\" && o[Symbol.iterator] || o[\"@@iterator\"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction createElement(type, attributes) {\n  var element;\n  if (typeof type == 'string') element = new ElementWrapper(type);else element = new type();\n\n  for (var name in attributes) {\n    element.setAttribute(name, attributes[name]);\n  }\n\n  for (var _len = arguments.length, children = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {\n    children[_key - 2] = arguments[_key];\n  }\n\n  for (var _i = 0, _children = children; _i < _children.length; _i++) {\n    var child = _children[_i];\n    if (typeof child === \"string\") child = new TextWrapper(child);\n    element.appendChild(child);\n  }\n\n  return element;\n}\nvar Component = /*#__PURE__*/function () {\n  function Component(type) {// this.root = this.render();\n\n    _classCallCheck(this, Component);\n  }\n\n  _createClass(Component, [{\n    key: \"setAttribute\",\n    value: function setAttribute(name, value) {\n      this.attributes[name] = value;\n    }\n  }, {\n    key: \"appendChild\",\n    value: function appendChild(child) {\n      child.mountTo(this.root);\n    }\n  }, {\n    key: \"mountTo\",\n    value: function mountTo(parent) {\n      parent.appendChild(this.render());\n    }\n  }, {\n    key: \"add_id\",\n    value: function add_id() {\n      if (this.attributes.id && this.root) this.root.id = thsi.attributes.id;\n    }\n  }, {\n    key: \"add_classes\",\n    value: function add_classes() {\n      if (this.attributes[\"class\"]) {\n        this.root.className = this.attributes[\"class\"];\n        var regExp = /\\S+/g;\n        var classes = this.attributes[\"class\"].match(regExp);\n\n        var _iterator = _createForOfIteratorHelper(classes),\n            _step;\n\n        try {\n          for (_iterator.s(); !(_step = _iterator.n()).done;) {\n            var c = _step.value;\n            this.root.classList.add(c);\n          }\n        } catch (err) {\n          _iterator.e(err);\n        } finally {\n          _iterator.f();\n        }\n      }\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return this.root;\n    }\n  }, {\n    key: \"addEventListener\",\n    value: function addEventListener(type, event) {\n      this.root.addEventListener(type, event);\n    } // mountTo(parent){\n    //     parent.appendChild(this.root)\n    // }\n    // addListener(problemClass, question_class){\n    //     this.root.addEventListener('keyup', function(event){\n    //         if (event.keyCode === 18) {\n    //         }\n    //     })\n    // }\n\n  }]);\n\n  return Component;\n}();\n\nvar TextWrapper = /*#__PURE__*/function (_Component) {\n  _inherits(TextWrapper, _Component);\n\n  var _super = _createSuper(TextWrapper);\n\n  function TextWrapper(content) {\n    var _this;\n\n    _classCallCheck(this, TextWrapper);\n\n    _this = _super.call(this);\n    _this.root = document.createTextNode(content);\n    return _this;\n  } // redner(){\n  //     return this.root\n  // }\n  // mountTo(parent){\n  //     parent.appendChild(this.root)\n  // }\n\n\n  return TextWrapper;\n}(Component);\n\nvar ElementWrapper = /*#__PURE__*/function (_Component2) {\n  _inherits(ElementWrapper, _Component2);\n\n  var _super2 = _createSuper(ElementWrapper);\n\n  function ElementWrapper(type) {\n    var _this2;\n\n    _classCallCheck(this, ElementWrapper);\n\n    _this2 = _super2.call(this);\n    _this2.root = document.createElement(type);\n    return _this2;\n  } // redner(){\n  //     return this.root\n  // }\n  // mountTo(parent){\n  //     parent.appendChild(this.root)\n  // }\n\n\n  return ElementWrapper;\n}(Component);\n\nvar Underline = /*#__PURE__*/function (_Component3) {\n  _inherits(Underline, _Component3);\n\n  var _super3 = _createSuper(Underline);\n\n  function Underline() {\n    var _this3;\n\n    _classCallCheck(this, Underline);\n\n    _this3 = _super3.call(this);\n    _this3.attributes = Object.create(null);\n    _this3.attributes.ans = \" \";\n    return _this3;\n  }\n\n  _createClass(Underline, [{\n    key: \"render\",\n    value: function render() {\n      length = this.attributes.ans.length;\n      this.root = document.createElement(\"input\");\n      this.root.type = \"text\";\n      this.root.style.height = \"35px\";\n      this.root.style.backgroundColor = \"\";\n      this.root.style.fontSize = \"x-large\";\n      this.root.style.width = String(length * 30) + \"px\";\n      if (length * 20 >= 1000) this.root.style.width = \"1000px\";\n      if (this.attributes.id) this.root.id = this.attributes.id;\n      if (this.attributes[\"class\"]) this.root.className = this.attributes[\"class\"]; // let s = document.createElement(\"span\")\n      // s.appendChild(document.createTextNode(this.attributes.ans))\n      // s.style.display = \"none\" \n      // this.root.appendChild(s)\n\n      return this.root;\n    }\n  }]);\n\n  return Underline;\n}(Component);\nvar TextBox = /*#__PURE__*/function (_Component4) {\n  _inherits(TextBox, _Component4);\n\n  var _super4 = _createSuper(TextBox);\n\n  function TextBox() {\n    var _this4;\n\n    _classCallCheck(this, TextBox);\n\n    _this4 = _super4.call(this);\n    _this4.attributes = Object.create(null);\n    _this4.attributes.ans = \" \";\n    return _this4;\n  }\n\n  _createClass(TextBox, [{\n    key: \"render\",\n    value: function render() {\n      this.root = document.createElement(\"textarea\");\n      this.root.style.fontSize = \"x-large\";\n      this.root.rows = \"5\";\n      this.root.cols = \"70\";\n      if (this.attributes.id) this.root.id = this.attributes.id;\n      if (this.attributes[\"class\"]) this.root.className = this.attributes[\"class\"];\n      var s = document.createElement(\"span\");\n      return this.root;\n    }\n  }]);\n\n  return TextBox;\n}(Component);\nvar Answer = /*#__PURE__*/function (_Component5) {\n  _inherits(Answer, _Component5);\n\n  var _super5 = _createSuper(Answer);\n\n  // 必须传一个当前problem 的id进来；以及 answer进来\n  function Answer() {\n    var _this5;\n\n    _classCallCheck(this, Answer);\n\n    _this5 = _super5.call(this);\n    _this5.attributes = Object.create(null);\n    _this5.root = document.createElement(\"span\");\n    return _this5;\n  }\n\n  _createClass(Answer, [{\n    key: \"render\",\n    value: function render(ans) {\n      // if(ans) this.attributes.ans = ans\n      if (this.attributes.id) this.root.id = this.attributes.id;\n      if (this.attributes[\"class\"]) this.root.className = this.attributes[\"class\"];\n      this.root.appendChild(document.createTextNode(this.attributes.ans));\n      this.root.style.display = \"inline\";\n      this.root.style.backgroundColor = \"black\";\n      return this.root;\n    }\n  }]);\n\n  return Answer;\n}(Component); // export class Display_button extends Component {// parent and class\n//     constructor() {\n//         super()\n//         this.attributes = new Object(null)\n//         this.root = document.createElement(\"button\")\n//     }\n//     render() {\n//         this.root.appendChild(document.createTextNode(\"Answer\"))// parent and class\n//         if (this.attributes.class) this.root.className = this.attributes.class\n//         if (this.attributes.id) this.root.id = this.attributes.id\n//         // this.root.onclick = function () {\n//         //     // console.log(this.attributes)// 在 onclick 里面，找不到this 了\n//         //     let parent = this.parentNode\n//         //     let spans = parent.getElementsByTagName(\"span\")\n//         //     for (let s of spans) {\n//         //         if (s.className === this.className) {\n//         //             if (s.style.backgroundColor === \"pink\") s.style.backgroundColor = \"black\"\n//         //             else if (s.style.backgroundColor === \"black\") s.style.backgroundColor = \"pink\"\n//         //         }\n//         //     }\n//         // }\n//         this.root.onclick = new onclikcs().display_ans\n//         return this.root\n//     }\n// }\n\nvar Button = /*#__PURE__*/function (_Component6) {\n  _inherits(Button, _Component6);\n\n  var _super6 = _createSuper(Button);\n\n  function Button() {\n    var _this6;\n\n    _classCallCheck(this, Button);\n\n    _this6 = _super6.call(this);\n    _this6.attributes = new Object(null);\n    _this6.root = document.createElement(\"button\");\n    _this6.onclick = null;\n    _this6.text = \"button\";\n    return _this6;\n  }\n\n  _createClass(Button, [{\n    key: \"render\",\n    value: function render() {\n      var onclick = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;\n      var text = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;\n      this.root.appendChild(document.createTextNode(this.text)); // parent and class\n\n      if (this.attributes[\"class\"]) this.root.className = this.attributes[\"class\"];\n      if (this.attributes.id) this.root.id = this.attributes.id;\n      if (onclick) this.root.onclick = onclick;else if (this.onclick) this.root.onclick = this.onclick;\n      return this.root;\n    }\n  }]);\n\n  return Button;\n}(Component);\n\n//# sourceURL=webpack://npmbasis/./framework.js?");

/***/ }),

/***/ "./listener.js":
/*!*********************!*\
  !*** ./listener.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"MousePosititonListener\": () => (/* binding */ MousePosititonListener),\n/* harmony export */   \"MouseLeftOnclick\": () => (/* binding */ MouseLeftOnclick),\n/* harmony export */   \"KeyPressListener\": () => (/* binding */ KeyPressListener)\n/* harmony export */ });\n/* harmony import */ var _codeEditor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./codeEditor.js */ \"./codeEditor.js\");\n/* harmony import */ var _framework_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./framework.js */ \"./framework.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\nfunction dispatch(element, type, properties) {\n  var event = new Event(type);\n\n  for (var name in properties) {\n    event[name] = properties[name];\n  }\n\n  element.dispatchEvent(event);\n}\n\nvar MousePosititonListener = /*#__PURE__*/function () {\n  function MousePosititonListener(element) {\n    var _this = this;\n\n    _classCallCheck(this, MousePosititonListener);\n\n    this.element = element;\n    this.type = \"MousePosititonListener\";\n    element.addEventListener(\"mousedown\", function (event) {\n      if (event.button === 0) {\n        var context = Object.create(null);\n\n        _this.start(event, context);\n\n        var mouseup = function mouseup(event) {\n          if (event.button === 0) {\n            _this.end(event, context);\n\n            document.removeEventListener(\"mouseup\", mouseup);\n          }\n        };\n\n        document.addEventListener(\"mouseup\", mouseup);\n      }\n    });\n  }\n\n  _createClass(MousePosititonListener, [{\n    key: \"start\",\n    value: function start(event, context) {\n      context.startX = event.clientX;\n      context.startY = event.clientY;\n    }\n  }, {\n    key: \"end\",\n    value: function end(event, context) {\n      context.endX = event.clientX;\n      context.endY = event.clientY;\n      dispatch(this.element, this.type, context);\n    }\n  }]);\n\n  return MousePosititonListener;\n}();\nvar MouseLeftOnclick = function MouseLeftOnclick(element, processor) {\n  var _this2 = this;\n\n  _classCallCheck(this, MouseLeftOnclick);\n\n  // codeLineListener\n  this.element = element; // this.count = count\n\n  this.type = \"CodeLineOnclick\" + this.count;\n  this.processor = processor;\n  this.res = null;\n  element.addEventListener(\"mouseup\", function (event) {\n    if (event.button === 0) {\n      console.log(\"left\");\n      if (_this2.processor) _this2.processor(_this2.element, event);\n    }\n  });\n};\nvar KeyPressListener = function KeyPressListener(element, keyCode, processor, disaptch_args) {\n  var _this3 = this;\n\n  _classCallCheck(this, KeyPressListener);\n\n  // codeLineListener\n  this.element = element;\n  this.type = \"CodeLineSpace\" + this.count;\n  this.processor = processor;\n  element.addEventListener(\"keyup\", function (event) {\n    if (event.keyCode === keyCode) {\n      // enter: 13; space: 32\n      console.log(\"keyCode\", keyCode);\n      event.preventDefault();\n      event.stopPropagation();\n      var props;\n      if (_this3.processor) props = processor(_this3.element);\n      if (disaptch_args) dispatch(disaptch_args.element, disaptch_args.type, []);\n    }\n  });\n}; // export class MousePositionRecognizer{\n//     constructor(dispatcher) {\n//         this.dispatcher = dispatcher;\n//       }\n// }\n\n//# sourceURL=webpack://npmbasis/./listener.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./codeEditor.js");
/******/ 	
/******/ })()
;