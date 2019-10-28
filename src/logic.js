const ToDo = (title, description, dueDate, priority) => {
  return {
    title, description, dueDate, priority,
  };
};

const Project = (name) => {
  const toDos = [];
  const getName = () => name;
  const addTodo = (todo) => {
    toDos.push(todo);
  };
  const removeTodo = (todo) => {
    toDos.forEach((td, index) => {
      if (td === todo) {
        toDos.splice(index, 1);
      }
    });
  };
  const getTodos = () => toDos;
  return {
    name, toDos, getName, addTodo, removeTodo, getTodos,
  };
};

export {
  ToDo, Project,
};
