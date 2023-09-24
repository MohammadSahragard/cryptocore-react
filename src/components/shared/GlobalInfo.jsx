import { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';

// api
import { globalData } from '../../services/api';

// helper
import { separatorThousandsCurrency } from '../../helper/functions';

// contexts
import { SearchCurrencyContext } from '../../contexts/SearchCurrencyContextProvider';

// components
import SmallText from '../ui/SmallText';



const GlobalInfo = () => {

    const [data, setData] = useState ([]);
    const { state } = useContext (SearchCurrencyContext);
    const currencySymbol = state.data.currencies && state.data.currencies.find (currency => currency.code === state.selectedCurrency);



    useEffect (() => {
        const fetchData = async () => {
            setData (await globalData ());
        };

        fetchData ();
    }, []);

    setTimeout(() => {
        const fetchData = async () => {
            setData (await globalData ());
        };

        fetchData ();
    }, 2000);





    return (
        <div className='h-10 flex justify-center items-center gap-4 border-b border-[#33415580] relative overflow-x-auto z-30'>
            <div>
                <SmallText>Coins: </SmallText>
                <Link to='/cryptocurrencies'>
                    <SmallText customColor customClassName='text-blue-500 relative z-50'>{data?.active_cryptocurrencies}</SmallText>
                </Link>
            </div>
            <div>
                <SmallText>Exchanges: </SmallText>
                <Link to='/exchanges'>
                    <SmallText customColor customClassName='text-blue-500 relative z-50'>{data?.markets}</SmallText>
                </Link>
            </div>
            <div>
                <SmallText>Market Cap: </SmallText>
                <SmallText customColor customClassName='text-blue-500 relative z-50'>
                        <span>{currencySymbol?.symbol}</span>
                        <span className='ms-1'>{separatorThousandsCurrency(data?.total_market_cap?.[state.selectedCurrency.toLowerCase()])}</span>
                </SmallText>
                <SmallText 
                    customColor
                    customClassName={`ms-2 relative z-50 ${data?.market_cap_change_percentage_24h_usd < 0 ? 'text-rose-500' : 'text-green-500'}`}
                >
                    {data?.market_cap_change_percentage_24h_usd?.toFixed (2)}%
                    <i className={`fa fa-arrow-turn-${data?.market_cap_change_percentage_24h_usd < 0 ? 'down' : 'up'} scale-[0.85]`}></i>
                </SmallText>
            </div>
            <div>
                <SmallText>24h Vol: </SmallText>
                <SmallText customColor customClassName='text-blue-500 relative z-50'>
                    <span>{currencySymbol?.symbol}</span>
                    <span className='ms-1'>{data?.total_market_cap && separatorThousandsCurrency(data?.total_volume[state.selectedCurrency.toLowerCase()])}</span>
                </SmallText>
            </div>
            <div>
                <SmallText>Dominance: </SmallText>
                <SmallText customColor customClassName={`relative z-50 ${data?.market_cap_percentage?.btc < 0 ? 'text-rose-500' : 'text-green-500'}`}>
                    BTC {data?.market_cap_percentage?.btc.toFixed (2)}%
                </SmallText>
                <SmallText customColor customClassName={`relative z-50 ms-2 ${data?.market_cap_percentage?.eth < 0 ? 'text-rose-500' : 'text-green-500'}`}>
                    ETH {data?.market_cap_percentage?.eth.toFixed (2)}%
                </SmallText>
            </div>
        </div>
    );
};

export default GlobalInfo;