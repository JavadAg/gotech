'use client'

import React from 'react'
import hero_bg from '@/assets/images/hero-bg.svg'
import Image from 'next/image'
import { Button } from '../Ui/Button'
import Heading from '../Ui/Heading'
import Link from 'next/link'

const Hero: React.FC = () => {
  return (
    <section className='relative grid w-full grid-cols-2 grid-rows-2 place-items-start justify-items-center pt-[2.3125rem]'>
      <Image
        draggable={false}
        className='w-full col-[1/-1] row-[1/-1] -z-10 select-none'
        src={hero_bg}
        alt='hero_bg'
      />
      <div className='max-w-[39.5rem] w-full flex justify-center items-center text-center flex-col row-[1/1] col-[1/-1] pt-[.5188rem]'>
        <Heading
          variant='font-semibold'
          className='text-black-5 leading-[3.625rem]'
          level={1}
        >
          We Create Simple Solution
          <span className='font-normal'> For Your Complex Task</span>
        </Heading>

        <p className='max-w-[33.25rem] text-sm text-black-4 mt-[1.25rem] mb-[2.1875rem] leading-[1.5625rem]'>
          Lorem ipsum dolor sit amet, vel accumsan liberavisse ex, ea nec
          elaboraret interpretaris, sed diceret concludaturque no. Verear
          habemus sea ut
        </p>
        <div className='flex items-center justify-center gap-9'>
          <Link href={'/works'}>
            <Button
              variant='primary'
              className='w-[8.75rem] h-[3rem] text-[.9375rem] font-medium rounded-md'
            >
              Our Works
            </Button>
          </Link>
          <Link href={'/about'}>
            <Button
              className='w-[8.75rem] h-[3rem] text-[.9375rem] font-medium rounded-md'
              variant='outlined'
            >
              Know More
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Hero
