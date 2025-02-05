import Link from "next/link"
import Image from "next/image"

export default function AboutSection({ src1, src2 }) {
    return (
        <div className="grid gap-10">
            <h2 className='text-4xl text-center'>
                เกี่ยวกับเรา
            </h2>
            <p className='text-center'>
                ที่ไม่เพียงแค่สวยงาม แต่พร้อมให้คุณแก้ไขงานไม่จำกัดจนกว่าจะพอใจ เราพร้อมให้บริการสนับสนุน และให้คำปรึกษาคุณในทุกขั้นตอน ด้วยทีมงานมืออาชีพของเราที่พร้อมจะทำให้ความคิดของคุณเป็นจริง! ที่ไม่เพียงแค่สวยงาม แต่พร้อมให้คุณแก้ไขงานไม่จำกัดจนกว่าจะพอใจ เราพร้อมให้บริการสนับสนุน และให้คำปรึกษาคุณในทุกขั้นตอน ด้วยทีมงานมืออาชีพของเราที่พร้อมจะทำให้ความคิดของคุณเป็นจริง!
            </p>
            <div className='flex gap-5 justify-center'>
                <Link href="#" className='bg-red-600 text-white px-5 py-2 rounded-full flex gap-2 items-center hover:opacity-90'>
                    <Image src={src1} alt="x" />
                    งานออกแบบของเรา
                </Link>
                <Link href="#" className='border-2 border-red-600 hover:bg-red-100 text-red-600 px-5 py-2 rounded-full flex gap-2 items-center'>
                    <Image src={src2} alt="x" />
                    งานออกพัฒนาเว็บไซต์
                </Link>
            </div>
        </div>
    )
}