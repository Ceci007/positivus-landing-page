import React from 'react'
import { Element } from 'react-scroll'
import arrowIcon from "../assets/arrow-icon.png"

const UseCases = () => {
  return (
    <section>
      <Element name="Use Cases" className="p-3 md:py-4 sm:px-4 md:px-6">
        <div className="flex flex-col mx-auto max-w-7xl">
          <div className="flex flex-col items-center justify-center mb-20 space-x-6 lg:flex-row lg:justify-start">
            <h2 className="mb-10 text-3xl lg:mb-0 lg:text-5xl"><mark className='px-3 rounded-lg bg-primary'>Case Studies</mark></h2>
            <p className="lg:w-[580px] sm:text-sm md:text-md lg:text-lg">
            Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies
            </p> 
          </div>
          <div className="flex items-center justify-center gap-10 p-12 space-x-6 text-white bg-dark rounded-3xl">
            <div className='relative space-y-6'>
              <p className="sm:text-sm md:text-md lg:text-lg">
                For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.
              </p>
              <button className="flex gap-4 text-primary sm:text-sm md:text-md lg:text-lg">
                Learn more
                <img src={arrowIcon} width={20} height={5} />
              </button>
              <span className="absolute h-full w-[1px] bg-white -right-[25px] -top-[25px]" />
            </div>
            <div className='relative space-y-6'>
              <p className="sm:text-sm md:text-md lg:text-lg">
                For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.
              </p>
              <button className="flex gap-4 text-primary sm:text-sm md:text-md lg:text-lg">
                Learn more
                <img src={arrowIcon} width={20} height={5} />
              </button>
              <span className="absolute h-full w-[1px] bg-white -right-[25px] -top-[25px]" />
            </div>
            <div className='space-y-6'>
              <p className="sm:text-sm md:text-md lg:text-lg">
                For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.
              </p>
              <button className="flex gap-4 text-primary sm:text-sm md:text-md lg:text-lg">
                Learn more
                <img src={arrowIcon} width={20} height={5} /> 
              </button>
            </div>
          </div>
        </div>
      </Element>
    </section>
  )
}

export default UseCases;