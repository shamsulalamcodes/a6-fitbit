import Logo from './Logo';

const Footer = () => {
    return (
        <div className='px-2 flex justify-between items-center px-4 py-6 border-t border-slate-700'>
            <Logo />
            <p className="text-slate-400">
                © 2026 FitLog — Workout Library. Train hard, log honest.
            </p>
        </div>
    );
};

export default Footer;