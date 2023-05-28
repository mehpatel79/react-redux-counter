import { useDispatch, useSelector } from "react-redux";
import {decrement, increment} from "../redux/actions/counterActions";
import '../App.css';

const Counter = () => {
    const counterSlice = useSelector((state) => state.counter);
    const dispatch = useDispatch();

    const add = () => {
        dispatch(increment());
    };

    const substract = () => {
        dispatch(decrement());
    };


    return(< >
        <center style={{marginTop: "40vh"}}>
            <button onClick={substract}>-</button>{" "}
            Counter Value : {" "}
            <b>{counterSlice.counterValue}</b>{" "}
            <button onClick={add}>+</button>
            {counterSlice.loading && <div>Loading...</div>} 
        </center>
        </>
    );
};

export default Counter;