import { getSingleData } from "@/components/shared/Data";
import ExerciseDetailsCard from "@/components/shared/ExcerciseDetailsCard";

const DynamicDetailsCard = async ({ params }) => {

    const { id } = await params
    const singleData = await getSingleData(Number(id))

    return (
        <div>
            {singleData && <ExerciseDetailsCard exercise={singleData} />}
        </div>
    );
};

export default DynamicDetailsCard;