import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';

// package's
import '../FontAwesome.Pro.6.4.2/css/all.css';


// pages
import Cryptocurrencies from './pages/Cryptocurrencies';
import Cryptocurrency from './pages/Cryptocurrency';


// contexts
import SearchCoinContextProvider from './contexts/SearchCoinContextProvider';
import SearchCurrencyContextProvider from './contexts/SearchCurrencyContextProvider';
import CryptoShowModeContextProvider from './contexts/CryptoShowModeContextProvider';


// components
import { BlueEffect, PurpleEffect } from './components/fx/BgFx';
import Navbar from './components/shared/Navbar';
import GlobalInfo from './components/shared/GlobalInfo';


const App = () => {


  return (
    <SearchCoinContextProvider>
      <SearchCurrencyContextProvider>
        <CryptoShowModeContextProvider>



          <div className='bg-[#0b111f] h-screen overflow-hidden grid grid-rows-[max-content_max-content_auto]'>

            <BlueEffect />


            <GlobalInfo />
            <Navbar />


            <Routes>

              <Route path='/cryptocurrencies' element={<Cryptocurrencies />} />
              <Route path='/cryptocurrency/:cryptoId' element={<Cryptocurrency />} />
              <Route path='*' element={<Navigate to='/cryptocurrencies' />} />

            </Routes>

          </div>


      
        </CryptoShowModeContextProvider>
      </SearchCurrencyContextProvider>
    </SearchCoinContextProvider>
  );
};

export default App;