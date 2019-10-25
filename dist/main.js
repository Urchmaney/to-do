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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: addTodo, inputProject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addTodo\", function() { return addTodo; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"inputProject\", function() { return inputProject; });\n/* harmony import */ var _logic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logic */ \"./src/logic.js\");\n/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage */ \"./src/storage.js\");\n/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view */ \"./src/view.js\");\n\n\n\n\nlet currentProject = 0;\n\nconst createProject = (name) => {\n  const project = Object(_logic__WEBPACK_IMPORTED_MODULE_0__[\"Project\"])(name);\n  currentProject = project;\n  _storage__WEBPACK_IMPORTED_MODULE_1__[\"addProject\"](currentProject);\n};\n\nconst getDefaultProject = () => {\n  if (_storage__WEBPACK_IMPORTED_MODULE_1__[\"getProjects\"]().length === 0) {\n    createProject('javascript');\n  }\n  _storage__WEBPACK_IMPORTED_MODULE_1__[\"removeProject\"](0);\n  const p = _storage__WEBPACK_IMPORTED_MODULE_1__[\"getProjects\"]();\n  return _storage__WEBPACK_IMPORTED_MODULE_1__[\"getProjects\"]()[currentProject];\n};\n\n\nconst addTodo = (todo) => {\n  const newTodo = Object(_logic__WEBPACK_IMPORTED_MODULE_0__[\"ToDo\"])(todo);\n  const projects = _storage__WEBPACK_IMPORTED_MODULE_1__[\"getProjects\"]();\n  projects[currentProject].addTodo(newTodo);\n  _storage__WEBPACK_IMPORTED_MODULE_1__[\"setProjects\"](projects);\n};\n\nconst inputProject = () => {\n\n};\n\n\nconst deleteProject = () => {\n  _storage__WEBPACK_IMPORTED_MODULE_1__[\"removeProject\"](currentProject);\n};\n\nconst loadView = () => {\n  const project = getDefaultProject();\n  _view__WEBPACK_IMPORTED_MODULE_2__[\"renderProjects\"](_storage__WEBPACK_IMPORTED_MODULE_1__[\"getProjects\"]());\n  _view__WEBPACK_IMPORTED_MODULE_2__[\"renderProjectToDo\"](project);\n};\n\ndocument.onload(loadView());\n\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/logic.js":
/*!**********************!*\
  !*** ./src/logic.js ***!
  \**********************/
/*! exports provided: ToDo, Project */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ToDo\", function() { return ToDo; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Project\", function() { return Project; });\nconst ToDo = (title, description, dueDate, priority) => {\n  const getTitle = () => title;\n  const getDescription = () => description;\n  const getDueDate = () => dueDate;\n  const getPriority = () => priority;\n  return {\n    getTitle, getDescription, getDueDate, getPriority,\n  };\n};\n\nconst Project = (name) => {\n  const toDos = [];\n  const getName = () => name;\n  const addTodo = (todo) => {\n    toDos.push(todo);\n  };\n  const removeTodo = (todo) => {\n    toDos.forEach((td, index) => {\n      if (td === todo) {\n        toDos.splice(index, 1);\n      }\n    });\n  };\n  const getTodos = () => toDos;\n  return {\n    getName, addTodo, removeTodo, getTodos,\n  };\n};\n\n\n\n\n//# sourceURL=webpack:///./src/logic.js?");

/***/ }),

/***/ "./src/storage.js":
/*!************************!*\
  !*** ./src/storage.js ***!
  \************************/
/*! exports provided: setProjects, getProjects, addProject, removeProject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setProjects\", function() { return setProjects; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getProjects\", function() { return getProjects; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addProject\", function() { return addProject; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"removeProject\", function() { return removeProject; });\nconst setProjects = (projects) => {\n  localStorage.setItem('projects', JSON.stringify(projects));\n};\nconst getProjects = () => {\n  if (!localStorage.getItem('projects')) {\n    setProjects([]);\n  }\n  return JSON.parse(localStorage.getItem('projects'));\n};\n\nconst addProject = (project) => {\n  const projects = getProjects();\n  const dd = stringify(project,'todo');\n  const ob = JSON.parse(dd);\n  projects.push(project);\n  setProjects(projects);\n};\n\n\nconst removeProject = (index) => {\n  const projects = getProjects();\n  projects.splice(index, 1);\n  setProjects(projects);\n};\n\nconst stringify = (obj, prop) => {\n  const placeholder = '____PLACEHOLDER____';\n  const fns = [];\n  let json = JSON.stringify(obj, (key, value) => {\n    if (typeof value === 'function') {\n      fns.push(value);\n      return placeholder;\n    }\n    return value;\n  }, 2);\n  json = json.replace(new RegExp('\"' + placeholder + '\"', 'g'), () => fns.shift());\n  return 'this[\"' + prop + '\"] = ' + json + ';';\n};\n\n\n\n//# sourceURL=webpack:///./src/storage.js?");

/***/ }),

/***/ "./src/view.js":
/*!*********************!*\
  !*** ./src/view.js ***!
  \*********************/
/*! exports provided: renderProjects, renderProjectToDo, renderTodo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderProjects\", function() { return renderProjects; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderProjectToDo\", function() { return renderProjectToDo; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderTodo\", function() { return renderTodo; });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ \"./src/index.js\");\n\n\nconst getTodoInfo = () => {\n  const title = document.getElementById('t-title').value;\n  const description = document.getElementById('t-description').value;\n  const priority = document.getElementById('t-priority').value;\n  const dueDate = document.getElementById('t-duedate').value;\n  return {\n    title, description, priority, dueDate,\n  };\n};\n\nconst renderTodoForm = () => {\n  const content = document.getElementById('content');\n  const titleInput = document.createElement('input');\n  const descriptionInput = document.createElement('input');\n  const dueDateInput = document.createElement('input');\n  const priorityInput = document.createElement('input');\n  const submitButton = document.createElement('button');\n  submitButton.addEventListener('click', Object(_index__WEBPACK_IMPORTED_MODULE_0__[\"addTodo\"])(getTodoInfo()));\n  content.appendChild(titleInput);\n  content.appendChild(descriptionInput);\n  content.appendChild(dueDateInput);\n  content.appendChild(priorityInput);\n  content.appendChild(submitButton);\n};\n\nconst renderProjectForm = () => {\n  const content = document.getElementById('content');\n  const nameInput = document.createElement('input');\n  const submitButton = document.createElement('button');\n  submitButton.addEventListener('click', Object(_index__WEBPACK_IMPORTED_MODULE_0__[\"inputProject\"])());\n  content.appendChild(nameInput);\n  content.appendChild(submitButton);\n};\n\nconst renderProjects = (projects) => {\n  const projectContainer = document.getElementById('projects');\n  projects.forEach((element, index) => {\n    const project = document.createElement('div');\n    project.id = `project${index}`;\n    project.innerHTML = element.name;\n    projectContainer.appendChild(project);\n  });\n  const btnAddProject = document.createElement('button');\n  btnAddProject.innerHTML = 'Add Project';\n  btnAddProject.addEventListener('click', renderProjectForm());\n  projectContainer.appendChild(btnAddProject);\n};\n\nconst renderProjectToDo = (project) => {\n  const content = document.getElementById('content');\n  project.getTodos().forEach((element, index) => {\n    const todo = document.createElement('div');\n    todo.id = `todo${index}`;\n    todo.innerHTML = `${element.title}  ${element.dueDate}`;\n    content.appendChild(todo);\n  });\n  const button = document.createElement('button');\n  button.innerHTML = 'add To-do';\n  button.addEventListener('click', renderTodoForm());\n};\n\nconst renderTodo = (todo) => {\n  const content = document.getElementById('content');\n  const title = document.createElement('div');\n  const description = document.createElement('div');\n  const dueDate = document.createElement('div');\n  const priority = document.createElement('div');\n  title.innerHTML = todo.title;\n  description.innerHTML = todo.description;\n  dueDate.innerHTML = todo.dueDate;\n  priority.innerHTML = todo.priority;\n  content.appendChild(title);\n  content.appendChild(description);\n  content.appendChild(dueDate);\n  content.appendChild(priority);\n};\n\n\n\n\n//# sourceURL=webpack:///./src/view.js?");

/***/ })

/******/ });