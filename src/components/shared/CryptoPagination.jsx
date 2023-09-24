import React from 'react';
import Title from '../ui/Title';
import OutlineButton from '../ui/OutlineButton';

const CryptoPagination = () => {
    return (
        <div className='py-2 col-span-full flex items-start justify-center gap-5'>


            <div className='flex gap-5'>
                <OutlineButton>
                    <i className='fa fa-angle-left'></i>
                </OutlineButton>
                
                <OutlineButton>
                    1
                </OutlineButton>
                
                <OutlineButton>
                    2
                </OutlineButton>
                
                <OutlineButton>
                    3
                </OutlineButton>
                
                <OutlineButton>
                    4
                </OutlineButton>
                
                <OutlineButton>
                    5
                </OutlineButton>

                <strong className='text-slate-400'>...</strong>
                
                <OutlineButton>
                    100
                </OutlineButton>
                
                <OutlineButton isActive>
                    <i className='fa fa-angle-right'></i>
                </OutlineButton>
            </div>


        </div>
    );
};

export default CryptoPagination;