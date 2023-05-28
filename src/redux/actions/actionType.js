export const GET_USER_REQUEST = "GET_USER_REQUEST";

export const GET_USER_SUCCESS = "GET_USER_SUCCESS";

export const GET_USER_FAILED = "GET_USER_FAILED";

export const addTodo = (todo) => ({ type: "ADD_TODO", payload: todo});

export const resetTodo = () => ({ type: "RESET_TODO", payload: ""});

export const updateTodo = (input, id) => ({ type:"UPDATE_TODO", payload: {input, id}});

export const deleteTodo = (id) => ({ type:"DELETE_TODO", payload: id});

export const editTodo = (id) => ({ type:"EDIT_TODO", payload: id});

export const markTodo = (id) => ({ type:"MARK_TODO", payload: id});
