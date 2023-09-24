import { NavLink } from 'react-router-dom';


const NavbarLink = ({children, href}) => {
    return (
        <NavLink 
            to={href} 
            className={({isActive, isPending}) =>
                isPending ? 'text-orange-400' : isActive ? 'text-white transition-all' : 'text-slate-400 transition-all'
            }
        >
            {children}
        </NavLink>
    );
};


export default NavbarLink;