import image from '../../assets/logo.png'
import Image from "next/image";

const Logo = ({ ma }) => {
    return (
        <div className='flex gap-2'>
            <Image alt='NavLogo' src={image} /> <span className={`font-bold ${ma ? 'text-lg' : 'text-2xl'}`}>FITLOG</span>
        </div>
    );
};

export default Logo;