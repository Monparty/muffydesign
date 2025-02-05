import "@madzadev/image-slider/dist/index.css";
import { p1, p2, p3, menu, logo, qrLine, webIcon, designIcon } from '../../public/exportImg';
import { cardNews, designLists } from '../data/data';
import Image from 'next/image';
import Link from 'next/link';
import CardProduct from '@/components/CardProduct';
import NextSlider from '@/components/NextSlider';
import QuestionSection from '@/components/QuestionSection';
import CardDesignProduct from '@/components/CardDesignProduct';
import MapSection from "@/components/MapSection";
import HeroSection from "@/components/HeroSection";
import CardMini from "@/components/CardMini";
import GalleryImages from "@/components/GalleryImages";
import FormContact from "@/components/FormContact";
import MarqueeGallery from "@/components/MarqueeGallery";
import AboutSection from "@/components/AboutSection";

export default function Page() {
    const sliderImages = [
        { url: p1.src },
        { url: p2.src },
    ];

    const galleryImages = <GalleryImages />
    const marqueeGallery = <MarqueeGallery />
  
    return (
        <div>
            <HeroSection />
            <div className='container mx-auto'>
                <section className='flex items-center justify-center gap-10 p-10' id="about">
                    <div className='w-1/2 border-r pr-10'>
                        <div className='rounded-xl'>
                            <NextSlider sliderImages={sliderImages} />
                        </div>
                    </div>
                    <div className='w-1/2'>
                        <AboutSection src1={designIcon} src2={webIcon} />
                    </div>
                </section>
                <h2 className='text-4xl text-center mb-10'>เว็บไซต์ของเรา</h2>
                <section className='p-10'>
                    <div className='w-full gap-10 grid grid-cols-2 md:grid-cols-4 items-start'>
                        {Object.values(cardNews).map(cardNew => (
                            <CardProduct key={cardNew.id} {...cardNew} />
                        ))}
                    </div>
                </section>
                <div className="p-10">
                    <section className='flex items-center justify-between gap-10 p-10 bg-red-200 rounded-xl'>
                        <div className='grid gap-10 w-1/2'>
                            <h2 className='text-4xl w-full text-center'>
                                แพ็คเกจเว็บไซต์
                            </h2>
                            <CardMini />
                            <CardMini />
                            <CardMini />
                        </div>
                        <div className='grid grid-cols-2 gap-2 p-2 bg-white rounded-xl'>
                            <div className="zoomImg rounded-xl">
                                <Image src={p1} className='w-60 h-60' alt='menu' />
                            </div>
                            <div className="zoomImg rounded-xl">
                                <Image src={p1} className='w-60 h-60' alt='menu' />
                            </div>
                            <div className="zoomImg rounded-xl">
                                <Image src={p1} className='w-60 h-60' alt='menu' />
                            </div>
                            <div className="zoomImg rounded-xl">
                                <Image src={p1} className='w-60 h-60' alt='menu' />
                            </div>
                        </div>
                    </section>
                </div>
                <section className='p-10'>
                    <h2 className='text-4xl text-center mb-10'>งานออกแบบของเรา</h2>
                    <div className='p-2 bg-gray-100 grid gap-2'>
                        <div className='grid grid-cols-2 gap-2'>
                            <CardDesignProduct key={designLists.id} icon={designLists[0].icon} title={designLists[0].title} detail={designLists[0].detail} link={designLists[0].link} component={galleryImages} />
                            <CardDesignProduct key={designLists.id} icon={designLists[1].icon} title={designLists[0].title} detail={designLists[0].detail} link={designLists[0].link} component={marqueeGallery} />
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
                <section className='grid grid-cols-3 w-full p-10 gap-10'>
                    <CardMini />
                    <CardMini />
                    <CardMini />
                </section>
                <section className='w-full h-full p-10 flex gap-10 justify-between' id='map'>
                    <div className='w-2/3 grid gap-2 border-r pr-10'>
                        <h2 className='text-4xl mb-3'>ติดต่อเรา</h2>
                        <FormContact />
                    </div>
                    <div className='w-1/3 h-full'>
                        <MapSection />
                    </div>
                </section>
            </div>
        </div>
    );
}