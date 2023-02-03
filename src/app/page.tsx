import About from '@/components/About/About'
import Contact from '@/components/Contact/Contact'
import Hero from '@/components/Hero/Hero'
import Products from '@/components/Products/Products'
import Slider from '@/components/Slider/Slider'
import Testimonials from '@/components/Testimonials/Testimonials'

export default function Home(): JSX.Element {
  return (
    <main className='min-h-screen max-w-[100rem] flex flex-col justify-start items-center w-full'>
      <Hero />
      <About />
      <Slider />
      <Products />
      <Testimonials />
      <Contact />
    </main>
  )
}
