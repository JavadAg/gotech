import React from 'react'
import about_bg from '@/assets/images/about-bg.svg'
import about2_bg from '@/assets/images/about2-bg.svg'
import Image from 'next/image'
import Heading from '../Ui/Heading'
import { Button } from '../Ui/Button'
import Link from 'next/link'

const About: React.FC = () => {
  return (
    <section className='flex items-center justify-center w-full px-[13.4375rem] flex-col pt-[10.5rem]'>
      <div className='flex items-center justify-center w-full'>
        <div className='w-2/4'>
          <Heading
            level={2}
            variant='font-normal'
            className='leading-[2.875rem] text-black-5'
          >
            The Process <br />
            <span className='font-semibold'>About Our Work</span>
          </Heading>
          <p className='text-[.9375rem] leading-[1.6875rem] text-black-4 mt-[1.5625rem] max-w-[30.375rem]'>
            Lorem ipsum dolor sit amet, vel accumsan liberavisse ex, ea nec
            elaboraret interpretaris, sed diceret concludaturque ndo. Verear
            habemus sea ut. His nibh scripta in. In sea vocibus facilisis. Sed
          </p>
          <p className='text-[.9375rem] leading-[1.6875rem] text-black-4 mt-[1.25rem] max-w-[30.0625rem]'>
            vel cu paulo doctus vidisse. Iudico dicant nostrum nec an, in eos In
            detraxit eleifend duo, alterum iudicabit consectetuer per ad.
          </p>
          <Link href='/about'>
            <Button
              variant='primary'
              className='w-[9.0625rem] h-[3rem] font-medium text-[.9375rem] mt-[1.5625rem] rounded-md'
            >
              Know More
            </Button>
          </Link>
        </div>
        <div>
          <Image
            className='select-none'
            draggable={false}
            src={about_bg}
            alt='about_bg'
          />
        </div>
      </div>
      <div className='flex items-center justify-between w-full mt-[6.875rem]'>
        <div>
          <Image
            className='select-none'
            draggable={false}
            src={about2_bg}
            alt='about_bg'
          />
        </div>
        <div className='w-2/4 max-w-[27.75rem]'>
          <Heading
            level={2}
            variant='font-normal'
            className='leading-[2.875rem] text-black-5'
          >
            We are here to
            <br />
            <span className='font-semibold'>always help </span>
            you
          </Heading>
          <p className='text-[.9375rem] leading-[1.6875rem] text-black-4 mt-[1.5625rem] max-w-[30.375rem]'>
            Lorem ipsum dolor sit amet, vel accumsan liberavisse ex, a
            elaboraret interpretaris, sed diceret concludaturque nasdo habemus
            sea ut. His nibh scripta in. In sea vocibus facilisis.
          </p>
          <p className='text-[.9375rem] leading-[1.6875rem] text-black-4 mt-[1.25rem] max-w-[30.0625rem]'>
            vel cu paulo doctus vidsse. Iudico dicant nostrum nec aIn detraxit
            eleifend duo, alterum iudicabit consectetuer per.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
