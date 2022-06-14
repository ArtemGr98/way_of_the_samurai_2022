import logo from '../../img/logo.svg'
import styled from "styled-components";

const HeaderWrapper = styled.header`
  text-align: start;
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

const Header = () => {
    return (
        <HeaderWrapper>
            <Logo>
                <img src={logo} alt="logo"/>
            </Logo>
        </HeaderWrapper>
    )
}

export default Header