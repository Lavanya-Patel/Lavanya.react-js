import { ADD, REDUCE } from "../Actiontype.js"

const initialState = {
    value:10, 
};

  export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD:
            return { ...state, value: state.value + action.payload };
        case REDUCE:
            return { ...state, value: state.value - action.payload };
        default:
            return state;
    }
};

