/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/src/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/input-util.js":
/*!***************************!*\
  !*** ./src/input-util.js ***!
  \***************************/
/*! exports provided: setOnClick, setOnMove */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setOnClick\", function() { return setOnClick; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setOnMove\", function() { return setOnMove; });\n/**\r\n * Adds click listener to canvas using relative x and y for the callback\r\n * \r\n * @param {Canvas} canvas \r\n * @param {function(x, y)} callback \r\n */\r\nfunction setOnClick(canvas, callback) {\r\n  canvas.addEventListener(\"click\", () => {\r\n    let clientRatioX = canvas.width/canvas.clientWidth;\r\n    let clientRatioY = canvas.height/canvas.clientHeight;\r\n    let x = (event.pageX - canvas.offsetLeft) * clientRatioX;\r\n    let y = (event.pageY - canvas.offsetTop) * clientRatioY;\r\n    callback(x, y);\r\n  })\r\n}\r\n\r\n/**\r\n * Adds click listener to canvas using relative x and y for the callback\r\n * \r\n * @param {Canvas} canvas\r\n * @param {function(x, y)} callback\r\n */\r\nfunction setOnMove(canvas, callback) {\r\n  canvas.addEventListener(\"mousemove\", () => {\r\n    let clientRatioX = canvas.width/canvas.clientWidth;\r\n    let clientRatioY = canvas.height/canvas.clientHeight;\r\n    let x = (event.pageX - canvas.offsetLeft) * clientRatioX;\r\n    let y = (event.pageY - canvas.offsetTop) * clientRatioY;\r\n    callback(x, y);\r\n  })\r\n}\r\n\n\n//# sourceURL=webpack:///./src/input-util.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _input_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./input-util */ \"./src/input-util.js\");\n/* harmony import */ var _point__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./point */ \"./src/point.js\");\n/* harmony import */ var _triangle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./triangle */ \"./src/triangle.js\");\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./util */ \"./src/util.js\");\n\r\n\r\n\r\n\r\n\r\nvar canvas = document.getElementById(\"canvas\");\r\nvar ctx = canvas.getContext(\"2d\");\r\ncanvas.width = 600;\r\ncanvas.height = 600;\r\nctx.fillStyle = \"#777\";\r\nctx.fillRect(0, 0, canvas.width, canvas.height)\r\n\r\nObject(_input_util__WEBPACK_IMPORTED_MODULE_0__[\"setOnClick\"])(canvas, (x, y) => {\r\n  let p1 = new _point__WEBPACK_IMPORTED_MODULE_1__[\"default\"](x, y);\r\n  let p2 = new _point__WEBPACK_IMPORTED_MODULE_1__[\"default\"](x + Object(_util__WEBPACK_IMPORTED_MODULE_3__[\"randInt\"])(10,50), y - Object(_util__WEBPACK_IMPORTED_MODULE_3__[\"randInt\"])(10,20));\r\n  let p3 = new _point__WEBPACK_IMPORTED_MODULE_1__[\"default\"](x - Object(_util__WEBPACK_IMPORTED_MODULE_3__[\"randInt\"])(10,20), y - Object(_util__WEBPACK_IMPORTED_MODULE_3__[\"randInt\"])(10,50));\r\n  let tri = new _triangle__WEBPACK_IMPORTED_MODULE_2__[\"default\"](p1, p2, p3)\r\n  console.log(x,y);\r\n  tri.draw(ctx);\r\n  tri.centroid.draw(ctx);\r\n  let subtris = getSubTriangles(tri);\r\n  subtris[0].draw(ctx, \"red\");\r\n  subtris[1].draw(ctx, \"yellow\");\r\n  subtris[2].draw(ctx, \"blue\");\r\n  subtris[3].draw(ctx, \"lime\");\r\n});\r\n\r\nfunction getSubTriangles(triangle) {\r\n  let { p1, p2, p3 } = triangle;\r\n  let p4 = _point__WEBPACK_IMPORTED_MODULE_1__[\"default\"].midpoint(p1, p2, Object(_util__WEBPACK_IMPORTED_MODULE_3__[\"randFloat\"])(.2,.8));\r\n  let p5 = _point__WEBPACK_IMPORTED_MODULE_1__[\"default\"].midpoint(p1, p3, Object(_util__WEBPACK_IMPORTED_MODULE_3__[\"randFloat\"])(.2,.8));\r\n  let p6 = _point__WEBPACK_IMPORTED_MODULE_1__[\"default\"].midpoint(p2, p3, Object(_util__WEBPACK_IMPORTED_MODULE_3__[\"randFloat\"])(.2,.8));\r\n  return [\r\n    new _triangle__WEBPACK_IMPORTED_MODULE_2__[\"default\"](p1, p4, p5),\r\n    new _triangle__WEBPACK_IMPORTED_MODULE_2__[\"default\"](p2, p4, p6),\r\n    new _triangle__WEBPACK_IMPORTED_MODULE_2__[\"default\"](p3, p5, p6),\r\n    new _triangle__WEBPACK_IMPORTED_MODULE_2__[\"default\"](p4, p5, p6),\r\n  ]\r\n}\r\n\r\nconst mainBtn = document.getElementById(\"main-btn\");\r\nmainBtn.addEventListener(\"click\", () => {\r\n\r\n})\r\n\n\n//# sourceURL=webpack:///./src/main.js?");

/***/ }),

/***/ "./src/point.js":
/*!**********************!*\
  !*** ./src/point.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Point; });\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ \"./src/util.js\");\n\r\n\r\nclass Point {\r\n  constructor(x, y) {\r\n    if (x == null) x = 0;\r\n    if (y == null) y = 0;\r\n    this.vals = [x, y];\r\n  }\r\n  \r\n  get x() { return this.vals[0]; }\r\n  get y() { return this.vals[1]; }\r\n\r\n  draw(ctx, r=2, color=\"black\") {\r\n    ctx.fillStyle = color;\r\n    ctx.beginPath();\r\n    ctx.arc(this.x, this.y, r, 0, _util__WEBPACK_IMPORTED_MODULE_0__[\"TAU\"]);\r\n    ctx.fill();\r\n  }\r\n\r\n  static midpoint(p1, p2, frac=.5) {\r\n    let x = Object(_util__WEBPACK_IMPORTED_MODULE_0__[\"lerp\"])(p1.x, p2.x, frac);\r\n    let y = Object(_util__WEBPACK_IMPORTED_MODULE_0__[\"lerp\"])(p1.y, p2.y, frac);\r\n    return new Point(x, y);\r\n  }\r\n}\n\n//# sourceURL=webpack:///./src/point.js?");

/***/ }),

/***/ "./src/triangle.js":
/*!*************************!*\
  !*** ./src/triangle.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Triangle; });\n/* harmony import */ var _point__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./point */ \"./src/point.js\");\n\r\n\r\nclass Triangle {\r\n  constructor(p1, p2, p3) {\r\n    this.p1 = p1;\r\n    this.p2 = p2;\r\n    this.p3 = p3;\r\n  }\r\n\r\n  draw(ctx, color=\"orange\") {\r\n    ctx.fillStyle = color;\r\n    ctx.beginPath();\r\n    ctx.moveTo(this.p1.x, this.p1.y);\r\n    ctx.lineTo(this.p2.x, this.p2.y);\r\n    ctx.lineTo(this.p3.x, this.p3.y);\r\n    ctx.fill();\r\n  }\r\n\r\n  get centroid() {\r\n    let x = (this.p1.x + this.p2.x + this.p3.x) / 3;\r\n    let y = (this.p1.y + this.p2.y + this.p3.y) / 3;\r\n    return new _point__WEBPACK_IMPORTED_MODULE_0__[\"default\"](x, y);\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/triangle.js?");

/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/*! exports provided: TAU, randInt, randFloat, lerp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TAU\", function() { return TAU; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"randInt\", function() { return randInt; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"randFloat\", function() { return randFloat; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"lerp\", function() { return lerp; });\nconst TAU = 2 * Math.PI;\r\n\r\nfunction randInt(a, b) {\r\n  if (b == null) {\r\n    b = a;\r\n    a = 0;\r\n  }\r\n  return Math.floor(randFloat(a, b))\r\n}\r\n\r\nfunction randFloat(a, b) {\r\n  if (b == null) {\r\n    b = a;\r\n    a = 0;\r\n  }\r\n  let rng = b-a;\r\n  return (Math.random() * rng) + a\r\n}\r\n\r\nfunction lerp(a, b, frac) {\r\n  return (a * frac) + (b * (1-frac))\r\n}\n\n//# sourceURL=webpack:///./src/util.js?");

/***/ })

/******/ });