import { SET_EVENTS } from "../constants/actionTypes";

const initialState = {
    events: []
};

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case SET_EVENTS:
            return Object.assign({}, state, {
                events: action.payload
            });
        
    };
    return state;
};

export default rootReducer;
