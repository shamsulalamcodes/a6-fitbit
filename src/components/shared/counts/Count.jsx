const Count = ({ exercisesCount, totalMinutes, totalCalories }) => {

    const stats = [
        { label: 'Exercises', value: exercisesCount, accent: true },
        { label: 'Minutes', value: totalMinutes },
        { label: 'Calories', value: totalCalories },
    ];

    return (
        <div className="bg-[#14171A] border border-white/5 rounded-2xl p-6">
            <div className="grid grid-cols-3">
                {stats.map(({ label, value, accent }) => (
                    <div key={label}>
                        <p className="text-xs text-white/40">{label}</p>
                        <p
                            className={`text-2xl font-extrabold mt-1 ${accent ? 'text-[#D4FF3D]' : 'text-white'
                                }`}
                        >
                            {value}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Count;