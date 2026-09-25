import BacktoHome from "./BacktoHome";
import Heading from "./Heading";

const NoContent = () => {
    return (
        <div className="bg-[#13161D] text-center w-full rounded-2xl border border-[#232732] border-dashed h-72 flex justify-center flex-col gap-5 items-center">
            <Heading nomargin={true} one='NOTHING HERE YET' two='Browse the library and add a lift to get today moving.' />
            <BacktoHome />
        </div>
    );
};

export default NoContent;