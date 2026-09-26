'use client'
import Link from 'next/link';
import Logo from './Logo';
import { usePathname } from 'next/navigation';
import PlanSaved from './Plan@Saved';

const Navbar = () => {

    const path = usePathname()

    const mentu = <>
        <Link className={`px-5 py-1 text-[#9CA3AF] ${path === '/' ? 'rounded-full text-[#C2F800] bg-[#597e389d]' : ''}`} href='/'>Workout</Link>
        <Link className={`px-5 py-1 text-[#9CA3AF] ${path === '/my-plan' ? 'rounded-full text-[#C2F800] bg-[#597e389d]' : ''}`} href='/my-plan'>My Plan</Link>
    </>

    return (
        <div className='border-b border-slate-700 px-10'>
            <div className="navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={-1}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {mentu}
                            <div className="sm:hidden">
                                <PlanSaved />
                            </div>
                        </ul>
                    </div>
                    <Link href="./"><Logo /></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 font-semibold">
                        {mentu}
                    </ul>
                </div>
                <div className="hidden sm:flex navbar-end">
                    <PlanSaved />
                </div>
            </div>
        </div>
    );
};

export default Navbar;