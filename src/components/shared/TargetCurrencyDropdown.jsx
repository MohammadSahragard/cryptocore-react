import { useState, useContext, memo } from "react";

// contexts
import { SearchCurrencyContext } from "../../contexts/SearchCurrencyContextProvider";

// components
import CurrencySearchBox from './CurrencySearchBox';
import Title from "../ui/Title";



const TargetCurrencyDropdown = ({removeIcon, customClassName}) => {

    // contexts
    const { state, dispatch } = useContext (SearchCurrencyContext);

    // states
    const [dropdownState, setDropdownState] = useState (false);

    // variables
    const searchedCurrencyTarget = state.data.currencies && state.data.currencies.filter (currency => currency.code.toLowerCase().includes(state.query.toLowerCase()));
            
    // functions
    const selectCurrency = event => {
        dispatch ({type: 'SELECT_CURRENCY', payload: event.target.innerHTML});
        dispatch ({type: 'SEARCHED', payload: ''});
        dropdownState && setDropdownState (false);
    };


    const toggleDropdown = () => {
        const searchBoxRef = document.querySelector ('.search-currency_box');

        setDropdownState(prevState => !prevState);
        searchBoxRef.focus();
    };
    


    
    return (
        <div className='relative modal show'>
            <button 
                    className={`flex gap-2 items-center text-slate-400 px-4 py-2 rounded-md ${customClassName}`}
                    onClick={toggleDropdown}
            >
                {!removeIcon && <i className='fad fa-money-bill'></i>}
                {state.selectedCurrency}
                <i className={`fa fa-angle-down transition-all ${dropdownState ? 'rotate-180' : 'rotate-0'}`}></i>
            </button>



            <nav className={`grid grid-rows-[35px_auto] border border-[#334155] rounded-md bg-[#1E283C] text-slate-400
                            absolute top-[110%] right-0 transition-all origin-top z-50
                            ${dropdownState ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0'}`}
            >

            
                <CurrencySearchBox />


                <div className='relative max-h-96 divide-y divide-[#334155] w-96 overflow-y-auto'>
                    {
                        state.data.currenciesCategory&&state.data.currenciesCategory.map (category => 
                            <div key={category} className='gird gird-rows-[35px_auto] space-y-2 p-2'>
                                <div>
                                    <Title>{category.split('_').join(' ')}</Title>
                                </div>
                                <div className='grid grid-cols-5 auto-cols-[40px] gap-2'>
                                    {
                                        searchedCurrencyTarget.filter (currencyTitle => currencyTitle.category === category).map (currency => 
                                            <button
                                                key={currency.code}
                                                type='button'
                                                className={`px-2 py-1 cursor-pointer rounded transition-all
                                                        hover:bg-[#4b5d7890]
                                                            active:scale-95
                                                            ${currency.code === state.selectedCurrency && 'ring-2 ring-indigo-500'}`}
                                                onClick={selectCurrency}
                                            >
                                                {currency.code}
                                            </button>
                                        )
                                    }
                                </div>
                            </div>
                        )
                    }


                </div>
            </nav>


            {/* <div className="fixed bg-rose-400/90 inset-0">mohammad</div> */}
        </div>
    );
};


export default memo(TargetCurrencyDropdown);