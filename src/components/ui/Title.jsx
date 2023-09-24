const Title = ({children, customClassName, customColor, customAttr}) => {
    return (
        <h2
            className={`font-bold text-[15px]  ${customColor ? '' : 'text-slate-400'} ${customClassName}`}
            {...customAttr}>
            {children}
        </h2>
    );
};


export default Title;