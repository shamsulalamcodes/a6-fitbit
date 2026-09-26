import Count from "./Count";

const Counts = ({ stat, plan, saved }) => {

    const giveDuration = some => some.map(p => p.duration).reduce((a, b) => Number(a) + Number(b), 0)
    const giveCalorie = some => some.map(p => p.caloriesBurned).reduce((a, b) => Number(a) + Number(b), 0)

    return (
        <div className="my-5">
            {stat === 'plan' && <Count exercisesCount={plan.length} totalMinutes={giveDuration(plan) || 0} totalCalories={giveCalorie(plan) || 0} />}
            {stat === 'saved' && <Count exercisesCount={saved.length} totalMinutes={giveDuration(saved) || 0} totalCalories={giveCalorie(saved) || 0} />}
        </div>
    );
};

export default Counts;