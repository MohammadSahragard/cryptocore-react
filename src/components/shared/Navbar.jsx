// component's
import Logo from '../ui/Logo';
import Dropdown from '../ui/Dropdown';
import ProfileButton from '../ui/ProfileButton';
import NavbarLink from '../ui/NavbarLink';


const Navbar = () => {
    return (
        <div className='h-20 flex justify-between items-center px-2 border-b border-[#33415580]'>
            <Logo />

            <div className='flex items-center gap-4'>
                <NavbarLink href='/cryptocurrencies'>Cryptocurrencies</NavbarLink>
                <NavbarLink href='/exchanges'>Exchanges</NavbarLink>
                <NavbarLink href='/nft'>NFT</NavbarLink>
                <NavbarLink href='/learn'>Learn Crypto</NavbarLink>
                <NavbarLink href='/about'>About Us</NavbarLink>
            </div>

            <div className='flex items-center gap-4'>
                <Dropdown 
                    customClassName='border-0'
                    customClassNameList='w-24'
                    dropdownItems={['En', 'Fa']} 
                    icon='far fa-flag'
                    isSelect
                >
                    En
                </Dropdown>
                <ProfileButton customClassName='ps-4 border-l border-[#334155]' />
            </div>
        </div>
    );
};


export default Navbar;