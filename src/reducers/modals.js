import {
    SET_ALTER_EVENT_MODAL_IS_HIDDEN,
    SET_APPROVE_EVENT_MODAL_IS_HIDDEN,
    SET_LOGIN_MODAL_IS_HIDDEN,
    SET_NEW_EVENT_MODAL_IS_HIDDEN
} from "../constants/actionTypes";

export default function (state = {
    alterEventModalIsHidden = true,
    approveEventModalIsHidden = true,
    loginModalIsHidden = true,
    newEventModalIsHidden = true
}, action) {
    switch (action.type) {
        case SET_ALTER_EVENT_MODAL_IS_HIDDEN:
            console.log(SET_ALTER_EVENT_MODAL_IS_HIDDEN);

            return {
                ...state,
                alterEventModalIsHidden: action.payload
            };

        case SET_APPROVE_EVENT_MODAL_IS_HIDDEN:
            console.log(SET_APPROVE_EVENT_MODAL_IS_HIDDEN);
            
            return {
                ...state,
                approveEventModalIsHidden: action.payload
            };
        
        case SET_LOGIN_MODAL_IS_HIDDEN:
            console.log(SET_LOGIN_MODAL_IS_HIDDEN);
            
            return {
                ...state,
                loginModalIsHidden: action.payload
            };

        case SET_NEW_EVENT_MODAL_IS_HIDDEN:
            console.log(SET_NEW_EVENT_MODAL_IS_HIDDEN);
            
            return {
                ...state,
                newEventModalIsHidden: action.payload
            };
    };

    return state;
};
