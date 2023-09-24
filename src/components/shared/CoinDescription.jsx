// helper
import { separatorThousandsCurrency, nFormatter, convertStringToHTML, keyElemMaker } from "../../helper/functions";

// components
import Title from "../ui/Title";
import SmallText from "../ui/SmallText";


const CoinDescription = ({ data, selectedCurrency }) => {

    
    const {
        price_change_percentage_24h_in_currency,
        price_change_percentage_7d_in_currency
    } = data?.market_data || {};


    // console.log(data?.description?.en);


    return (
        <div className='flex flex-col gap-8'>

            <div>
                <Title customClassName='text-[1.3rem]'>{data?.name} ({data?.symbol?.toUpperCase()}) price has declined today.</Title>

                <SmallText customClassName='scale-100 text-lg'>
                    The price of {data?.name} ({data?.symbol?.toUpperCase()}) is
                    <span className='text-blue-500'> {selectedCurrency?.symbol}{separatorThousandsCurrency(data?.market_data?.current_price?.[selectedCurrency?.code?.toLowerCase()])} </span>
                    today with a 24-hour trading volume of
                    <span className='text-blue-500'> {selectedCurrency?.symbol}{separatorThousandsCurrency (data?.market_data?.total_volume?.[selectedCurrency?.code?.toLowerCase()])} </span>.
                    This represents a
                    <span className={`${price_change_percentage_24h_in_currency?.[selectedCurrency?.code?.toLowerCase()] < 0 ? 'text-rose-500' : 'text-green-600'}`}> {price_change_percentage_24h_in_currency?.[selectedCurrency?.code?.toLowerCase()]?.toFixed(2)}% </span>
                    price decline in the last 24 hours and a
                    <span className={`${price_change_percentage_7d_in_currency?.[selectedCurrency?.code?.toLowerCase()] < 0 ? 'text-rose-500' : 'text-green-600'}`}> {price_change_percentage_7d_in_currency?.[selectedCurrency?.code?.toLowerCase()]?.toFixed(2)}% </span>
                    price increase in the past 7 days. With a circulating supply of
                    <span className='text-blue-500'> {nFormatter (data?.market_data?.circulating_supply)} </span>
                    {data?.symbol?.toUpperCase()}, {data?.name} is valued at a market cap of
                    <span className='text-blue-500'> {selectedCurrency?.symbol}{separatorThousandsCurrency(data?.market_data?.market_cap?.[selectedCurrency?.code?.toLowerCase()])} </span>.
                </SmallText>
            </div>

            <div className='coin-description space-y-2'>
                <Title customClassName='text-[1.3rem]'>Description</Title>
                {convertStringToHTML (data?.description?.en)?.map(paragraph => 
                                            <p key={keyElemMaker()} className='text-slate-500 text-lg' dangerouslySetInnerHTML={{__html: paragraph}}></p>
                                    )}
            </div>
            
        </div>
    );
};

export default CoinDescription;