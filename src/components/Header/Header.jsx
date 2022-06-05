import logo from './img/logo.svg'
import './Header.scss'

const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                <img src={logo} alt="logo"/>
            </div>
        </header>
    )
}

export default Header