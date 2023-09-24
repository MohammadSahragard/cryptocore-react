import { Link } from "react-router-dom";

// assets
import LogoImage from '../../assets/logo.svg';



const Logo = () => {
    return (
        <Link 
            className="logo flex items-center"
            to="/home"
        >
            <img src={LogoImage} alt="logo" className='h-10' />
            <span className='bg-gradient-to-r from-[#00BFFF] to-[#8000FF] bg-clip-text text-transparent 
                             text-3xl font-black '
            >
                Cryptocore
            </span>
        </Link>
    );
};


export default Logo;