import {CHANGE_PAGE, GET_TOTAL_USERS, GET_USERS, IS_DISABLED, IS_LOADER, TOGGLE_FOLLOW} from "../actions/actionType";

const initState = {
    usersInfo: [],
    currentPage: 1,
    totalUsers: 0,
    countUsers: 5,
    isLoader: false,
    isDisabled: {
        value: false,
        id: []
    },
}

const usersReducer = (state = initState, action) => {
    switch (action.type) {
        case TOGGLE_FOLLOW:
            return {
                ...state,
                usersInfo: [...state.usersInfo.map(user => {
                    if (user.id === action.id) {
                        return {
                            ...user,
                            followed: !user.followed
                        }
                    }
                    return user
                })],
            }
        case GET_USERS:
            return {
                ...state,
                usersInfo: [...action.users]
            }
        case GET_TOTAL_USERS:
            return {
                ...state,
                totalUsers: action.total
            }
        case CHANGE_PAGE:
            return {
                ...state,
                currentPage: action.page
            }
        case IS_LOADER:
            return {
                ...state,
                isLoader: action.isLoader
            }
        case IS_DISABLED:
            return {
                ...state,
                isDisabled: {
                    value: action.isDisabled,
                    id: action.isDisabled ?
                        [...state.isDisabled.id, action.userId]
                        :
                        [...state.isDisabled.id.filter(id => id !== action.userId) ]
                }
            }

        default:
            return state
    }
}

export default usersReducer