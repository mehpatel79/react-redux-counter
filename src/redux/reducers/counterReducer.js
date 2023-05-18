const initialState = {
                        counterValue : 0,
                      };

export const counterReducer = (state = initialState, action) => {

        const {payload} = action;

        switch (action.type){
            case "ADD":
                return Object.assign(
                        {},
                        {
                            ...state,
                            counterValue: state.counterValue + payload,
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