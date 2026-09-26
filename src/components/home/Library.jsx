import Heading from "../shared/Heading";
import ExerciseCard from "./ExcerciseCard";


const Library = ({ allData }) => {

    return (
        <div className="container mx-auto">
            <Heading one="THE LIBRARY" two="Twelve lifts covering every major muscle group." />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between items-center gap-5">
                {
                    allData.map((data, i) => <ExerciseCard key={i} exercise={data} />)
                }
            </div>
        </div>
    );
};

export default Library;