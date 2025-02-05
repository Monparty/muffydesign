import "@madzadev/image-slider/dist/index.css";
import { p1, p2, p3, menu, logo, qrLine } from '../../public/exportImg';
import { cardNews, designLists } from '../data/data';
import Image from 'next/image';
import Link from 'next/link';
import CardProduct from '@/components/CardProduct';
import NextSlider from '@/components/NextSlider';
import QuestionSection from '@/components/QuestionSection';
import CardDesignProduct from '@/components/CardDesignProduct';
import MapSection from "@/components/MapSection";

export default function Page() {
    const sliderImages = [
        { url: p1.src },
        { url: p2.src },
    ];

    return (
        <div>
            <section className='w-full h-screen flex bg-gradient-to-r from-red-100 from-10% via-red-400 via-30% to-red-700 to-90%'>
                <div className='w-1/2'>
                    <Image className='h-full' src={p1} alt='p1' />
                </div>
                <div className='w-1/2 flex flex-col justify-center items-center px-20 text-center text-red-600 gap-10'>
                    <h1 className='text-4xl text-white'>
                        MUFFY / design รับออกแบบกราฟิกและพัฒนาเว็บไซต์
                    </h1>
                    <p className='text-white'>
                        รับออกแบบกราฟิกและพัฒนาเว็บไซต์
                    </p>
                    <div className='flex gap-5'>
                        <Link href="#" className='bg-white text-red-600 px-5 py-2 rounded-full'>
                            See Product
                        </Link>
                        <Link href="#" className='border-2 border-white text-white px-5 py-2 rounded-full'>
                            @Line_contact
                        </Link>
                        <Link href="#" className='border-2 border-white text-white px-5 py-2 rounded-full'>
                            โทร
                        </Link>
                        <Link href="#" className='border-2 border-white text-white px-5 py-2 rounded-full'>
                            Facebook
                        </Link>
                    </div>
                </div>
            </section>
            <section className='p-10'>
                <div className='w-full gap-10 grid grid-cols-2 md:grid-cols-4 items-start'>
                    {Object.values(cardNews).map(cardNew => (
                        <CardProduct key={cardNew.id} {...cardNew} />
                    ))}
                </div>
            </section>
            <section className='grid grid-cols-3 w-full p-10 gap-10'>
                <div className='w-full flex justify-center items-center gap-6'>
                    <Image src={p1} className='w-16 h-16 rounded-full' alt='menu' />
                    <div>
                        <h2 className='font-medium text-red-600'>
                            สร้างเว็บไซต์
                        </h2>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        </p>
                    </div>
                </div>
                <div className='w-full flex justify-center items-center gap-6'>
                    <Image src={p1} className='w-16 h-16 rounded-full' alt='menu' />
                    <div>
                        <h2 className='font-medium text-red-600'>
                            สร้างเว็บไซต์
                        </h2>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry
                        </p>
                    </div>
                </div>
                <div className='w-full flex justify-center items-center gap-6'>
                    <Image src={p1} className='w-16 h-16 rounded-full' alt='menu' />
                    <div>
                        <h2 className='font-medium text-red-600'>
                            สร้างเว็บไซต์
                        </h2>
                        <p>
                            Lorem Ipsum is simply dummy text of stry. Lorem Ipsum has been the
                        </p>
                    </div>
                </div>
                <div className='w-full flex justify-center items-center gap-6'>
                    <Image src={p1} className='w-16 h-16 rounded-full' alt='menu' />
                    <div>
                        <h2 className='font-medium text-red-600'>
                            สร้างเว็บไซต์
                        </h2>
                        <p>
                            Lorem Ipsum is simply dummy text of stry. Lorem Ipsum has been the
                        </p>
                    </div>
                </div>
                <div className='w-full flex justify-center items-center gap-6'>
                    <Image src={p1} className='w-16 h-16 rounded-full' alt='menu' />
                    <div>
                        <h2 className='font-medium text-red-600'>
                            สร้างเว็บไซต์
                        </h2>
                        <p>
                            Lorem Ipsum is simply dummy text of stry. Lorem Ipsum has been the
                        </p>
                    </div>
                </div>
                <div className='w-full flex justify-center items-center gap-6'>
                    <Image src={p1} className='w-16 h-16 rounded-full' alt='menu' />
                    <div>
                        <h2 className='font-medium text-red-600'>
                            สร้างเว็บไซต์
                        </h2>
                        <p>
                            Lorem Ipsum is simply dummy text of stry. Lorem Ipsum has been the
                        </p>
                    </div>
                </div>
            </section>
            <section className='flex items-center justify-center gap-10 p-10'>
                <div className='grid gap-10 w-1/2'>
                    <h2 className='text-4xl w-full text-center'>
                        แพ็คเกจเว็บไซต์
                    </h2>
                    <div className='w-full flex justify-start items-center gap-6'>
                        <Image src={p1} className='w-14 h-14 rounded-full' alt='menu' />
                        <div>
                            <h2 className='font-medium text-red-600'>
                                สร้างเว็บไซต์
                            </h2>
                            <p>
                                Lorem Ipsum is simply dummy text of stry. Lorem Ipsum has been the
                            </p>
                        </div>
                    </div>
                    <div className='w-full flex justify-start items-center gap-6'>
                        <Image src={p1} className='w-14 h-14 rounded-full' alt='menu' />
                        <div>
                            <h2 className='font-medium text-red-600'>
                                สร้างเว็บไซต์
                            </h2>
                            <p>
                                Lorem Ipsum is simply dummy text of stry. Lorem Ipsum has been the  simply dummy text of stry. Lorem Ipsum has been the
                            </p>
                        </div>
                    </div>
                    <div className='w-full flex justify-start items-center gap-6'>
                        <Image src={p1} className='w-14 h-14 rounded-full' alt='menu' />
                        <div>
                            <h2 className='font-medium text-red-600'>
                                สร้างเว็บไซต์
                            </h2>
                            <p>
                                Lorem Ipsum is simply dummy text of stry. Lorem Ipsum has been the
                            </p>
                        </div>
                    </div>
                </div>
                <div className='grid grid-cols-2 gap-2 border-l pl-10'>
                    <Image src={p1} className='w-48 h-48' alt='menu' />
                    <Image src={p1} className='w-48 h-48' alt='menu' />
                    <Image src={p1} className='w-48 h-48' alt='menu' />
                    <Image src={p1} className='w-48 h-48' alt='menu' />
                </div>
            </section>
            <section className='p-10'>
                <h2 className='text-4xl text-center mb-10'>งานออกแบบของเรา</h2>
                <div className='grid grid-cols-6 gap-10 text-center'>
                    {Object.values(designLists).map((designList) => (
                        <CardDesignProduct key={designList.id} {...designList} />
                    ))}
                </div>
            </section>
            <section className='flex items-center justify-center gap-10 p-10'>
                <div className='w-1/2 border-r pr-10'>
                    <div className='rounded-xl'>
                        <NextSlider sliderImages={sliderImages} />
                    </div>
                </div>
                <div className='w-1/2 grid gap-10'>
                    <h2 className='text-4xl text-center'>
                        เกี่ยวกับเรา
                    </h2>
                    <p className='text-center'>
                        ที่ไม่เพียงแค่สวยงาม แต่พร้อมให้คุณแก้ไขงานไม่จำกัดจนกว่าจะพอใจ เราพร้อมให้บริการสนับสนุน และให้คำปรึกษาคุณในทุกขั้นตอน ด้วยทีมงานมืออาชีพของเราที่พร้อมจะทำให้ความคิดของคุณเป็นจริง! ที่ไม่เพียงแค่สวยงาม แต่พร้อมให้คุณแก้ไขงานไม่จำกัดจนกว่าจะพอใจ เราพร้อมให้บริการสนับสนุน และให้คำปรึกษาคุณในทุกขั้นตอน ด้วยทีมงานมืออาชีพของเราที่พร้อมจะทำให้ความคิดของคุณเป็นจริง!
                    </p>
                    <div className='flex gap-5 justify-center'>
                        <Link href="#" className='bg-red-600 text-white px-5 py-2 rounded-full flex gap-2 items-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="#fff" d="M3 17.25V21h3.75L17.81 9.93l-3.75-3.75zm19.61 1.11l-4.25 4.25l-5.2-5.2l1.77-1.77l1 1l2.47-2.48l1.42 1.42L18.36 17l1.06 1l1.42-1.4zm-16-7.53L1.39 5.64l4.25-4.25L7.4 3.16L4.93 5.64L6 6.7l2.46-2.48l1.42 1.42l-1.42 1.41l1 1zM20.71 7c.39-.39.39-1 0-1.41l-2.34-2.3c-.37-.39-1.02-.39-1.41 0l-1.84 1.83l3.75 3.75z"/></svg>
                            งานออกแบบของเรา
                        </Link>
                        <Link href="#" className='border-2 border-red-600 text-red-600 px-5 py-2 rounded-full flex gap-2 items-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 48 48"><defs><mask id="ipSWebPage0"><g fill="none"><rect width="40" height="32" x="4" y="8" stroke="#fff" stroke-linejoin="round" stroke-width="4" rx="3"/><path fill="#fff" stroke="#fff" stroke-width="4" d="M4 11a3 3 0 0 1 3-3h34a3 3 0 0 1 3 3v9H4z"/><circle r="2" fill="#000" transform="matrix(0 -1 -1 0 10 14)"/><circle r="2" fill="#000" transform="matrix(0 -1 -1 0 16 14)"/></g></mask></defs><path fill="#dc2626" d="M0 0h48v48H0z" mask="url(#ipSWebPage0)"/></svg>
                            งานออกพัฒนาเว็บไซต์
                        </Link>
                    </div>
                </div>
            </section>
            <section className='p-10'>
                <h2 className='text-4xl text-center mb-10'>คำถามที่พบบ่อย</h2>
                <div className='flex w-full justify-between items-start gap-5'>
                    <div className='grid gap-5 w-full'>
                        <QuestionSection 
                        question={"อยากได้ทรงผมที่เข้ากับรูปหน้าตัวเอง ควรทำอย่างไรดีคะ?"} 
                        answer={"การเลือกทรงผมที่เข้ากับรูปหน้าเป็นสิ่งสำคัญค่ะ ช่างจะสามารถแนะนำทรงผมที่เหมาะสมกับคุณได้ โดยพิจารณาจากรูปหน้าของคุณ เช่น หน้ากลม หน้ายาว หน้ารูปไข่ เป็นต้น ลองนำภาพทรงผมที่ถูกใจไปให้ช่างดูเป็นไอเดียได้ค่ะ"}
                        />
                        <QuestionSection 
                        question={"ผมบางควรตัดผมทรงไหนดีคะ?"} 
                        answer={"สำหรับคนผมบาง การตัดผมเลเยอร์จะช่วยเพิ่มวอลลุ่มให้กับเส้นผม ทำให้ดูหนาขึ้น หรืออาจจะลองทำผมดัดลอนเล็กๆ เพื่อเพิ่มมิติให้กับเส้นผมก็ได้ค่ะ"} 
                        />
                        <QuestionSection 
                        question={"ผมบางควรตัดผมทรงไหนดีคะ?"} 
                        answer={"สำหรับคนผมบาง การตัดผมเลเยอร์จะช่วยเพิ่มวอลลุ่มให้กับเส้นผม ทำให้ดูหนาขึ้น หรืออาจจะลองทำผมดัดลอนเล็กๆ เพื่อเพิ่มมิติให้กับเส้นผมก็ได้ค่ะ"} 
                        />
                    </div>
                    <div className='grid gap-5 w-full'>
                        <QuestionSection 
                        question={"อยากได้ทรงผมที่เข้ากับรูปหน้าตัวเอง ควรทำอย่างไรดีคะ?"} 
                        answer={"การเลือกทรงผมที่เข้ากับรูปหน้าเป็นสิ่งสำคัญค่ะ ช่างจะสามารถแนะนำทรงผมที่เหมาะสมกับคุณได้ โดยพิจารณาจากรูปหน้าของคุณ เช่น หน้ากลม หน้ายาว หน้ารูปไข่ เป็นต้น ลองนำภาพทรงผมที่ถูกใจไปให้ช่างดูเป็นไอเดียได้ค่ะ"}
                        />
                        <QuestionSection 
                        question={"ผมบางควรตัดผมทรงไหนดีคะ?"} 
                        answer={"สำหรับคนผมบาง การตัดผมเลเยอร์จะช่วยเพิ่มวอลลุ่มให้กับเส้นผม ทำให้ดูหนาขึ้น หรืออาจจะลองทำผมดัดลอนเล็กๆ เพื่อเพิ่มมิติให้กับเส้นผมก็ได้ค่ะ"} 
                        />
                        <QuestionSection 
                        question={"ผมบางควรตัดผมทรงไหนดีคะ?"} 
                        answer={"สำหรับคนผมบาง การตัดผมเลเยอร์จะช่วยเพิ่มวอลลุ่มให้กับเส้นผม ทำให้ดูหนาขึ้น หรืออาจจะลองทำผมดัดลอนเล็กๆ เพื่อเพิ่มมิติให้กับเส้นผมก็ได้ค่ะ"} 
                        />
                    </div>
                </div>
            </section>
            <section className='w-full p-10 flex gap-10 justify-between' id='map'>
                <div className='w-2/3 grid gap-2 border-r pr-10'>
                    <h2 className='text-4xl'>ติดต่อเรา</h2>
                    <form className='grid gap-2'>
                        <div className='flex flex-col gap-2'>
                            <div className='flex flex-col gap-2 w-full'>
                                <label for="f1">Name</label>
                                <input id="f1" type='text' placeholder='Your name' className='border p-2 font-light' />
                            </div>
                            <div className='flex flex-col gap-2 w-full'>
                                <label for="f2">Email</label>
                                <input id="f2" type='email' placeholder='Your name' className='border p-2 font-light' />
                            </div>
                            <div className='flex flex-col gap-2 w-full'>
                                <label for="f3">Phone</label>
                                <input id="f3" type='phone' placeholder='Your phone' className='border p-2 font-light' />
                            </div>
                        </div>
                        <div className='flex flex-col gap-2 w-full'>
                            <label for="f3">Message</label>
                            <textarea id="f3" placeholder='How can we help?' className='border p-2 h-20 font-light' />
                        </div>
                        <button className='bg-red-600 text-white w-fit px-5 py-2 rounded-full flex gap-2 items-center'>
                            Submit
                        </button>
                    </form>
                </div>
                <div className='w-1/3 h-full'>
                    <MapSection />
                </div>
            </section>
        </div>
    );
}