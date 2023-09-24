import { useState, useContext, useEffect } from 'react';

// contexts
import { SearchCoinContext } from '../../contexts/SearchCoinContextProvider.jsx';

// components
import EmptySearchResult from './EmptySearchResult.jsx';
import Loader from './Loader.jsx';
import CoinSearchBox from './CoinSearchBox.jsx';
import SearchCryptoCard from './SearchedCryptoCard.jsx';
import Title from '../ui/Title.jsx';


const SearchBar = () => {

    const { state, top7 } = useContext (SearchCoinContext);


    
    return (
        <div className="grid grid-rows-[max-content_auto] border-r border-[#33415580]">
            <div className='border-b border-[#33415580] h-14 flex items-center justify-center px-2'>
                <CoinSearchBox />
            </div>
            <div className='relative'>
                <div className='absolute inset-0 p-2 overflow-auto flex flex-col gap-2'>
                    {!state.query && top7.length && <Title customClassName='scale-90 origin-left'>Trending Search 🔥</Title>}
                    {
                        state.searched.length && state.query ?
                            state.searched.slice(0, 20).map (currency => <SearchCryptoCard key={currency.id} data={currency} />) :
                        !state.query ?
                            top7.map (currency => <SearchCryptoCard key={currency.item.id} data={currency.item} />) :
                        !state.searched.length && state.query ?
                            <EmptySearchResult /> :
                            <Loader />
                    }
                </div>
            </div>
        </div>
    );
};


export default SearchBar;