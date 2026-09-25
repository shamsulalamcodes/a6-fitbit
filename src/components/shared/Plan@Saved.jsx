import React from 'react';

const PlanSaved = () => {
    return (
        <div className='text-lg flex gap-3 items-center text-[#9CA3AF]'>
            <div className="flex justify-between items-center">
                Plan
                <p className='ml-2 w-10 flex justify-center items-center h-10 rounded-full bg-[#C2F800] text-black font-bold'>45</p>
            </div>
            <div className="flex justify-between items-center">
                Saved
                <p className='ml-2 w-10 flex justify-center items-center h-10 rounded-full  border-2 border-slate-700 font-bold'>0</p>
            </div>
        </div>
    );
};

export default PlanSaved;