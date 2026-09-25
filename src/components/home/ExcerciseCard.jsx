import Image from 'next/image';

const ExerciseCard = ({ exercise }) => {
    const {
        name,
        image,
        muscleGroups,
        equipment,
        duration,
        caloriesBurned,
        rating,
    } = exercise;

    return (
        <div className="w-full max-w-sm bg-[#15171D] rounded-2xl overflow-hidden border border-white/5">

            {/* Image */}
            <div className="relative w-full aspect-5/3 mb-2">
                <div className="relative w-full h-full rounded-t-xl object-contain">
                    <Image
                        src={image}
                        fill
                        sizes="320px"
                        alt={name}
                        className="object-cover"
                    />
                </div>
            </div>

            {/* Content */}
            <div className="px-4 pb-4">
                <div className="flex flex-wrap gap-2">
                    {muscleGroups.map((group) => (
                        <span
                            key={group}
                            className="text-[11px] font-bold uppercase tracking-wide text-[#0A0F0A] bg-[#D4FF3D] px-3 py-1 rounded-full"
                        >
                            {group}
                        </span>
                    ))}
                </div>

                <h3 className="text-xl font-extrabold text-white uppercase tracking-wide mt-3">
                    {name}
                </h3>
                <p className="text-sm text-white/50 mt-0.5">
                    {equipment}
                </p>

                <div className="flex items-center gap-4 text-white/70 text-sm mt-3 pt-3 border-t border-white/10">
                    <span className="flex items-center gap-1.5">
                        <ClockIcon />
                        {duration} min
                    </span>
                    <span className="flex items-center gap-1.5">
                        <FireIcon />
                        {caloriesBurned} kcal
                    </span>
                    <span className="flex items-center gap-1.5 mr-auto">
                        <span className="text-[#D4FF3D]">★</span>
                        {rating}
                    </span>
                </div>
            </div>
        </div>
    );
};

const ClockIcon = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
    </svg>
);

const FireIcon = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2c1 3-2 4-2 7a4 4 0 108 0c0-1-.5-2-1-2 .5 2-1 3-2 2 1-2-1-3-1-5-1 1-2 0-2-2z" />
    </svg>
);

export default ExerciseCard;