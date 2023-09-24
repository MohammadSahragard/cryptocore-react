import { memo } from 'react';
import { Link } from 'react-router-dom';

// helpers
import { separatorThousandsCurrency } from '../../helper/functions';

// components
import Title from "../ui/Title";
import SmallText from "../ui/SmallText";



const CryptoGridCard = ({data, currencySymbol}) => {

    // variables
    const {
        id,
        image,
        name,
        symbol,
        current_price,
        price_change_percentage_24h,
        price_change_percentage_7d_in_currency,
        sparkline_in_7d
    } = data || {};



    return (
        <div className='p-2 bg-[#1E283C50] rounded-lg text-white border border-[#33415550] flex flex-col gap-2 transition-all hover:bg-[#1E283C10]'>


            <div className='h-28 grid grid-rows-2'>
                <div className="flex justify-between items-start">
                    <Link to={`/cryptocurrency/${id}`} className='h-full'>
                        <img loading='lazy' src={image} alt='crypto logo' className='h-full rounded-full overflow-hidden'/>
                    </Link>
                    <div className='flex flex-col items-end'>
                        <Title customClassName='flex gap-1'>
                            <span>{currencySymbol?.symbol}</span>
                            <span>{separatorThousandsCurrency (current_price, 2)}</span>
                        </Title>
                        <SmallText
                            customColor
                            customClassName={`rounded px-1 font-bold origin-right ${price_change_percentage_24h < 0 ? 'bg-rose-700/30 text-rose-700' : 'bg-green-600/30 text-green-600'}`}
                        >
                            {Number(price_change_percentage_24h).toFixed(2)}%
                        </SmallText>
                    </div>
                </div>

                <div className="flex items-end justify-between">
                    <Link to={`/cryptocurrency/${id}`} className="flex flex-col">
                        <Title customClassName='leading-none'>{name}</Title>
                        <SmallText customClassName='leading-none text-slate-400 origin-left'>{symbol.toUpperCase()}</SmallText>
                    </Link>
                    <SmallText customClassName='leading-none text-slate-400 origin-left'>
                        <i className="fad fa-clock me-1 text-slate-300"></i>
                        24H
                    </SmallText>
                </div>
            </div>

            <div className="relative min-h-[80px] px-2 pt-2 border-t border-[#33415580]">
                <img loading='lazy'
                    className='w-full'
                    src={`https://quickchart.io/chart?bkg=transparent&c={type:'sparkline',data:{datasets:[{backgroundColor:'transparent',borderWidth:'2',borderColor:'${price_change_percentage_7d_in_currency < 0 ?'red':'green'}',data:[${sparkline_in_7d.price}]}]}}`}
                    alt={`${name} (${symbol.toUpperCase()}) 7d chart`}
                />

                <SmallText customClassName='absolute rounded bottom-0 right-0 leading-none text-slate-400 origin-right bg-white/10 px-2 py-1'>
                    <i className="fad fa-clock me-1 text-slate-300"></i>
                    Last 7 days
                </SmallText>
            </div>


        </div>
    );
};

export default memo(CryptoGridCard);