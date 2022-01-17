/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("const input = document.querySelector('.input-list');\nconst submit = document.querySelector('.add');\nconst tasks = document.querySelector('.tasks');\n\n//empty array \nlet arrayOfTasks = [];\n\n//submit tasks \nsubmit.onclick = function(){\n  if(input !== \" \")\n   addTaskToArray(input.value); //Add task to array\n   input.value = \" \"; //empty the input \n}\n\nconst addTaskToArray = (taskText) => {\n    const task = {\n      id: Date.now(), //make it quall to time to be different \n      title: taskText,\n      completed: false,\n      index : 1\n    }\n    //push my tasks to array \n    arrayOfTasks.push(task);\n     console.log(arrayOfTasks);\n}\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;