import { useState, useEffect, createContext, useReducer } from "react";


// firebase database config
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, onValue } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAu6QbHYt-pX4VM7DJAjGZwD_Cn4jXzEOg",
  authDomain: "cryptocore-ms.firebaseapp.com",
  databaseURL: "https://cryptocore-ms-default-rtdb.firebaseio.com",
  projectId: "cryptocore-ms",
  storageBucket: "cryptocore-ms.appspot.com",
  messagingSenderId: "811549069532",
  appId: "1:811549069532:web:26f7aac098c6bb383ca419",
  measurementId: "G-TYD5PC5SC1"
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);



// reducer and api config
const initialState = {
    query: '',
    selectedCurrency: 'USD',
    data: {}
};

const searchReducer = (state, action) => {
    switch (action.type) {
        case 'SEARCHED':
            return {
                ...state,
                query: action.payload
            };
        case 'SELECT_CURRENCY':
            return {
                ...state,
                selectedCurrency: action.payload
            };
    }
};

export const SearchCurrencyContext = createContext ();
const SearchCurrencyContextProvider = ({children}) => {
    
    const [state, dispatch] = useReducer (searchReducer, initialState);


    const db = getDatabase();
    const starCountRef = ref(db, '/');
    onValue(starCountRef, (snapshot) => {
        const data = snapshot.val();
        state.data = data.data;
    });




    return (
        <SearchCurrencyContext.Provider value={{ state, dispatch }}>
            {children}
        </SearchCurrencyContext.Provider>
    );
};

export default SearchCurrencyContextProvider;