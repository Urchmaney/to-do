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
  const dd = stringify(project, 'todo');
  const ob = JSON.parse(dd);
  projects.push(project);
  setProjects(projects);
};


const removeProject = (index) => {
  const projects = getProjects();
  projects.splice(index, 1);
  setProjects(projects);
};

const stringify = (obj, prop) => {
  const placeholder = '____PLACEHOLDER____';
  const fns = [];
  let json = JSON.stringify(obj, (key, value) => {
    if (typeof value === 'function') {
      fns.push(value);
      return placeholder;
    }
    return value;
  }, 2);
  json = json.replace(new RegExp('"' + placeholder + '"', 'g'), () => fns.shift());
  return 'this["' + prop + '"] = ' + json + ';';
};
export {
  setProjects,
  getProjects,
  addProject,
  removeProject,
};
