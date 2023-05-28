import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import {getUsers} from "../redux/actions/userActions";

const Users = () => {
    const usersSlice = useSelector((state) => state.users);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUsers());
    }, []);


    return (
            <>
            {usersSlice.loading? (<center>Loading...</center>):(
                <ul>
                    <table border={"1px solid black"}>
                        <tr>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>USERNAME</th>
                        </tr>
                        {usersSlice?.users?.map((user) => 
                            <tr>
                            <td key={user.id}>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                            </tr>)}
                    </table>
                </ul>
            )}
            </>
    );
};

export default Users;