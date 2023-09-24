import { useRef, useEffect } from 'react';

// helper
import { separatorThousandsCurrency } from '../../helper/functions';

// components
import Title from '../ui/Title';



const ProgressBar24hRange = ({ base, current, total, symbol }) => {

    const progressed = useRef ();

    const progress = () => {
        const result = (current - base) * 100 / (total - base);
        progressed.current.style.width = `${result}%`;

        return result;
    };


    useEffect (() => {
        progress ();
    });


    return (
        <div className='flex flex-col gap-2 bg-[#1E283C60] p-3 pt-4 rounded-lg'>
            <div className='bg-slate-400/20 h-2 rounded-full overflow-hidden' title={`Current: ${symbol} ${separatorThousandsCurrency (current)}`}>
                <div className='h-full bg-gradient-to-r from-[#8000FF] to-[#00BFFF] transition-all w-0' title={`Current: ${symbol} ${separatorThousandsCurrency (current)}`} ref={progressed}></div>
            </div>
            <div className='flex justify-between'>
                <Title
                    customClassName='font-normal'
                    customAttr={{title: 'Low'}}>
                        {symbol} {separatorThousandsCurrency (base)}
                </Title>

                <Title customClassName='font-normal text-opacity-75'>24h Range</Title>

                <Title
                    customAttr={{title: 'High'}}
                    customClassName='font-normal'>
                        {symbol} {separatorThousandsCurrency (total)}
                </Title>
            </div>
        </div>
    );
};

export default ProgressBar24hRange;