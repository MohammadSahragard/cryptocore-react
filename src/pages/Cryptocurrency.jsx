import { useState, useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';

// helper
import { getTimeFrame, getPercentageTimeFrame, separatorThousandsCurrency } from '../helper/functions';

// api
import { getDetailCryptoCurrency, getChartData } from '../services/api';

// contexts
import { SearchCurrencyContext } from '../contexts/SearchCurrencyContextProvider';

// components
import CoinChart from '../components/shared/CoinChart';
import SearchBar from '../components/shared/SearchBar';
import HeaderCoinInfo from '../components/shared/HeaderCoinInfo';
import CoinInfo from '../components/shared/CoinInfo';
import TimeFramePercentageTable from '../components/shared/TimeFramePercentageTable';
import ProgressBarTodayVote from '../components/shared/ProgressBarTodayVote';
import CoinDescription from '../components/shared/CoinDescription';
import CoinDeveloperInfo from '../components/shared/CoinDeveloperInfo';



const Cryptocurrency = () => {

    const {cryptoId} = useParams ();

    const { state } = useContext (SearchCurrencyContext);
    const currentCurrency = state.data.currencies?.find (currency => currency.code === state.selectedCurrency);

    // states
    const [detailCoinData, setDetailCoinData] = useState ({});


    useEffect(() => {
        const fetchCoinData = async () => {
            setDetailCoinData ((await getDetailCryptoCurrency (cryptoId)));
        };

        fetchCoinData ();
    }, [currentCurrency, cryptoId]);



    return (
        <div className='grid grid-cols-[300px_auto]'>
            <SearchBar />
            <div className='relative'>
                <HeaderCoinInfo data={detailCoinData} selectedCurrency={currentCurrency && currentCurrency} />

                <div className='p-2 pt-16 pb-5 absolute inset-0 overflow-auto grid grid-cols-[auto_300px] gap-3'>

                    {/* big section */}
                    <div className='space-y-8'>
                        <CoinChart
                            coinId={cryptoId}
                            data={detailCoinData}
                            helper={{ getTimeFrame, getPercentageTimeFrame, separatorThousandsCurrency }}
                            selectedCurrency={currentCurrency && currentCurrency} />


                        <TimeFramePercentageTable
                            data={detailCoinData?.market_data}
                            selectedCurrency={currentCurrency?.code} />

                        
                        <ProgressBarTodayVote
                            goodVote={detailCoinData?.sentiment_votes_up_percentage}
                            badVote={detailCoinData?.sentiment_votes_down_percentage} />


                        <CoinDescription 
                            selectedCurrency={currentCurrency && currentCurrency}
                            data={detailCoinData} />
                    </div>




                    {/* small section */}
                    <div>
                        <CoinInfo 
                            selectedCurrency={currentCurrency && currentCurrency}
                            data={detailCoinData} />

                        
                        <CoinDeveloperInfo data={detailCoinData?.developer_data} />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Cryptocurrency;