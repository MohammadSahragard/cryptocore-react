// component's
import Title from '../ui/Title';


const HeadingListCard = () => {
    return (
        <div className='h-10 px-2 border-b border-[#33415580] bg-[#0E172A80] backdrop-blur-3xl
                        sticky left-0 right-0 -top-[6.5px] z-30
                        grid grid-cols-[max-content_max-content_auto_max-content_max-content_max-content_max-content_max-content_max-content] auto-rows-fr items-center gap-4
        '>
            <div title='Rank'><Title>#</Title></div>
            <Title></Title>
            <Title>Coin</Title>
            <Title>Price</Title>
            <Title customClassName='w-20 text-end'>1h</Title>
            <Title customClassName='w-20 text-end'>24h</Title>
            <Title customClassName='w-20 text-end'>7d</Title>
            <Title customClassName='w-48 text-end'>Market Cap</Title>
            <Title customClassName='w-44 text-end'>Last 7 Day</Title>
        </div>
    );
};


export default HeadingListCard;