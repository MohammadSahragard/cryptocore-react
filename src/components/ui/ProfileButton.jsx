import { Link } from 'react-router-dom';

// import asset's
import profileImage from '../../assets/ME.jpg';


const ProfileButton = ({customClassName}) => {
    return (
        <Link to='/profile' className={customClassName}>
            <img 
                src={profileImage} 
                className='block h-9 w-9 rounded-full ring-2 ring-[#00E9E9]/0 ring-offset-2 ring-offset-indigo-500 transition-all
                           hover:ring-[#8000FF]/50' />
        </Link>
    );
};


export default ProfileButton;