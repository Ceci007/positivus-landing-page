import { useState, useEffect } from 'react'
import logo from "../assets/logo.png"
import { Link as LinkScroll } from "react-scroll"
import clsx from 'clsx'

const Navbar = () => {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 32)
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll); 
    }
  }, [])

  const NavLink = ({ title }) => (
    <LinkScroll
      onClick={() => setIsOpen(false)}
      to={title}
      offset={-100}
      spy
      smooth
      activeClass="text-primary"
      className="transition-colors duration-500 cursor-pointer text-3xl my-6 lg:my-0 lg:text-lg text-black/60 hover:text-black"
    >
      {title}
    </LinkScroll>
  )

  return (
    <header className="fixed p-3 md:py-4 sm:px-4 md:px-6 md:mt-[40px] top-0 left-0 w-full h-[70px]">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div>
          <img src={logo} width={165} height={42} />
        </div>
        <div className={clsx("w-full max-lg:fixed max-lg:top-[120px] max-lg:left-0 mx-lg:w-full max-lg:bg-white max-lg:opacity-0", isOpen ? "max-lg:opacity-100" : "max-lg:pointer-events-none")}>
          <div className="max-lg:relative max-lg:flex max-lg:flex-col max-lg:min-h-screen max-lg:p-6 max-lg:overflow-hidden max-md:px-4 max-lg:before:absolute max-lg:before:-right-64 max-lg:before:top-2/5 max-lg:before:h-[440px] max-lg:before:w-[252px] max-lg:before:bg-white max-lg:before:blur-[200px] max-lg:before:content-['']">
            <nav className="max-lg:relative max-lg:z-2 max-lg:my-auto">
              <ul className="flex max-lg:flex-col items-start justify-start lg:items-center lg:justify-end lg:space-x-10 lg:space-y-0 space-y-6">
                <li>
                  <NavLink title="About Us" />
                </li>
                <li>
                  <NavLink title="Services" />
                </li>
                <li>
                  <NavLink title="Use Cases" />
                </li>
                <li>
                  <NavLink title="Pricing" />
                </li>
                <li>
                  <NavLink title="Blog" />
                </li>
                <li>
                  <button className="bg-transparent border-[1px] border-black/60 py-3 px-7 rounded-xl hover:border-black hover:shadow-md hover:shadow-black/10 transition-all duration-500">
                    <NavLink title="Request a quote" />
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <button className="flex items-center justify-center border-2 lg:hidden z-2 size-10 border-gray-100"
          onClick={() => setIsOpen((prev) => !prev)}
        > 
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-gray-600">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
      </div>
    </header>
  )
}

export default Navbar;