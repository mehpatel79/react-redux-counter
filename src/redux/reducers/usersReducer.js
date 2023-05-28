import {
    GET_USER_REQUEST,
    GET_USER_SUCCESS,
    GET_USER_FAILED,
} from "../actions/actionType";

const initialState = {
    users: [],
    loading: false,
};

export const usersReducer = (state = initialState, action) => {
    const {payload} = action;
    switch (action.type){
            case GET_USER_REQUEST:
                return Object.assign({}, {...state, loading:true});

            case GET_USER_SUCCESS:
                return Object.assign({}, {...state, loading:false, users: payload});
            
            case GET_USER_FAILED:
                return Object.assign({}, {...state, loading:false});
            
            default:
                return state;
    
    }
};