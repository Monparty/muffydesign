"use client"
import "@madzadev/image-slider/dist/index.css";
import { qrPhone, qrFacebook, qrLine, heroImg, g1, g2, g3, g4, print21, print5, print3, rubber2, print14, stk6, stk10, logo2, print11, rubber6, print20 } from '../../public/exportImg';
import { cardNews, webPackage } from '../data/data';
import 'aos/dist/aos.css';
import AOS from "aos";
import { useEffect } from "react";
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
        { url: print14.src },
        { url: stk6.src },
        { url: print11.src },
        { url: rubber6.src },
        { url: print21.src },
        { url: print5.src },
        { url: print3.src },
    ];

    const imgGalleryImages = [
        print21, print5, print3, rubber2
    ];

    const imgMarqueeGallery = [
        print14, stk6, stk10, logo2, print11, rubber6, print20
    ];

    const galleryImages = <GalleryImages imgGalleryImages={imgGalleryImages} />
    const marqueeGallery = <MarqueeGallery imgMarqueeGallery={imgMarqueeGallery} />

    useEffect(() => {
        AOS.init();
    }, [])
  
    return (
        <div>
            <section id="toTop" className='bg-gradient-to-r from-red-300 from-10% via-red-400 via-30% to-red-700 to-90%'>
                <HeroSection heroImg={heroImg} />
            </section>
            <div className='px-5 2xl:container 2xl:mx-auto'>
                <section className='flex flex-col-reverse md:flex-row items-center justify-center gap-10 py-10' id="about">
                    <div className='w-full md:w-1/2 md:border-r md:pr-10' data-aos="fade-up">
                        <div className='rounded-xl'>
                            <NextSlider sliderImages={sliderImages} />
                        </div>
                    </div>
                    <div className='w-full md:w-1/2' data-aos="fade-up">
                        <AboutSection 
                            icon1={<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="#fff" d="M3 17.25V21h3.75L17.81 9.93l-3.75-3.75zm19.61 1.11l-4.25 4.25l-5.2-5.2l1.77-1.77l1 1l2.47-2.48l1.42 1.42L18.36 17l1.06 1l1.42-1.4zm-16-7.53L1.39 5.64l4.25-4.25L7.4 3.16L4.93 5.64L6 6.7l2.46-2.48l1.42 1.42l-1.42 1.41l1 1zM20.71 7c.39-.39.39-1 0-1.41l-2.34-2.3c-.37-.39-1.02-.39-1.41 0l-1.84 1.83l3.75 3.75z"/></svg>} 
                            icon2={<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 48 48"><defs><mask id="ipSWebPage0"><g fill="none"><rect width="40" height="32" x="4" y="8" stroke="#fff" stroke-linejoin="round" stroke-width="4" rx="3"/><path fill="#fff" stroke="#fff" stroke-width="4" d="M4 11a3 3 0 0 1 3-3h34a3 3 0 0 1 3 3v9H4z"/><circle r="2" fill="#000" transform="matrix(0 -1 -1 0 10 14)"/><circle r="2" fill="#000" transform="matrix(0 -1 -1 0 16 14)"/></g></mask></defs><path fill="#dc2626" d="M0 0h48v48H0z" mask="url(#ipSWebPage0)"/></svg>} 
                        />
                    </div>
                </section >
                <section className='py-10'>
                    <h2 className='text-4xl text-center mb-10' data-aos="fade-up">
                        เว็บไซต์ของเรา
                    </h2>
                    <div className='w-full gap-10 grid grid-cols-1 md:grid-cols-4 items-start' data-aos="fade-up">
                        {Object.values(cardNews).map(cardNew => (
                            <CardProduct key={cardNew.id} {...cardNew} />
                        ))}
                    </div>
                    <div className="grid mt-10 justify-center w-full">
                        <Link href="/web" className='w-fit border-2 font-bold border-red-600 hover:bg-red-100 text-red-600 p-2 pr-6 rounded-full flex justify-between gap-2 items-center'>
                            <div className="bg-gray-200 p-2 rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 48 48"><defs><mask id="ipSWebPage0"><g fill="none"><rect width="40" height="32" x="4" y="8" stroke="#fff" stroke-linejoin="round" stroke-width="4" rx="3"/><path fill="#fff" stroke="#fff" stroke-width="4" d="M4 11a3 3 0 0 1 3-3h34a3 3 0 0 1 3 3v9H4z"/><circle r="2" fill="#000" transform="matrix(0 -1 -1 0 10 14)"/><circle r="2" fill="#000" transform="matrix(0 -1 -1 0 16 14)"/></g></mask></defs><path fill="#dc2626" d="M0 0h48v48H0z" mask="url(#ipSWebPage0)"/></svg>
                            </div>
                            <span>
                                ดูทั้งหมด
                            </span>
                        </Link>
                    </div>
                </section>
                <section className='py-10 rounded-xl'>
                    <h2 className='text-4xl mb-10 w-full text-center' data-aos="fade-up">
                        แพ็คเกจเว็บไซต์
                    </h2>
                    <div className="bg-gradient-to-t from-red-300 from-10% via-red-400 via-30% to-red-600 to-90% p-10 rounded-xl overflow-x-scroll xl:overflow-x-hidden w-full">
                        <div className='flex gap-10 items-start justify-center gap-10rounded-xl w-fit lg:w-full' data-aos="fade-up">
                            <CardWebPackage 
                            title={webPackage[0].title} 
                            link={'/web/1'}
                            period={webPackage[0].period}
                            price={webPackage[0].price}
                            services={webPackage[0].services}
                            subTitle={webPackage[0].subTitle}
                            />
                            <CardWebPackage 
                            title={webPackage[1].title} 
                            link={'/web/2'}
                            period={webPackage[1].period}
                            price={webPackage[1].price}
                            services={webPackage[1].services}
                            subTitle={webPackage[1].subTitle}
                            img={true}
                            />
                            <CardWebPackage 
                            title={webPackage[2].title} 
                            link={'/web/3'}
                            period={webPackage[2].period}
                            price={webPackage[2].price}
                            services={webPackage[2].services}
                            subTitle={webPackage[2].subTitle}
                            />
                        </div>
                    </div>
                </section>
                <section className='py-10'>
                    <h2 className='text-4xl text-center mb-10' data-aos="fade-up">
                        งานออกแบบของเรา
                    </h2>
                    <div className='p-2 bg-gray-100 rounded-xl grid gap-2'>
                        <div className='grid grid-cols-1 lg:grid-cols-2 gap-2' data-aos="fade-up">
                            <CardDesignProduct 
                                icon={<svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24"><path fill="#dc2626" d="M3 17.25V21h3.75L17.81 9.93l-3.75-3.75zm19.61 1.11l-4.25 4.25l-5.2-5.2l1.77-1.77l1 1l2.47-2.48l1.42 1.42L18.36 17l1.06 1l1.42-1.4zm-16-7.53L1.39 5.64l4.25-4.25L7.4 3.16L4.93 5.64L6 6.7l2.46-2.48l1.42 1.42l-1.42 1.41l1 1zM20.71 7c.39-.39.39-1 0-1.41l-2.34-2.3c-.37-.39-1.02-.39-1.41 0l-1.84 1.83l3.75 3.75z"/></svg>} 
                                title={'ออกแบบที่โดดเด่น'} 
                                detail={'เราสร้างสรรค์งานออกแบบที่สวยงามและเป็นเอกลักษณ์ เพื่อให้แบรนด์ของคุณโดดเด่นและน่าจดจำ เราให้บริการครบวงจร ตั้งแต่การออกแบบโลโก้, ออกแบบสื่อสิ่งพิมพ์, ไปจนถึงการพัฒนาเว็บไซต์'} 
                                component={galleryImages} 
                            />
                            <CardDesignProduct 
                                icon={<svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 48 48"><defs><mask id="ipSWebPage0"><g fill="none"><rect width="40" height="32" x="4" y="8" stroke="#fff" stroke-linejoin="round" stroke-width="4" rx="3"/><path fill="#fff" stroke="#fff" stroke-width="4" d="M4 11a3 3 0 0 1 3-3h34a3 3 0 0 1 3 3v9H4z"/><circle r="2" fill="#000" transform="matrix(0 -1 -1 0 10 14)"/><circle r="2" fill="#000" transform="matrix(0 -1 -1 0 16 14)"/></g></mask></defs><path fill="#dc2626" d="M0 0h48v48H0z" mask="url(#ipSWebPage0)"/></svg>} 
                                title={'เทคโนโลยีทันสมัย'} 
                                detail={'เราใช้เทคโนโลยีล่าสุดในการสร้างเว็บไซต์ เพื่อให้มั่นใจว่าเว็บไซต์ของคุณมีความทันสมัยและมีประสิทธิภาพ เราจะทำการวิเคราะห์ธุรกิจของคุณ เพื่อทำความเข้าใจเป้าหมายและกลุ่มลูกค้าของคุณ'} 
                                component={marqueeGallery} 
                            />
                        </div>
                        <div className="grid my-10 justify-center w-full">
                            <Link href="/design" className='bg-red-600 font-bold text-white p-2 pr-6 rounded-full flex gap-2 items-center hover:opacity-90'>
                                <div className="bg-red-400 p-2 rounded-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="#fff" d="M3 17.25V21h3.75L17.81 9.93l-3.75-3.75zm19.61 1.11l-4.25 4.25l-5.2-5.2l1.77-1.77l1 1l2.47-2.48l1.42 1.42L18.36 17l1.06 1l1.42-1.4zm-16-7.53L1.39 5.64l4.25-4.25L7.4 3.16L4.93 5.64L6 6.7l2.46-2.48l1.42 1.42l-1.42 1.41l1 1zM20.71 7c.39-.39.39-1 0-1.41l-2.34-2.3c-.37-.39-1.02-.39-1.41 0l-1.84 1.83l3.75 3.75z"/></svg>
                                </div>
                                <span>
                                    ดูทั้งหมด
                                </span>
                            </Link>
                        </div>
                    </div>
                </section>
                <section className='py-10'>
                    <h2 className='text-4xl text-center mb-10' data-aos="fade-up">
                        ผลงานเว็บไซต์
                    </h2>
                    <div className='grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-5 gap-5 bg-gradient-to-t from-red-100 from-10% via-red-300 via-30% to-red-400 to-90% rounded-xl' data-aos="fade-up">
                        <div>
                            <Image className='md:w-full md:h-full object-cover rounded-xl' src={g1} alt='p1' />
                        </div>
                        <div>
                            <Image className='md:w-full md:h-full object-cover rounded-xl' src={g2} alt='p1' />
                        </div>
                        <div>
                            <Image className='md:w-full md:h-full object-cover rounded-xl' src={g3} alt='p1' />
                        </div>
                        <div>
                            <Image className='md:w-full md:h-full object-cover rounded-xl' src={g4} alt='p1' />
                        </div>
                    </div>
                </section>
                <section className='py-10'>
                    <h2 className='text-4xl text-center mb-10' data-aos="fade-up">
                        คำถามที่พบบ่อย
                    </h2>
                    <div className='flex flex-col md:flex-row w-full justify-between items-start gap-5'>
                        <div className='grid gap-5 w-full' data-aos="fade-up">
                            <QuestionSection 
                            question={"การทำเว็บไซต์ใช้เวลานานแค่ไหน?"}
                            answer={"ระยะเวลาในการทำเว็บไซต์ขึ้นอยู่กับความซับซ้อนของโครงการ โดยเฉลี่ยแล้วจะใช้เวลาประมาณ 1 สัปดาห์ แต่เราจะแจ้งกำหนดเวลาที่แน่นอนให้คุณทราบหลังจากที่ได้พูดคุยรายละเอียดของโครงการแล้ว"}
                            />
                            <QuestionSection 
                            question={"ค่าใช้จ่ายในการทำเว็บไซต์ประมาณเท่าไหร่? "}
                            answer={"ค่าใช้จ่ายในการทำเว็บไซต์ขึ้นอยู่กับหลายปัจจัย เช่น ขนาดของเว็บไซต์ ฟังก์ชันการใช้งาน และเทคโนโลยีที่ใช้ เราขอเสนอให้คุณติดต่อมาเพื่อขอใบเสนอราคาที่เหมาะสมกับความต้องการของคุณ"}
                            />
                            <QuestionSection 
                            question={"เราต้องเตรียมข้อมูลอะไรบ้างก่อนทำเว็บไซต์?"} 
                            answer={"คุณควรเตรียมข้อมูลเกี่ยวกับธุรกิจของคุณ เช่น โลโก้, รูปภาพ, เนื้อหา, โครงสร้างเว็บไซต์ที่ต้องการ และข้อมูลติดต่อ หรือถ้าหากยังไม่มีโลโก้ ทางเราก็ออกแบบให้คุณได้"}
                            />
                        </div>
                        <div className='grid gap-5 w-full' data-aos="fade-up">
                            <QuestionSection 
                            question={"เว็บไซต์ที่ทำจะรองรับมือถือหรือไม่?"}
                            answer={"ใช่ เว็บไซต์ที่เราสร้างจะรองรับการใช้งานบนทุกอุปกรณ์"}
                            />
                            <QuestionSection 
                            question={"ใช้เทคโนโลยีอะไรในการสร้างเว็บไซต์?"} 
                            answer={"เราใช้เทคโนโลยีล่าสุดในการสร้างเว็บไซต์ เช่น WordPress, React, Vue.js, Next.js, Strapi"}
                            />
                            <QuestionSection 
                            question={"รับออกแบบสื่อสิ่งพิมพ์อะไรบ้าง?"} 
                            answer={"เราให้บริการออกแบบสื่อสิ่งพิมพ์หลากหลายรูปแบบ เช่น โบรชัวร์, นามบัตร, โปสเตอร์, ใบปลิว"}
                            />
                        </div>
                    </div>
                </section>
                <section className='py-10' id='contact'>
                    <h2 className='text-4xl text-center mb-10' data-aos="fade-up">
                        ช่องทางการติดต่อ
                    </h2>
                    <div className="w-full flex flex-col md:flex-row justify-center items-center gap-10" data-aos="fade-up">
                        <CardContact link={'https://line.me/ti/p/%40388rnahg'} img={qrLine} title={'@Muffy_design'} detail={'Line'} />
                        <CardContact link={'tel:0943030401'} img={qrPhone} title={'094-303-0401'} detail={'Phone'} />
                        <CardContact link={'https://web.facebook.com/profile.php?id=61555308387991'} img={qrFacebook} title={'Muffy design'} detail={'Facebook'} />
                    </div>
                </section>
                <section className='w-full flex-col md:flex-row h-full py-10 flex gap-10 justify-between'>
                    <div className='w-full md:w-2/3 grid h-fit gap-2 md:border-r md:pr-10' data-aos="fade-up">
                        <h2 className='text-4xl mb-3'>ต้องการให้เราช่วยอะไร</h2>
                        <FormContact />
                    </div>
                    <div className='w-full md:w-1/3 h-full' data-aos="fade-up">
                        <MapSection />
                    </div>
                </section>
            </div>
        </div>
    );
}