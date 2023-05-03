import Link from "next/link"
import { useRouter } from "next/router"

import { links } from "@/lib/links"

type HeaderLinkProps = {
    linkName: string
    linkPath: string
    pathname: string
}

const HeaderLink = ({ linkName, linkPath, pathname }: HeaderLinkProps) => {

    return (
        <Link href={linkPath}>
            <div className={`${pathname == linkPath ? 'text-red-600' : 'text-white'} hover:text-red-600  transition-all ease-in-out duration-200`} >{linkName}</div>
        </Link>
    )
}

export const Header = () => {
    const router = useRouter()
    const { pathname } = router


    return (
        <div className="w-full ">

            <div className='w-full h-16 flex justify-start items-center bg-[#1B1B1B] transition-all'>
                <h1 className='pl-4 text-5xl font-bold '>John Roberts</h1>
            </div>
            <div className=' w-full h-8 flex gap-8 items-center justify-end bg-black font-semibold pr-4'>
                {links.map((link) => (
                    <HeaderLink pathname={pathname} key={link.linkName} linkName={link.linkName} linkPath={link.linkPath} />
                ))}
            </div>
        </div>
    )
}
