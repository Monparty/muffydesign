"use client"
import Image from "next/image"
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import { useState } from "react";
import CardProductPage from "@/components/CardProductPage";
import { webProducts } from '../../../data/data';

export default function Page({ params }) {

    const product = webProducts.find((item) => item.id.toString() === params.id);
    const [imgSrc, setImgSrc] = useState(product.img)
    const filterProduct = webProducts.filter(item => item.id !== product.id)    

    if (!product) {
        return <div>Product not found</div>;
    }
    
    return (
        <div className="px-5 2xl:container 2xl:mx-auto mt-20">
            <div className="py-5">
                <Breadcrumb
                    path2={"ออกแบบ"}
                    pathLink2={"/web"}
                    path3={"รายละเอียดแพ็คเกจ"}
                    pathLink3={""}
                    arrow={true}
                    active2={false}
                    active3={true}
                />
            </div>
            <section className="flex flex-col lg:flex-row gap-10">
                <div className="w-full lg:w-1/2">
                    <Image src={imgSrc} className="w-full h-[30rem] object-cover" alt="x" />
                    <div className="grid grid-cols-5 gap-3 justify-between mt-3">
                        {product.imgList.map((img, index) => (
                        <Image key={index} src={img} onClick={() => setImgSrc(img)} className="w-full h-28 object-contain cursor-pointer hover:opacity-70" alt="x" />
                        ))}
                    </div>
                </div>
                <div className="w-full lg:w-1/2 grid gap-6 h-fit">
                    <h2 className="text-4xl">
                        {product.title}
                    </h2>
                    <h2 className="text-2xl">
                        THB {product.price} <span className="text-red-500 mr-2">(ราคาเริ่มต้น)</span>
                    </h2>
                    <div>
                        <Link href='https://line.me/ti/p/%40388rnahg' target='_blank' className='bg-red-600 font-bold text-white p-4 2xl:px-12 2xl:py-4 rounded-full flex gap-2 items-center hover:opacity-90 justify-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12S17.937 22.75 12 22.75c-1.856 0-3.605-.471-5.13-1.3l-4.233.787a.75.75 0 0 1-.874-.874l.788-4.233A10.7 10.7 0 0 1 1.25 12m6-2A.75.75 0 0 1 8 9.25h8a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75M8 13.25a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5z" clip-rule="evenodd"/></svg>
                            สอบถามเพิ่มเติม
                        </Link>
                    </div>
                    <div>
                        <h2 className="mb-2 text-lg 2xl:text-xl">
                            ขั้นตอนการทำงาน
                        </h2>
                        <div className="text-sm 2xl:text-lg text-gray-600 pl-2">
                            {product.detail}
                            <ul>
                                {product.detailList.map((detail, index) => (
                                    <li key={index}>{index + 1}. {detail}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div>
                        <details className="mb-2">
                            <summary className="flex 2xl:text-xl font-light py-3 cursor-pointer items-center border-b">
                                ข้อมูลเพิ่มเติม
                                <div className="ml-auto p-1 rounded-full bg-red-400">
                                    <svg className="fill-current opacity-75 w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fill="#fff" d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z"/></svg>
                                </div>
                            </summary>
                            <div className="2xl:text-lg text-gray-600 text-sm py-3 pl-2">
                                {product.additional}
                            </div>
                        </details>
                    </div>
                </div>
            </section>
            <section className="pb-20">
                <h2 className="mb-10 text-3xl">
                    ผลงานอื่นๆ ที่คุณอาจสนใจ
                </h2>
                <div className="overflow-x-scroll w-full">
                    <div className="flex gap-3 w-fit">
                        {Object.values(filterProduct).map(product => (
                            <CardProductPage key={product.id} {...product} />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}