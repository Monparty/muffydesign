import Link from "next/link"

export default function AboutSection({ icon1, icon2 }) {
    return (
        <div className="grid gap-10">
            <h2 className='text-4xl text-center'>
                เกี่ยวกับเรา
            </h2>
            <p className='text-center 2xl:text-lg'>
                MUFFY / design คือพันธมิตรที่พร้อมสร้างสรรค์ผลงานออกแบบที่โดดเด่นให้ธุรกิจของคุณ ไม่ว่าจะเป็นเว็บไซต์ที่ใช้งานง่าย หรือสื่อสิ่งพิมพ์ที่สวยงาม เรามีทีมงานมืออาชีพที่พร้อมให้บริการครบวงจร ตั้งแต่การออกแบบโลโก้, ออกแบบกราฟิก, ไปจนถึงการพัฒนาเว็บไซต์และสื่อสิ่งพิมพ์ต่างๆ เพื่อช่วยให้แบรนด์ของคุณโดดเด่นและน่าจดจำ
            </p>
            <div className='flex flex-wrap gap-5 justify-center'>
                <Link href="/design" className='bg-red-600 font-bold text-white p-4 2xl:px-12 2xl:py-4 rounded-full flex gap-2 items-center hover:opacity-90 w-56 2xl:w-auto'>
                    {icon1}
                    <span>
                        งานออกแบบของเรา
                    </span>
                </Link>
                <Link href="/web" className='border-2 font-bold border-red-600 hover:bg-red-100 p-4 text-red-600 2xl:px-12 2xl:py-4 rounded-full flex gap-2 items-center w-56 2xl:w-auto'>
                    {icon2}
                    <span>
                        งานออกพัฒนาเว็บไซต์
                    </span>
                </Link>
            </div>
        </div>
    )
}