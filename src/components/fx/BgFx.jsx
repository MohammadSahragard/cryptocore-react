// assets
import Effect from '../../assets/bg-effect.svg'


const BlueEffect = () => {
    return (
        <img
            className='absolute left-48 top-10 blur-[100px] opacity-10 -z-0'
            src={Effect}
            alt="background effect" />
    );
};


const PurpleEffect = () => {
    return (
        <div className="h-2/4 w-80 bg-purple-500/20 blur-[170px] absolute right-44 top-2/4 rounded-[50%]"></div>
    );
};


export { BlueEffect, PurpleEffect };