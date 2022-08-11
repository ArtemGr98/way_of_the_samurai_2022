import User from "./User";
import Pagination from "../common/Pagination/Pagination";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { changePage, setUsers } from "../../redux/users/users";
import { usersState } from "../../redux/users/usersSelectors";

const Users = () => {

    const {users, currentPage, countUsers} = useSelector(usersState())
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setUsers(currentPage, countUsers))
    }, [dispatch, currentPage, countUsers])

    const onChangePage = (pageNum) => {
        dispatch(changePage(pageNum))
        dispatch(setUsers(pageNum, countUsers))
    }

    return (
        <div>
            <Pagination {...usersState()} onChangePage={onChangePage} />
            {users.map(user => {
                return (
                    <User user={user} key={user.id}/>
                )
            })}
        </div>
    )
}

export default Users