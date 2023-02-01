import React, { useState } from 'react';
import { AiOutlineHome, AiOutlineMail, AiOutlineMenu, AiOutlineProject, AiOutlineUser } from 'react-icons/ai';


const Sidebar = () => {

  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div>
      <AiOutlineMenu onClick={handleNav} className='absolute top-4 right-4 z-[99] md:hidden'/>
      {
        nav ? (
          <div className='fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20'>
            <a href='#main' className='w-[75%] flex justify-center items-center rounded-full shadow-lg 
            bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200 hover:bg-gray-300'>
              <AiOutlineHome size={20} />
              <span className='pl-4'>Home</span>
            </a>
            <a href='#projects' className='w-[75%] flex justify-center items-center rounded-full shadow-lg 
            bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200 hover:bg-gray-300'>
              <AiOutlineProject size={20} />
              <span className='pl-2'>Projetos</span>
            </a>
            <a href='#about' className='w-[75%] flex justify-center items-center rounded-full shadow-lg 
            bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200 hover:bg-gray-300'>
              <AiOutlineUser size={20} />
              <span className='pl-4'>Sobre</span>
            </a>
            <a href='#contact' className='w-[75%] flex justify-center items-center rounded-full shadow-lg 
            bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200 hover:bg-gray-300'>
              <AiOutlineMail size={20} />
              <span className='pl-2'>Contato</span>
            </a>
          </div>
        ) :
        (
          ''
        )
      }
      <div className='md:block hidden fixed top-[25%] z-10'>
        <div className='flex flex-col'>
          <a href="#main" className='rounded-full shadow-lg bg-amber-100 shadow-bg-amber-400 m-2 p-4 cursor-pointer
          hover:scale-110 ease-in duration-200 hover:bg-amber-300'>
            <AiOutlineHome size={20}/>
          </a>
          <a href="#projects" className='rounded-full shadow-lg bg-amber-100 shadow-bg-amber-400 m-2 p-4 cursor-pointer
          hover:scale-110 ease-in duration-200 hover:bg-amber-300'>
            <AiOutlineProject size={20}/>
          </a>
          <a href="#about" className='rounded-full shadow-lg bg-amber-100 shadow-bg-amber-400 m-2 p-4 cursor-pointer
          hover:scale-110 ease-in duration-200 hover:bg-amber-300'>
            <AiOutlineUser size={20}/>
          </a>
          <a href="#contact" className='rounded-full shadow-lg bg-amber-100 shadow-bg-amber-400 m-2 p-4 cursor-pointer
          hover:scale-110 ease-in duration-200 hover:bg-amber-300'>
            <AiOutlineMail size={20}/>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
