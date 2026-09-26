'use client'

import Link from "next/link";
import { useContext } from "react";
import { CreatedContext } from "../context/ContextProvider";
import { Bounce, toast } from 'react-toastify';

const FullDataCardBtns = ({ id, fromSaved }) => {

    const { planArr, setPlanArr, savedArr, setSaved } = useContext(CreatedContext)

    const onRemove = () => {
        if (fromSaved) {
            const filterOut = savedArr.filter(se => Number(se.id) !== Number(id))
            setSaved(filterOut)
        }
        else {
            const filterOut = planArr.filter(se => Number(se.id) !== Number(id))
            setPlanArr(filterOut)
        }
        return toast.success(`Removed from today's plan!`, {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
        });
    }

    return (
        <div className="grid lg:flex gap-2 grid-cols-3 md:grid-cols-1 lg:gap-3">
            {/* <div className="grid grid-cols-3 md:grid-cols-1 lg:grid-cols-3 gap-2"> */}
            <Link href={`/exercise/${id}`} className="px-4 py-2 rounded-full border border-white/15 text-white text-sm font-medium hover:bg-white/5 transition-colors whitespace-nowrap">
                View Details
            </Link>
            <button className={`flex items-center gap-1.5 rounded-full px-4 py-2 bg-[#D4FF3D] text-[#0A0F0A] text-sm font-bold hover:bg-[#c2eb2e] transition-colors whitespace-nowrap ${fromSaved && 'hidden'}`}>
                ✓ Mark as Done
            </button>
            <button
                onClick={onRemove}
                className="px-4 py-2 rounded-full border border-white/15 text-white text-sm font-medium hover:bg-white/5 transition-colors whitespace-nowrap"
                aria-label="Remove"
            >X</button>
        </div>
    );
};

export default FullDataCardBtns;