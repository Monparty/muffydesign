"use client"
import CardProductPage from '@/components/CardProductPage';
import { useState } from 'react';
import { p1, p2, p3, menu, logo, qrLine, webIcon, designIcon, trophy, g1, g2, g3, g4, g5, g7 } from '../../../public/exportImg';
import BoxFilter from '@/components/BoxFilter';

export default function Page() {
    const filter = <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="#000" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="1.5" d="M21.25 12H8.895m-4.361 0H2.75m18.5 6.607h-5.748m-4.361 0H2.75m18.5-13.214h-3.105m-4.361 0H2.75m13.214 2.18a2.18 2.18 0 1 0 0-4.36a2.18 2.18 0 0 0 0 4.36Zm-9.25 6.607a2.18 2.18 0 1 0 0-4.36a2.18 2.18 0 0 0 0 4.36Zm6.607 6.608a2.18 2.18 0 1 0 0-4.361a2.18 2.18 0 0 0 0 4.36Z"/></svg>
    const arr = <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="#000" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="m10 17l5-5m0 0l-5-5"/></svg>

    const [filterDisplay, setFilterDisplay] = useState(false)

    return (
        <div className='px-10'>
            <h1 className="flex mt-20 text-6xl justify-center items-center h-40">
                Design
            </h1>
            <div className="py-5 flex items-center">
                <div className='border w-fit flex justify-start items-center gap-2 rounded-md p-2 cursor-pointer' onClick={() => setFilterDisplay(!filterDisplay)}>
                    <div>
                        {filter}
                        
                    </div>
                    <h2>
                        Filter
                    </h2>
                    <div className={`${filterDisplay ? 'rotate-[90deg]' : ''} `}>
                        {arr}
                    </div>
                </div>
                <h2 className="border-l ml-3 pl-4 h-full py-2">
                    28 รายการ
                </h2>
            </div>
            <section className='flex gap-3 h-full'>
                <BoxFilter filterDisplay={filterDisplay} />
                <div className="grid grid-cols-3 gap-3">
                    <CardProductPage id={1} link={'#'} img={p1} title={'test'} price={'1,500'} sold={'22'} filterDisplay={filterDisplay} />
                    <CardProductPage id={1} link={'#'} img={p1} title={'test'} price={'1,500'} sold={'22'} filterDisplay={filterDisplay} />
                    <CardProductPage id={1} link={'#'} img={p1} title={'test'} price={'1,500'} sold={'22'} filterDisplay={filterDisplay} />
                    <CardProductPage id={1} link={'#'} img={p1} title={'test'} price={'1,500'} sold={'22'} filterDisplay={filterDisplay} />
                    <CardProductPage id={1} link={'#'} img={p1} title={'test'} price={'1,500'} sold={'22'} filterDisplay={filterDisplay} />
                </div>
            </section>
        </div>
    )
}