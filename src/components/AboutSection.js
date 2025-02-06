import Link from "next/link"
import Image from "next/image"

export default function AboutSection({ src1, src2 }) {
    return (
        <div className="grid gap-10">
            <h2 className='text-4xl text-center'>
                เกี่ยวกับเรา
            </h2>
            <p className='text-center text-lg'>
            ในโลกดิจิทัลที่การแข่งขันสูง การมีเว็บไซต์และงานออกแบบที่โดดเด่นคือกุญแจสำคัญสู่ความสำเร็จ MUFFY / design พร้อมช่วยให้ธุรกิจของคุณแตกต่างและโดดเด่น ด้วยการออกแบบกราฟิกที่สวยงาม ทันสมัย และเว็บไซต์ที่ใช้งานง่าย รองรับทุกอุปกรณ์ เรามุ่งเน้นการสร้างผลงานที่ไม่ใช่แค่ดูดี แต่ต้อง ตอบโจทย์การใช้งานจริง ช่วยเพิ่มความน่าเชื่อถือ ดึงดูดลูกค้า และสร้างประสบการณ์ที่ดีให้กับผู้ใช้งาน ไม่ว่าคุณจะต้องการเว็บไซต์สำหรับธุรกิจ องค์กร หรือร้านค้าออนไลน์ เราพร้อมดูแลคุณในทุกขั้นตอน ตั้งแต่แนวคิดแรกจนถึงการเปิดตัว ให้เราเป็นส่วนหนึ่งในการพาธุรกิจของคุณก้าวไปข้างหน้า
            </p>
            <div className='flex gap-5 justify-center'>
                <Link href="#" className='bg-red-600 font-bold text-white px-12 py-4 rounded-full flex gap-2 items-center hover:opacity-90'>
                    <Image src={src1} alt="x" />
                    <span>
                        งานออกแบบของเรา
                    </span>
                </Link>
                <Link href="#" className='border-2 font-bold border-red-600 hover:bg-red-100 text-red-600 px-12 py-4 rounded-full flex gap-2 items-center'>
                    <Image src={src2} alt="x" />
                    <span>
                        งานออกพัฒนาเว็บไซต์
                    </span>
                </Link>
            </div>
        </div>
    )
}