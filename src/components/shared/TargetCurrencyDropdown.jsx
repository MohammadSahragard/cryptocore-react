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
        setDropdownState (false);
    };


    const toggleDropdown = () => {
        const searchBoxRef = document.querySelector ('.search-currency_box');
        const modalCloser = document.querySelector ('.modal-closer');

        setDropdownState(prevState => !prevState);
        searchBoxRef.focus();
    };
    


    
    return (
        <div>
            <button 
                    className={`flex gap-2 items-center text-slate-400 px-4 py-2 rounded-md ${customClassName}`}
                    onClick={toggleDropdown}
            >
                {!removeIcon && <i className='fad fa-money-bill'></i>}
                {state.selectedCurrency}
                <i className={`fa fa-angle-down transition-all ${dropdownState ? 'rotate-180' : 'rotate-0'}`}></i>
            </button>



            <nav className={`grid grid-rows-[35px_auto] border border-[#33415590] rounded-md bg-slate-900 text-slate-400 h-3/4 w-2/4
                            fixed left-2/4 top-2/4 -translate-y-2/4 -translate-x-2/4 transition-all origin-top z-50
                            ${dropdownState ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0'}`}
            >

            
                <CurrencySearchBox />


                <div className='h-full w-full divide-y divide-[#33415590] overflow-y-auto'>
                    {
                        state.data.currenciesCategory&&state.data.currenciesCategory.map (category => 
                            <div key={category} className='gird gird-rows-[35px_auto] space-y-2 p-2'>
                                <div>
                                    <Title>{category.split('_').join(' ')}</Title>
                                </div>
                                <div className='flex gap-2 flex-wrap'>
                                    {
                                        searchedCurrencyTarget.filter (currencyTitle => currencyTitle.category === category).map (currency => 
                                            <button
                                                key={currency.code}
                                                type='button'
                                                className={`cursor-pointer rounded transition-all w-20 h-10 ring-1 ring-[#33415590]
                                                          hover:bg-[#4b5d7830]
                                                            active:scale-95
                                                            ${currency.code === state.selectedCurrency && 'border-2 border-indigo-500'}`}
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


            <div className={`modal-closer bg-slate-900/20 backdrop-blur-lg z-40 transition-all fixed inset-0 ${dropdownState ? 'bottom-0' : 'bottom-full'}`}
                 onClick={toggleDropdown}>
            </div>
        </div>
    );
};


export default memo(TargetCurrencyDropdown);