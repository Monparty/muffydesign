import Image from "next/image";
import Link from "next/link";
import { trophy } from '../../public/exportImg';

export default function CardWebPackage({img, title, services, link, period, price, subTitle}) {
    const icon = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#fff" d="M17.69 7.776a1 1 0 0 1 .034 1.414l-7.39 7.76l-4.058-4.26a1 1 0 0 1 1.448-1.38l2.61 2.74l5.942-6.24a1 1 0 0 1 1.414-.034"/></svg>
    const arr = <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="m10 17l5-5m0 0l-5-5"/></svg>

    return (
        <div className="rounded-xl w-full relative">
            <div className="sticky top-0">
                <Link href={link} className="rounded-full p-4 bg-red-500 w-fit absolute top-0 right-0 m-4">{arr}</Link>
            </div>
            <div className={`${img ? 'block' : 'hidden'} w-fit absolute top-0 left-0 m-4 animate-bounce`}>
                <Image src={trophy} alt="x" className="w-20 h-20"></Image>
            </div>
            <div className="grid rounded-t-xl gap-5 justify-center items-center text-center py-10 px-10 bg-red-100">
                <h2 className="font-bold text-4xl">{title}</h2>
                <h2 className="font-bold text-5xl">THB {price}</h2>
                <h2 className="text-xl font-normal">{subTitle}</h2>
                <div className="flex items-center justify-center gap-2 text-gray-500">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M7 11h2v2H7zm0 4h2v2H7zm4-4h2v2h-2zm0 4h2v2h-2zm4-4h2v2h-2zm0 4h2v2h-2z"/><path fill="currentColor" d="M5 22h14c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2h-2V2h-2v2H9V2H7v2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2M19 8l.001 12H5V8z"/></svg>
                    <span className="text-lg">ระยะเวลาในการทำงาน {period} วัน</span>
                </div>
            </div>
            <div className="py-10 px-10 rounded-b-xl bg-gray-100">
                <ul className="flex flex-col gap-5 justify-start text-start items-start">
                    {services.map((service, index) => (
                        <li className="flex gap-2 justify-center items-center" key={index}>
                            <div className="rounded-full bg-red-500 w-fit">{icon}</div>
                            <div className="text-xl">{service}</div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}