import Logo from './Logo';

const Footer = () => {
    return (
        <div className='flex justify-between items-center md:px-10 px-3 py-6 border-t border-slate-700'>
            <Logo ma={true} />
            <p className="text-slate-400">
                © 2026 FitLog — Workout Library. Train hard, log honest.
            </p>
        </div>
    );
};

export default Footer;