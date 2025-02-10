"use client"
import Image from "next/image"
import Link from "next/link";
import { p1, p2, p3, menu, logo, qrLine, webIcon, designIcon, trophy, g1, g2, g3, g4, g5, g7 } from '../../../../public/exportImg';
import Breadcrumb from "@/components/Breadcrumb";
import { useState } from "react";
import CardProductPage from "@/components/CardProductPage";

export default function Page({ params }) {
    const [imgSrc, setImgSrc] = useState(p1)

    return (
        <div className="px-10 mt-20">
            <div className="py-5">
                <Breadcrumb
                    path2={"ออกแบบ"}
                    pathLink2={"/design"}
                    path3={"ผลงานการออกแบบ"}
                    pathLink3={""}
                    arrow={true}
                    active2={false}
                    active3={true}
                />
            </div>
            <section className="flex gap-10">
                <div className="w-1/2">
                    <Image src={imgSrc} className="w-full h-[30rem] object-cover" alt="x" />
                    <div className="grid grid-cols-5 gap-3 justify-between mt-3">
                        <Image src={p1} onClick={() => setImgSrc(p1)} className="w-full h-28 object-cover cursor-pointer" alt="x" />
                        <Image src={p2} onClick={() => setImgSrc(p2)} className="w-full h-28 object-cover cursor-pointer" alt="x" />
                        <Image src={p3} onClick={() => setImgSrc(p3)} className="w-full h-28 object-cover cursor-pointer" alt="x" />
                        <Image src={g1} onClick={() => setImgSrc(g1)} className="w-full h-28 object-cover cursor-pointer" alt="x" />
                        <Image src={g2} onClick={() => setImgSrc(g2)} className="w-full h-28 object-cover cursor-pointer" alt="x" />
                    </div>
                </div>
                <div className="w-1/2 grid gap-6 h-fit">
                    <h2 className="text-xl">
                        IPHONE-MOCKUP-034
                    </h2>
                    <h2 className="text-2xl">
                        THB 1,500.00
                    </h2>
                    <div>
                        <Link href="#" className='bg-red-600 font-bold text-white p-4 2xl:px-12 2xl:py-4 rounded-full flex gap-2 items-center hover:opacity-90 justify-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12S17.937 22.75 12 22.75c-1.856 0-3.605-.471-5.13-1.3l-4.233.787a.75.75 0 0 1-.874-.874l.788-4.233A10.7 10.7 0 0 1 1.25 12m6-2A.75.75 0 0 1 8 9.25h8a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75M8 13.25a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5z" clip-rule="evenodd"/></svg>
                            สอบถามเพิ่มเติม
                        </Link>
                    </div>
                    <div>
                        <h2 className="mb-2 text-lg">
                            Features
                        </h2>
                        <p className="text-sm text-gray-600">
                            ชินบัญชร พุทธภูมิง่าวสารขัณฑ์ สมิติเวชไมเกรนตังค์ พุทโธ สโลว์ดั๊มพ์แกรนด์กู๋ฮิ เบิร์น ละตินสต็อก โซลาร์สต็อก คำตอบเห่ยละตินเซ่นไหว้ภารตะ ไฟแนนซ์ ฮันนีมูนเซาท์ ซิตี้รวมมิตรแชมเปญศิลปากร โต๋เต๋เมี่ยงคำวอล์ค สุนทรีย์แตงโมแก๊สโซฮอล์เจ๊าะแจ๊ะวาซาบิ ซิมโฟนี่ เลิฟเมเปิลโทรปูอัด
                        </p>
                    </div>
                    <div>
                        <details data-aos="fade-up" className="mb-2">
                            <summary className="flex 2xl:text-xl font-light py-3 cursor-pointer items-center rounded-md">
                                Standard License
                                <div className="ml-auto p-1 rounded-full bg-red-400">
                                    <svg className="fill-current opacity-75 w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fill="#fff" d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z"/></svg>
                                </div>
                            </summary>
                            <div className="2xl:text-lg text-gray-600 text-sm">
                                Company Size: unlimited
                                For: Self-promotional use 
                                Applicable areas: Print, PDF, web, social Media
                                Commercial use: This license does not permit commercial profit
                                Time Period: Unlimited 
                            </div>
                        </details>
                        <details data-aos="fade-up" className="mb-2">
                            <summary className="flex 2xl:text-xl font-light py-3 cursor-pointer items-center rounded-md">
                                Standard License
                                <div className="ml-auto p-1 rounded-full bg-red-400">
                                    <svg className="fill-current opacity-75 w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fill="#fff" d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z"/></svg>
                                </div>
                            </summary>
                            <div className="2xl:text-lg text-gray-600 text-sm">
                                Company Size: unlimited
                                For: Self-promotional use 
                                Applicable areas: Print, PDF, web, social Media
                                Commercial use: This license does not permit commercial profit
                                Time Period: Unlimited 
                            </div>
                        </details>
                        <details data-aos="fade-up" className="mb-2">
                            <summary className="flex 2xl:text-xl font-light py-3 cursor-pointer items-center rounded-md">
                                Standard License
                                <div className="ml-auto p-1 rounded-full bg-red-400">
                                    <svg className="fill-current opacity-75 w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fill="#fff" d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z"/></svg>
                                </div>
                            </summary>
                            <div className="2xl:text-lg text-gray-600 text-sm">
                                Company Size: unlimited
                                For: Self-promotional use 
                                Applicable areas: Print, PDF, web, social Media
                                Commercial use: This license does not permit commercial profit
                                Time Period: Unlimited 
                            </div>
                        </details>
                    </div>
                </div>
            </section>
            <section className="my-24">
                <h2 className="mb-10 text-4xl">
                    ตัวอย่างอื่นๆ ที่คุณอาจสนใจ
                </h2>
                <div className="overflow-x-scroll w-full">
                    <div className="flex gap-3  w-fit">
                        <CardProductPage id={1} link={'#'} img={p1} title={'test'} price={'1,500'} sold={'22'} />
                        <CardProductPage id={1} link={'#'} img={p1} title={'test'} price={'1,500'} sold={'22'} />
                        <CardProductPage id={1} link={'#'} img={p1} title={'test'} price={'1,500'} sold={'22'} />
                        <CardProductPage id={1} link={'#'} img={p1} title={'test'} price={'1,500'} sold={'22'} />
                    </div>
                </div>
            </section>
        </div>
    )
}