'use client'

import Link from "next/link";

const BacktoHome = () => {
    return (
        <div>
            <Link href='/' className="rounded-full text-black btn bg-[#C2F10D]">Go to workouts</Link>
        </div>
    );
};

export default BacktoHome;