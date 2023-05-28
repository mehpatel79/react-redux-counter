import { useDispatch, useSelector } from "react-redux";
import {addTodo, deleteTodo, editTodo, markTodo, resetTodo, updateTodo} from "../redux/actions/actionType";
import '../App.css';
import { useState, useRef } from "react";

const TodoApp = () => {

    
    const todoSlice = useSelector((state) => state.todo.todos);
    const counterSlice = useSelector((state) => state.todo.counter);

    
    const [input, setInput] = useState("");
    const [isEdit, setIsEdit] = useState(true);
    const idRef = useRef(0);


    const dispatch = useDispatch();


    const handleChange = (e) => {
        setInput(e.target.value);
    }
    const onSubmit = (e) => {
                                e.preventDefault();
                            if(!input) {
                                alert("Plese Enter Task");
                            }
                            else {
                                dispatch(addTodo(input));
                                setInput("");
                            }
                        };
    const onReset = () => {
        setInput("");
        dispatch(resetTodo())};

    const onMark = (id) => {
        dispatch(markTodo(id));
    }
    const onEdit = (id, title) => {
        setIsEdit(false);
        setInput(title);  
        idRef.current = id;  
        dispatch(editTodo(id))};

    const onDelete = (id) => {dispatch(deleteTodo(id))};
            
    const onUpdate = () => {
        let id = idRef.current;
        setIsEdit(true);
        dispatch(updateTodo(input, id))};
    
    const cancelTask = () => {
        setIsEdit(true);
        setInput("");
        };
    
    

return(< >
        <center style={{marginTop:"50px"}}>
            <input className="pm" type="text" onChange={handleChange} value={input} />
            {(isEdit)?
                  <>
                    <button className="pm" onClick={onSubmit}>Add</button>
                    <button className="pm" onClick={onReset}>Reset</button>
                  </>
                :
                  <>
                    <button className="pm" onClick={(e)=> {onUpdate()}}>Update</button>
                    <button className="pm" onClick={cancelTask}>Cancel</button>
                  </>
              }
            
            <div> 
            {<br></br>}
            {counterSlice > 0 && <h3>"To Do List"</h3>}
            <ul>
                {todoSlice.filter(task => task.status === false).map((task) => {
                    return (<li style={{listStyleType:"none"}} key={task.id}> {task.title}
                    <input type="checkbox" onClick={(e)=>{onMark(task.id)}} value={task.title} /> 
                    <button className="pm" onClick={(e)=>{onEdit(task.id, task.title)}} disabled={!isEdit}>Edit</button>
                    <button className="pm" onClick={(e) => {onDelete(task.id)}}>Delete</button>
                    </li>)})
                }
            </ul>
            </div>

        <hr />

        {counterSlice > 0 && <h3>Completed Task</h3>}
        
        <ul>
              {todoSlice.filter(task => task.status === true).map((task) => {
                  return (<div key={task.id}>
                  <li style={{textDecorationLine:"line-through", listStyleType:"none"}}> {task.title}
                    <input type="checkbox" onChange={(e)=>{onMark(task.id)}} checked={task.status} value={task.title} /> 
                    <button className="pm" onClick={(e) => {onDelete(task.id)}}>Delete</button>
                  </li>
                  </div>)
                  })}

                </ul>
                





            </center>
            
        
        </>
    );
};

export default TodoApp;