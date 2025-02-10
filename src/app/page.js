import "@madzadev/image-slider/dist/index.css";
import { p1, p2, p3, menu, logo, qrLine, webIcon, designIcon, trophy, g1, g2, g3, g4, g5, g7 } from '../../public/exportImg';
import { cardNews, designLists, webPackage } from '../data/data';
import Image from 'next/image';
import Link from 'next/link';
import CardProduct from '@/components/CardProduct';
import NextSlider from '@/components/NextSlider';
import QuestionSection from '@/components/QuestionSection';
import CardDesignProduct from '@/components/CardDesignProduct';
import MapSection from "@/components/MapSection";
import HeroSection from "@/components/HeroSection";
import CardWebPackage from "@/components/CardWebPackage";
import GalleryImages from "@/components/GalleryImages";
import FormContact from "@/components/FormContact";
import MarqueeGallery from "@/components/MarqueeGallery";
import AboutSection from "@/components/AboutSection";
import CardContact from "@/components/CardContact";

export default function Page() {
    const sliderImages = [
        { url: p1.src },
        { url: p2.src },
        { url: logo.src },
        { url: g1.src },
        { url: g2.src },
        { url: g3.src },
    ];

    const galleryImages = <GalleryImages />
    const marqueeGallery = <MarqueeGallery />
  
    return (
        <div>
            <div id="toTop">
                <HeroSection />
            </div>
            <div className='px-10'>
                <section className='flex items-center justify-center gap-10 py-10' id="about">
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
                <section className='py-10'>
                    <div className='w-full gap-10 grid grid-cols-2 md:grid-cols-4 items-start'>
                        {Object.values(cardNews).map(cardNew => (
                            <CardProduct key={cardNew.id} {...cardNew} />
                        ))}
                    </div>
                    <div className="grid mt-10 justify-center w-full">
                        <Link href="#" className='w-fit border-2 font-bold border-red-600 hover:bg-red-100 text-red-600 p-2 pr-6 rounded-full flex justify-between gap-2 items-center'>
                            <div className="bg-gray-100 p-2 rounded-full">
                                <Image src={webIcon} alt="x" />
                            </div>
                            <span>
                                ดูทั้งหมด
                            </span>
                        </Link>
                    </div>
                </section>
                <section className='py-10 rounded-xl'>
                    <h2 className='text-4xl mb-10 w-full text-center'>
                        แพ็คเกจเว็บไซต์
                    </h2>
                    <div className="bg-gradient-to-t from-red-300 from-10% via-red-400 via-30% to-red-600 to-90%  p-10 rounded-xl">
                        <div className='flex gap-10 items-start justify-center gap-10rounded-xl'>
                            <CardWebPackage 
                            title={webPackage[0].title} 
                            link={'#'}
                            period={webPackage[0].period}
                            price={webPackage[0].price}
                            services={webPackage[0].services}
                            subTitle={webPackage[0].subTitle}
                            />
                            <CardWebPackage 
                            title={webPackage[1].title} 
                            link={'#'}
                            period={webPackage[1].period}
                            price={webPackage[1].price}
                            services={webPackage[1].services}
                            subTitle={webPackage[1].subTitle}
                            img={true}
                            />
                            <CardWebPackage 
                            title={webPackage[2].title} 
                            link={'#'}
                            period={webPackage[2].period}
                            price={webPackage[2].price}
                            services={webPackage[2].services}
                            subTitle={webPackage[2].subTitle}
                            />
                        </div>
                    </div>
                </section>
                <section className='py-10'>
                    <h2 className='text-4xl text-center mb-10'>งานออกแบบของเรา</h2>
                    <div className='p-2 bg-gray-100 rounded-xl grid gap-2'>
                        <div className='grid grid-cols-2 gap-2'>
                            <CardDesignProduct key={designLists.id} icon={designLists[0].icon} title={designLists[0].title} detail={designLists[0].detail} link={designLists[0].link} component={galleryImages} />
                            <CardDesignProduct key={designLists.id} icon={designLists[1].icon} title={designLists[0].title} detail={designLists[0].detail} link={designLists[0].link} component={marqueeGallery} />
                        </div>
                        <div className="grid my-10 justify-center w-full">
                            <Link href="#" className='bg-red-600 font-bold text-white p-2 pr-6 rounded-full flex gap-2 items-center hover:opacity-90'>
                                <div className="bg-red-400 p-2 rounded-full">
                                    <Image src={designIcon} alt="x" />
                                </div>
                                <span>
                                    ดูทั้งหมด
                                </span>
                            </Link>
                            
                        </div>
                    </div>
                </section>
                <section className='py-10'>
                    <div className='grid w-full p-10 gap-10 bg-gradient-to-t from-red-100 from-10% via-red-300 via-30% to-red-400 to-90% rounded-xl'>
                        <div className='grid grid-cols-2 gap-2 p-2 w-1/3 bg-white rounded-xl'>
                            <div className="zoomImg rounded-xl">
                                <Image src={p1} className='w-full h-full' alt='menu' />
                            </div>
                            <div className="zoomImg rounded-xl">
                                <Image src={p1} className='w-full h-full' alt='menu' />
                            </div>
                            <div className="zoomImg rounded-xl">
                                <Image src={p1} className='w-full h-full' alt='menu' />
                            </div>
                            <div className="zoomImg rounded-xl">
                                <Image src={p1} className='w-full h-full' alt='menu' />
                            </div>
                        </div>
                    </div>
                </section>
                <section className='py-10'>
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
                <section className='py-10' id='contact'>
                    <h2 className='text-4xl text-center mb-10'>ช่องทางการติดต่อ</h2>
                    <div className="w-full flex justify-center gap-10">
                        <CardContact link={'#'} img={qrLine} title={'@Muffy_design'} detail={'Line'} />
                        <CardContact link={'#'} img={qrLine} title={'094-303-0401'} detail={'Phone'} />
                        <CardContact link={'#'} img={qrLine} title={'Muffy design'} detail={'Facebook'} />
                    </div>
                </section>
                <section className='w-full h-full p-10 flex gap-10 justify-between'>
                    <div className='w-2/3 grid h-fit gap-2 border-r pr-10'>
                        <h2 className='text-4xl mb-3'>ต้องการให้เราช่วยอะไร</h2>
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