import Link from "next/link"
import { useRouter } from "next/router"
import { useScrollDirection } from "@/hooks/useScrollDirection"
import { links } from "@/lib/links"

type HeaderLinkProps = {
    linkName: string
    linkPath: string
    pathname: string
}

const HeaderLink = ({ linkName, linkPath, pathname }: HeaderLinkProps) => {

    return (
        <Link href={linkPath}>
            <div className={`${pathname == linkPath ? 'text-red-600' : 'text-white'} hover:text-red-600 transition-colors ease-in-out duration-200 `} >{linkName}</div>
        </Link>
    )
}

export const Header = () => {
    const router = useRouter()
    const { pathname } = router

    const scrollDirection = useScrollDirection()
    console.log(scrollDirection)

    return (
        <div className="w-full">
            <div className='fixed w-full h-8 flex gap-8 items-center justify-center bg-black font-semibold'>
                {links.map((link) => (
                    <HeaderLink pathname={pathname} key={link.linkName} linkName={link.linkName} linkPath={link.linkPath} />
                ))}
            </div>
            <div style={scrollDirection === "down" ? { height: "0px" } : { height: "96px" }} className={`fixed w-full top-8 flex justify-center items-center bg-[#1B1B1B] transition-all`}>
                <h1 style={scrollDirection === "down" ? { opacity: "0" } : { opacity: "1" }} className='absolute text-5xl font-bold transition-opacity'>John Roberts</h1>
            </div>
        </div>
    )
}
