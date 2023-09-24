import { useState, useEffect, useContext } from "react";

// components
import PrimaryButton from "../ui/PrimaryButton";

// contexts
import { SearchCoinContext } from "../../contexts/SearchCoinContextProvider";



const CoinSearchBox = ({customClassName}) => {

    const { dispatch } = useContext (SearchCoinContext);

    // states
    const [searchValue, setSearchValue] = useState ('');

    const changeSearchValue = event => {
        const value = event.target.value;

        setSearchValue (value);
    };


    useEffect (() => {
        dispatch ({payload: searchValue});
    }, [searchValue]);




    return (
        <section className='relative w-full'>
            <input
                type="text"
                className={`w-full pl-14 pr-5 py-2 bg-[#303f5a50] rounded-md text-white border-t border-[#334155] outline-none transition-all ${customClassName}
                        hover:bg-[#303f5a30]`}
                placeholder='Search'
                onChange={changeSearchValue}
            />


            {
                <PrimaryButton customClassName='origin-left scale-75 bg-[#1E283C90] hover:bg-[#1E283Cf0] active:scale-[0.65] absolute top-2/4 left-[4px] -translate-y-2/4'>
                    <i className='fa fa-search'></i>
                </PrimaryButton>
            }
        </section>
    );
};


export default CoinSearchBox;