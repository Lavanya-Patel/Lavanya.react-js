import { SWITCH_THEME } from "../Actiontype.js";

  const initialState = {
    theme: 'light', 
};

 export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SWITCH_THEME:
            return { ...state, theme: action.payload };
        default:
            return state;
    }
};

