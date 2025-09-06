import React from 'react'
import { Element } from 'react-scroll'
import HeroPicture from "../assets/hero-illustration.png"

import CompLogo1 from "../assets/company-logo-1.png"
import CompLogo2 from "../assets/company-logo-2.png"
import CompLogo3 from "../assets/company-logo-3.png"
import CompLogo4 from "../assets/company-logo-4.png"
import CompLogo5 from "../assets/company-logo-5.png"
import CompLogo6 from "../assets/company-logo-6.png"

const Hero = () => {
  return (
    <section className="md:mt-[110px]">
      <Element name="About Us" className="p-3 md:py-4 sm:px-4 md:px-6">
        <div className="flex flex-col mx-auto max-w-7xl">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between h-[calc(100vh-190px)]">
            <div className='flex flex-col items-center justify-center w-full min-h-[400px] h-full lg:items-start lg:w-1/2'>
              <div className="w-[450px] space-y-10 mt-20 lg:mt-0">
                <h2 className="text-3xl lg:text-5xl">
                  Navigating the digital landscape for success
                </h2>
                <p className="sm:text-sm md:text-md lg:text-lg">
                  Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.
                </p>
                <button className="px-6 py-2 text-white rounded-lg bg-dark sm:text-sm md:text-md lg:text-lg">
                  Book a consultation
                </button>
              </div>
            </div>
            <div className='flex items-center justify-center w-full h-full lg:justify-end lg:w-1/2'>
              <img src={HeroPicture} alt="Hero" width={600} height={515} />
            </div>
          </div>
          <div className='mt-[350px] lg:mt-0 h-[200px] lg:h-auto pb-10 w-full mx-auto flex flex-wrap gap-6 lg:flex-nowrap justify-center lg:justify-between'>
            <img src={CompLogo1} alt="Amazon" />
            <img src={CompLogo2} alt="Dribbble" />
            <img src={CompLogo3} alt="HubSpot" />
            <img src={CompLogo4} alt="Notion" />
            <img src={CompLogo5} alt="Netflix" />
            <img src={CompLogo6} alt="Zoom" />
          </div>
        </div>
      </Element>
    </section>
  )
}

export default Hero;