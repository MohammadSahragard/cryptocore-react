const PrimaryButton = ({children, customClassName, id, isActive, clickHandler, customAttr}) => {
    return (
        <button
            type="button"
            onClick={clickHandler}
            id={id}
            className={`px-5 py-2 bg-[#303f5a50] text-white rounded-lg border-t border-[#334155] transition-all
                       hover:bg-[#303f5a80] hover:border-[#4b5d78]
                       active:scale-95 ${customClassName}
                       disabled:opacity-50 disabled:active:scale-100
                       ${isActive ? 'bg-gradient-to-r from-[#8000FF] to-[#00BFFF] border-none hover:brightness-125' : ''}`}
            {...customAttr}
        >
            {children}
        </button>
    );
};


export default PrimaryButton;