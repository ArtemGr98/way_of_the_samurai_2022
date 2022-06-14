import {NavLink} from "react-router-dom";
import styled from "styled-components";

const NavWrapper = styled.nav`
  width: 20%;
  display: flex;
  flex-direction: column;
`
const NavbarLink = styled(NavLink)`
    font-size: 20px;
    color: deepskyblue;
    text-decoration: none;
    text-align: start;
    margin-bottom: 10px;
    &.active {
      color: gold;
    }
`

const Nav = () => {
    return (
        <NavWrapper>
            <NavbarLink to="/profile">
                Profile
            </NavbarLink>
            <NavbarLink to="/messages">
                Massages
            </NavbarLink>
            <NavbarLink to="/news">
                News
            </NavbarLink>
            <NavbarLink to="/music">
                Music
            </NavbarLink>
            <NavbarLink to="/settings">
                Settings
            </NavbarLink>
        </NavWrapper>
    )
}

export default Nav