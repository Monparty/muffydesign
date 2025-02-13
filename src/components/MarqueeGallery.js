import Image from "next/image";
import Marquee from "react-fast-marquee";
import '../../src/app/globals.css'

export default function MarqueeGallery({imgMarqueeGallery}) {
    return (
        <div className="p-5 flex items-center w-full h-full">
            <Marquee pauseOnHover={true} speed={60}>
                <div className="flex">
                    {imgMarqueeGallery.map((img, index) => (
                        <Image key={index} src={img} className='w-80 h-80 object-cover rounded-xl ml-5' alt='menu' />
                    ))}
                </div>
            </Marquee>
        </div>
    )
}