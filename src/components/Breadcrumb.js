import Link from "next/link"

const icon = <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 12 24"><defs><path id="weuiArrowOutlined0" fill="#000" d="m7.588 12.43l-1.061 1.06L.748 7.713a.996.996 0 0 1 0-1.413L6.527.52l1.06 1.06l-5.424 5.425z"/></defs><use fill-rule="evenodd" href="#weuiArrowOutlined0" transform="rotate(-180 5.02 9.505)"/></svg>

export default function Breadcrumb({ path2, pathLink2, path3, pathLink3, arrow, active2, active3 }) {
    return (
        <div className='flex gap-2 items-center text-sm font-light 2xl:text-lg'>
            <Link href={'/'} className="hover:opacity-70">หน้าแรก</Link>
            <div>{icon}</div>
            <Link href={pathLink2} className={`${active2 ? 'text-red-600' : ''} hover:opacity-70`}>{path2}</Link>
            <div className={`${arrow ? 'block' : 'hidden'}`}>{icon}</div>
            <Link href={pathLink3} className={`${active3 ? 'text-red-600' : ''} hover:opacity-70`}>{path3}</Link>
        </div>
    )
}