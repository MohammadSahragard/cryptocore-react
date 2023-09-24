// component's
import TargetCurrencyDropdown from './TargetCurrencyDropdown';
import PrimaryButton from '../ui/PrimaryButton';
import Title from '../ui/Title';
import SwitchButton from '../ui/SwitchShowMode';


const Header = () => {
    return (
        <div className='h-14 flex justify-between items-center px-2 border-b border-[#33415580] relative z-30 bg-[#0E172A80] backdrop-blur-3xl'>
            <Title>Crypto Currencies</Title>

            <div className='flex items-center gap-4'>
                <PrimaryButton customClassName='scale-95 active:scale-[0.9]' isActive>Market Cap</PrimaryButton>
                <PrimaryButton customClassName='scale-95 active:scale-[0.9]'>Top Gainers</PrimaryButton>
                <PrimaryButton customClassName='scale-95 active:scale-[0.9]'>Top Losers</PrimaryButton>
            </div>

            <div className='flex items-center gap-4'>
                <TargetCurrencyDropdown />

                <SwitchButton
                    isSelect
                    optionOne={<i className='relative z-10 fad fa-list'></i>}
                    optionTwo={<i className='relative z-10 fad fa-grid-2'></i>}
                />
            </div>
        </div>
    );
};


export default Header;