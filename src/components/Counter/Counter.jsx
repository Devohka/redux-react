// import { useState } from "react";
import Btn from "../Btn/Btn";
import { useSelector, useDispatch } from "react-redux";
// import Btn from "./Btn/Btn";
export default function Counter() {
    const counterValue = useSelector((state) => {
        return state.counter;
    });

    const dispatch = useDispatch();
    // const [count, setCount] = useState(0)

    function maxCount() {
        dispatch({type: "addNumber", payload: 1});

    //    const newCount = count + 1;
    //    setCount(newCount);
    //    console.log(newCount);
    };

    function minCount() {
        dispatch({type: "minusNumber", payload: 1});
        // const newCount = count - 1;
        // setCount(newCount);
        // console.log(newCount)
     };

    return (
        <>
        <h1>{counterValue}</h1>
        <Btn click={maxCount} title={+1}/>
        <Btn click={minCount} title={-1}/>
        </>
    );
};
