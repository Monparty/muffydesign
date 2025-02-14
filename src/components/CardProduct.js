import Link from "next/link"
import Image from "next/image"

export default function CardProduct({img, title, detail}) {
    return (
        <div className="w-full grid gap-4 2xl:text-xl">
            <div className="zoomImg rounded-xl">
                <Image src={img} alt="x" className="w-full h-60 object-cover" />
            </div>
            <h2 className="font-bold">{title}</h2>
            <p className="break-all text-sm leading-5 h-16 text-ellipsis overflow-hidden text-gray-600">{detail}</p>
            <Link href="/" className="flex font-bold items-center gap-1 text-red-600 hover:underline w-fit">
                ดูเพิ่มเติม
                <svg className="w-5 h-5 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </Link>
        </div>
    )
}