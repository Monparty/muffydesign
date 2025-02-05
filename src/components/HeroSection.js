import Image from "next/image";
import { p4, p6 } from '../../public/exportImg';
import Link from "next/link";
import Btn from "./Btn";

export default function HeroSection() {
    return (
        <section className='w-full h-screen flex bg-gradient-to-r from-red-300 from-10% via-red-400 via-30% to-red-700 to-90% relative'>
            <div className='w-3/5 flex justify-center items-center'>
                <div className="w-full h-[42rem] bg-white rounded-full m-10 relative">
                    <Image className='w-[60rem] h-[60rem] object-cover absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2' src={p6} alt='p1' />
                </div>
            </div>
            <div className='w-2/5 flex flex-col justify-center items-center px-20 text-center text-red-500 gap-10'>
                <h1 className='text-4xl text-white'>
                    MUFFY / design รับออกแบบกราฟิกและ<br />พัฒนาเว็บไซต์
                </h1>
                <p className='text-white'>
                    ความคิดสร้างสรรค์ การทำงานเป็นทีม หรือการมุ่งเน้นลูกค้าเป็นศูนย์กลาง
                </p>
                <div className='flex gap-5'>
                    <Btn 
                        icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12S17.937 22.75 12 22.75c-1.856 0-3.605-.471-5.13-1.3l-4.233.787a.75.75 0 0 1-.874-.874l.788-4.233A10.7 10.7 0 0 1 1.25 12m6-2A.75.75 0 0 1 8 9.25h8a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75M8 13.25a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5z" clip-rule="evenodd"/></svg>}
                        title={'@Muffy_design'} 
                        link={'#'} 
                    />
                    <Btn 
                        icon={<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="currentColor" d="M15.75 2A2.25 2.25 0 0 1 18 4.25v15.5A2.25 2.25 0 0 1 15.75 22h-7.5A2.25 2.25 0 0 1 6 19.75V4.25A2.25 2.25 0 0 1 8.25 2zm-2.5 16h-2.5a.75.75 0 0 0 0 1.5h2.5a.75.75 0 0 0 0-1.5"/></svg>}
                        title={'094-303-0401'} 
                        link={'#'} 
                    />
                    <Btn 
                        icon={<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="currentColor" d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95"/></svg>}
                        title={'Muffy Desidn'} 
                        link={'#'} 
                    />
                </div>
                <div className="w-full flex flex-col justify-center items-center">
                    <Link href="#" className='border-2 font-bold border-white hover:bg-white text-white hover:text-red-500 px-5 py-2 rounded-full w-44'>
                        <span>
                            See Product
                        </span>
                    </Link>
                </div>
            </div>
            <Link href="#about" className="absolute bottom-5 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-2 rounded-full bg-white animate-bounce">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#dc2626  " d="m12 19.164l6.207-6.207l-1.414-1.414L12 16.336l-4.793-4.793l-1.414 1.414zm0-5.65l6.207-6.207l-1.414-1.414L12 10.686L7.207 5.893L5.793 7.307z"/></svg>
            </Link>
        </section>
    )
}