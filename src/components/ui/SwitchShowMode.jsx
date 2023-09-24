import { useContext, useRef, useEffect } from "react";

// contexts
import { CryptoShowModeContext } from "../../contexts/CryptoShowModeContextProvider";



const SwitchButton = ({optionOne, optionTwo}) => {

    const { show, dispatch } = useContext (CryptoShowModeContext);

    const currentOption = useRef ();

    const changeOption = () => {
        show?.mode === 'list' ? dispatch ({payload: 'grid'}) : dispatch ({payload: 'list'});
    };


    return (
        <section
            className={`relative flex justify-between gap-6 p-3 bg-[#303f5a50] rounded-lg text-white border-t border-[#334155] cursor-pointer transition-all
                    hover:bg-[#303f5a80] hover:border-[#4b5d78]`}
            onClick={changeOption}
        >
            {optionTwo}
            {optionOne}

            <div className={`absolute top-[3px] bottom-[3px] ${show?.mode === 'list' ? 'left-[calc(100%_-_4px)] -translate-x-full' : 'left-[4px] translate-x-0'} w-[45%] bg-[#303f5ab0] rounded-md transition-all1`} ref={currentOption}></div>
        </section>
    );
};

export default SwitchButton;