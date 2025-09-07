import React from 'react'
import { Element } from 'react-scroll'

import Card1 from "../assets/card-1.png"
import Card2 from "../assets/card-2.png"
import Card3 from "../assets/card-3.png"
import Card4 from "../assets/card-4.png"
import Card5 from "../assets/card-5.png"
import Card6 from "../assets/card-6.png"

import Frame1 from "../assets/frame-1.png"

const Services = () => {
  return (
    <section className="mt-20">
      <Element name="Services" className="p-3 md:py-4 sm:px-4 md:px-6">
        <div className="flex flex-col mx-auto max-w-7xl">
          <div className="flex flex-col items-center justify-center mb-20 space-x-6 lg:flex-row lg:justify-start">
            <h2 className="mb-10 text-3xl lg:mb-0 lg:text-5xl"><mark className='px-3 rounded-lg bg-primary'>Services</mark></h2>
            <p className="lg:w-[580px] sm:text-sm md:text-md lg:text-lg">
              At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:
            </p> 
          </div>
          <div className='grid grid-cols-1 gap-6 mx-auto lg:mx-0 lg:grid-cols-2'>
            <img src={Card1} alt="Card 1" />
            <img src={Card2} alt="Card 2" />
            <img src={Card3} alt="Card 3" />
            <img src={Card4} alt="Card 4" />
            <img src={Card5} alt="Card 5" />
            <img src={Card6} alt="Card 6" />
          </div>
          <div className='flex items-center justify-between w-full p-12 my-6 mt-[100px] bg-grey h-[350px] rounded-3xl'>
            <div className="flex flex-col w-[450px] align-start space-y-6">
              <h3 className="text-2xl lg:text-3xl">Let’s make things happen</h3>
              <p className="sm:text-sm md:text-md lg:text-lg">Contact us today to learn more about how our digital marketing services can help your business grow and succeed online.</p>
              <button className="w-[300px] px-6 py-2 text-white rounded-lg bg-dark sm:text-sm md:text-md lg:text-lg">Get your free proposal</button>
            </div>
            <div className="hidden lg:block">
              <img src={Frame1} />
            </div>
          </div>
        </div>
      </Element>
    </section>
  )
}

export default Services;