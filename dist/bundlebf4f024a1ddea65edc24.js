/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/addNewTask.js":
/*!***********************************!*\
  !*** ./src/modules/addNewTask.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AllTasks)
/* harmony export */ });
/* harmony import */ var _createUi_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createUi.js */ "./src/modules/createUi.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

var AllTasks = /*#__PURE__*/_createClass(function AllTasks() {
  var _this = this;
  _classCallCheck(this, AllTasks);
  _defineProperty(this, "storedLocal", function () {
    if (localStorage.getItem('Today\'s Tasks') == null) {
      localStorage.setItem('Today\'s Tasks', JSON.stringify(_this.tasks));
    }
    var store = localStorage.getItem('Today\'s Tasks');
    if (store) {
      _this.tasks = JSON.parse(store);
    }
  });
  _defineProperty(this, "addTask", function (e) {
    e.preventDefault();
    var taskItemVal = _this.valTask.value;
    var cachedArr = localStorage.getItem('Today\'s Tasks');
    var updatedArr = cachedArr ? JSON.parse(cachedArr) : [];
    var tasksItems = {
      index: updatedArr.length + 1,
      desc: taskItemVal,
      completed: false
    };
    _this.tasks = updatedArr;
    _this.tasks.push(tasksItems);
    localStorage.setItem('Today\'s Tasks', JSON.stringify(_this.tasks));
    (0,_createUi_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_this.tasks);

    // Reset input fields
    _this.valTask.value = '';
  });
  _defineProperty(this, "formAct", function () {
    (0,_createUi_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_this.tasks);
    _this.form.addEventListener('submit', _this.addTask);
  });
  this.taskContainer = document.querySelector('.staticUl');
  this.valTask = document.querySelector('.taskItem');
  this.tasks = [];
  this.addTask = this.addTask.bind(this);
  this.taskItem = document.querySelector('.listedTasks');
  this.form = document.querySelector('form');
});


/***/ }),

/***/ "./src/modules/clearTasks.js":
/*!***********************************!*\
  !*** ./src/modules/clearTasks.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _createUi_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createUi.js */ "./src/modules/createUi.js");

var storageKey = 'Today\'s Tasks';
var clearCompletedTasks = function clearCompletedTasks() {
  var clearButton = document.querySelector('.clearAll');
  clearButton.addEventListener('click', function () {
    var storedTasks = JSON.parse(localStorage.getItem(storageKey));
    storedTasks = storedTasks.filter(function (task) {
      return !task.completed;
    });
    storedTasks.map(function (task, taskIndex) {
      task.index = taskIndex + 1; // Update the ID value
      return task;
    });
    localStorage.setItem(storageKey, JSON.stringify(storedTasks));
    (0,_createUi_js__WEBPACK_IMPORTED_MODULE_0__["default"])(storedTasks);
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clearCompletedTasks);

/***/ }),

/***/ "./src/modules/createUi.js":
/*!*********************************!*\
  !*** ./src/modules/createUi.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var taskContainer = document.querySelector('.staticUl');
var createTask = function createTask(info) {
  var actionTask = info;
  taskContainer.innerHTML = '';
  actionTask.forEach(function (task, index) {
    var taskComponent = document.createElement('li');
    taskComponent.classList.add('listedTasks');
    taskComponent.setAttribute('id', "".concat(index + 20));
    var divisionSect = document.createElement('div');
    divisionSect.classList.add('itemsTasks');
    taskComponent.append(divisionSect);
    var infoInput = document.createElement('input');
    infoInput.classList.add('checkedBox');
    infoInput.setAttribute('type', 'checkbox');
    var paragraph = document.createElement('p');
    paragraph.classList.add('editText');
    paragraph.innerHTML = "".concat(task.desc);
    paragraph.setAttribute('id', "".concat(index + 10));
    if (task.completed === true) {
      infoInput.checked = true;
      paragraph.style.textDecoration = 'line-through';
    } else {
      infoInput.checked = false;
      paragraph.style.textDecoration = 'none';
    }
    divisionSect.appendChild(infoInput);
    divisionSect.appendChild(paragraph);
    var spanned = document.createElement('button');
    var italic = document.createElement('i');
    italic.classList.add('fas');
    italic.setAttribute('id', "".concat(index));
    italic.classList.add('deleteBtn');
    italic.classList.add('fa-grip-vertical');
    spanned.append(italic);
    taskComponent.append(spanned);
    taskContainer.appendChild(taskComponent);
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createTask);

/***/ }),

/***/ "./src/modules/interactiveList.js":
/*!****************************************!*\
  !*** ./src/modules/interactiveList.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var storageKey = 'Today\'s Tasks';
var interactiveList = function interactiveList() {
  var checkedBox = document.querySelector('.staticUl');
  checkedBox.addEventListener('change', function (event) {
    var storedTasks = JSON.parse(localStorage.getItem(storageKey));
    if (event.target.matches('.checkedBox')) {
      var checkbox = event.target;
      var paragraph = checkbox.nextElementSibling;
      var taskId = parseInt(paragraph.id, 10);
      var actualVal = taskId - 10 + 1;
      if (checkbox.checked) {
        paragraph.style.textDecoration = 'line-through';
        storedTasks.map(function (task) {
          if (task.index === actualVal) {
            task.completed = true;
          }
          return task;
        });
      } else {
        paragraph.style.textDecoration = 'none';
        storedTasks.map(function (task) {
          if (task.index === actualVal) {
            task.completed = false;
          }
          return task;
        });
      }
    }
    localStorage.setItem(storageKey, JSON.stringify(storedTasks));
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (interactiveList);

/***/ }),

/***/ "./src/modules/remove.js":
/*!*******************************!*\
  !*** ./src/modules/remove.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _createUi_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createUi.js */ "./src/modules/createUi.js");

var taskContainer = document.querySelector('.staticUl');
var removeTask = function removeTask(event) {
  if (event.target.classList.contains('deleteBtn') && event.target.classList.contains('fa-trash')) {
    var buttonId = parseInt(event.target.id, 10);
    var cachedArr = localStorage.getItem('Today\'s Tasks');
    var tasks = JSON.parse(cachedArr);
    tasks = tasks.filter(function (task, taskIndex) {
      return taskIndex !== buttonId;
    });

    // Update ID values in the filtered array
    tasks = tasks.map(function (task, taskIndex) {
      task.index = taskIndex + 1; // Update the ID value
      return task;
    });
    localStorage.setItem('Today\'s Tasks', JSON.stringify(tasks));
    (0,_createUi_js__WEBPACK_IMPORTED_MODULE_0__["default"])(tasks);
  }
};
var executeRemoval = function executeRemoval() {
  taskContainer.addEventListener('click', removeTask);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (executeRemoval);

/***/ }),

/***/ "./src/modules/updateTask.js":
/*!***********************************!*\
  !*** ./src/modules/updateTask.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var storageKey = 'Today\'s Tasks';
var handleEdit = function handleEdit(e) {
  if (e.target.classList.contains('editText')) {
    var storedTasks = JSON.parse(localStorage.getItem(storageKey));
    var store = storedTasks.map(function (tasked) {
      return tasked.index;
    });
    var editableParagraph = document.getElementById(e.target.id);
    var buttonId = parseInt(e.target.id, 10);
    var actualId = buttonId - 10;
    for (var i = 0; i < store.length; i += 1) {
      var testV = store[i] - 1;
      if (actualId === testV) {
        var targetTask = document.getElementById(actualId.toString());
        if (targetTask && targetTask.classList.contains('fa-grip-vertical')) {
          targetTask.classList.replace('fa-grip-vertical', 'fa-trash');
          var liStyle = actualId + 20;
          var testCase = document.getElementById(liStyle.toString());
          testCase.style.backgroundColor = 'green';
        }
      }
    }
    var inputValue = editableParagraph.textContent.trim();
    var input = document.createElement('input');
    var handleKeyDown = function handleKeyDown(event) {
      if (event.key === 'Enter') {
        var updatedValue = input.value.trim();
        input.replaceWith(editableParagraph);
        editableParagraph.textContent = updatedValue;
        var _actualId = buttonId - 10;
        for (var _i = 0; _i < store.length; _i += 1) {
          var _testV = store[_i] - 1;
          if (_actualId === _testV) {
            var _targetTask = document.getElementById(_actualId.toString());
            if (_targetTask && _targetTask.classList.contains('fa-trash')) {
              _targetTask.classList.replace('fa-trash', 'fa-grip-vertical');
              var _liStyle = _actualId + 20;
              var _testCase = document.getElementById(_liStyle.toString());
              _testCase.style.backgroundColor = 'transparent';
            }
          }
        }
        var updatedTasks = storedTasks.map(function (task) {
          if (task.desc === inputValue) {
            task.desc = updatedValue;
          }
          return task;
        });
        localStorage.setItem(storageKey, JSON.stringify(updatedTasks));
      }
    };
    input.value = inputValue;
    input.addEventListener('keydown', handleKeyDown);
    editableParagraph.replaceWith(input);
    input.focus();
  }
};
var updateValue = function updateValue() {
  var paragraph = document.querySelector('.staticUl');
  paragraph.addEventListener('dblclick', handleEdit);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (updateValue);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.css":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.css ***!
  \***********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background-color: #f6f6f6;
}

.mainContainer {
  background-color: #f6f6f6;
  height: 100vh;
  margin-top: 0;
  position: relative;
  display: flex;
  flex-direction: column;
}

.container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  filter: drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.25));
  display: flex;
  flex-direction: column;
  width: 70%;
}

.staticHead {
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px;
}

.staticHead h2 {
  color: #545862;
  font-size: 15px;
  font-weight: 400;
  line-height: 20px;
}

.staticHead input {
  height: 100%;
  border: none;
  outline: none;
  background: transparent;
}

.staticHead input[type=text] {
  font-style: italic;
  font-size: 15px;
}

.clearAll {
  height: 50px;
  width: 100%;
  outline: none;
  border: none;
}

.staticUl {
  list-style-type: none;
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
}

.staticUl li {
  height: 50px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
}

.check {
  margin-left: 15px;
  margin-right: 10px;
}

.listedTasks {
  display: flex;
  justify-content: space-between;
  padding-right: 15px;
}

.itemsTasks {
  display: flex;
  align-items: center;
  margin-left: 15px;
}

.staticHead button {
  background-color: transparent;
  border: none;
}

.listedTasks button {
  background-color: transparent;
  border: none;
}`, "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"AAAA;EACE,SAAA;EACA,UAAA;EACA,sBAAA;EACA,yBAAA;AACF;;AAEA;EACE,yBAAA;EACA,aAAA;EACA,aAAA;EACA,kBAAA;EACA,aAAA;EACA,sBAAA;AACF;;AAEA;EACE,kBAAA;EACA,QAAA;EACA,SAAA;EACA,gCAAA;EACA,sBAAA;EACA,oDAAA;EACA,aAAA;EACA,sBAAA;EACA,UAAA;AACF;;AAEA;EACE,4CAAA;EACA,YAAA;EACA,aAAA;EACA,8BAAA;EACA,mBAAA;EACA,eAAA;AACF;;AAEA;EACE,cAAA;EACA,eAAA;EACA,gBAAA;EACA,iBAAA;AACF;;AAEA;EACE,YAAA;EACA,YAAA;EACA,aAAA;EACA,uBAAA;AACF;;AAEA;EACE,kBAAA;EACA,eAAA;AACF;;AAEA;EACE,YAAA;EACA,WAAA;EACA,aAAA;EACA,YAAA;AACF;;AAEA;EACE,qBAAA;EACA,aAAA;EACA,sBAAA;EACA,SAAA;EACA,UAAA;AACF;;AAEA;EACE,YAAA;EACA,aAAA;EACA,mBAAA;EACA,4CAAA;AACF;;AAEA;EACE,iBAAA;EACA,kBAAA;AACF;;AAEA;EACE,aAAA;EACA,8BAAA;EACA,mBAAA;AACF;;AAEA;EACE,aAAA;EACA,mBAAA;EACA,iBAAA;AACF;;AAEA;EACE,6BAAA;EACA,YAAA;AACF;;AAEA;EACE,6BAAA;EACA,YAAA;AACF","sourcesContent":["body {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n  background-color: #f6f6f6;\r\n}\r\n\r\n.mainContainer {\r\n  background-color: #f6f6f6;\r\n  height: 100vh;\r\n  margin-top: 0;\r\n  position: relative;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.container {\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  background-color: #fff;\r\n  filter: drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.25));\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 70%;\r\n}\r\n\r\n.staticHead {\r\n  border-bottom: 1px solid rgba(0, 0, 0, 0.08);\r\n  height: 40px;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  padding: 0 15px;\r\n}\r\n\r\n.staticHead h2 {\r\n  color: #545862;\r\n  font-size: 15px;\r\n  font-weight: 400;\r\n  line-height: 20px;\r\n}\r\n\r\n.staticHead input {\r\n  height: 100%;\r\n  border: none;\r\n  outline: none;\r\n  background: transparent;\r\n}\r\n\r\n.staticHead input[type=text] {\r\n  font-style: italic;\r\n  font-size: 15px;\r\n}\r\n\r\n.clearAll {\r\n  height: 50px;\r\n  width: 100%;\r\n  outline: none;\r\n  border: none;\r\n}\r\n\r\n.staticUl {\r\n  list-style-type: none;\r\n  display: flex;\r\n  flex-direction: column;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n.staticUl li {\r\n  height: 50px;\r\n  display: flex;\r\n  align-items: center;\r\n  border-bottom: 1px solid rgba(0, 0, 0, 0.08);\r\n}\r\n\r\n.check {\r\n  margin-left: 15px;\r\n  margin-right: 10px;\r\n}\r\n\r\n.listedTasks {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  padding-right: 15px;\r\n}\r\n\r\n.itemsTasks {\r\n  display: flex;\r\n  align-items: center;\r\n  margin-left: 15px;\r\n}\r\n\r\n.staticHead button {\r\n  background-color: transparent;\r\n  border: none;\r\n}\r\n\r\n.listedTasks button {\r\n  background-color: transparent;\r\n  border: none;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/style.css */ "./src/styles/style.css");
/* harmony import */ var _modules_addNewTask_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/addNewTask.js */ "./src/modules/addNewTask.js");
/* harmony import */ var _modules_updateTask_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/updateTask.js */ "./src/modules/updateTask.js");
/* harmony import */ var _modules_remove_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/remove.js */ "./src/modules/remove.js");
/* harmony import */ var _modules_interactiveList_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/interactiveList.js */ "./src/modules/interactiveList.js");
/* harmony import */ var _modules_clearTasks_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/clearTasks.js */ "./src/modules/clearTasks.js");






var testWork = new _modules_addNewTask_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
(0,_modules_clearTasks_js__WEBPACK_IMPORTED_MODULE_5__["default"])();
testWork.storedLocal();
testWork.formAct();
(0,_modules_remove_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
(0,_modules_updateTask_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
(0,_modules_interactiveList_js__WEBPACK_IMPORTED_MODULE_4__["default"])();
})();

/******/ })()
;
//# sourceMappingURL=bundlebf4f024a1ddea65edc24.js.map