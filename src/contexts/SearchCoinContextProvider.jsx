import { useState, useEffect, createContext, useReducer } from "react";

// api
import { searchCoin, top7TrendingCoin } from '../services/api';

// create context
export const SearchCoinContext = createContext ();


// reducer and api config
const initialState = {
    query: '',
    data: [],
    searched: []
};
const searchReducer = (state, action) => {
    const searchedCoin = state.data?.filter (coin => coin.name.toLowerCase().includes(state.query.toLowerCase ()));
    return {
        ...state,
        query: action.payload,
        searched: searchedCoin
    };
};


const SearchCoinContextProvider = ({children}) => {

    const [state, dispatch] = useReducer (searchReducer, initialState);

    const [top7, setTop7] = useState ([]);



    useEffect (() => {
        const fetchCurrencies = async () => state.data = await searchCoin ();
        const fetchTop7 = async () => setTop7(await top7TrendingCoin ());


        fetchCurrencies ();
        fetchTop7 ();
    }, []);



    // setTimeout(() => {
    //     const fetchTop7 = async () => setTop7(await top7TrendingCoin ());

    //     fetchTop7 ();
    // }, 2000);



    return (
        <SearchCoinContext.Provider value={{state, dispatch, top7}}>
            {children}
        </SearchCoinContext.Provider>
    );
};

export default SearchCoinContextProvider;