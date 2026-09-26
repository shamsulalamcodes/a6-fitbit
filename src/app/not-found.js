import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="min-h-screen bg-[#0A0C0E] flex items-center justify-center px-6 relative overflow-hidden">

            {/* Background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#D4FF3D]/10 rounded-full blur-[120px]" />

            <div className="relative text-center max-w-lg">
                <div className="relative inline-block">
                    <h1 className="text-[10rem] md:text-[14rem] font-extrabold leading-none text-white/5 select-none">
                        404
                    </h1>
                    <h1 className="text-6xl md:text-7xl font-extrabold text-white absolute inset-0 flex items-center justify-center">
                        <span className="text-[#D4FF3D]">4</span>0<span className="text-[#D4FF3D]">4</span>
                    </h1>
                </div>

                <h2 className="text-xl md:text-2xl font-bold text-white mt-4 uppercase tracking-wide">
                    Set not found
                </h2>
                <p className="text-white/50 text-sm md:text-base mt-3 max-w-sm mx-auto leading-relaxed">
                    Looks like this page skipped leg day. The route you are looking for does not exist or has moved.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-8">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#D4FF3D] text-[#0A0F0A] font-bold text-sm uppercase tracking-wide hover:bg-[#c2eb2e] transition-colors"
                    >
                        <HomeIcon />
                        Back to Home
                    </Link>
                </div>
            </div>
        </div>
    );
}

const HomeIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
        <path d="M9 22V12h6v10" />
    </svg>
);