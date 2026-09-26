import Image from 'next/image';
import Link from 'next/link';

const ExerciseCard = ({ exercise }) => {
    const {
        name,
        image,
        muscleGroups,
        equipment,
        duration,
        caloriesBurned,
        rating,
        id
    } = exercise;

    return (
        <Link href={`/exercise/${id}`} className="w-full mx-auto max-w-sm bg-[#15171D] rounded-2xl overflow-hidden border border-white/5">

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

                <div className="flex items-center gap-2 sm:gap-4 justify-between text-white/70 text-sm mt-3 pt-3 border-t border-white/10">
                    <span className="flex items-center gap-1.5">⏰ {duration} min</span>
                    <span className="flex items-center gap-1.5">🔥 {caloriesBurned} kcal</span>
                    <span className="flex items-center gap-1.5 mr-auto">☆ {rating}</span>
                </div>
            </div>
        </Link>
    );
};

export default ExerciseCard;