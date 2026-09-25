const BigHeading = ({ one, two }) => {
    return (
        <div>
            <h1 className="text-6xl font-bold">{one}</h1>
            <p className="py-6 text-[#9CA3AF]">{two}</p>
        </div>
    );
};

export default BigHeading;