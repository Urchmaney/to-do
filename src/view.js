import { addTodo, createProject,currentProject, changeCurrentProject } from './index';

const renderTodoForm = () => {
  const content = document.getElementById('content');
  content.innerHTML = '';
  const titleInput = document.createElement('input');
  titleInput.id = 't-title';
  const descriptionInput = document.createElement('input');
  descriptionInput.id = 't-description';
  const dueDateInput = document.createElement('input');
  dueDateInput.id = 't-duedate'
  const priorityInput = document.createElement('input');
  priorityInput.id = 't-priority';
  const submitButton = document.createElement('button');
  submitButton.innerHTML = 'submit to-do';
  content.appendChild(titleInput);
  content.appendChild(descriptionInput);
  content.appendChild(dueDateInput);
  content.appendChild(priorityInput);
  content.appendChild(submitButton);
  submitButton.addEventListener('click', getTodoInfo);
};

const renderProjectToDo = (project) => {
  const content = document.getElementById('content');
  content.innerHTML = '';
  project.toDos.forEach((element, index) => {
    const todo = document.createElement('div');
    todo.id = `todo${index}`;
    todo.innerHTML = `${element.title}  ${element.dueDate}`;
    todo.addEventListener('click', () => { renderTodo(element); });
    content.appendChild(todo);
  });
  const button = document.createElement('button');
  button.innerHTML = 'add To-do';
  content.appendChild(button);
  button.addEventListener('click', renderTodoForm);
};


const getTodoInfo = () => {
  const title = document.getElementById('t-title').value;
  const description = document.getElementById('t-description').value;
  const priority = document.getElementById('t-priority').value;
  const dueDate = document.getElementById('t-duedate').value;
  addTodo({title, description, priority, dueDate });
};

const getProjectName = () => { 
  const projectName = document.getElementById('newProjectName').value;
  createProject(projectName);
}
const renderProjectForm = () => {
  const content = document.getElementById('content');
  content.innerHTML = '';
  const nameInput = document.createElement('input');
  nameInput.id = 'newProjectName';
  const submitButton = document.createElement('input');
  submitButton.setAttribute('type','submit');
  submitButton.setAttribute('value','create project');
  content.appendChild(nameInput);
  content.appendChild(submitButton);
  submitButton.addEventListener('click', getProjectName);
};

const renderProjects = (projects) => {
  const projectContainer = document.getElementById('projects');
  projectContainer.innerHTML = '';
  projects.forEach((element, index) => {
    const project = document.createElement('div');
    project.id = `project${index}`;
    project.innerHTML = element.name;
    project.addEventListener('click', () => {
      renderProjectToDo(element);
      changeCurrentProject(index);
    });
    projectContainer.appendChild(project);
  });
  const btnAddProject = document.createElement('button');
  btnAddProject.innerHTML = 'Add Project';
  projectContainer.appendChild(btnAddProject);
  btnAddProject.addEventListener('click', renderProjectForm);
};


const renderTodo = (todo) => {
  const content = document.getElementById('content');
  content.innerHTML = '';
  const title = document.createElement('div');
  const description = document.createElement('div');
  const dueDate = document.createElement('div');
  const priority = document.createElement('div');
  title.innerHTML = todo.title;
  description.innerHTML = todo.description;
  dueDate.innerHTML = todo.dueDate;
  priority.innerHTML = todo.priority;
  content.appendChild(title);
  content.appendChild(description);
  content.appendChild(dueDate);
  content.appendChild(priority);
};

export {
  renderProjects,
  renderProjectToDo,
  renderTodo,
};
