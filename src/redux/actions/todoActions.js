
export const addTodo = (todo) => {
console.log(todo);
    return {

            type: "ADD_TODO",
            payload : {
                id: Date.now(),
                title: todo,
                status : false,
            },
    };
};

export const deleteTodo = (id) => {
    return {
        type: "DELETE_TODO",
        id,
    };
};

export const resetTodo = () => {
    return {
        type: "RESET_TODO",
    };
};

export const editTodo = (id) => {
    return {
        type: "EDIT_TODO",
        payload: {
            id: id,
        },
        };
};

export const updateTodo = (id, todo) => {
    return{
        type: "UPDATE_TODO",
        payload:{
            todoId: id,
            todoTitle : todo.task,
            todoStatus : todo.status,
        },
    };
};

export const markTodo = (id) => {
    return {
        type: "MARK_TODO",
        payload: {
            selectedTodoid: id
        },
    };
};