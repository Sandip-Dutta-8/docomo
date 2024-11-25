import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Logo from "../public/assets/icons/logo-icon.svg"
import { cn } from '@/lib/utils'

const Header = ({children, className} : HeaderProps) => {
    return (
        <div className={cn("header", className)}>
            <Link href='/' className='flex items-center'>
                <Image
                    src={Logo}
                    alt="Logo"
                    width={32}
                    height={32}
                    className="mr-2"
                />
                <p className='text-xl font-bold'>Docomo</p>
            </Link>
            {children}
        </div>
    )
}

export default Header