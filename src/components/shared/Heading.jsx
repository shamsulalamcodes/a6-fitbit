const Heading = ({ one, two, nomargin }) => {
    return (
        <div>
            <div className={`${nomargin ? '' : 'ml-5 mb-5 mt-16'}`}>
                <h1 className="text-3xl">{one}</h1>
                <p className="text-[#9CA3AF]">{two}</p>
            </div>
        </div>
    );
};

export default Heading;