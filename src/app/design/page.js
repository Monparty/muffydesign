"use client"
import { useState } from 'react';
import {
    heroDesignImg, card1, card2, card3, card4, card5, card6, card7, logo1, logo2, logo3, logo4, logo5, logo6, print1, print2, print3, print4, print5, print6, print7, print8, print9, print10, print11, print12, print13, print14, print15, print16, print17, print18, print19, print20, print21, print22, rubber1, rubber2, rubber3, rubber4, rubber5, rubber6, rubber7, rubber8, stk1, stk2, stk3, stk4, stk5, stk6, stk7, stk8, stk9, stk10
} from '../../../public/exportImg';
import { designProducts } from '../../data/data';
import BoxFilter from '@/components/BoxFilter';
import CardProductPage from '@/components/CardProductPage';
import Image from 'next/image';

const imageDesignList = [card1, card2, card3, card4, card5, card6, card7, logo1, logo2, logo3, logo4, logo5, logo6, print1, print2, print3, print4, print5, print6, print7, print8, print9, print10, print11, print12, print13, print14, print15, print16, print17, print18, print19, print20, print21, print22, rubber1, rubber2, rubber3, rubber4, rubber5, rubber6, rubber7, rubber8, stk1, stk2, stk3, stk4, stk5, stk6, stk7, stk8, stk9, stk10]

export default function Page() {
    const filter = <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="#000" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="1.5" d="M21.25 12H8.895m-4.361 0H2.75m18.5 6.607h-5.748m-4.361 0H2.75m18.5-13.214h-3.105m-4.361 0H2.75m13.214 2.18a2.18 2.18 0 1 0 0-4.36a2.18 2.18 0 0 0 0 4.36Zm-9.25 6.607a2.18 2.18 0 1 0 0-4.36a2.18 2.18 0 0 0 0 4.36Zm6.607 6.608a2.18 2.18 0 1 0 0-4.361a2.18 2.18 0 0 0 0 4.36Z"/></svg>
    const arr = <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="#000" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="m10 17l5-5m0 0l-5-5"/></svg>
    const [filterDisplay, setFilterDisplay] = useState(false)
    const [filterType, setFilterType] = useState('-')
    const filterProductType = designProducts.map(product => product.title)

    return (
        <div className='px-5 2xl:container 2xl:mx-auto'>
            <div className='flex flex-col lg:flex-row justify-center items-center gap-10 bg-gradient-to-r from-red-300 from-10% via-red-400 via-30% to-red-700 to-90% h-full p-5 w-full rounded-b-xl'>
                <div className='hidden lg:flex justify-end w-1/2'>
                    <Image src={heroDesignImg} className='w-4/5 h-4/5' alt=''></Image>
                </div>
                <div className='text-white flex flex-col gap-4 justify-start w-full lg:w-1/2 pr-20'>
                    <h1 className="text-2xl lg:text-6xl">
                        งานออกแบบกราฟิก
                    </h1>
                    <p className='text-lg lg:text-2xl font-light'>
                        ไม่มีสิ่งใดที่สำคัญกว่าการสร้างผลงานที่ตรงกับแนวคิด<br />และความต้องการของลูกค้า เราเข้าใจว่าการออกแบบต้องถูกใจลูกค้า
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
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-3">
                    {Object.values(designProducts).map(designProduct => (
                        <div className={`${filterType === designProduct.title || filterType === '-' ? '' : 'hidden'}`}>
                            <CardProductPage key={designProduct.id} {...designProduct} filterDisplay={filterDisplay} filterType={filterType} setFilterType={setFilterType} />
                        </div>
                    ))}
                </div>
            </section>
            <section className='py-10'>
                <h2 className='text-4xl text-center mb-10'>ภาพตัวอย่างงานออกแบบ</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-3'>
                    {imageDesignList.map((img, index) => (
                        <div className='zoomImg rounded-xl'>
                            <Image key={index} src={img} alt='' className='w-full h-80 object-cover'></Image>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}