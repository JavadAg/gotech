'use client'

import slider1 from '@/assets/images/slider1.png'
import slider2 from '@/assets/images/slider2.png'
import slider3 from '@/assets/images/slider3.png'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'
import React, { useCallback, useEffect, useState } from 'react'
import Heading from '../Ui/Heading'
import { Button } from '../Ui/Button'

const sliderItems = [
  {
    id: '1',
    img: slider1,
    title: 'Quick ',
    title_bold: 'Response',
    body: 'Lorem ipsum dolor sit amet, vel accumsan liberavisse ex, ea nec concludaturque ndo. Verear'
  },
  {
    id: '2',
    img: slider2,
    title: 'Great ',
    title_bold: 'Communication',
    body: 'Lorem ipsum dolor sit amet, vel accumsan liberavisse ex, ea nec concludaturque ndo. Verear'
  },
  {
    id: '3',
    img: slider3,
    title: 'Customer ',
    title_bold: 'Satisfaction',
    body: 'Lorem ipsum dolor sit amet, vel accumsan liberavisse ex, ea nec concludaturque ndo. Verear'
  }
]

const Slider: React.FC = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ slidesToScroll: 3 })
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
    <section className='flex flex-col items-center justify-center w-full mt-[6.875rem]'>
      <div className='flex flex-col items-center justify-center'>
        <Heading
          level={2}
          variant='font-normal'
          className='leading-[2.875rem] text-black-5 text-center'
        >
          What is the <br />
          <span className='font-semibold'>Speciality Of Us</span>
        </Heading>
      </div>
      <div className='w-full max-w-[1160px]'>
        <div
          className='overflow-hidden'
          ref={emblaRef}
        >
          <div className='flex h-auto gap-[30px]'>
            {sliderItems.map((slide) => (
              <div
                className='relative flex-[0_0_33%] text-center w-full max-w-[21.875rem] '
                key={slide.id}
              >
                <div className='flex flex-col items-center h-[27.5rem] justify-center my-[1.875rem] rounded-lg shadow-box gap-[.9375rem]'>
                  <Image
                    draggable={false}
                    className='block object-cover select-none'
                    src={slide.img}
                    alt='Your alt text'
                  />
                  <Heading
                    level={3}
                    className='text-black-5'
                  >
                    {slide.title}
                    <span className='font-semibold'>{slide.title_bold}</span>
                  </Heading>
                  <p className='max-w-[15.75rem] text-[.9375rem] leading-[1.6875rem] text-black-4'>
                    {slide.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className='flex gap-[1.875rem]'>
        <Button
          className='cursor-pointer touch-manipulation w-[3.125rem] h-[3.125rem] bg-white rounded-full flex justify-center items-center shadow-box'
          onClick={scrollPrev}
          disabled={!prevBtnEnabled}
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
          className='cursor-pointer touch-manipulation w-[3.125rem] h-[3.125rem] bg-white rounded-full flex justify-center items-center shadow-box'
          onClick={scrollNext}
          disabled={!nextBtnEnabled}
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
    </section>
  )
}

export default Slider
