import Image from 'next/image';
import ExcerciseDetailsBtns from './ExcerciseDetailsBtns';

const ExerciseDetailsCard = ({ exercise }) => {

    const { name, image, description, muscleGroups, equipment, difficulty, sets, reps, duration, caloriesBurned, rating, instructions } = exercise;

    const specs = [
        { label: 'Equipment', value: equipment },
        { label: 'Difficulty', value: difficulty },
        { label: 'Sets', value: sets },
        { label: 'Reps', value: reps },
        { label: 'Duration', value: `${duration} min` },
        { label: 'Calories', value: `${caloriesBurned} kcal` },
        { label: 'Rating', value: rating },
    ];


    return (
        <div className="min-h-screen bg-[#0A0C0E] rounded-xl p-6 md:p-10 md:pb-20">
            <div className="mx-auto max-w-7xl grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-7 lg:gap-10">
                {/* Image */}
                <div className="relative w-full aspect-square md:aspect-auto md:h-full rounded-2xl overflow-hidden md:sticky md:top-10">
                    <Image
                        src={image}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        alt={name}
                        className="object-cover"
                    />
                </div>

                {/* Details */}
                <div className="flex flex-col">
                    <h1 className="text-3xl md:text-4xl font-extrabold text-white uppercase tracking-wide">
                        {name}
                    </h1>

                    <p className="text-white/50 text-sm mt-3 leading-relaxed max-w-md">
                        {description}
                    </p>

                    <div className="flex flex-wrap gap-2 mt-4">
                        {muscleGroups.map((group) => (
                            <span
                                key={group}
                                className="text-xs font-bold uppercase tracking-wide text-[#0A0F0A] bg-[#D4FF3D] px-3 py-1 rounded-full"
                            >
                                {group}
                            </span>
                        ))}
                    </div>

                    {/* Spec table */}
                    <div className="mt-6 rounded-xl bg-[#14171A] border border-white/5 divide-y divide-white/5">
                        {specs.map(({ label, value }) => (
                            <div key={label} className="flex items-center justify-between px-5 py-3">
                                <span className="text-[11px] font-semibold uppercase tracking-wide text-white/40">
                                    {label}
                                </span>
                                <span className="text-sm font-medium text-white">
                                    {value}
                                </span>
                            </div>
                        ))}
                    </div>

                    {/* Instructions */}
                    <div className="mt-8">
                        <h2 className="text-sm font-bold uppercase tracking-wide text-white">
                            Instructions
                        </h2>
                        <ol className="mt-3 space-y-2.5">
                            {instructions.map((step, i) => (
                                <li key={i} className="flex gap-3 text-sm text-white/60 leading-relaxed">
                                    <span className="text-white/30 font-medium shrink-0">{i + 1}.</span>
                                    {step}
                                </li>
                            ))}
                        </ol>
                    </div>

                    {/* Actions */}
                    <ExcerciseDetailsBtns exercise={exercise} />
                </div>
            </div>
        </div>
    );
};

export default ExerciseDetailsCard;