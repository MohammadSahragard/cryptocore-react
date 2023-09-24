import React from 'react';

// components
import Title from '../ui/Title';



const TimeFramePercentageTable = ({ data, selectedCurrency }) => {

    const {
        price_change_percentage_1h_in_currency,
        price_change_percentage_24h_in_currency,
        price_change_percentage_7d_in_currency,
        price_change_percentage_14d_in_currency,
        price_change_percentage_30d_in_currency,
        price_change_percentage_1y_in_currency
    } = data || {};



    return (
        <div className='grid grid-cols-6 h-max rounded-lg overflow-hidden border border-[#1E283C60] divide-x divide-slate-400/20'>



            <div className='flex flex-col divide-y divide-slate-400/20'>
                <Title customClassName='py-2 text-center bg-slate-400/10'>1h</Title>
                <Title
                    customColor
                    customClassName={`py-2 text-center font-normal 
                                        ${price_change_percentage_1h_in_currency?.[selectedCurrency?.toLowerCase()??'usd'] < 0 ? 'text-rose-500' : 'text-green-500'}
                `}>
                    {price_change_percentage_1h_in_currency?.[selectedCurrency?.toLowerCase()??'usd']?.toFixed(1)}%
                </Title>
            </div>


            <div className='flex flex-col divide-y divide-slate-400/20'>
                <Title customClassName='py-2 text-center bg-slate-400/10'>24h</Title>
                <Title
                    customColor
                    customClassName={`py-2 text-center font-normal 
                                        ${price_change_percentage_24h_in_currency?.[selectedCurrency?.toLowerCase()??'usd'] < 0 ? 'text-rose-500' : 'text-green-500'}
                `}>
                    {price_change_percentage_24h_in_currency?.[selectedCurrency?.toLowerCase()??'usd']?.toFixed(1)}%
                </Title>
            </div>


            <div className='flex flex-col divide-y divide-slate-400/20'>
                <Title customClassName='py-2 text-center bg-slate-400/10'>7d</Title>
                <Title
                    customColor
                    customClassName={`py-2 text-center font-normal 
                                        ${price_change_percentage_7d_in_currency?.[selectedCurrency?.toLowerCase()??'usd'] < 0 ? 'text-rose-500' : 'text-green-500'}
                `}>
                    {price_change_percentage_7d_in_currency?.[selectedCurrency?.toLowerCase()??'usd']?.toFixed(1)}%
                </Title>
            </div>


            <div className='flex flex-col divide-y divide-slate-400/20'>
                <Title customClassName='py-2 text-center bg-slate-400/10'>14d</Title>
                <Title
                    customColor
                    customClassName={`py-2 text-center font-normal 
                                        ${price_change_percentage_14d_in_currency?.[selectedCurrency?.toLowerCase()??'usd'] < 0 ? 'text-rose-500' : 'text-green-500'}
                `}>
                    {price_change_percentage_14d_in_currency?.[selectedCurrency?.toLowerCase()??'usd']?.toFixed(1)}%
                </Title>
            </div>


            <div className='flex flex-col divide-y divide-slate-400/20'>
                <Title customClassName='py-2 text-center bg-slate-400/10'>30d</Title>
                <Title
                    customColor
                    customClassName={`py-2 text-center font-normal 
                                        ${price_change_percentage_30d_in_currency?.[selectedCurrency?.toLowerCase()??'usd'] < 0 ? 'text-rose-500' : 'text-green-500'}
                `}>
                    {price_change_percentage_30d_in_currency?.[selectedCurrency?.toLowerCase()??'usd']?.toFixed(1)}%
                </Title>
            </div>


            <div className='flex flex-col divide-y divide-slate-400/20'>
                <Title customClassName='py-2 text-center bg-slate-400/10'>1y</Title>
                <Title
                    customColor
                    customClassName={`py-2 text-center font-normal 
                                        ${price_change_percentage_1y_in_currency?.[selectedCurrency?.toLowerCase()??'usd'] < 0 ? 'text-rose-500' : 'text-green-500'}
                `}>
                    {price_change_percentage_1y_in_currency?.[selectedCurrency?.toLowerCase()??'usd']?.toFixed(1)}%
                </Title>
            </div>



        </div>
    );
};

export default TimeFramePercentageTable;