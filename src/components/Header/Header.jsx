import logo from '../../img/logo.svg'
import styled from "styled-components";
import {NavLink} from "react-router-dom";

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  background-color: deepskyblue;
`
const Logo = styled.div`
  width: 100px;
  height: 100px;
  animation: App-logo-spin infinite 20s linear;
  border-radius: 50%;

  img {
    width: 100%;
    height: 100%;
  }

  @keyframes App-logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`

const Header = (props) => {
    return (
        <HeaderWrapper>
            <Logo>
                <img src={logo} alt="logo"/>
            </Logo>
            <div>
                {props.isAuthMe ? (
                    <div>
                        <NavLink to={`/profile/`}>
                            {props.login}
                        </NavLink>
                        <button onClick={props.authLogout}>
                            log out
                        </button>
                    </div>
                ) : (
                    <NavLink to="/login">
                        Login
                    </NavLink>
                )}
            </div>
        </HeaderWrapper>
    )
}

export default Header