import { 
    API_START,
    API_END,
    API_ERROR,
    API_DENIED
} from "../constants/actionTypes";

export default function (state = {
    
}, action) {
    switch (action.type) {
        case API_START:
            console.log(`${API_START} - ${action.payload}`);
            break;
        
        case API_END:
            console.log(`${API_END} - ${action.payload}`);
            break;
        
        case API_ERROR:
            console.log(`${API_ERROR} - ${action.payload}`);
            break;

        case API_DENIED:
            console.log(`${API_DENIED} - ${action.payload}`);
            break;
    };
    return state;
};
