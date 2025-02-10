import Link from "next/link"
import Image from "next/image"

export default function CardContact({link, img, title, detail}) {
    return (
        <Link href={link} className="grid gap-3 text-center justify-center ">
            <div className=" bg-red-500 rounded-full w-fit p-1">
                <div className=" bg-white rounded-full w-fit p-10">
                    <Image src={img} className="w-48 h-48" alt="x" />
                </div>
            </div>
            <h2 className="font-bold text-xl">
                {title}
            </h2>
            <p className="text-xl">
                {detail}
            </p>
        </Link>
    )
}