import Image from 'next/image';
import imae from '../../assets/banner.png'
import BigHeading from '../shared/BigHeading';
import BrowseBtn from './BrowseBtn';

const Banner = () => {
    return (
        <div>
            <div className="bg-[#15171D] rounded-2xl">
                <div className="hero-content flex flex-col md:flex-row">
                    <div className='pl-4 md:w-1/2'>
                        <span className='text-xs text-[#C2F800]'>WORKOUT LIBRARY</span>
                        <BigHeading one="TRAIN WITH INTENT. LOG EVERY SET." two="FitLog is a dark, no-nonsense gym companion: pick a lift, lock it into today's plan, and watch the week's work add up." />
                        <BrowseBtn />
                    </div>
                    <div className="md:w-1/2 flex justify-end items-center">
                        <Image className='' width={399} height={399} src={imae} alt='Banner Image' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;