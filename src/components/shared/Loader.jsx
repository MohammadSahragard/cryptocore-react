// assets
import logoLoader from '../../assets/logo.svg';

// components
import Title from '../ui/Title';


const Loader = () => {
    return (
        <div className='absolute inset-0 flex flex-col items-center justify-center overflow-hidden'>
            <img 
                className='w-20 animate-spin'
                src={logoLoader} 
                alt="Loader" 
            />
            <Title>Loading ...</Title>
        </div>
    );
};

export default Loader;