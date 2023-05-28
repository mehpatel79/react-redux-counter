import { useDispatch, useSelector } from "react-redux";
import {addNewTodo, resetTodo, updateTodo, deleteTodo, editTodo, markTodo} from "../redux/actions/todoActionsIndex";
import '../App.css';
import { useEffect, useState } from "react";

const TodoList = () => {

    const todos = useSelector((state) => state.todoReducer.todos);
    const [selectedTodo, setSelectedTodo] = useState([]);
    const dispatch = useDispatch();
    
    
    const actionClick = (data) => {
        if(data && data.type === "edit"){
            dispatch(editTodo(data.todo.id));
        }
        else if (data && data.type === "delete"){
            dispatch(deleteTodo(data.todo.id));
        }
    };

    const changeEvent = (e, todoId) => { 
                        setValue(
                                {
                                    ...value,
                                    [e.target.name] : e.target.value,
                                },
                                );
    };


return(< >
        <center style={{marginTop:"50px"}}>
            <input type="text" onChange={(e) => changeEvent(e)} value={value.title} />
            <button onClick={add}>Add</button>
            <button onClick={reset}>Reset</button> 
        </center>
        </>
    );
};

export default TodoList;