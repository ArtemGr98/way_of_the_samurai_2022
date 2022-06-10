import logo from '../../img/logo.svg'
import {HeaderStyle, Logo} from "./HeaderdStyled";

const Header = () => {
    return (
        <HeaderStyle>
            <Logo>
                <img src={logo} alt="logo"/>
            </Logo>
        </HeaderStyle>
    )
}

export default Header