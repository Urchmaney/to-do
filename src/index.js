import {ToDo,Project} from './logic'

let current_project = 0;
const getDefaultProject = () => {
    if(getProjects().length===0){
        createProject('javascript');
        return current_project;
    }
    else{
        return getProjects()[0];
    }
}
const createProject = (name) => {
    const project = Project(name);
    current_project = project;
    addProject(current_project);
}

const deleteProject = (currProject) => {
   projects.forEach((project,index) => {
       if(project==currProject){
           projects.slice(index,1);
           current_project = projects[0];
       }
   })
   updateProjects(); 
}
