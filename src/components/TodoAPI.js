import { useEffect } from "react";
import { API } from "../apiService";
import { useState } from "react";

const TodoAPI = () => {

    const [todo, setTodo] = useState([]);
    const [loadingTodo, setLoadingTodo] = useState(false);

    useEffect(() => {
        getTodoData();
    }, []);


async function getTodoData() {
    try{
        setLoadingTodo(true);
        const response = await API.getTodos();
        setTodo(response.data);
        setLoadingTodo(false);
        
        
    }
    catch{
        setLoadingTodo(false);

    }

}
    return (
            <>
            {loadingTodo? (<center>Loading...</center>):(
                <ul>
                    <table border={"1px solid black"}>
                        <thead>
                        <tr>
                        <th>ID</th>
                        <th>TITLE</th>
                        <th>User ID</th>
                        </tr>
                        </thead>
                        <tbody>
                        {todo.map((task) =>
                            <tr key={task.id}>
                            <td>{task.id}</td>
                            <td>{task.title}</td>
                            <td>{task.userId}</td>
                            </tr>
                            )}
                        </tbody>
                    </table>
                </ul>
            )}
            </>
    );
};

export default TodoAPI;