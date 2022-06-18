import User from "./User";

const Users = (props) => {
    return (
        <div>
            {props.users.map(user => {
                return (
                    <User user={user} toggleFollow={props.toggleFollow} />
                )
            })}
        </div>
    )
}

export default Users