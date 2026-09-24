import React from 'react';

const PlanSaved = () => {
    return (
        <div className='text-xl flex gap-3 items-center'>
            <p className="">
                Plan
                <span className='ml-2 px-2 py-1 rounded-full bg-lime-500'>0</span>
            </p>
            <p className="">
                Saved
                <span className='ml-2 px-2 py-1 rounded-full border-2 border-slate-400'>0</span>
            </p>
        </div>
    );
};

export default PlanSaved;