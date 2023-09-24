const SmallText = ({children, customClassName, customColor}) => {
    return (
        <small className={`scale-90 ${customColor ? '' : 'text-slate-500'} ${customClassName}`}>{children}</small>
    );
};


export default SmallText;