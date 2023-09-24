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

/***/ "./assets/styles/css/styles.css":
/*!**************************************!*\
  !*** ./assets/styles/css/styles.css ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./assets/styles/css/styles.css?");

/***/ }),

/***/ "./assets/js/PostRequest.js":
/*!**********************************!*\
  !*** ./assets/js/PostRequest.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ postRequest)\n/* harmony export */ });\nfunction postRequest(url, data) {\r\n    const options = {\r\n        method: 'POST',\r\n        headers: {\r\n            'Content-Type': 'application/json',\r\n        },\r\n        body: JSON.stringify(data),\r\n    };\r\n\r\n    return fetch(url, options)\r\n        .then((response) => response.json())\r\n        .catch((error) => {\r\n            console.error('Ошибка при выполнении запроса:', error);\r\n            throw error;\r\n        });\r\n}\r\n\n\n//# sourceURL=webpack:///./assets/js/PostRequest.js?");

/***/ }),

/***/ "./assets/js/classes/Popup.js":
/*!************************************!*\
  !*** ./assets/js/classes/Popup.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Popup)\n/* harmony export */ });\nclass Popup {\r\n    constructor(observer, title, text = '') {\r\n        this.observer = observer;\r\n        this.title = title;\r\n        this.text = text;\r\n        this.popup = document.querySelector('.popup');\r\n        if (observer) {\r\n            this.observer = observer;\r\n        }\r\n        this.popup.addEventListener('click', this.hide.bind(this));\r\n    }\r\n\r\n    observe() {\r\n        this.observer.addEventListener('click', this.show.bind(this));\r\n    }\r\n\r\n    show() {\r\n        this.popup.classList.add('popup__active');\r\n        this.popup.innerHTML = `\r\n            <div class=\"popup__content\">\r\n                <h3 class=\"popup__title\">${this.title}</h3>\r\n                <div class=\"popup_text\">${this.text}</div>\r\n            </div>`;\r\n        document.querySelector('.popup__content').addEventListener('click', (e) => {\r\n            e.stopPropagation();\r\n        });\r\n    }\r\n\r\n    hide() {\r\n        this.popup.classList.remove('popup__active');\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack:///./assets/js/classes/Popup.js?");

/***/ }),

/***/ "./assets/js/form/formSubmit.js":
/*!**************************************!*\
  !*** ./assets/js/form/formSubmit.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handleSubmit)\n/* harmony export */ });\n/* harmony import */ var _PostRequest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../PostRequest */ \"./assets/js/PostRequest.js\");\n/* harmony import */ var _formValidate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./formValidate */ \"./assets/js/form/formValidate.js\");\n\r\n\r\n\r\nconst url = 'https://jsonplaceholder.typicode.com/users';\r\n\r\nfunction handleSubmit(event, formFields) {\r\n    event.preventDefault();\r\n\r\n    const values = {};\r\n    for (let i = 0; i < formFields.length; i++) {\r\n        const element = formFields[i];\r\n        values[element.id] = element.value;\r\n    }\r\n\r\n    if ((0,_formValidate__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(values)) {\r\n        (0,_PostRequest__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(url, values);\r\n    } else {\r\n        return;\r\n    }\r\n\r\n    /* eslint-disable no-param-reassign */\r\n    formFields.forEach((item) => {\r\n        item.value = '';\r\n    });\r\n}\r\n\n\n//# sourceURL=webpack:///./assets/js/form/formSubmit.js?");

/***/ }),

/***/ "./assets/js/form/formValidate.js":
/*!****************************************!*\
  !*** ./assets/js/form/formValidate.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ formValidate)\n/* harmony export */ });\n/* harmony import */ var _classes_Popup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../classes/Popup */ \"./assets/js/classes/Popup.js\");\n\r\n\r\nconst namePattern = /^[a-zA-Z'][a-zA-Z-' ]+[a-zA-Z']?$/;\r\n\r\nconst emailPattern = /^([A-Za-z0-9_\\-\\.])+\\@([A-Za-z0-9_\\-\\.])+\\.([A-Za-z]{2,4})$/;\r\n\r\nfunction formValidate(fieldObject) {\r\n    let isValid = true;\r\n    const values = fieldObject;\r\n    const errorMessages = [];\r\n\r\n    if (!namePattern.test(values.username)) {\r\n            errorMessages.push('Имя должно содержать только буквы!');\r\n            isValid = false;\r\n    }\r\n    if (!emailPattern.test(values.email)) {\r\n                errorMessages.push('Почта должна быть вида mymail@domain.com');\r\n                isValid = false;\r\n    }\r\n    if (!isValid) {\r\n        const errorMessage = new _classes_Popup__WEBPACK_IMPORTED_MODULE_0__[\"default\"](null, errorMessages.join('<br>'));\r\n        errorMessage.show();\r\n    } else {\r\n        const SucceedMessage = new _classes_Popup__WEBPACK_IMPORTED_MODULE_0__[\"default\"](null, 'Your message successfully sent!');\r\n        SucceedMessage.show();\r\n    }\r\n    return isValid;\r\n}\r\n\n\n//# sourceURL=webpack:///./assets/js/form/formValidate.js?");

/***/ }),

/***/ "./assets/js/main.js":
/*!***************************!*\
  !*** ./assets/js/main.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/css/styles.css */ \"./assets/styles/css/styles.css\");\n/* harmony import */ var _form_formSubmit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form/formSubmit */ \"./assets/js/form/formSubmit.js\");\n\r\n\r\n\r\nconst button = document.querySelector('.feedback__button');\r\n\r\nconst modal = document.querySelector('.modal');\r\n\r\nconst modalContent = document.querySelector('.modal__content');\r\n\r\nconst form = document.querySelector('.form');\r\n\r\nconst inputsAndTextarea = form.querySelectorAll('input, textarea');\r\n\r\nfunction toogleModal() {\r\n    modal.classList.toggle('modal-active');\r\n}\r\n\r\nbutton.addEventListener('click', toogleModal);\r\n\r\nmodalContent.addEventListener('click', (e) => {\r\n    e.stopPropagation();\r\n});\r\n\r\nmodal.addEventListener('click', toogleModal);\r\n\r\nform.addEventListener('submit', (event) => {\r\n    (0,_form_formSubmit__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(event, inputsAndTextarea);\r\n});\r\n\n\n//# sourceURL=webpack:///./assets/js/main.js?");

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
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./assets/js/main.js");
/******/ 	
/******/ })()
;