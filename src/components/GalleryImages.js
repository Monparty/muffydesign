import Image from "next/image";

export default function GalleryImages({imgGalleryImages}) {
    return (
        <div className="w-full h-full p-5">
            <div className='grid h-full w-full grid-cols-3 gap-2'>
                <div className="zoomImg h-full rounded-l-xl hidden md:block row-span-2">
                    <Image src={imgGalleryImages[0]} className='h-full object-cover' alt='menu' />
                </div>
                <div className="zoomImg w-full h-full">
                    <Image src={imgGalleryImages[1]} className='h-full object-cover' alt='menu' />
                </div>
                <div className="zoomImg w-full h-full rounded-tr-xl col-span-2 md:col-span-1">
                    <Image src={imgGalleryImages[2]} className='h-full object-cover' alt='menu' />
                </div>
                <div className="zoomImg w-full h-full rounded-br-xl col-span-3 md:col-span-2">
                    <Image src={imgGalleryImages[3]} className='h-full object-cover' alt='menu' />
                </div>
            </div>
        </div>
    )
}