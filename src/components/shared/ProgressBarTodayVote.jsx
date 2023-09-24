import { useRef, useEffect } from 'react';

// components
import Title from '../ui/Title';



const ProgressBarTodayVote = ({ goodVote, badVote }) => {

    const goodVoteRange = useRef();


    useEffect (() => {
        if (goodVoteRange) {
            goodVoteRange.current.style.width = `${goodVote}%`;
        };
    });


    return (
        <div className='flex flex-col gap-2 bg-[#1E283C60] p-3 pt-4 rounded-lg'>
            <Title customClassName='font-normal text-opacity-75 flex justify-between'>People voted for this coin today:</Title>

            <Title customClassName='font-normal flex justify-between'>
                <span>Good 😀</span>
                <span>Bad 😢</span>
            </Title>

            <div className='bg-rose-500 h-2 rounded-full overflow-hidden' title={badVote?.toFixed(2)}>
                <div className='h-full bg-green-500 transition-all w-0' title={goodVote?.toFixed(2)} ref={goodVoteRange}></div>
            </div>

            <div className='flex justify-between'>
                <Title>
                        {goodVote?.toFixed(0)}%
                </Title>


                <Title>
                        {badVote?.toFixed(0)}%
                </Title>
            </div>
        </div>
    );
};

export default ProgressBarTodayVote;