import Image from "next/image";
import { p1 } from '../../public/exportImg';

export default function CardMini() {
    return (
        <div className='w-full flex justify-center items-center gap-6'>
            <Image src={p1} className='w-16 h-16 rounded-full' alt='menu' />
            <div>
                <h2 className='font-bold text-red-600'>
                    สร้างเว็บไซต์
                </h2>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                </p>
            </div>
        </div>
    )
}