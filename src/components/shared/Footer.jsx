import Logo from './Logo';

const Footer = () => {
    return (
        <div className='flex justify-between items-center p-4 border-t-2 border-slate-100'>
            <Logo />
            <p className="text-slate-600">
                © 2026 FitLog — Workout Library. Train hard, log honest.
            </p>
        </div>
    );
};

export default Footer;