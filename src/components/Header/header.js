import './header.css';
import logo from './fampaylogo.svg';

const Header = () => {
    return (
        <div className="header">
            <img src={logo} alt="" />
        </div>
    );
};

export default Header;