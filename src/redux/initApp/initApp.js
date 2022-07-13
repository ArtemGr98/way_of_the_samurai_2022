const INIT_APP = "INIT_APP"

const initState = {
    isInitApp: false
}

export default function initAppReducer(state = initState, action) {
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

export const initApp = () => ({type: INIT_APP})