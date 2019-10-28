import { ToDo, Project } from './logic';
import * as storage from './storage';
import * as view from './view';

let currentProject = 0;

const createProject = (name) => {
  const project = Project(name);
  storage.addProject(project);
  const projects = storage.getProjects();
  currentProject = projects.length - 1;
  view.renderProjects(projects);
  view.renderProjectToDo(project);
};

const getDefaultProject = () => {
  if (storage.getProjects().length === 0) {
    createProject('javascript');
  }
  return storage.getProjects()[currentProject];
};


const addTodo = (todo) => {
  const projects = storage.getProjects();
  projects[currentProject].toDos.push(todo);
  storage.setProjects(projects);
  view.renderProjects(projects);
  view.renderProjectToDo(projects[currentProject]);
};

const deleteTodo = (td) => {
  const projects = storage.getProjects();
  projects[currentProject].toDos.forEach((todo, index) =>
   {
      if (td === todo.title) {
        projects[currentProject].toDos.splice(index, 1);
      }
    });
    storage.setProjects(projects);
    view.renderProjects(projects);
    view.renderProjectToDo(projects[currentProject]);
  };

const changeCurrentProject = (index) => {
  currentProject = index;
}

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
  changeCurrentProject,
  deleteTodo,
};
