const ToDo = function(title,description,dueDate,priority){
    const getTitle = () => title
    const getDescription = ()=> description
    const getDueDate =  () => dueDate
    const getPriority = () => priority
    return {getTitle,getDescription,getDueDate,getPriority}
}

const Project = function(name){
    const toDos = [];
    const getName = () => name
    const addTodo = (todo)=>{
        toDos.push(todo);
    }
    const removeTodo = (todo)=>{
        toDos.forEach((td,index) =>{
            if(td == todo){
                toDos.splice(index,1);
            }
        })
    }
    const getTodos = () => toDos
    return {getName,addTodo,removeTodo,getTodos}
}

export{
    ToDo,Project
}