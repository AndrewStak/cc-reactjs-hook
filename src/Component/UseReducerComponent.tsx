import React, { useReducer } from 'react';

const initialState = {
    counter : 100
};

type ActionTypes = {type:"Increment"; payload:number} | {type:"Decrement"; payload:number} ;

const counterReducer = (state: typeof initialState, action:ActionTypes) =>{
    switch (action.type){
        case "Increment":
            return{
                ...state,
                counter:state.counter + action.payload
            };
        case "Decrement":
            return{
                ...state,
                counter:state.counter - action.payload
            };
        default:
            throw new Error("Bad Action");
    }
}

const UseReducerComponent = () => {
    const [state, dispatch] = useReducer(counterReducer, initialState);

    return (
        <div>
            <div>Counter: {state.counter}</div>
            <div>
                <button
                onClick={()=>
                dispatch({type:"Increment",payload:10})}
                >
                    Increment
                </button>
                &nbsp; | &nbsp; 
                <button 
                onClick={()=>dispatch({type:"Decrement",payload:5})}
                >
                    Decrement
                </button>
            </div>
        </div>
    );
}

export default UseReducerComponent;
