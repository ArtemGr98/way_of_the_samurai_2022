import User from "./User";
import Pagination from "../common/Pagination/Pagination";

const Users = (props) => {
    return (
        <div>
            <Pagination {...props} />
            {props.users.map(user => {
                return (
                    <User user={user} key={user.id}
                          onToggleFollow={props.onToggleFollow}
                          isDisabled={props.isDisabled}/>
                )
            })}
        </div>
    )
}

export default Users