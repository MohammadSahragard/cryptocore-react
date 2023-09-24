// helper
import { separatorThousandsCurrency } from "../../helper/functions";

// components
import Title from "../ui/Title";
import Badge from "../ui/Badge";
import OutlineButton from "../ui/OutlineButton";
import ProgressBar24hRange from "./ProgressBar24hRange";
import CurrencyConverter from './CurrencyConverter';
import CoinCommunityInfo from "./CoinCommunityInfo";



const CoinInfo = ({ data, selectedCurrency }) => {

    const {
        name,
        market_cap_rank,
        market_data,
        watchlist_portfolio_users
    } = data || {};

    const { code, symbol } = selectedCurrency || '$';


    return (
        <div className="pt-1">
            <div className='flex justify-between'>
                <div title="Market Cap Rank">
                    <Badge>#Rank: {market_cap_rank}</Badge>
                </div>

                <div className='flex gap-2'>
                    <OutlineButton customClassName='p-1 bg-[#8000FF]/10 text-[#8000FF]'>
                        <i className="far fa-share" title="Share"></i>
                    </OutlineButton>
                    <OutlineButton customClassName='p-1 bg-[#00BFFF]/10 text-[#00BFFF]'>
                        <i className="far fa-bell" title="Send News About this Coin"></i>
                    </OutlineButton>
                    <OutlineButton customClassName='p-1 bg-yellow-400/10 text-yellow-400'>
                        <i className="far fa-star" title="Add to Watchlists"></i>
                    </OutlineButton>
                </div>
            </div>

            <div className='flex flex-col gap-4 mt-4'>


                <div>
                    <Title customClassName='bg-slate-600/30 rounded-lg px-3 py-2 text-center bg-yellow-400/10'>
                        <i className="fa fa-star me-1 text-yellow-400"></i>
                        On {separatorThousandsCurrency (watchlist_portfolio_users)} watchlists
                    </Title>
                </div>


                <ProgressBar24hRange
                    base={market_data?.low_24h?.[code?.toLowerCase()??'usd']}
                    current={market_data?.current_price?.[code?.toLowerCase()??'usd']}
                    total={market_data?.high_24h?.[code?.toLowerCase()??'usd']}
                    symbol={symbol}
                    />


                <div className='flex flex-col py-2 divide-y divide-[#33415580]'>
                    <div className='flex justify-between py-[13px]'>
                        <Title customClassName='text-sm font-normal text-opacity-75'>Market Cap</Title>
                        <Title customColor customClassName='text-sm font-normal text-slate-300 space-x-1'>
                            <span>{symbol}</span>
                            <span>{separatorThousandsCurrency (market_data?.market_cap?.[code?.toLowerCase()??'usd'])}</span>
                        </Title>
                    </div>
                    <div className='flex justify-between py-[13px]'>
                        <Title customClassName='text-sm font-normal text-opacity-75'>24 Hour Trading Vol</Title>
                        <Title customColor customClassName='text-sm font-normal text-slate-300 space-x-1'>
                            <span>{symbol}</span>
                            <span>{separatorThousandsCurrency (market_data?.total_volume?.[code?.toLowerCase()??'usd'])}</span>
                        </Title>
                    </div>
                    <div className='flex justify-between py-[13px]'>
                        <Title customClassName='text-sm font-normal text-opacity-75'>Fully Diluted Valuation</Title>
                        <Title customColor customClassName='text-sm font-normal text-slate-300 space-x-1'>
                            <span>{symbol}</span>
                            <span>{separatorThousandsCurrency (market_data?.fully_diluted_valuation?.[code?.toLowerCase()??'usd'])}</span>
                        </Title>
                    </div>
                    <div className='flex justify-between py-[13px]'>
                        <Title customClassName='text-sm font-normal text-opacity-75'>Circulating Supply</Title>
                        <Title customColor customClassName='text-sm font-normal text-slate-300 space-x-1'>
                            <span>{separatorThousandsCurrency (market_data?.circulating_supply)}</span>
                        </Title>
                    </div>
                    <div className='flex justify-between py-[13px]'>
                        <Title customClassName='text-sm font-normal text-opacity-75'>Total Supply</Title>
                        <Title customColor customClassName='text-sm font-normal text-slate-300 space-x-1'>
                            <span>{separatorThousandsCurrency (market_data?.total_supply)}</span>
                        </Title>
                    </div>
                    <div className='flex justify-between py-[13px]'>
                        <Title customClassName='text-sm font-normal text-opacity-75'>Max Supply</Title>
                        <Title customColor customClassName='text-sm font-normal text-slate-300 space-x-1'>
                            <span>{separatorThousandsCurrency (market_data?.max_supply)}</span>
                        </Title>
                    </div>
                </div>


                <CurrencyConverter
                    coinName={name&&name}
                    coinSymbol={data.symbol}
                    selectedCurrency={selectedCurrency&&selectedCurrency}
                />


                <CoinCommunityInfo data={data&&data} />


            </div>
        </div>
    );
};

export default CoinInfo;