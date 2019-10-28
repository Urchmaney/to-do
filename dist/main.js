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
/*! exports provided: addTodo, createProject, changeCurrentProject, deleteTodo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addTodo\", function() { return addTodo; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createProject\", function() { return createProject; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"changeCurrentProject\", function() { return changeCurrentProject; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"deleteTodo\", function() { return deleteTodo; });\n/* harmony import */ var _logic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logic */ \"./src/logic.js\");\n/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage */ \"./src/storage.js\");\n/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view */ \"./src/view.js\");\n\n\n\n\nlet currentProject = 0;\n\nconst createProject = (name) => {\n  const project = Object(_logic__WEBPACK_IMPORTED_MODULE_0__[\"Project\"])(name);\n  _storage__WEBPACK_IMPORTED_MODULE_1__[\"addProject\"](project);\n  const projects = _storage__WEBPACK_IMPORTED_MODULE_1__[\"getProjects\"]();\n  currentProject = projects.length - 1;\n  _view__WEBPACK_IMPORTED_MODULE_2__[\"renderProjects\"](projects);\n  _view__WEBPACK_IMPORTED_MODULE_2__[\"renderProjectToDo\"](project);\n};\n\nconst getDefaultProject = () => {\n  if (_storage__WEBPACK_IMPORTED_MODULE_1__[\"getProjects\"]().length === 0) {\n    createProject('javascript');\n  }\n  return _storage__WEBPACK_IMPORTED_MODULE_1__[\"getProjects\"]()[currentProject];\n};\n\n\nconst addTodo = (todo) => {\n  const projects = _storage__WEBPACK_IMPORTED_MODULE_1__[\"getProjects\"]();\n  projects[currentProject].toDos.push(todo);\n  _storage__WEBPACK_IMPORTED_MODULE_1__[\"setProjects\"](projects);\n  _view__WEBPACK_IMPORTED_MODULE_2__[\"renderProjects\"](projects);\n  _view__WEBPACK_IMPORTED_MODULE_2__[\"renderProjectToDo\"](projects[currentProject]);\n};\n\nconst deleteTodo = (td) => {\n  const projects = _storage__WEBPACK_IMPORTED_MODULE_1__[\"getProjects\"]();\n  projects[currentProject].toDos.forEach((todo, index) =>\n   {\n      if (td === todo.title) {\n        projects[currentProject].toDos.splice(index, 1);\n      }\n    });\n    _storage__WEBPACK_IMPORTED_MODULE_1__[\"setProjects\"](projects);\n    _view__WEBPACK_IMPORTED_MODULE_2__[\"renderProjects\"](projects);\n    _view__WEBPACK_IMPORTED_MODULE_2__[\"renderProjectToDo\"](projects[currentProject]);\n  };\n\nconst changeCurrentProject = (index) => {\n  currentProject = index;\n}\n\nconst deleteProject = () => {\n  _storage__WEBPACK_IMPORTED_MODULE_1__[\"removeProject\"](currentProject);\n};\n\nconst loadView = () => {\n  const project = getDefaultProject();\n  _view__WEBPACK_IMPORTED_MODULE_2__[\"renderProjects\"](_storage__WEBPACK_IMPORTED_MODULE_1__[\"getProjects\"]());\n  _view__WEBPACK_IMPORTED_MODULE_2__[\"renderProjectToDo\"](project);\n};\n\ndocument.onload(loadView());\n\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/logic.js":
/*!**********************!*\
  !*** ./src/logic.js ***!
  \**********************/
/*! exports provided: ToDo, Project */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ToDo\", function() { return ToDo; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Project\", function() { return Project; });\nconst ToDo = (title, description, dueDate, priority) => {\n  return {\n    title, description, dueDate, priority,\n  };\n};\n\nconst Project = (name) => {\n  const toDos = [];\n  const getName = () => name;\n  const getTodos = () => toDos;\n  return {\n    name, toDos, getName, getTodos,\n  };\n};\n\n\n\n\n//# sourceURL=webpack:///./src/logic.js?");

/***/ }),

/***/ "./src/storage.js":
/*!************************!*\
  !*** ./src/storage.js ***!
  \************************/
/*! exports provided: setProjects, getProjects, addProject, removeProject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setProjects\", function() { return setProjects; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getProjects\", function() { return getProjects; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addProject\", function() { return addProject; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"removeProject\", function() { return removeProject; });\nconst setProjects = (projects) => {\n  localStorage.setItem('projects', JSON.stringify(projects));\n};\nconst getProjects = () => {\n  if (!localStorage.getItem('projects')) {\n    setProjects([]);\n  }\n  return JSON.parse(localStorage.getItem('projects'));\n};\n\nconst addProject = (project) => {\n  const projects = getProjects();\n  projects.push(project);\n  setProjects(projects);\n};\n\n\nconst removeProject = (index) => {\n  const projects = getProjects();\n  projects.splice(index, 1);\n  setProjects(projects);\n};\n\n\n\n\n//# sourceURL=webpack:///./src/storage.js?");

/***/ }),

/***/ "./src/view.js":
/*!*********************!*\
  !*** ./src/view.js ***!
  \*********************/
/*! exports provided: renderProjects, renderProjectToDo, renderTodo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderProjects\", function() { return renderProjects; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderProjectToDo\", function() { return renderProjectToDo; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderTodo\", function() { return renderTodo; });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ \"./src/index.js\");\n\n\nconst renderTodoForm = () => {\n  const content = document.getElementById('content');\n  content.innerHTML = '';\n  const titleInput = document.createElement('input');\n  titleInput.id = 't-title';\n  const descriptionInput = document.createElement('input');\n  descriptionInput.id = 't-description';\n  const dueDateInput = document.createElement('input');\n  dueDateInput.id = 't-duedate'\n  const priorityInput = document.createElement('input');\n  priorityInput.id = 't-priority';\n  const submitButton = document.createElement('button');\n  submitButton.innerHTML = 'submit to-do';\n  content.appendChild(titleInput);\n  content.appendChild(descriptionInput);\n  content.appendChild(dueDateInput);\n  content.appendChild(priorityInput);\n  content.appendChild(submitButton);\n  submitButton.addEventListener('click', getTodoInfo);\n};\n\nconst renderProjectToDo = (project) => {\n  const content = document.getElementById('content');\n  content.innerHTML = '';\n  project.toDos.forEach((element, index) => {\n    const todo = document.createElement('div');\n    todo.id = `todo${index}`;\n    todo.innerHTML = `${element.title}  ${element.dueDate}`;\n    todo.addEventListener('click', () => { renderTodo(element); });\n    content.appendChild(todo);\n  });\n  const button = document.createElement('button');\n  button.innerHTML = 'add To-do';\n  content.appendChild(button);\n  button.addEventListener('click', renderTodoForm);\n};\n\n\nconst getTodoInfo = () => {\n  const title = document.getElementById('t-title').value;\n  const description = document.getElementById('t-description').value;\n  const priority = document.getElementById('t-priority').value;\n  const dueDate = document.getElementById('t-duedate').value;\n  Object(_index__WEBPACK_IMPORTED_MODULE_0__[\"addTodo\"])({title, description, priority, dueDate });\n};\n\nconst getProjectName = () => { \n  const projectName = document.getElementById('newProjectName').value;\n  Object(_index__WEBPACK_IMPORTED_MODULE_0__[\"createProject\"])(projectName);\n}\nconst renderProjectForm = () => {\n  const content = document.getElementById('content');\n  content.innerHTML = '';\n  const nameInput = document.createElement('input');\n  nameInput.id = 'newProjectName';\n  const submitButton = document.createElement('input');\n  submitButton.setAttribute('type','submit');\n  submitButton.setAttribute('value','create project');\n  content.appendChild(nameInput);\n  content.appendChild(submitButton);\n  submitButton.addEventListener('click', getProjectName);\n};\n\nconst renderProjects = (projects) => {\n  const projectContainer = document.getElementById('projects');\n  projectContainer.innerHTML = '';\n  projects.forEach((element, index) => {\n    const project = document.createElement('div');\n    project.id = `project${index}`;\n    project.innerHTML = element.name;\n    project.addEventListener('click', () => {\n      renderProjectToDo(element);\n      Object(_index__WEBPACK_IMPORTED_MODULE_0__[\"changeCurrentProject\"])(index);\n    });\n    projectContainer.appendChild(project);\n  });\n  const btnAddProject = document.createElement('button');\n  btnAddProject.innerHTML = 'Add Project';\n  projectContainer.appendChild(btnAddProject);\n  btnAddProject.addEventListener('click', renderProjectForm);\n};\n\nconst renderTodo = (todo) => {\n  const content = document.getElementById('content');\n  content.innerHTML = '';\n  const title = document.createElement('div');\n  const description = document.createElement('div');\n  const dueDate = document.createElement('div');\n  const priority = document.createElement('div');\n  const deleteBtn = document.createElement('button');\n  deleteBtn.innerHTML = 'Delete Todo';\n  title.innerHTML = todo.title;\n  description.innerHTML = todo.description;\n  dueDate.innerHTML = todo.dueDate;\n  priority.innerHTML = todo.priority;\n  content.appendChild(title);\n  content.appendChild(description);\n  content.appendChild(dueDate);\n  content.appendChild(priority);\n  content.appendChild(deleteBtn);\n  deleteBtn.addEventListener('click', () => { Object(_index__WEBPACK_IMPORTED_MODULE_0__[\"deleteTodo\"])(todo.title)});\n};\n\n\n\n\n//# sourceURL=webpack:///./src/view.js?");

/***/ })

/******/ });