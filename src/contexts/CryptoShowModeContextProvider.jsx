import { useReducer, createContext } from 'react';



// reducer and api config
const initialState = {
    mode: 'gird'
};

const showModeReducer = (base, action) => {
    return {
        mode: action.payload
    };
};



export const CryptoShowModeContext = createContext ();
const CryptoShowModeContextProvider = ({children}) => {

    const [show, dispatch] = useReducer (showModeReducer, initialState);


    return (
        <CryptoShowModeContext.Provider value={{show, dispatch}}>
            {children}
        </CryptoShowModeContext.Provider>
    );
};

export default CryptoShowModeContextProvider;