const initialState = {
                        counterValue : 0,
                        loading: false,
                      };

export const counterReducer = (state = initialState, action) => {

        const {payload} = action;

        switch (action.type){
            case "ADD_REQUEST":
                return Object.assign(
                        {},
                        {
                            ...state,
                            loading: true,
                        }
                        );
            
            case "ADD_SUCCESS":
                return Object.assign(
                        {},
                        {
                            ...state,
                            counterValue: state.counterValue + payload,
                            loading: false,
                        }
                        );
                
            case "ADD_FAILURE":
                return Object.assign(
                        {},
                        {
                             ...state,
                            error: payload,
                            loading: false,
                        }
                        );
                    

            case "SUBSTRACT":
                return Object.assign(
                    {},
                    {
                        ...state,
                        counterValue: state.counterValue - payload,
                    }
            );
            default :
                return state;
        }
};