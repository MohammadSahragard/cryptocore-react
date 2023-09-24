const OutlineButton = ({children, customClassName, id, isActive, clickHandler}) => {
    return (
        <button
            type="button"
            onClick={clickHandler}
            id={id}
            className={`px-2 rounded text-slate-400 border border-[#33415580] transition-all ${customClassName}
                       hover:bg-[#33415580]
                       active:scale-95
                       ${isActive ? 'bg-[#334155] border-[#4b5d78]' : ''}`}
        >
            {children}
        </button>
    );
};


export default OutlineButton;