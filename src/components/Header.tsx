import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import LogoWithName from "../public/assets/icons/logo.svg"
import Logo from "../public/assets/icons/logo-icon.svg"

const Header = ({children} : HeaderProps) => {
    return (
        <div className='header'>
            <Link href='/' className='md:flex-1'>
                <Image
                    src={LogoWithName}
                    alt="Logo with name"
                    width={120}
                    height={32}
                    className="hidden md:block"
                />
                <Image
                    src={Logo}
                    alt="Logo"
                    width={32}
                    height={32}
                    className="mr-2 md:hidden"
                />
            </Link>
            {children}
        </div>
    )
}

export default Header