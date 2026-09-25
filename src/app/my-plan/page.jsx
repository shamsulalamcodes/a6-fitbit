'use client'
import { CreatedContext } from '@/components/context/ContextProvider';
import NoContent from '@/components/shared/NoContent';
import React, { useContext } from 'react';

const MyPlan = () => {

    const { planArr, savedArr } = useContext(CreatedContext)

    return (
        <div className="tabs tabs-box p-5">

            <input type="radio" name="my_tabs_3" className="tab rounded-2xl" aria-label="Today's Plan" defaultChecked />
            <div className="tab-content">
                <div className="py-6">
                    {planArr.length === 0 ? <NoContent /> :
                        <div className='bg-[#13161D] '></div>
                    }
                </div>
            </div>

            <input type="radio" name="my_tabs_3" className="tab rounded-2xl" aria-label="Saved" />
            <div className="tab-content">
                <div className="py-6">
                    {savedArr.length === 0 ? <NoContent /> :
                        <div className='bg-[#13161D] '></div>
                    }

                </div>
            </div>
        </div>
    );
};

export default MyPlan;