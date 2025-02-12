import "@madzadev/image-slider/dist/index.css";
import { p1, p2, p3, menu, logo, qrLine, webIcon, designIcon, trophy, g1, g2, g9, g8, g15 } from '../../public/exportImg';
import { cardNews, webPackage } from '../data/data';
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
        { url: g15.src },
    ];

    const galleryImages = <GalleryImages />
    const marqueeGallery = <MarqueeGallery />
  
    return (
        <div>
            <div id="toTop">
                <HeroSection />
            </div>
            <div className='px-5 2xl:container 2xl:mx-auto'>
                <section className='flex flex-col md:flex-row items-center justify-center gap-10 py-10' id="about">
                    <div className='w-full md:w-1/2 md:border-r md:pr-10'>
                        <div className='rounded-xl'>
                            <NextSlider sliderImages={sliderImages} />
                        </div>
                    </div>
                    <div className='w-full md:w-1/2'>
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
                    <div className="bg-gradient-to-t from-red-300 from-10% via-red-400 via-30% to-red-600 to-90%  p-10 rounded-xl overflow-x-scroll xl:overflow-x-hidden w-full">
                        <div className='flex gap-10 items-start justify-center gap-10rounded-xl w-fit lg:w-full'>
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
                        <div className='grid grid-cols-1 lg:grid-cols-2 gap-2'>
                            <CardDesignProduct 
                                icon={<svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24"><path fill="#dc2626" d="M3 17.25V21h3.75L17.81 9.93l-3.75-3.75zm19.61 1.11l-4.25 4.25l-5.2-5.2l1.77-1.77l1 1l2.47-2.48l1.42 1.42L18.36 17l1.06 1l1.42-1.4zm-16-7.53L1.39 5.64l4.25-4.25L7.4 3.16L4.93 5.64L6 6.7l2.46-2.48l1.42 1.42l-1.42 1.41l1 1zM20.71 7c.39-.39.39-1 0-1.41l-2.34-2.3c-.37-.39-1.02-.39-1.41 0l-1.84 1.83l3.75 3.75z"/></svg>} 
                                title={'test1'} 
                                detail={'แฟร์เคลียร์ เทควันโดมาราธอน แพทเทิร์นเลิฟ หม่านโถวโอยัวะสแควร์แซวท็อปบู๊ท เอ็นเตอร์เทนละอ่อน เมเปิลโบกี้ กุมภาพันธ์ออดิทอเรียมกีวี สไปเดอร์หน่อมแน้ม แอปพริคอทแช่แข็งลิสต์มาร์เก็ตติ้ง'} 
                                component={galleryImages} 
                            />
                            <CardDesignProduct 
                                icon={<svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 48 48"><defs><mask id="ipSWebPage0"><g fill="none"><rect width="40" height="32" x="4" y="8" stroke="#fff" stroke-linejoin="round" stroke-width="4" rx="3"/><path fill="#fff" stroke="#fff" stroke-width="4" d="M4 11a3 3 0 0 1 3-3h34a3 3 0 0 1 3 3v9H4z"/><circle r="2" fill="#000" transform="matrix(0 -1 -1 0 10 14)"/><circle r="2" fill="#000" transform="matrix(0 -1 -1 0 16 14)"/></g></mask></defs><path fill="#dc2626" d="M0 0h48v48H0z" mask="url(#ipSWebPage0)"/></svg>} 
                                title={'test2'} 
                                detail={'เจ๊ไวกิ้งฟอยล์ อัลบั้มวิทย์ ตุ๋ย ซีรีส์ตังค์แจ๊กเก็ตโดนัท กระดี๊กระด๊า เอฟเฟ็กต์ไฮเทค สตีลแพลนอุปทาน ม็อบเปปเปอร์มินต์จิ๊กเอ็นจีโอ ผลไม้เห็นด้วย ซีนตรวจทานหน่อมแน้มมาราธอนแจ๊กพ็อต'} 
                                component={marqueeGallery} 
                            />
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
                    <h2 className='text-4xl text-center mb-10'>ผลงานเว็บไซต์</h2>
                    <div className='grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-5 gap-5 bg-gradient-to-t from-red-100 from-10% via-red-300 via-30% to-red-400 to-90% rounded-xl'>
                        <div>
                            <Image className='md:w-full md:h-full object-cover rounded-xl' src={g1} alt='p1' />
                        </div>
                        <div>
                            <Image className='md:w-full md:h-full object-cover rounded-xl' src={g2} alt='p1' />
                        </div>
                        <div>
                            <Image className='md:w-full md:h-full object-cover rounded-xl' src={g9} alt='p1' />
                        </div>
                        <div>
                            <Image className='md:w-full md:h-full object-cover rounded-xl' src={g15} alt='p1' />
                        </div>
                    </div>
                </section>
                <section className='py-10'>
                    <h2 className='text-4xl text-center mb-10'>คำถามที่พบบ่อย</h2>
                    <div className='flex flex-col md:flex-row w-full justify-between items-start gap-5'>
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
                    <div className="w-full flex flex-col md:flex-row justify-center items-center gap-10">
                        <CardContact link={'#'} img={qrLine} title={'@Muffy_design'} detail={'Line'} />
                        <CardContact link={'#'} img={qrLine} title={'094-303-0401'} detail={'Phone'} />
                        <CardContact link={'#'} img={qrLine} title={'Muffy design'} detail={'Facebook'} />
                    </div>
                </section>
                <section className='w-full flex-col md:flex-row h-full py-10 flex gap-10 justify-between'>
                    <div className='w-full md:w-2/3 grid h-fit gap-2 md:border-r md:pr-10'>
                        <h2 className='text-4xl mb-3'>ต้องการให้เราช่วยอะไร</h2>
                        <FormContact />
                    </div>
                    <div className='w-full md:w-1/3 h-full'>
                        <MapSection />
                    </div>
                </section>
            </div>
        </div>
    );
}