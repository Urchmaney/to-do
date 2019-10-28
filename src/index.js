import { ToDo, Project } from './logic';
import * as storage from './storage';
import * as view from './view';

let currentProject = 0;

const createProject = (name) => {
  const project = Project(name);
  currentProject = project;
  storage.addProject(currentProject);
  view.renderProjects();
};

const getDefaultProject = () => {
  if (storage.getProjects().length === 0) {
    createProject('javascript');
  }

  return storage.getProjects()[currentProject];
};


const addTodo = (todo) => {
  const newTodo = ToDo(todo);
  const projects = storage.getProjects();
  projects[currentProject].addTodo(newTodo);
  storage.setProjects(projects);
};



const deleteProject = () => {
  storage.removeProject(currentProject);
};

const loadView = () => {
  const project = getDefaultProject();
  view.renderProjects(storage.getProjects());
  view.renderProjectToDo(project);
};

document.onload(loadView());

export {
  addTodo,
  createProject,
};
