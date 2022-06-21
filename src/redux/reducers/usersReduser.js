import {CHANGE_PAGE, GET_TOTAL_USERS, GET_USERS, TOGGLE_FOLLOW} from "../actions/actionType";

// usersInfo: [
//     {
//         id: 1,
//         ava: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8o4vwBFToOYqPmxz2pIJk9z5mJsLlDrx2jw&usqp=CAU",
//         followed: true,
//         name: "Artem",
//         country: "Ukraine",
//         city: "Chernihiv",
//         info: "info"
//     },
//     {
//         id: 2,
//         ava: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8o4vwBFToOYqPmxz2pIJk9z5mJsLlDrx2jw&usqp=CAU",
//         followed: true,
//         name: "Artem",
//         country: "Ukraine",
//         city: "Chernihiv",
//         info: "info"
//     },
//     {
//         id: 3,
//         ava: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8o4vwBFToOYqPmxz2pIJk9z5mJsLlDrx2jw&usqp=CAU",
//         followed: false,
//         name: "Artem",
//         country: "Ukraine",
//         city: "Chernihiv",
//         info: "info"
//     },
// ],

const initState = {
    usersInfo: [],
    currentPage: 1,
    totalUsers: 0,
    countUsers: 10,
}

const usersReducer = (state = initState, action) => {
    switch (action.type) {
        case TOGGLE_FOLLOW:
            return {
                ...state, usersInfo: [...state.usersInfo.map(user => {
                    if (user.id === action.id) {
                        return {
                            ...user,
                            followed: !user.followed
                        }
                    }
                    return user
                })]
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

        default:
            return state
    }
}

export default usersReducer