import image from '../../assets/logo.png'
import Image from "next/image";

const Logo = () => {
    return (
        <div className='flex gap-2'>
            <Image alt='NavLogo' src={image} /> <span className='text-2xl font-bold'>FITLOG</span>
        </div>
    );
};

export default Logo;