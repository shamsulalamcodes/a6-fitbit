'use client'
import { useContext } from 'react';
import { CreatedContext } from '../context/ContextProvider';
import { Bounce, toast } from 'react-toastify';

const ExcerciseDetailsBtns = ({ exercise }) => {

    const { planArr, setPlanArr, savedArr, setSaved } = useContext(CreatedContext)

    const successToast = () => toast.success(`Added to List!`, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
    })

    const errorToast = () => toast.error(`Already in list!`, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
    });

    const handlePlan = () => {
        const found = planArr.find(plan => Number(plan.id) === Number(exercise.id))
        if (!found) {
            setPlanArr([...planArr, exercise])
            successToast()
        }
        else errorToast()
    }

    const handleSaved = () => {
        const found = savedArr.find(plan => Number(plan.id) === Number(exercise.id))
        if (!found) {
            setSaved([...savedArr, exercise])
            successToast()
        }
        else errorToast()
    }

    return (
        <div>
            <div className="grid grid-cols-1 text-center sm:grid-cols-2 gap-2 mt-8">

                <button className="px-5 py-2.5 rounded-lg bg-[#D4FF3D] text-[#0A0F0A] font-bold text-sm hover:bg-[#c2eb2e] transition-colors" onClick={handlePlan} >Add to today&apos;s plan</button>

                <button onClick={handleSaved} className="px-5 py-2.5 rounded-lg border border-white/15 text-white font-medium text-sm hover:bg-white/5 transition-colors">🔖 Save for later</button>

            </div>
        </div>
    );
};

export default ExcerciseDetailsBtns;