import Image from "next/image"
import Link from "next/link"

export default function CardDesignProduct({img, title, link}) {
    return (
        <Link href={link} className='border bg-red-300 rounded-xl'>
            <div className='zoomImg rounded-t-xl cursor-pointer'>
                <Image src={img} className='w-48 h-48' alt='menu' />
            </div>
            <h2 className='p-2'>
                {title}
            </h2>
        </Link>
    )
}