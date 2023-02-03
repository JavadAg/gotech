import React from 'react'
import logo from '@/assets/images/logo.svg'
import footer_bg from '@/assets/images/footer-bg.svg'
import instagram_logo from '@/assets/images/instagram.svg'
import skype_logo from '@/assets/images/skype.svg'
import linkedin_logo from '@/assets/images/linkedin.svg'
import facebook_logo from '@/assets/images/facebook.svg'
import mail_icon from '@/assets/images/mail.svg'
import text_icon from '@/assets/images/text.svg'
import Image from 'next/image'
import Link from 'next/link'

const Footer: React.FC = () => {
  return (
    <footer className='relative flex flex-col items-center justify-between w-full mt-24 max-w-[100rem]'>
      <Image
        className='select-none'
        draggable={false}
        src={logo}
        alt='logo'
      />
      <div className='grid grid-cols-4 w-full px-[15.6875rem] pt-[4.375rem] ml-14'>
        <div className='col-span-1 flex flex-col gap-[1.4375rem]'>
          <span className='text-[.9375rem] font-medium text-darkblue'>
            Contact Us
          </span>
          <div className='text-[.8125rem] grid place-items-start gap-[1rem]'>
            <div className='flex items-center justify-center gap-[28px]'>
              <Image
                className='select-none'
                draggable={false}
                src={text_icon}
                alt='tel_icon'
              />
              <span className='text-black-2'>+(290) 520-7927</span>
            </div>
            <div className='flex items-center justify-center gap-[1.75rem]'>
              <Image
                className='select-none'
                draggable={false}
                src={text_icon}
                alt='tel_icon'
              />
              <span className='text-black-2'>Dhaka,Bangladesh</span>
            </div>
            <div className='flex items-center justify-center gap-[1.25rem]'>
              <Image
                className='select-none'
                draggable={false}
                src={mail_icon}
                alt='mail_icon'
              />
              <span className='text-black-2'>themefisher.com</span>
            </div>
          </div>
        </div>
        <div className='col-[2/2] ml-10 flex flex-col gap-[1.4375rem]'>
          <span className='text-[.9375rem] font-medium text-darkblue'>
            Our Company
          </span>
          <div className='text-[.8125rem] grid gap-[1rem] text-black-2'>
            <Link href='/about'>About</Link>
            <Link href='/product'>Product</Link>
            <Link href='/portfolio'>Portfolio</Link>
            <Link href='/career'>Career</Link>
            <Link href='/blog'>Blog</Link>
          </div>
        </div>
        <div className='col-[3/3] flex flex-col gap-[1.4375rem]'>
          <span className='text-[.9375rem] font-medium text-darkblue'>
            Social Contacts
          </span>
          <div className='text-[.8125rem] grid gap-[1rem] text-black-2'>
            <Link href='/facebook'>Facebook</Link>
            <Link href='/linkedin'>Linkedin</Link>
            <Link href='/youtube'>Youtube</Link>
            <Link href='/vimeo'>Vimeo</Link>
            <Link href='/skype'>Skype</Link>
          </div>
        </div>
        <div className='col-[4/4] flex flex-col gap-[1.4375rem]'>
          <span className='text-[.9375rem] font-medium text-darkblue'>
            Address
          </span>
          <div className='text-[.8125rem] grid'>
            <p className='max-w-[15.5rem] text-black-2'>
              Internet Systems Consortium, Inc. 950 Charter Street Redwood City,
              CA USA.
            </p>
            <div className='grid'>
              <span className='pt-[1.3125rem] pb-[.875rem] text-[.9375rem] font-medium'>
                Follow Us
              </span>
              <div className='flex gap-[1.25rem]'>
                <Link href='/facebook'>
                  <Image
                    className='select-none'
                    draggable={false}
                    src={facebook_logo}
                    alt='logo'
                  />
                </Link>
                <Link href='/skype'>
                  <Image
                    className='select-none'
                    draggable={false}
                    src={skype_logo}
                    alt='logo'
                  />
                </Link>
                <Link href='/linkedin'>
                  <Image
                    className='select-none'
                    draggable={false}
                    src={linkedin_logo}
                    alt='logo'
                  />
                </Link>
                <Link href='/instagram'>
                  <Image
                    className='select-none'
                    draggable={false}
                    src={instagram_logo}
                    alt='logo'
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <span className='absolute bottom-[9rem] text-xs text-black-1'>
        Copyright@themefisher2020
      </span>
      <Image
        draggable={false}
        src={footer_bg}
        alt='footer_bg'
        className='bottom-0 w-full h-full select-none -z-10'
      />
    </footer>
  )
}

export default Footer
