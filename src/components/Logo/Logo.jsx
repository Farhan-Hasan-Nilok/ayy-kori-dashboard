import { Link } from 'react-router-dom';
import logo from '../../assets/logos/logo.png'

const Logo = () => {
    return <Link to='/'>
        <img className='hidden md:block' src={logo} alt="logo" />
    </Link>
};

export default Logo;