import { memo } from 'react';
import { Link } from 'react-router-dom';

// helpers
import { separatorThousandsCurrency } from '../../helper/functions';

// components
import Title from "../ui/Title";
import SmallText from "../ui/SmallText";



const CryptoListCard = ({data, currencySymbol}) => {

    // variables
    const {
        id,
        market_cap_rank,
        image,
        name,
        symbol,
        current_price,
        price_change_percentage_1h_in_currency,
        price_change_percentage_24h,
        price_change_percentage_7d_in_currency,
        market_cap,
        sparkline_in_7d
    } = data || {};



    return (
        <div className='h-20 px-2 bg-[#1E283C50] rounded-lg text-white border border-[#33415550] transition-all relative
                        grid grid-cols-[max-content_max-content_auto_max-content_max-content_max-content_max-content_max-content_max-content] auto-rows-fr items-center gap-4
                        hover:bg-[#1E283C10]'>
            
            <SmallText customClassName='text-slate-400'>#{market_cap_rank}</SmallText>

            <Link to={`/cryptocurrency/${id}`} className='h-3/5'>
                <img
                    loading='lazy'
                    src={image}
                    alt='crypto logo'
                    className='h-full rounded-full overflow-hidden'/>
            </Link>
            
            <Link to={`/cryptocurrency/${id}`} className="flex gap-2">
                <Title customClassName='leading-none'>{name}</Title>
                <SmallText customClassName='leading-none text-slate-400 origin-left'>{symbol.toUpperCase()}</SmallText>
            </Link>

            <Title customClassName='flex gap-1'>
                <span>{currencySymbol?.symbol}</span>
                <span>{separatorThousandsCurrency (current_price, 2)}</span>
            </Title>

            <SmallText
                customColor
                customClassName={`w-20 text-end rounded font-bold origin-right ${price_change_percentage_1h_in_currency < 0 ? 'text-rose-700' : 'text-green-600'}`}
            >
                {Number(price_change_percentage_1h_in_currency).toFixed(2)}%
            </SmallText>
            <SmallText
                customColor
                customClassName={`w-20 text-end rounded font-bold origin-right ${price_change_percentage_24h < 0 ? 'text-rose-700' : 'text-green-600'}`}
            >
                {Number(price_change_percentage_24h).toFixed(2)}%
            </SmallText>
            <SmallText
                customColor
                customClassName={`w-20 text-end rounded font-bold origin-right ${price_change_percentage_7d_in_currency < 0 ? 'text-rose-700' : 'text-green-600'}`}
            >
                {Number(price_change_percentage_7d_in_currency).toFixed(2)}%
            </SmallText>

            <Title customClassName='w-48 text-end flex gap-1'>
                <span>{currencySymbol?.symbol}</span>
                <span>{separatorThousandsCurrency (market_cap)}</span>
            </Title>

            <img
                loading='lazy'
                className='w-44 h-full relative'
                src={`https://quickchart.io/chart?bkg=transparent&c={type:'sparkline',data:{datasets:[{backgroundColor:'transparent',borderWidth:'3',borderColor:'${price_change_percentage_7d_in_currency < 0 ?'red':'green'}',data:[${sparkline_in_7d.price}]}]}}`}
                alt={`${name} (${symbol.toUpperCase()}) 7d chart`}
            />

        </div>
    );
};

export default memo(CryptoListCard);