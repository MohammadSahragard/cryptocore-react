import { useState } from "react";



const Dropdown = ({children, dropdownItems = [], icon, isSelect, customClassName, customClassNameList}) => {

    const [dropdownState, setDropdownState] = useState (false);

    const [dropdownTitle, setDropdownTitle] = useState (children);

    const onBlueDropdown = () => {
        setTimeout(() => {
            dropdownState && setDropdownState (false);
        }, 200);
    };

    const selectInput = (event) => {
        isSelect && setDropdownTitle(event.target.innerHTML);
    };

    
    return (
        <div className='relative w-max' onBlur={onBlueDropdown}>
            <button 
                    className={`flex gap-2 items-center text-slate-400 border px-4 py-2 rounded-md ${customClassName}`}
                    onClick={() => setDropdownState(prevState => !prevState)}
            >
                <i className={icon}></i>
                {dropdownTitle}
                <i className={`fa fa-angle-down transition-all ${dropdownState ? 'rotate-180' : 'rotate-0'}`}></i>
            </button>

            <nav className={`grid auto-rows-[35px] divide-y divide-[#334155] border border-[#334155] rounded-md w-full bg-[#1E283C] text-slate-400  overflow-hidden ${customClassNameList}
                            absolute top-[110%] left-0 transition-all origin-top z-40
                            ${dropdownState ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0'}`}>
                {
                    dropdownItems.map(item => <button 
                                                    type='button'
                                                    key={item} 
                                                    className='flex items-center px-2 cursor-pointer transition-all
                                                               hover:bg-[#4b5d78]
                                                                active:scale-95'
                                                    onClick={selectInput}
                                                >
                                                    {item}
                                                </button>)
                }
            </nav>
        </div>
    );
};


export default Dropdown;