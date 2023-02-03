import React from 'react'
import product1 from '@/assets/images/product1.svg'
import product2 from '@/assets/images/product2.svg'
import product3 from '@/assets/images/product3.svg'
import product4 from '@/assets/images/product4.svg'
import product5 from '@/assets/images/product5.svg'
import product6 from '@/assets/images/product6.svg'
import Heading from '../Ui/Heading'
import Image from 'next/image'
import Link from 'next/link'
import cn from 'clsx'

const products = [
  {
    id: '1',
    img: product1,
    body: 'Lorem ipsum dolor sit amet, el accumsan liberavisse ex, ea nec',
    href: '/product1'
  },
  {
    id: '2',
    img: product2,
    body: 'Lorem ipsum dolor sit amet, el accumsan liberavisse ex, ea nec',
    href: '/product2'
  },
  {
    id: '3',
    img: product3,
    body: 'Lorem ipsum dolor sit amet, el accumsan liberavisse ex, ea nec',
    href: '/product3'
  },
  {
    id: '4',
    img: product4,
    body: 'Lorem ipsum dolor sit amet, el accumsan liberavisse ex, ea nec',
    href: '/product4'
  },
  {
    id: '5',
    img: product5,
    body: 'Lorem ipsum dolor sit amet, el accumsan liberavisse ex, ea nec',
    href: '/product5'
  },
  {
    id: '6',
    img: product6,
    body: 'Lorem ipsum dolor sit amet, el accumsan liberavisse ex, ea nec',
    href: '/product6'
  }
]

const Products: React.FC = () => {
  return (
    <section className='flex flex-col items-center justify-center w-full px-[18.125rem] mt-[8.125rem]'>
      <div className='flex flex-col items-center justify-center'>
        <Heading
          level={2}
          className='leading-[2.875rem] text-black-5'
        >
          Our Owning <span className='font-semibold'>Products</span>
        </Heading>
        <p className='max-w-[30.625rem] text-center mt-[1.5625rem] text-[.9375rem] leading-[1.6875rem] text-black-4'>
          Lorem ipsum dolor sit amet, vel accumsan liberavisse ex, ea nec
          habemus sea ut. His nibh scripta in. In sea vocibus facilisis.{' '}
        </p>
      </div>
      <div
        className={`grid w-full grid-cols-3 grid-rows-2 place-content-end place-items-end gap-[1.875rem] mt-[2.5rem]`}
      >
        {products.map((product, index) => (
          <div
            key={product.id}
            className={cn(
              'w-[20rem] h-[17.5rem] flex justify-center items-center flex-col text-center shadow-box rounded-lg',
              index == 4 && 'mb-10 place-self-start',
              index == 1 && 'mb-10 place-self-start'
            )}
          >
            <Image
              draggable={false}
              className='select-none'
              src={product.img}
              alt='product_image'
            />
            <p className='pt-[2.375rem] pb-[2.0625rem] text-[.9375rem] leading-[1.6875rem] text-black-1 max-w-[15.3125rem]'>
              {product.body}
            </p>
            <Link
              href={product.href}
              className='text-base font-medium text-secondary'
            >
              Learn More
            </Link>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Products
