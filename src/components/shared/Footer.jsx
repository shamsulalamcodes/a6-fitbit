import Logo from './Logo';

const Footer = () => {
    return (
        <div className='flex flex-col sm:flex-row justify-between text-center  sm:text-left items-center md:px-10 gap-2 px-3 py-6 border-t border-slate-700'>
            <Logo ma={true} />
            <p className="text-slate-400">
                © 2026 FitLog — Workout Library. Train hard, log honest.
            </p>
        </div>
    );
};

export default Footer;