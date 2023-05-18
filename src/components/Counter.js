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
        <center className="CounterDisplay">
            <button onClick={substract}>-</button>
            Counter Value : {" "}
            <b>{counterSlice.counterValue}</b>
            <button onClick={add}>+</button> 
        </center>
        </>
    );
};

export default Counter;