import Image from "next/image"

export default function CardDesignProduct({ title, detail, icon, component }) {
    return (
        <div className='border rounded-xl p-2 bg-white'>
            <div className="flex gap-5 p-8">
                <div className="p-3 rounded-full bg-red-100 h-fit">
                    {icon}
                </div>
                <div className="flex justify-start items-start text-start flex-col gap-2">
                    <h2 className='text-2xl 2xl:text-4xl'>
                        {title}
                    </h2>
                    <p className="2xl:text-lg">
                        {detail}
                    </p>
                </div>
            </div>
            <div className='rounded-xl border h-[30rem]'>
                {component}
            </div>
        </div>
    )
}