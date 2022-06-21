import User from "./User";
import axios from "axios";
import React from 'react';
import styled from "styled-components";


const PaginationItem = styled.span`
  margin-right: 10px;
  cursor: pointer;
  font-weight: ${props => (props.children === props.currentPage) && "bold"};
`


class Users extends React.Component {

    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(response => {
                console.log(response)
                this.props.getUsers(response.data.items)
                this.props.getTotalUsers(response.data.totalCount)
            })
    }

    renderPagination = () => {
        const totalPages = Math.ceil(this.props.totalUsers / this.props.countUsers)
        const pages = []

        for (let i = 1; i <= totalPages; i++) {
            pages.push(i)
        }

        const curP = this.props.currentPage;
        const curPF = ((curP - 5) < 0) ? 0 : curP - 5 ;
        const curPL = curP + 5;
        const slicedPages = pages.slice( curPF, curPL);

        return slicedPages
    }

    onChangePage = (pageNum) => {
        this.props.changePage(pageNum)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNum}`)
            .then(response => {
                console.log(response)
                this.props.getUsers(response.data.items)
                this.props.getTotalUsers(response.data.totalCount)
            })
    }

    render() {

        return (
            <div>
                <div>
                    {this.renderPagination().map(page => <PaginationItem
                        key={page}
                        currentPage={this.props.currentPage}
                        onClick={() => this.onChangePage(page)}>{page}</PaginationItem>)}
                </div>
                {this.props.users.map(user => {
                    return (
                        <User user={user} key={user.id} toggleFollow={this.props.toggleFollow}/>
                    )
                })}
            </div>
        )
    }
}

export default Users