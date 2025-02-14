export default function BoxFilter({filterDisplay, type, setFilterType, filterType}) {
    const handleTypeChange = (event) => {
        setFilterType(event.target.value); 
    };

    return (
        <div className={`${filterDisplay ? 'block' : 'hidden'} w-60 2xl:w-80 grid h-fit gap-3 lg:sticky top-3 mb-3`}>
            <details className="bg-white border border-red-200 rounded-md">
                <summary className="flex cursor-pointer hover:bg-red-50 items-center py-2 px-2 focus:bg-red-200 rounded-md">
                    ประเภท
                    <div className="ml-auto p-1 rounded-full bg-red-400">
                        <svg className="fill-current opacity-75 w-3 h-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fill="#fff" d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z"/></svg>
                    </div>
                </summary>
                <div className="p-4 rounded-md 2xl:text-lg">
                    <select className="border w-full p-2 rounded-sm font-light text-sm" onChange={handleTypeChange} value={setFilterType}>
                        <option className="font-light text-sm">{filterType}</option>
                        <option className="font-light text-sm" value={'-'}> - </option>
                        {type.map((typeList, index) => (
                            <option className="font-light text-sm" value={typeList} key={index}>{typeList}</option>
                        ))}
                    </select>
                </div>
            </details>
            <details className="bg-white border border-red-200 rounded-md hidden">
                <summary className="flex font-light cursor-pointer hover:bg-red-50 items-center py-2 px-2 focus:bg-red-200 rounded-md">
                    ตัวเลือก
                    <div className="ml-auto p-1 rounded-full bg-red-400">
                        <svg className="fill-current opacity-75 w-3 h-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fill="#fff" d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z"/></svg>
                    </div>
                </summary>
                <div className="p-4 grid gap-1 text-sm">
                    <div className="flex gap-2 items-center">
                        <input name="c1" type="radio" id="c0" onChange={() => setDisplay(allColor)} className="accent-gray-500" />
                        <label for="c0" className="cursor-pointer">ทั้งหมด</label>
                    </div>
                    <div className="flex gap-2 items-center ">
                        <input name="c1" type="radio" onChange={() => setDisplay(allColor[0])} id="c1" className="accent-gray-500" />
                        <label for="c1" className="cursor-pointer">สีส้ม</label>
                    </div>
                    <div className="flex gap-2 items-center ">
                        <input name="c1" type="radio" onChange={() => setDisplay(allColor[1])} id="c2" className="accent-gray-500" />
                        <label for="c2" className="cursor-pointer">สีดำ</label>
                    </div>
                    <div className="flex gap-2 items-center ">
                        <input name="c1" type="radio" onChange={() => setDisplay(allColor[2])} id="c3" className="accent-gray-500" />
                        <label for="c3" className="cursor-pointer">สีขาว</label>
                    </div>
                </div>
            </details>
            <details className="bg-white border border-red-200 rounded-md hidden">
                <summary className="flex font-light cursor-pointer hover:bg-red-50 items-center py-2 px-2 focus:bg-red-200 rounded-md">
                    ขนาด
                    <div className="ml-auto p-1 rounded-full bg-red-400">
                        <svg className="fill-current opacity-75 w-3 h-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fill="#fff" d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z"/></svg>
                    </div>
                </summary>
                <div className="p-4 grid grid-cols-3">
                    <button className="active:bg-slate-800 p-2 text-sm active:text-white border">S</button>
                    <button className="active:bg-slate-800 p-2 text-sm active:text-white border-y border-r">M</button>
                    <button className="active:bg-slate-800 p-2 text-sm active:text-white border-y border-r">L</button>
                    <button className="active:bg-slate-800 p-2 text-sm active:text-white border-x border-b">XL</button>
                    <button className="active:bg-slate-800 p-2 text-sm active:text-white border-r border-b">MD</button>
                    <button className="active:bg-slate-800 p-2 text-sm active:text-white border-r border-b">XXL</button>
                </div>
            </details>
            <details className="bg-white border border-red-200 rounded-md hidden">
                <summary className="flex font-light cursor-pointer hover:bg-red-50 items-center py-2 px-2 focus:bg-red-200 rounded-md">
                    สี
                    <div className="ml-auto p-1 rounded-full bg-red-400">
                        <svg className="fill-current opacity-75 w-3 h-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fill="#fff" d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z"/></svg>
                    </div>
                </summary>
                <div className="p-4 grid grid-cols-6 gap-4">
                    <button className="p-2 w-1 h-1 rounded-full cursor-pointer bg-black hover:bg-gray-500"></button>
                    <button className="p-2 w-1 h-1 rounded-full cursor-pointer bg-red-500 hover:bg-red-400"></button>
                    <button className="p-2 w-1 h-1 rounded-full cursor-pointer bg-blue-500 hover:bg-blue-400"></button>
                    <button className="p-2 w-1 h-1 rounded-full cursor-pointer bg-yellow-500 hover:bg-yellow-400"></button>
                    <button className="p-2 w-1 h-1 rounded-full cursor-pointer bg-green-500 hover:bg-green-400"></button>
                    <button className="p-2 w-1 h-1 rounded-full cursor-pointer bg-rose-500 hover:bg-rose-400"></button>
                    <button className="p-2 w-1 h-1 rounded-full cursor-pointer bg-fuchsia-500 hover:bg-fuchsia-400"></button>
                    <button className="p-2 w-1 h-1 rounded-full cursor-pointer bg-indigo-500 hover:bg-indigo-400"></button>
                </div>
            </details>
        </div>
    )
}