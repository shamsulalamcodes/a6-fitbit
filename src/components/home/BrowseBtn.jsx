'use client'

const BrowseBtn = () => {

    const handleClick = e => {
        e.preventDefault();
        document.getElementById('library')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <button onClick={handleClick} className="btn text-black bg-[#C2F800] hover:bg-[#a8db00] border-none gap-2"
        >
            <SearchIcon />
            BROWSE WORKOUTS
        </button>
    );
};

const SearchIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
        <circle cx="11" cy="11" r="8" />
        <path d="M21 21l-4.35-4.35" />
    </svg>
);

export default BrowseBtn;