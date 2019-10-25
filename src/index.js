import {ToDo,Project} from './logic'

const projects = [];
let current_project = 0;
const getDefaultProject = () => {
    if(projects.length===0){
        const temp = Project('javascript');
        projects.push(temp);
        current_project = temp;
        return current_project;
    }
    else{
        return projects[0];
    }
}

const createProject = (name) => {
    const project = Project(name);
    projects.push(project);
    current_project = project;
}

const deleteProject = (currProject) => {
   projects.forEach((project,index) => {
       if(project==currProject){
           projects.slice(index,1);
           current_project = projects[0];
       }
   }); 
}





