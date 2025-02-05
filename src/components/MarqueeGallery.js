import Image from "next/image";
import Marquee from "react-fast-marquee";
import {
    p1
} from '../../public/exportImg';
import '../../src/app/globals.css'

export default function MarqueeGallery() {
    return (
        <div className="p-5 flex items-center w-full h-full">
            <Marquee pauseOnHover={true} speed={60} className=''>
                <div className="flex">
                    <Image src={p1} className='w-80 h-80 object-cover rounded-xl ml-5' alt='menu' />
                    <Image src={p1} className='w-80 h-80 object-cover rounded-xl ml-5' alt='menu' />
                    <Image src={p1} className='w-80 h-80 object-cover rounded-xl ml-5' alt='menu' />
                    <Image src={p1} className='w-80 h-80 object-cover rounded-xl ml-5' alt='menu' />
                    <Image src={p1} className='w-80 h-80 object-cover rounded-xl ml-5' alt='menu' />
                    <Image src={p1} className='w-80 h-80 object-cover rounded-xl ml-5' alt='menu' />
                </div>
            </Marquee>
        </div>
    )
}