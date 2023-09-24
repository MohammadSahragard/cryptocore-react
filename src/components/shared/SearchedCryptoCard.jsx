import { Link } from "react-router-dom";

// components
import Title from "../ui/Title";
import SmallText from "../ui/SmallText";



const SearchCryptoCard = ({data}) => {

    const {id, large, name, symbol, market_cap_rank} = data;


    return (
        <Link 
            to={`/cryptocurrency/${id}`}
            className='p-2 bg-[#1E283C50] rounded-lg text-white border border-[#33415550] grid grid-cols-[max-content_auto_max-content] items-center gap-4 transition-all hover:bg-[#1E283C10]'>

            <img src={large} alt='crypto logo' className='h-10 rounded-full overflow-hidden'/>

            <div className="flex flex-col items-start justify-center gap-1 overflow-hidden">
                <Title customClassName='leading-none w-full truncate' customAttr={{title: name}}>{name}</Title>
                <SmallText customClassName='leading-none text-slate-400 origin-left'>{symbol.toUpperCase()}</SmallText>
            </div>

            <div title="Rank"><SmallText customClassName='leading-none text-slate-400 origin-left'>#{market_cap_rank}</SmallText></div>
        </Link>
    );
};

export default SearchCryptoCard;