import { createStore } from "redux";
import { composeWithDevTools } from '@redux-devtools/extension';


const state = {
    name: "redux",
    counter: 0,
};




const reduser = (state, action) => {
    console.log(action.type);
    if (action.type === "addNumber") {
        return {
            counter: state.counter + action.payload
        };
    } else if (action.type === "minusNumber") {
        return {
            counter: state.counter - action.payload
        };
    } else {
        return state;
    };

};
const store = createStore(reduser, state, composeWithDevTools());
// store.dispatch({ type: "addNumber", payload: 5 }); цю дію в компоненті робить хук useDispatch
// store.dispatch({ type: "minusNumber", payload: 2 }); 

export default store;