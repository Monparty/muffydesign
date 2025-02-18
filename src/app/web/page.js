"use client"
import { useState } from 'react';
import {
    heroWeb, g1, g2, g3, g4, g5, g6, g7, g8, g9, g10, g11, g12, g13, g14, g15, w_moncook1, w_moncook2, w_moncook3, w_moncook4, w_moncook5, w_punthai1, w_punthai2, w_punthai3, w_punthai4, w_sabai1, w_sabai2, w_sabai3, w_sabai4, w_sabai5, w_sabai6, w_sabai7, w_sabai8, w_sabai9, w_satop1, w_satop2, w_satop3, w_satop4, w_satop5, w_satop6
} from '../../../public/exportImg';
import 'aos/dist/aos.css';
import AOS from "aos";
import { useEffect } from "react";
import { webProducts } from '../../data/data';
import BoxFilter from '@/components/BoxFilter';
import CardProductPage from '@/components/CardProductPage';
import Image from 'next/image';

const imageDesignList = [g1, g2, g3, g4, g5, g6, g7, g8, g9, g10, g11, g12, g13, g14, g15, w_moncook1, w_moncook2, w_moncook3, w_moncook4, w_moncook5, w_punthai1, w_punthai2, w_punthai3, w_punthai4, w_sabai1, w_sabai2, w_sabai3, w_sabai4, w_sabai5, w_sabai6, w_sabai7, w_sabai8, w_sabai9, w_satop1, w_satop2, w_satop3, w_satop4, w_satop5, w_satop6]

export default function Page() {
    const filter = <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="#000" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="1.5" d="M21.25 12H8.895m-4.361 0H2.75m18.5 6.607h-5.748m-4.361 0H2.75m18.5-13.214h-3.105m-4.361 0H2.75m13.214 2.18a2.18 2.18 0 1 0 0-4.36a2.18 2.18 0 0 0 0 4.36Zm-9.25 6.607a2.18 2.18 0 1 0 0-4.36a2.18 2.18 0 0 0 0 4.36Zm6.607 6.608a2.18 2.18 0 1 0 0-4.361a2.18 2.18 0 0 0 0 4.36Z"/></svg>
    const arr = <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="#000" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="m10 17l5-5m0 0l-5-5"/></svg>
    const [filterDisplay, setFilterDisplay] = useState(false)
    const [filterType, setFilterType] = useState('-')
    const filterProductType = webProducts.map(product => product.title)

    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <div className='px-5 2xl:container 2xl:mx-auto'>
            <div className='flex flex-col lg:flex-row justify-center items-center gap-10 bg-gradient-to-l from-red-300 from-10% via-red-400 via-30% to-red-700 to-90% h-full p-5 w-full rounded-b-xl'>
                <div className='hidden lg:flex justify-end w-1/2' data-aos="fade-down">
                    <Image src={heroWeb} className='w-full h-80 object-contain object-right' alt='x'></Image>
                </div>
                <div className='text-white flex flex-col gap-4 justify-start w-full lg:w-1/2' data-aos="fade-down">
                    <h1 className="text-2xl lg:text-6xl">
                        งานพัฒนาเว็บไซต์
                    </h1>
                    <p className='text-lg lg:text-2xl font-light 2xl:pr-20'>
                        บริการพัฒนาเว็บไซต์ครบวงจร สำหรับทุกธุรกิจ ให้เว็บไซต์เป็นจุดเริ่มต้นของการสร้างตัวตนในโลกออนไลน์ ให้กับธุรกิจของคุณ
                    </p>
                </div>
            </div>
            <div className="py-5 flex items-center">
                <div className='border w-fit flex justify-start items-center gap-2 rounded-md p-2 cursor-pointer' onClick={() => setFilterDisplay(!filterDisplay)}>
                    <div>
                        {filter}
                    </div>
                    <h2>
                        Filter
                    </h2>
                    <div className={`${filterDisplay ? 'rotate-[90deg]' : ''}`}>
                        {arr}
                    </div>
                </div>
                <h2 className="border-l ml-3 pl-4 h-full py-2">
                    5 รายการ
                </h2>
            </div>
            <section className='flex flex-col lg:flex-row items-center lg:items-start gap-3 w-full h-full'>
                <BoxFilter filterDisplay={filterDisplay} type={filterProductType} filterType={filterType} setFilterType={setFilterType} />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-3 w-full">
                    {Object.values(webProducts).map(designProduct => (
                        <div className={`${filterType === designProduct.title || filterType === '-' ? '' : 'hidden'}`}>
                            <CardProductPage key={designProduct.id} {...designProduct} filterDisplay={filterDisplay} filterType={filterType} setFilterType={setFilterType} path={'web'} />
                        </div>
                    ))}
                </div>
            </section>
            <section className='py-10'>
                <h2 className='text-4xl text-center mb-10' data-aos="fade-up">
                    ภาพตัวอย่างงานออกแบบ
                </h2>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-3'>
                    {imageDesignList.map((img, index) => (
                        <div className='zoomImg rounded-xl' data-aos="fade-up">
                            <Image key={index} src={img} alt='' className='w-full h-80 object-contain'></Image>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}