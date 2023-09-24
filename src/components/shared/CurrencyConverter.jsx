import { useState, useEffect } from "react";
import axios from "axios";

// helper
import { separatorThousandsCurrency } from "../../helper/functions";

// components
import Title from '../ui/Title';
import TargetCurrencyDropdown from "./TargetCurrencyDropdown";



const CurrencyConverter = ({ coinName, coinSymbol, selectedCurrency }) => {

    // states
    const [amount, setAmount] = useState (1);
    const [result, setResult] = useState (0);

    // functions
    const changeAmount = event => {
        const value = event.target.value;

        setAmount (value);
    };


    useEffect (() => {
        const fetchResult = async () => {
            const data = await axios.get (`https://api.exchangerate.host/convert?from=BTC&to=${selectedCurrency&&selectedCurrency.code}&amount=${amount}`);

            setResult (data);
        };

        fetchResult ();
    });




    return (
        <div className='p-3 bg-[#1E283C60] flex flex-col gap-2 rounded-lg'>

            <Title customClassName='flex justify-between items-center'>
                <span>{coinName} Converter</span>
                <div className='space-x-2'>
                    <span className='font-normal text-sm bg-slate-600/40 px-1 ms-1 rounded'>{coinSymbol?.toUpperCase()}</span>
                    <i className='fal fa-arrow-right'></i>
                    <span className='font-normal text-sm bg-slate-600/40 px-1 ms-1 rounded'>{selectedCurrency&&selectedCurrency.code}</span>
                </div>
            </Title>

            <div className='flex flex-col gap-2'>
                <div className='grid grid-cols-[max-content_auto]'>
                    <TargetCurrencyDropdown
                        removeIcon
                        customClassName='rounded-r-none rounded-md bg-[#0b111f] border-r border-[#4b5d7850]' />

                    <input
                        className="bg-[#0b111f] text-slate-300 rounded-r-md border-none outline-none px-2"
                        placeholder="Default Amount: 1"
                        type="number"
                        min='1'
                        value={amount}
                        onChange={changeAmount}
                        name="base-converter"
                        id="base-converter" />
                </div>
            </div>

            <Title>
                {result&&result.query.amount} {coinSymbol?.toUpperCase ()} = {selectedCurrency&&selectedCurrency.symbol} {separatorThousandsCurrency (result&&result.result)}
            </Title>

        </div>
    );
};


export default CurrencyConverter;