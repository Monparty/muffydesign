import Image from "next/image"
import Link from "next/link"

export default function CardProductPage({ id, img, title, price, sold, filterDisplay, filterType, setFilterType }) {
    const star = <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"><path fill="#6b7280" d="m12 17.275l-4.15 2.5q-.275.175-.575.15t-.525-.2t-.35-.437t-.05-.588l1.1-4.725L3.775 10.8q-.25-.225-.312-.513t.037-.562t.3-.45t.55-.225l4.85-.425l1.875-4.45q.125-.3.388-.45t.537-.15t.537.15t.388.45l1.875 4.45l4.85.425q.35.05.55.225t.3.45t.038.563t-.313.512l-3.675 3.175l1.1 4.725q.075.325-.05.588t-.35.437t-.525.2t-.575-.15z"/></svg>

    return (
        <Link href={`/design/${id}`} className={`${filterDisplay ? 'w-72 2xl:w-72' : 'w-96 2xl:w-[22rem]'}`}>
            <div className="zoomImg rounded-md">
                <Image src={img} className={`${filterDisplay ? 'w-72 2xl:w-72 h-72' : 'w-96 2xl:w-[22rem] h-96'}  object-cover`} alt="x" />
            </div>
            <div className="flex flex-col mt-2 mb-10">
                <h2 className="text-lg">
                    {title}
                </h2>
                <h3 className="text-sm text-gray-500">
                    <span className="text-red-500 mr-2">(ราคาเริ่มต้น)</span> THB {price}
                </h3>
                <div className="flex items-center text-xs text-gray-500 ">
                    {star}
                    {star}
                    {star}
                    {star}
                    {star}
                    <p className="ml-2">
                        ขายแล้ว {sold} ครั้ง
                    </p>
                </div>
            </div>
        </Link>
    )
}