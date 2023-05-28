
const initialState = {
                        todos:[],
                        counter:0,
                    };

export const todoReducer = (state = initialState, action) => {
    
    const {payload} = action;
    
        switch (action.type){
            case "ADD_TODO":
                return {
                        ...state,
                        counter: state.counter + 1,
                        todos:[...state.todos,
                                {
                                    id: state.counter + 1,
                                    title: payload,
                                    status: false,
                                },
                            ],
                            };

            case "DELETE_TODO":

                let deleteTask = state.todos.filter(task => task.id !== payload);
            
                return {
                        ...state,
                        todos: [...deleteTask],
                        };
                        
            case "EDIT_TODO":
                return {
                        ...state,
                };
            
            case "UPDATE_TODO":
                
                let updatedList = state.todos.map((task) => {
                          if(task.id === payload.id){
                            return ({id:task.id, title:payload.input, status : task.status})
                          }
                          return task
                        });


                        return {
                        ...state,
                         todos: [...updatedList],
                        };
            
            case "MARK_TODO":

                let markTodos = [];
                markTodos = state.todos.map((task)=>{
                    if (task.id === payload) {
                        return ({id:task.id, title: task.title, status: !task.status})
                    }
                    return task
                });
                                      
                return {
                        ...state,
                        todos: [...markTodos],
                        
                };

            case "RESET_TODO":
                return {
                        ...state,
                        todos: [],
                        counter:0,
                };


            default :
                return state;
        }
};

export default todoReducer;