import Image from "next/image";
import {
    p1
} from '../../public/exportImg';

export default function GalleryImages() {
    return (
        <div className="w-full h-full p-5">
            <div className='grid h-full grid-cols-3 gap-2'>
                <div className="zoomImg h-full rounded-l-xl row-span-2">
                    <Image src={p1} className='h-full object-cover' alt='menu' />
                </div>
                <div className="zoomImg w-full h-full">
                    <Image src={p1} className='h-full object-cover' alt='menu' />
                </div>
                <div className="zoomImg w-full h-full rounded-tr-xl ">
                    <Image src={p1} className='h-full object-cover' alt='menu' />
                </div>
                <div className="zoomImg w-full h-full rounded-br-xl col-span-2">
                    <Image src={p1} className='h-full object-cover' alt='menu' />
                </div>
            </div>
        </div>
    )
}