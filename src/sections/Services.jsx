import React from 'react'
import { Element } from 'react-scroll'

import Card1 from "../assets/card-1.png"
import Card2 from "../assets/card-2.png"
import Card3 from "../assets/card-3.png"
import Card4 from "../assets/card-4.png"
import Card5 from "../assets/card-5.png"
import Card6 from "../assets/card-6.png"

const Services = () => {
  return (
    <section className="mt-20">
      <Element name="Services" className="p-3 md:py-4 sm:px-4 md:px-6">
        <div className="flex flex-col mx-auto max-w-7xl">
          <div className="flex flex-col items-center justify-center mb-20 space-x-6 lg:flex-row lg:justify-start">
            <h2 className="mb-10 text-3xl lg:mb-0 lg:text-5xl"><mark className='px-3 bg-primary'>Services</mark></h2>
            <p className="lg:w-[580px] sm:text-sm md:text-md lg:text-lg">
              At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:
            </p> 
          </div>
          <div className='grid grid-cols-1 gap-6 lg:grid-cols-2'>
            <img src={Card1} alt="Card 1" />
            <img src={Card2} alt="Card 2" />
            <img src={Card3} alt="Card 3" />
            <img src={Card4} alt="Card 4" />
            <img src={Card5} alt="Card 5" />
            <img src={Card6} alt="Card 6" />
          </div>
        </div>
      </Element>
    </section>
  )
}

export default Services;