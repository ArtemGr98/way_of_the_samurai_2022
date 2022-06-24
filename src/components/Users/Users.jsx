import User from "./User";
import styled from "styled-components";

const PaginationItem = styled.span`
  margin-right: 10px;
  cursor: pointer;
  font-weight: ${props => (props.children === props.currentPage) && "bold"};
`

const Users = (props) => {

    const totalPages = Math.ceil(props.totalUsers / props.countUsers)
    const pages = []

    for (let i = 1; i <= totalPages; i++) {
        pages.push(i)
    }

    const curP = props.currentPage;
    const curPF = ((curP - 5) < 0) ? 0 : curP - 5;
    const curPL = curP + 5;
    const slicedPages = pages.slice( curPF, curPL);

    return (
        <div>
            <div>
                {slicedPages.map(page => <PaginationItem
                    key={page}
                    currentPage={props.currentPage}
                    onClick={() => props.onChangePage(page)}>{page}</PaginationItem>)}
            </div>
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