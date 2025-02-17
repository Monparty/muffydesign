import Image from "next/image";
import Link from "next/link";
import Cookies from 'js-cookie';

export default function HeroSection({heroImg}) {

    const handleSetCookie = (name, value) => {
        Cookies.set(name, value, { expires: 60 });
    };
    
    // const handleGetCookie = () => {
    //     const cookieValue = Cookies.get('myCookie');
    //     alert(cookieValue);
    // };

    return (
        <div className="w-full h-full lg:h-dvh 2xl:h-screen flex justify-center items-center flex-col lg:flex-row">
            <div className="flex justify-center w-full h-fit lg:w-1/2 relative">
                <Image className='h-[14rem] w-[14rem] md:h-[30rem] md:w-[30rem] lg:h-[40rem] lg:w-[40rem] 2xl:h-[55rem] 2xl:w-[55rem] z-20 object-cover' src={heroImg} alt='p1' />
                <div className="h-[10rem] w-[10rem] md:h-[20rem] md:w-[20rem] lg:h-[30rem] lg:w-[30rem] 2xl:h-[40rem] 2xl:w-[40rem] bg-white rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"></div>
            </div>
            <div className='w-full lg:w-1/2 flex flex-col justify-center items-center text-center gap-5'>
                <h1 className='text-2xl 2xl:text-4xl 2xl:leading-[1.5] text-white'>
                    MUFFY / design ออกแบบกราฟิก<br />และพัฒนาเว็บไซต์
                </h1>
                <p className='text-white md: 2xl:text-lg px-5 md:px-20'>
                    เราคือผู้เชี่ยวชาญด้านการออกแบบกราฟิกและพัฒนาเว็บไซต์ ที่พร้อมช่วยให้ธุรกิจของคุณโดดเด่นเหนือใคร ด้วยดีไซน์ที่สวยงาม ทันสมัย และตอบโจทย์ทุกความต้องการของคุณ
                </p>
                <div className='flex flex-wrap justify-center gap-5 text-red-500'>
                    <Link href='https://line.me/ti/p/%40388rnahg' target='_blank' className="flex gap-2 items-center w-44 justify-start rounded-full bg-white hover:opacity-90 py-2 pl-2 pr-5" onClick={() => handleSetCookie('hero_selectLine', 'y')}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12S17.937 22.75 12 22.75c-1.856 0-3.605-.471-5.13-1.3l-4.233.787a.75.75 0 0 1-.874-.874l.788-4.233A10.7 10.7 0 0 1 1.25 12m6-2A.75.75 0 0 1 8 9.25h8a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75M8 13.25a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5z" clip-rule="evenodd"/></svg>
                        <span className="font-bold">
                            @Muffy_design
                        </span>
                    </Link>
                    <Link href='tel:0943030401' className="flex gap-2 items-center w-44 justify-start rounded-full bg-white hover:opacity-90 py-2 pl-2 pr-5" onClick={() => handleSetCookie('selectPhone', 'y')}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="currentColor" d="M15.75 2A2.25 2.25 0 0 1 18 4.25v15.5A2.25 2.25 0 0 1 15.75 22h-7.5A2.25 2.25 0 0 1 6 19.75V4.25A2.25 2.25 0 0 1 8.25 2zm-2.5 16h-2.5a.75.75 0 0 0 0 1.5h2.5a.75.75 0 0 0 0-1.5"/></svg>
                        <span className="font-bold">
                            094-303-0401
                        </span>
                    </Link>
                    <Link href='https://web.facebook.com/profile.php?id=61555308387991' target='_blank' className="flex gap-2 items-center w-44 justify-start rounded-full bg-white hover:opacity-90 py-2 pl-2 pr-5" onClick={() => handleSetCookie('selectFacebook', 'y')}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="currentColor" d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95"/></svg>
                        <span className="font-bold">
                            Muffy design
                        </span>
                    </Link>
                </div>
                <div className="w-full flex flex-col justify-center items-center mb-6">
                    <Link href="/web" className='border-2 font-bold border-white hover:bg-white text-white hover:text-red-500 px-5 py-2 rounded-full w-44'>
                        <span>
                            See Product
                        </span>
                    </Link>
                </div>
            </div>
            <Link href="#about" className="hidden lg:block absolute bottom-5 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-2 rounded-full bg-white animate-bounce z-20">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#dc2626  " d="m12 19.164l6.207-6.207l-1.414-1.414L12 16.336l-4.793-4.793l-1.414 1.414zm0-5.65l6.207-6.207l-1.414-1.414L12 10.686L7.207 5.893L5.793 7.307z"/></svg>
            </Link>
        </div>
    )
}