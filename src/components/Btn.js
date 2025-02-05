import Link from "next/link";

export default function Btn({icon, title, link}) {
    return (
        <Link href={link} className="flex gap-2 items-center justify-start rounded-full bg-white hover:opacity-90 py-2 pl-2 pr-5 w-44">
            <div>
                {icon}
            </div>
            <span className="font-bold">
                {title}
            </span>
        </Link>
    )
}