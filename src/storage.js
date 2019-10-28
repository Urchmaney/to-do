const setProjects = (projects) => {
  localStorage.setItem('projects', JSON.stringify(projects));
};
const getProjects = () => {
  if (!localStorage.getItem('projects')) {
    setProjects([]);
  }
  return JSON.parse(localStorage.getItem('projects'));
};

const addProject = (project) => {
  const projects = getProjects();
  projects.push(project);
  setProjects(projects);
};


const removeProject = (index) => {
  const projects = getProjects();
  projects.splice(index, 1);
  setProjects(projects);
};

export {
  setProjects,
  getProjects,
  addProject,
  removeProject,
};
