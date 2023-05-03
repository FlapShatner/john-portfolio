import { links } from "@/lib/links"
import Link from "next/link"

export type MenuProps = {
    show: boolean
    setShow: React.Dispatch<React.SetStateAction<boolean>>
}

const Menu = ({ show, setShow }: MenuProps) => {
    return (
        <div className={`absolute grad text-white top-0 left-0 h-full w-full flex justify-center items-start transition-all ${show ? "translate-x-0" : "translate-x-full"}`}>
            <div className="flex flex-col gap-8 text-3xl font-semibold pt-40">
                {links.map((link) =>
                    <Link key={link.linkName} href={link.linkPath}>
                        <div onClick={() => setShow(!show)}>{link.linkName}</div>
                    </Link>
                )}
            </div>
        </div>
    )
}

export default Menu