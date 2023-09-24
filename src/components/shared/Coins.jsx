import { useState, useEffect, useContext } from 'react';

// api
import { getCryptoCurrencies } from '../../services/api';

// contexts
import { SearchCurrencyContext } from '../../contexts/SearchCurrencyContextProvider';
import { CryptoShowModeContext } from '../../contexts/CryptoShowModeContextProvider';

// components
import CryptoGridCard from './CryptoGridCard';
import CryptoListCard from './CryptoListCard';
import HeadingListCard from './HeadingListCard';
import Header from './Header';
import Loader from './Loader';
import CryptoPagination from './CryptoPagination';



const Coins = () => {

    // contexts
    const { state } = useContext (SearchCurrencyContext);
    const { show } = useContext (CryptoShowModeContext);

    // states
    const [currencies, setCurrencies] = useState ([]);




    useEffect (() => {
        const fetchCurrencies = async () => {
            setCurrencies (await getCryptoCurrencies (state?.selectedCurrency, 1));
        };
        
        fetchCurrencies ();
    }, [state.selectedCurrency])


    // setTimeout(() => {
    //     const fetchCurrencies = async () => {
    //         setCurrencies (await getCryptoCurrencies (state?.selectedCurrency, 1));
    //     };

    //     fetchCurrencies ();
    // }, 2000);





    // const & variables
    const currencySymbol = state?.data?.currencies?.find (currency => currency.code === state?.selectedCurrency);





    return (
        <div className='relative'>
            <Header />
            <div className={`absolute inset-0 p-2 pt-16 grid  ${show?.mode === 'list' ? '' : 'grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))]'} gap-2 overflow-auto`}>
                {show?.mode === 'list' && <HeadingListCard />}
                {
                        currencies?.length ?
                            currencies?.map (currency => 
                                show?.mode === 'list' ?
                                    <CryptoListCard key={currency.id} data={currency} currencySymbol={currencySymbol} /> :
                                    <CryptoGridCard key={currency.id} data={currency} currencySymbol={currencySymbol} />
                            ) :
                            <Loader />
                            
                }
                {currencies?.length && <CryptoPagination />}
            </div>
        </div>
    );
};

export default Coins;