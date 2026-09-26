'use client'
import { CreatedContext } from '@/components/context/ContextProvider';
import Counts from '@/components/shared/counts/Counts';
import FullDataCard from '@/components/shared/FullDataCard';
import Heading from '@/components/shared/Heading';
import NoContent from '@/components/shared/NoContent';
import React, { useContext, useState } from 'react';

const MyPlan = () => {

    const [stat, setStat] = useState('plan' || 'saved')
    const [sortBy, setSortBy] = useState('duration' || 'calories' || 'rating')
    const { planArr, savedArr } = useContext(CreatedContext)

    const newPlan = [...planArr]
    const newSaved = [...savedArr]

    if (sortBy === 'duration') {
        newPlan.sort((p, d) => Number(d.duration) - Number(p.duration))
        newSaved.sort((p, d) => Number(d.duration) - Number(p.duration))
    }
    else if (sortBy === 'calories') {
        newPlan.sort((p, d) => Number(d.caloriesBurned) - Number(p.caloriesBurned))
        newSaved.sort((p, d) => Number(d.caloriesBurned) - Number(p.caloriesBurned))
    }
    else if (sortBy === 'rating') {
        newPlan.sort((p, d) => Number(d.rating) - Number(p.rating))
        newSaved.sort((p, d) => Number(d.rating) - Number(p.rating))
    }

    return (
        <div className="">
            <Heading nomargin={true} one="MY PLAN" two="Cap of five lifts for today. Finish them, then load more." />
            <Counts stat={stat} plan={planArr} saved={savedArr} />
            <div className="rounded-2xl">

                <div className="flex items-center justify-between mb-4">
                    <div className="tabs tabs-box bg-[#14171A] border border-white/5 p-1 rounded-full">
                        <input
                            onClick={() => setStat('plan')}
                            type="radio"
                            name="my_tabs_3"
                            className="tab rounded-full px-4 text-white/50 checked:bg-[#202427] font-medium"
                            aria-label="Today's Plan"
                            defaultChecked
                        />
                        <input
                            type="radio"
                            name="my_tabs_3"
                            onClick={() => setStat('saved')}
                            className="tab rounded-full px-4 text-white/50 checked:bg-[#202427] font-medium"
                            aria-label="Saved"
                        />
                    </div>

                    <div className="flex items-center gap-2 text-sm text-white/70">
                        <span>Sort By : </span>
                        <select
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value)}
                            className="bg-[#14171A] w-40 rounded-xl text-white/70 font-medium btn text-center outline-none cursor-pointer"
                        >
                            <option value="duration" className=""> {sortBy === 'duration' ? '✔ Duration' : 'Duration'} </option>
                            <option value="calories" className=""> {sortBy === 'calories' ? '✔ Calories' : 'Calories'} </option>
                            <option value="rating" className=""> {sortBy === 'rating' ? '✔ Rating' : 'Rating'}</option>
                        </select>
                    </div>
                </div>

                {stat === 'plan' && (
                    <div className="py-2">
                        {planArr.length === 0 ? <NoContent /> :
                            <div className='grid grid-cols-1 gap-3 items-center'>
                                {newPlan.map(pla => <FullDataCard key={pla.id} data={pla} />)}
                            </div>
                        }
                    </div>
                )}

                {stat === 'saved' && (
                    <div className="py-2">
                        {savedArr.length === 0 ? <NoContent /> :
                            <div className='grid grid-cols-1 gap-3 items-center'>
                                {newSaved.map(pla => <FullDataCard fromSaved={true} key={pla.id} data={pla} />)}
                            </div>
                        }
                    </div>
                )}
            </div>
        </div>
    );
};

export default MyPlan;