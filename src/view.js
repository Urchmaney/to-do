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
  submitButton.innerHTML = '<i class="fas fa-plus"></i> Add';
  submitButton.classList.add('to-do-create-btn');
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
  title.classList.add('t-d-title');
  const description = document.createElement('div');
  description.classList.add('t-d-description');
  const dueDate = document.createElement('div');
  dueDate.classList.add('t-d-due-date');
  const priority = document.createElement('div');
  const editBtn = document.createElement('button');
  editBtn.innerHTML = 'Edit Todo';
  editBtn.classList.add('td-edit-btn');
  editBtn.addEventListener('click', () => renderEditForm(todo));
  title.innerHTML = `<h1>${todo.title}</h1>`;
  description.innerHTML = todo.description;
  dueDate.innerHTML = todo.dueDate;
  priority.innerHTML = `priority : ${todo.priority}`;
  priority.classList.add('t-d-priority');
  content.appendChild(title);
  content.appendChild(dueDate);
  content.appendChild(description);
  content.appendChild(priority);
  content.appendChild(editBtn);
};

const renderProjectToDo = (project) => {
  const content = document.getElementById('content');
  content.innerHTML = '';
  project.toDos.forEach((element, index) => {
    const todo = document.createElement('div');
    const todoInfoBtn = document.createElement('span');
    const todoInfo = document.createElement('p');
    const todoDue = document.createElement('p');
    todoDue.classList.add('to-do-due-date');
    todoDue.innerHTML = `${element.dueDate}`;
    todoInfo.innerHTML = `${element.title} `;
    todoInfo.classList.add('to-do-title');
    todoInfo.addEventListener('click', () => { renderTodo(element); });
    const deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = '<i class="far fa-times-circle"></i>';
    deleteBtn.classList.add('delete-td-btn');
    todo.classList.add('todo');
    todoInfo.id = `todo${index}`;
    todoInfoBtn.appendChild(todoInfo);
    todoInfoBtn.appendChild(todoDue);
    todoInfoBtn.appendChild(deleteBtn);
    deleteBtn.addEventListener('click', () => { deleteTodo(element.title); });
    todo.appendChild(todoInfoBtn);
    content.appendChild(todo);
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
  submitButton.classList.add('project-create-btn');
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
