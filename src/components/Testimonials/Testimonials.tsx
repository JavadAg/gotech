'use client'

import React, { useCallback, useEffect, useState } from 'react'
import quoteLeft from '@/assets/images/quote-left.svg'
import quoteRight from '@/assets/images/quote-right.svg'
import person from '@/assets/images/person.png'
import personLeft1 from '@/assets/images/person-left1.png'
import personLeft2 from '@/assets/images/person-left2.png'
import personLeft3 from '@/assets/images/person-left3.png'
import personRight1 from '@/assets/images/person-right1.png'
import personRight2 from '@/assets/images/person-right2.png'
import personRight3 from '@/assets/images/person-right3.png'
import Heading from '../Ui/Heading'
import Image from 'next/image'
import { Button } from '../Ui/Button'
import useEmblaCarousel from 'embla-carousel-react'

const Testimonials: React.FC = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ slidesToScroll: 1 })
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false)
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false)

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  )
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  )

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setPrevBtnEnabled(emblaApi.canScrollPrev())
    setNextBtnEnabled(emblaApi.canScrollNext())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on('select', onSelect)
    emblaApi.on('reInit', onSelect)
  }, [emblaApi, onSelect])

  return (
    <section className='flex items-start justify-between w-full max-w-[84.375rem] mt-[6.875rem]'>
      <div className='flex flex-col items-start self-stretch pt-[5.0625rem] justify-between'>
        <Image
          draggable={false}
          src={personLeft2}
          alt='person'
          className='ml-[8.6875rem] select-none'
        />
        <Image
          draggable={false}
          src={personLeft3}
          alt='person'
          className='select-none'
        />
        <Image
          draggable={false}
          src={personLeft1}
          alt='person'
          className='ml-[6.6875rem] select-none'
        />
      </div>
      <div className='flex items-start justify-center gap-[2.5rem]'>
        <Image
          draggable={false}
          src={quoteLeft}
          alt='quoteleft'
          className='self-center select-none'
        />
        <div className='flex flex-col items-center justify-start text-center'>
          <Heading
            level={2}
            className='leading-[2.875rem] text-black-5'
          >
            What Our <span className='font-semibold'>Client Says?</span>
          </Heading>
          <div
            className='flex flex-col items-center justify-start overflow-hidden text-center'
            ref={emblaRef}
          >
            <div
              className='flex flex-col items-center justify-start overflow-hidden text-center'
              ref={emblaRef}
            >
              <Image
                draggable={false}
                src={person}
                alt='person'
                className='pt-[2.8125rem] select-none'
              />
              <div className='flex items-center justify-center'>
                <div className='flex flex-col items-center justify-center'>
                  <p className='max-w-[33.25rem] pb-[2.0625rem] pt-[1.4375rem] text-2xl text-center leading-[2.125rem] tracking-[.03rem] text-[#333333]'>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore dolore magna
                  </p>
                  <span className='pb-[1.125rem] text-base font-medium tracking-[.03rem] text-black-5'>
                    Rubiya Mond De-Patrica
                  </span>
                  <span className='text-sm pb-[2.1875rem] tracking-[.03rem] text-black-5'>
                    CEO, Zexbay-Fine
                  </span>
                  <div className='flex max-w-[5.625rem] justify-between w-full items-center pb-[2.75rem]'>
                    <Button
                      onClick={scrollPrev}
                      disabled={!prevBtnEnabled}
                      className='flex items-center justify-start cursor-pointer w-max touch-manipulation'
                    >
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='14.707'
                        height='14.707'
                        viewBox='0 0 14.707 14.707'
                      >
                        <path
                          id='arrow-left'
                          d='M16,8.972H3.207l6.146,6.146-.707.707L1.293,8.472,8.647,1.118l.707.707L3.207,7.972H16Z'
                          transform='translate(-1.293 -1.118)'
                        />
                      </svg>
                    </Button>
                    <Button
                      onClick={scrollNext}
                      disabled={!nextBtnEnabled}
                      className='flex items-center justify-end cursor-pointer w-max touch-manipulation'
                    >
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='14.707'
                        height='14.708'
                        viewBox='0 0 14.707 14.708'
                      >
                        <path
                          id='arrow-right'
                          d='M15.707,8.472,8.353,15.826l-.707-.707,6.146-6.146H1v-1H13.793L7.646,1.825l.707-.707,7.354,7.354Z'
                          transform='translate(-1 -1.118)'
                        />
                      </svg>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Image
          draggable={false}
          src={quoteRight}
          alt='quoteright'
          className='self-center select-none'
        />
      </div>
      <div className='flex flex-col items-end self-stretch pt-[5.0625rem] justify-between'>
        <Image
          draggable={false}
          src={personRight1}
          alt='person'
          className='mr-[9.0625rem] select-none'
        />
        <Image
          draggable={false}
          className='select-none'
          src={personRight2}
          alt='person'
        />
        <Image
          draggable={false}
          src={personRight3}
          alt='person'
          className='mr-[7.562rem] select-none'
        />
      </div>
    </section>
  )
}

export default Testimonials
