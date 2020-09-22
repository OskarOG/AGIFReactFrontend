import { MESSAGE } from "../constants/actionTypes";
import { toast } from "react-toastify";


const messageMiddleware = ({dispatch}) => next => action => {
    if (action.type !== MESSAGE) {
        next(action);
        return;
    }

    toast(action.payload.messageText);
};

export default messageMiddleware;