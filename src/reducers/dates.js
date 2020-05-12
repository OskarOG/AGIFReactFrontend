import {
    SET_SELECTED_DATE
} from "../constants/actionTypes";

export default function (state = {
    selectedDate: new Date()
}, action) {
    switch (action.type) {
        case SET_SELECTED_DATE:
            console.log(SET_SELECTED_DATE);
            return {
                ...state,
                selectedDate: action.payload
            };
    };
    return state;
};
