// components
import SearchBar from '../components/shared/SearchBar';
import Coins from '../components/shared/Coins';


const Cryptocurrencies = () => {
    return (
        <div className='grid grid-cols-[300px_auto]'>
            <SearchBar />
            <Coins />
        </div>
    );
};

export default Cryptocurrencies;