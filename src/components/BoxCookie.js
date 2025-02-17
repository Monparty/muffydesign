"use client"
import Cookies from 'js-cookie';

export default function BoxCookie() {
    const handleSetCookie = (name, value) => {
        Cookies.set(name, value, { expires: 60 });
    };

    const cookieValue = Cookies.get('acceptCookie');
    return (
        <div className={`${cookieValue ==='y' ? 'hidden' : 'block'} w-full lg:w-fit bg-white rounded-xl shadow-lg fixed bottom-14 lg:bottom-5 p-5 z-[21] left-1/2 transform -translate-x-1/2`}>
            <div className="flex flex-col w-full lg:flex-row justify-between gap-5 items-center">
                <div className='text-sm lg:text-base'>
                    <h2 className="font-bold mb-2">
                        เว็บไซต์นี้ใช้คุกกี้ <span className='hidden'>{cookieValue}</span>
                    </h2>
                    <p>
                        เราใช้คุกกี้เพื่อเพิ่มประสิทธิภาพ และประสบการณ์ที่ดีในการใช้งานเว็บไซต์ คุณสามารถเลือกตั้งค่าความยินยอมการใช้คุกกี้ได้ โดยคลิก "ตั้งค่าคุกกี้"
                    </p>
                </div>
                <div className="flex flex-row lg:flex-col gap-2 text-sm">
                    <button className='bg-red-600 font-bold text-white p-2 rounded-full flex gap-2 justify-center hover:opacity-90 w-36' onClick={() => handleSetCookie('acceptCookie', 'y')}>
                        ยอมรับทั้งหมด
                    </button>
                    <button className='border-2 font-bold border-red-600 hover:bg-red-100 p-2 text-red-600 rounded-full flex gap-2 justify-center w-36' onClick={() => handleSetCookie('acceptCookie', 'n')}>
                        ตั้งค่าคุกกี้
                    </button>
                </div>
            </div>
        </div>
    )
}