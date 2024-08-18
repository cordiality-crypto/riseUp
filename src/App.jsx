import { useState } from 'react';
import Logo from './assets/RiseUpLogo.svg';
import Dropdown from './assets/dropdown.svg'
import About from './components/About';
import Services from './components/Services'
import Team from './components/Team';
import Contact from './components/Contact';
import Internship from './components/Internship';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';


export default function App() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleScroll = (e) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav className="fixed w-full backdrop-blur-lg text-white z-50 top-0 left-0 flex flex-row justify-between p-4 raleway">
        <div id="logo" className='flex gap-1'>
          <img src={Logo} alt="Logo" className="h-12 bg-white" /> 
          <a className='text-2xl mt-1 text-gray-200 cursor-pointer hover:text-white transition duration-300 ease-in-out' alt='rise up' href='#contact'>RiseUp</a>
        </div>
        <div className="hidden md:flex flex-row space-x-4">
          <a  onClick={handleScroll} className='hover:text-zinc-100 cursor-pointer transition duration-300 ease-in-out' href='#title'>Home</a>
          <a  onClick={handleScroll} className='hover:text-zinc-100 cursor-pointer transition duration-300 ease-in-out' href='#about'>About</a>
          <a  onClick={handleScroll} className='hover:text-zinc-100 cursor-pointer transition duration-300 ease-in-out' href='#services'>Services</a>
          <a  onClick={handleScroll} className='hover:text-zinc-100 cursor-pointer transition duration-300 ease-in-out' href='#internship'>Internship</a>
          <a  onClick={handleScroll} className='hover:text-zinc-100 cursor-pointer transition duration-300 ease-in-out' href='#team'>Team</a>
          <a  onClick={handleScroll} className='hover:text-zinc-100 cursor-pointer transition duration-300 ease-in-out' href='#contact'>Contact Us</a>
        </div>
        <div className="md:hidden relative">
          <button onClick={toggleDropdown} className="px-4 py cursor-pointer">
            <img src={Dropdown} alt="Menu" className=''/>
          </button>
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 backdrop-blur-sm text-white shadow-lg rounded-md">
              <div className="flex flex-col space-y-2 p-4">
                <a  onClick={handleScroll} className='cursor-pointer' href='#title'>Home</a>
                <a  onClick={handleScroll} className='cursor-pointer' href='#about'>About</a>
                <a  onClick={handleScroll} className='cursor-pointer' href='#services'>Services</a>
                <a  onClick={handleScroll} className='cursor-pointer' href='#internship'>Internship</a>
                <a  onClick={handleScroll} className='cursor-pointer' href='#team'>Team</a>
                <a  onClick={handleScroll} className='cursor-pointer' href='#contact'>Contact Us</a>
              </div>
            </div>
          )}
        </div>
      </nav>
      <div id="title" className='z-40 absolute text-white text-5xl pt-[50vh] text-center w-full px-8 raleway'>
          <div>
            Welcome to <a  onClick={handleScroll} className='pt-2 cursor-pointer hover:text-gray-400 transition duration-300 ease-in-out' href="#contact">RiseUP</a>
          </div>
          <p className='text-xl pt-4'>Your partner in exceptional content creation and SEO optimization.</p>
      </div>
      <div className="">
        <div className="animated-background absolute inset-0 z-0">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div className='absolute mt-[100vh] w-full'>
        <About />
        <Services />
        <Internship />
        <Team />
        <Contact />
        <div className="raleway bg-black text-white text-xs text-center w-full h-[6vh] bottom-0 flex flex-col items-center justify-center space-y-2">
          <div className="flex items-center space-x-2">
            <span>© 2024 RiseUP. All rights reserved.</span>
            <a href="https://www.linkedin.com/company/riseitup/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} className="text-slate-500 text-lg" />
            </a>
          </div>
          <div className="flex items-center space-x-2">
            <span>
              <img src={Logo} alt="" className='bg-white h-[8vh]'/>  
            </span> 
          </div>
          <div>
            Developed by <a href="https://www.linkedin.com/in/souharda-roy3301/" target="_blank" rel="noopener noreferrer" className="text-slate-300">Herzlichkeit</a>
          </div>
        </div>
      </div>
    </>
  );
}
