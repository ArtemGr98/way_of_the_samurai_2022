import usersAPI from "../../api/users";


const TOGGLE_FOLLOW = "TOGGLE_FOLLOW"
const GET_USERS = "GET_USERS"
const GET_TOTAL_USERS = "GET_TOTAL_USERS"
const CHANGE_PAGE = "CHANGE_PAGE"
const IS_LOADER = "IS_LOADER"
const IS_DISABLED = "IS_DISABLED"

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

export default function usersReducer(state = initState, action) {
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

export const toggleFollow = id => ({type: TOGGLE_FOLLOW, id})
export const getUsers = users => ({type: GET_USERS, users})
export const getTotalUsers = total => ({type: GET_TOTAL_USERS, total})
export const changePage = page => ({type: CHANGE_PAGE, page})
export const isLoaderToggle = isLoader => ({type: IS_LOADER, isLoader})
export const isDisabledToggle = (isDisabled, userId) => ({type: IS_DISABLED, isDisabled, userId})

export const setUsers = (currentPage, countUsers) => async dispatch => {
    dispatch(isLoaderToggle(true))

    const data = await usersAPI.getUsers(currentPage, countUsers)
    if (!data.error) {
        dispatch(isLoaderToggle(false))
        dispatch(getUsers(data.items))
        dispatch(getTotalUsers(data.totalCount))
    }
}

export const onToggleFollow = (userId, followed) => async dispatch => {
    dispatch(isDisabledToggle(true, userId))
    if (!followed) {
        const data = await usersAPI.followUser(userId)
        data.resultCode === 0 && dispatch(toggleFollow(userId))
        dispatch(isDisabledToggle(false, userId))
    } else {
        const data = await usersAPI.unFollowUser(userId)
        data.resultCode === 0 && dispatch(toggleFollow(userId))
        dispatch(isDisabledToggle(false, userId))
    }
}
