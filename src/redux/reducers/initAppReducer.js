import { INIT_APP } from "../actions/actionType";

const initState = {
    isInitApp: false
}

const initAppReducer = (state = initState, action) => {
    switch (action.type) {
        case INIT_APP:
            return {
                ...state,
                isInitApp: true
            }
        default:
            return state;
    }
}

export default initAppReducer