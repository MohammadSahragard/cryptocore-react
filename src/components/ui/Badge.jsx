import { Link } from "react-router-dom";
// components
import Title from "./Title";


const Badge = ({children, smallSize, isLink, customIcon}) => {
              
    if (isLink) {
        return (
            <Link to={isLink}>
                <Title customClassName={`${smallSize ? 'font-normal text-sm' : ''} bg-slate-600/30 rounded px-2 py-1 flex items-center gap-1 transition-all
                                        hover:bg-slate-600/50`}>
                    <i className={`${customIcon ? customIcon : 'far fa-link-simple text-white/90'} scale-90`}></i>
                    <span>{children}</span>
                </Title>
            </Link>
        )
    };

    if (!isLink) {
        return (
             <Title customClassName={`${smallSize ? 'font-normal text-sm' : ''} bg-slate-600/30 rounded px-2 py-1 transition-all
                                     hover:bg-slate-600/50`}>
                 {children}
            </Title>
        )
    };
};

export default Badge;