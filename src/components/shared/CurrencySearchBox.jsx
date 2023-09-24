import { useState, useEffect, useContext } from "react";

// contexts
import { SearchCurrencyContext } from "../../contexts/SearchCurrencyContextProvider";



const SearchBox = () => {

    const { state, dispatch } = useContext (SearchCurrencyContext);

    const changeSearchValue = event => {
        const value = event.target.value;

        dispatch ({type: 'SEARCHED',payload: value});
    };




    return (
        <section className='relative w-full'>
            <input
                type="text"
                className={`search-currency_box w-full p-2 bg-[#334155] text-white border-none outline-none transition-all
                        hover:bg-[#334155] hover:border-[#4b5d78]`}
                placeholder='Search'
                maxLength='4'
                value={state.query}
                onChange={changeSearchValue}
            />
        </section>
    );
};


export default SearchBox;