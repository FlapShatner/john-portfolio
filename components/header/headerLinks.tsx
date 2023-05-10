import { useRouter } from 'next/router'
import { links } from '@/lib/links'
import Link from 'next/link'

type HeaderLinkProps = {
  linkName: string
  linkPath: string
  pathname: string
}

const HeaderLink = ({ linkName, linkPath, pathname }: HeaderLinkProps) => {
  return (
    <Link href={linkPath}>
      <div className={`${pathname == linkPath ? 'text-red-500' : 'text-[var(--fg)]'} hover:text-red-500  transition-all ease-in-out duration-200 `}>
        {linkName}
      </div>
    </Link>
  )
}

export const HeaderLinks = () => {
  const router = useRouter()
  const { pathname } = router

  return (
    <div className={`hidden sm:flex sticky top-0 z-20 w-full h-8 gap-7 items-center justify-center bg-black font-semibold pr-4 md:justify-end `}>
      {links.map((link) => (
        <HeaderLink pathname={pathname} key={link.linkName} linkName={link.linkName} linkPath={link.linkPath} />
      ))}
    </div>
  )
}
