import { useContext } from 'react';

// helper
import { separatorThousandsCurrency } from '../../helper/functions';

// contexts
import { SearchCurrencyContext } from '../../contexts/SearchCurrencyContextProvider';

// component's
import TargetCurrencyDropdown from './TargetCurrencyDropdown';
import Title from '../ui/Title';
import SmallText from '../ui/SmallText';


const HeaderCoinInfo = ({ data, selectedCurrency }) => {

    const { state } = useContext (SearchCurrencyContext);
    const {image, name, symbol, market_data} = data;
    const btcSymbol = state.data.currencies?.find (currency => currency.code === 'BTC');



    return (
        <div className='h-14 flex justify-between items-center px-2 border-b border-[#33415580] relative z-40 bg-[#0E172A80] backdrop-blur-3xl'>


            <Title customClassName='flex items-center gap-2 h-full'>
                <img
                    className='h-3/5 rounded-full overflow-hidden'
                    src={image?.large} 
                    alt={`${name} logo`} />

                <span>{name}</span>
                <span className='font-normal text-slate-500'>{symbol?.toUpperCase ()}</span>
            </Title>



            <div className='flex items-center gap-2'>
                <div>
                    <SmallText>Current Price: </SmallText>
                    <SmallText customColor customClassName='text-blue-500 relative z-50'>
                            <span>{selectedCurrency?.symbol}</span>
                            <span className='ms-1'>{separatorThousandsCurrency(market_data?.current_price?.[selectedCurrency?.code?.toLowerCase()])}</span>
                    </SmallText>
                    <SmallText 
                        customColor
                        customClassName={`ms-2 relative z-50 ${market_data?.price_change_percentage_24h_in_currency?.[selectedCurrency?.code?.toLowerCase()] < 0 ? 'text-rose-500' : 'text-green-500'}`}
                    >
                        {market_data?.price_change_percentage_24h_in_currency?.[selectedCurrency?.code?.toLowerCase()]?.toFixed (1)}%
                        <i className={`fa fa-arrow-turn-${market_data?.price_change_percentage_24h_in_currency?.[selectedCurrency?.code?.toLowerCase()] < 0 ? 'down' : 'up'} scale-[0.85]`}></i>
                    </SmallText>
                </div>
                <div>
                    <SmallText customColor customClassName='text-blue-500 relative z-50'>
                            <span>{btcSymbol?.symbol}</span>
                            <span className='ms-1'>{separatorThousandsCurrency(market_data?.current_price?.btc, 8)}</span>
                    </SmallText>
                    <SmallText 
                        customColor
                        customClassName={`ms-2 relative z-50 ${market_data?.price_change_percentage_24h_in_currency?.[selectedCurrency?.code?.toLowerCase()] < 0 ? 'text-rose-500' : 'text-green-500'}`}
                    >
                        {market_data?.price_change_percentage_24h_in_currency?.btc?.toFixed (1)}%
                        <i className={`fa fa-arrow-turn-${market_data?.price_change_percentage_24h_in_currency?.btc < 0 ? 'down' : 'up'} scale-[0.85]`}></i>
                    </SmallText>
                </div>
            </div>



            <TargetCurrencyDropdown />


        </div>
    );
};


export default HeaderCoinInfo;