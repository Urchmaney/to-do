import { formatRelative, subDays } from 'date-fns';
import {
  addTodo, createProject, deleteTodo, changeCurrentProject, updateTodo,
} from './index';
import './style.css';
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all';

const getTodoInfo = (option, todo) => {
  const title = document.getElementById('t-title').value;
  const description = document.getElementById('t-description').value;
  const priority = document.getElementById('t-priority').value;
  let dueDate = document.getElementById('t-duedate').value;
  dueDate = formatRelative(subDays(new Date(dueDate), 1), new Date());
  if (option === 0) {
    addTodo({
      title, description, priority, dueDate,
    });
  } else {
    updateTodo(todo, title, description, dueDate, priority);
  }
};


const renderEditForm = (todo) => {
  const content = document.getElementById('content');
  content.innerHTML = '';
  const titleInput = document.createElement('input');
  titleInput.setAttribute('value', todo.title);
  titleInput.id = 't-title';
  const descriptionInput = document.createElement('input');
  descriptionInput.setAttribute('value', todo.description);
  descriptionInput.id = 't-description';
  const dueDateInput = document.createElement('input');
  dueDateInput.setAttribute('type', 'date');
  dueDateInput.setAttribute('value', todo.dueDate);
  dueDateInput.id = 't-duedate';
  const priorityInput = document.createElement('input');
  priorityInput.setAttribute('type', 'number');
  priorityInput.setAttribute('value', todo.priority);
  priorityInput.id = 't-priority';
  const submitButton = document.createElement('button');
  submitButton.innerHTML = '<i class="fas fa-plus"></i>';
  content.appendChild(titleInput);
  content.innerHTML += '<br>';
  content.appendChild(descriptionInput);
  content.innerHTML += '<br>';
  content.appendChild(dueDateInput);
  content.innerHTML += '<br>';
  content.appendChild(priorityInput);
  content.appendChild(submitButton);
  submitButton.addEventListener('click', () => { getTodoInfo(1, todo); });
};

const renderTodoForm = () => {
  const content = document.getElementById('content');
  content.innerHTML = '';
  const titleInput = document.createElement('input');
  titleInput.placeholder = 'Title';
  titleInput.id = 't-title';
  const descriptionInput = document.createElement('input');
  descriptionInput.placeholder = 'Description';
  descriptionInput.id = 't-description';
  const dueDateInput = document.createElement('input');
  dueDateInput.setAttribute('type', 'date');
  dueDateInput.id = 't-duedate';
  const priorityInput = document.createElement('input');
  priorityInput.placeholder = 'Priority';
  priorityInput.setAttribute('type', 'number');
  priorityInput.id = 't-priority';
  const submitButton = document.createElement('button');
  submitButton.innerHTML = '<i class="fas fa-plus"></i>';
  content.appendChild(titleInput);
  content.innerHTML += '<br>';
  content.appendChild(descriptionInput);
  content.innerHTML += '<br>';
  content.appendChild(dueDateInput);
  content.innerHTML += '<br>';
  content.appendChild(priorityInput);
  content.appendChild(submitButton);
  submitButton.addEventListener('click', () => { getTodoInfo(0); });
};

const renderTodo = (todo) => {
  const content = document.getElementById('content');
  content.innerHTML = '';
  const title = document.createElement('div');
  const description = document.createElement('div');
  const dueDate = document.createElement('div');
  const priority = document.createElement('div');
  const editBtn = document.createElement('button');
  editBtn.innerHTML = 'Edit Todo';
  editBtn.addEventListener('click', () => renderEditForm(todo));
  title.innerHTML = todo.title;
  description.innerHTML = todo.description;
  dueDate.innerHTML = todo.dueDate;
  priority.innerHTML = todo.priority;
  content.appendChild(title);
  content.appendChild(description);
  content.appendChild(dueDate);
  content.appendChild(priority);
  content.appendChild(editBtn);
};

const renderProjectToDo = (project) => {
  const content = document.getElementById('content');
  content.innerHTML = '';
  project.toDos.forEach((element, index) => {
    const todo = document.createElement('div');
    todo.classList.add('todo');
    todo.id = `todo${index}`;
    todo.innerHTML = `${element.title}  ${element.dueDate}`;
    todo.addEventListener('click', () => { renderTodo(element); });
    content.appendChild(todo);
    const deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = '<i class="far fa-times-circle"></i>';
    deleteBtn.classList.add('delete-td-btn');
    todo.appendChild(deleteBtn);
    deleteBtn.addEventListener('click', () => { deleteTodo(todo.title); });
  });
  const button = document.createElement('button');
  button.innerHTML = 'add To-do';
  button.classList.add('add-td-btn');
  content.appendChild(button);
  button.addEventListener('click', renderTodoForm);
};


const getProjectName = () => {
  const projectName = document.getElementById('newProjectName').value;
  createProject(projectName);
};
const renderProjectForm = () => {
  const content = document.getElementById('content');
  content.innerHTML = '';
  const nameInput = document.createElement('input');
  nameInput.id = 'newProjectName';
  const submitButton = document.createElement('input');
  submitButton.setAttribute('type', 'submit');
  submitButton.setAttribute('value', 'create project');
  content.appendChild(nameInput);
  content.appendChild(submitButton);
  submitButton.addEventListener('click', getProjectName);
};

const renderProjects = (projects, currentProject) => {
  const projectContainer = document.getElementById('projects');
  projectContainer.innerHTML = '';
  const btnAddProject = document.createElement('button');
  btnAddProject.innerHTML = 'Add Project <i class="fas fa-plus"></i>';
  btnAddProject.classList.add('add-project-btn');
  projectContainer.appendChild(btnAddProject);
  btnAddProject.addEventListener('click', renderProjectForm);
  projects.forEach((element, index) => {
    const project = document.createElement('div');
    project.id = `project${index}`;
    project.innerHTML = element.name;
    if (index === currentProject) {
      project.classList.add('currProject');
    }
    project.classList.add('project');
    project.addEventListener('click', () => {
      renderProjectToDo(element);
      const cur = document.getElementsByClassName('currProject')[0];
      cur.classList.remove('currProject');
      changeCurrentProject(index);
      project.classList.add('currProject');
      renderProjects(projects, index);
    });
    projectContainer.appendChild(project);
  });
};


export {
  renderProjects,
  renderProjectToDo,
  renderTodo,
};
