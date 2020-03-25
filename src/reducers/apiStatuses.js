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
            console.log(API_START);
            break;
        
        case API_END:
            console.log(API_END);
            break;
        
        case API_ERROR:
            console.log(API_ERROR);
            break;

        case API_DENIED:
            console.log(API_DENIED);
            break;
    };
    return state;
};
