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
            <div className={`${pathname == linkPath ? 'text-red-600' : 'text-white'} hover:text-red-600 transition-colors ease-in-out`} >{linkName}</div>
        </Link>
    )
}

export const Header = () => {
    const router = useRouter()
    const { pathname } = router

    return (
        <div className="w-full h-8 flex gap-8 items-center justify-center bg-black font-semibold">
            {links.map((link) => (
                <HeaderLink pathname={pathname} key={link.linkName} linkName={link.linkName} linkPath={link.linkPath} />
            ))}
        </div>
    )
}
