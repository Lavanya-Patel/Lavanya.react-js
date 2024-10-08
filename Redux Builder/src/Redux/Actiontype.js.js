// Action Types
export const ADD = 'ADD';
export const REDUCE = 'REDUCE';
export const SWITCH_THEME = 'SWITCH_THEME';

// Action Creators
export const handleAdd = (payload) => ({
    type: ADD,
    payload,
});

export const handleReduce = (payload) => ({
    type: REDUCE,
    payload,
});

export const handleTheme = (payload) => ({
    type: SWITCH_THEME,
    payload,
});