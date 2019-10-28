import { addTodo, createProject } from './index';

const getTodoInfo = () => {
  const title = document.getElementById('t-title').value;
  const description = document.getElementById('t-description').value;
  const priority = document.getElementById('t-priority').value;
  const dueDate = document.getElementById('t-duedate').value;
  return {
    title, description, priority, dueDate,
  };
};

const renderTodoForm = () => {
  const content = document.getElementById('content');
  const titleInput = document.createElement('input');
  const descriptionInput = document.createElement('input');
  const dueDateInput = document.createElement('input');
  const priorityInput = document.createElement('input');
  const submitButton = document.createElement('button');
  submitButton.addEventListener('click', addTodo(getTodoInfo()));
  content.appendChild(titleInput);
  content.appendChild(descriptionInput);
  content.appendChild(dueDateInput);
  content.appendChild(priorityInput);
  content.appendChild(submitButton);
};

const getProjectName = () => { 
  const projectName = document.getElementById('newProjectName').value;
  createProject(projectName);
}
const renderProjectForm = () => {
  const content = document.getElementById('content');
  const nameInput = document.createElement('input');
  nameInput.id = 'newProjectName';
  const submitButton = document.createElement('input');
  submitButton.setAttribute('type','submit');
  submitButton.setAttribute('value','create project');
  content.appendChild(nameInput);
  content.appendChild(submitButton);
  submitButton.addEventListener('click', getProjectName());
};

const renderProjects = (projects) => {
  const projectContainer = document.getElementById('projects');
  projects.forEach((element, index) => {
    const project = document.createElement('div');
    project.id = `project${index}`;
    project.innerHTML = element.name;
    projectContainer.appendChild(project);
  });
  const btnAddProject = document.createElement('button');
  btnAddProject.innerHTML = 'Add Project';
  projectContainer.appendChild(btnAddProject);
  btnAddProject.addEventListener('click', renderProjectForm());
};

const renderProjectToDo = (project) => {
  const content = document.getElementById('content');
  project.getTodos().forEach((element, index) => {
    const todo = document.createElement('div');
    todo.id = `todo${index}`;
    todo.innerHTML = `${element.title}  ${element.dueDate}`;
    content.appendChild(todo);
  });
  const button = document.createElement('button');
  button.innerHTML = 'add To-do';
  button.addEventListener('click', renderTodoForm());
};

const renderTodo = (todo) => {
  const content = document.getElementById('content');
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
