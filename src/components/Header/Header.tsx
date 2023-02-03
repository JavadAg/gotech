'use client'

import Link from 'next/link'
import React, { useState } from 'react'
import logo from '@/assets/images/logo.svg'
import Image from 'next/image'
import { Button } from '../Ui/Button'
import search from '@/assets/images/search.svg'
import Input from '../Ui/Input'
import cn from 'clsx'
import { usePathname, useRouter } from 'next/navigation'

const Header: React.FC = () => {
  const [searchValue, setSearchValue] = useState('')
  const router = useRouter()
  const nav_links = [
    {
      name: 'Home',
      href: '/'
    },
    {
      name: 'About',
      href: '/about'
    },
    {
      name: 'Portfolio',
      href: '/portfolio'
    },
    {
      name: 'Product',
      href: '/product'
    },
    {
      name: 'Career',
      href: '/career'
    },
    {
      name: 'Blog',
      href: '/blog'
    }
  ]

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // handle search here
    router.push(`/${searchValue}`)
  }

  const pathname = usePathname()

  return (
    <header className='items-center justify-between max-w-[100rem] flex w-full mt-10 px-[13.4375rem]'>
      <Image
        className='select-none'
        draggable={false}
        alt='logo'
        src={logo}
      />
      <div className='flex items-center justify-end gap-[2.1875rem] flex-1'>
        <nav className='flex gap-[2.1875rem]'>
          {nav_links.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className={cn(
                'text-sm text-black-4 relative items-center justify-center flex',
                pathname === link.href &&
                  "text-purple-2 after:content-[''] after:w-2 after:h-2 after:bg-gradient-primary after:absolute after:block after:rounded-full after:-bottom-[10px]"
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>
        <form
          onSubmit={(e) => handleSubmit(e)}
          className='flex items-center justify-center max-w-[16.875rem] w-full relative px-[1.0625rem] border border-purple-1 rounded-[.25rem]'
        >
          <Input
            onChange={(e) => setSearchValue(e.target.value)}
            type='search'
            placeholder='Search Here'
            inputClass=''
            className='h-[2.625rem] bg-white placeholder:text-xs placeholder:text-gray-1 flex justify-center items-center outline-none text-xs w-full'
          />
          <button
            type='submit'
            className='absolute right-[1.225rem]'
          >
            <Image
              className='select-none'
              draggable={false}
              src={search}
              alt='search_icon'
            />
          </button>
        </form>
        <Link href={'/about'}>
          <Button
            variant='primary'
            className='w-[8.1875rem] min-w-[8.1875rem] h-[2.625rem] text-sm font-medium rounded-md'
          >
            Contact Us
          </Button>
        </Link>
      </div>
    </header>
  )
}

export default Header
