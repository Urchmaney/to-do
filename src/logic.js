const ToDo = (title, description, dueDate, priority) => {
  return {
    title, description, dueDate, priority,
  };
};

const Project = (name) => {
  const toDos = [];
  const getName = () => name;
  const getTodos = () => toDos;
  return {
    name, toDos, getName, getTodos,
  };
};

export {
  ToDo, Project,
};
