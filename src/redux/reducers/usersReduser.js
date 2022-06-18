import {TOGGLE_FOLLOW} from "../actions/actionType";


const initState = {
    usersInfo: [
        {
            id: 1,
            ava: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8o4vwBFToOYqPmxz2pIJk9z5mJsLlDrx2jw&usqp=CAU",
            followed: true,
            name: "Artem",
            country: "Ukraine",
            city: "Chernihiv",
            info: "info"
        },
        {
            id: 2,
            ava: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8o4vwBFToOYqPmxz2pIJk9z5mJsLlDrx2jw&usqp=CAU",
            followed: true,
            name: "Artem",
            country: "Ukraine",
            city: "Chernihiv",
            info: "info"
        },
        {
            id: 3,
            ava: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8o4vwBFToOYqPmxz2pIJk9z5mJsLlDrx2jw&usqp=CAU",
            followed: false,
            name: "Artem",
            country: "Ukraine",
            city: "Chernihiv",
            info: "info"
        },
    ],
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

        default:
            return state
    }
}

export default usersReducer