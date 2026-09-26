import Image from 'next/image';
import React from 'react';
import FullDataCardBtns from './FullDataCardBtns';

const FullDataCard = ({ data, fromSaved }) => {
    const { name, image, equipment, duration, caloriesBurned, rating, id } = data;

    return (
        <div>
            <div className="grid text-center sm:text-left lg:flex grid-cols-1 sm:grid-cols-2 justify-center md:grid-cols-3 items-center gap-4 bg-[#14171A] border border-white/5 rounded-xl p-3">

                {/* Thumbnail */}
                <div className="relative mx-auto  md:aspect-video aspect-auto shrink-0 rounded-lg overflow-hidden">
                    <Image
                        src={image}
                        width={200}
                        height={100}
                        alt={name}
                        className="object-cover rounded"
                    />
                </div>

                {/* Info */}
                <div className="flex-1 mx-auto">
                    <h3 className="text-xl font-extrabold text-white uppercase tracking-wide truncate">
                        {name}
                    </h3>
                    <p className="text-white/50 truncate mt-1 text-sm">{equipment}</p>
                    <div className="flex items-center gap-4 mt-1 text-white/80 text-sm">
                        <span className="flex items-center gap-1">
                            ⏰ {duration} min
                        </span>
                        <span className="flex items-center gap-1">
                            🔥 {caloriesBurned} kcal
                        </span>
                        <span className="flex items-center gap-1">
                            <span className="text-[#CCFF00]">★</span> {rating}
                        </span>
                    </div>
                </div>

                {/* Actions */}
                <div className="flex justify-end items-center gap-2 shrink-0 md:col-span-1 sm:col-span-2">
                    <FullDataCardBtns id={id} fromSaved={fromSaved} />
                </div>
            </div>
        </div>
    )
};

export default FullDataCard;