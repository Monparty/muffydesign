import Link from "next/link";

export default function Btn({icon, title, link, target}) {
    return (
        <Link href={link} target={target} className="flex gap-2 items-center w-44 justify-start rounded-full bg-white hover:opacity-90 py-2 pl-2 pr-5">
            <div>
                {icon}
            </div>
            <span className="font-bold">
                {title}
            </span>
        </Link>
    )
}