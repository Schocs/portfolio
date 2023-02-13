import React from 'react'

const ProjectItem = ( { image, alt, titulo, descricao, stack, link } ) => {
  return (
    <a href='#projects' className='relative w-[90%] m-auto sm:mb-[100px] h-[250px] sm:h-[40%] items-center group hover:mb-[64px] hover:sm:mb-[15%] flex flex-col justify-center hover:sm:flex-row hover:justify-between hover:scale-125'>
        <div className='relative w-[75%] h-[50%] group-hover:h-[40%] group-hover:sm:h-[90%] sm:w-[50%] group-hover:sm:w-[50%] group-hover:lg:ml-[25px] sm:h-[120%] m-auto bg-slate-400 rounded-lg duration-200 hover:cursor-pointer'>
            <img src={image} alt={alt} className='rounded-lg object-fill h-full w-full' />
            <div className='absolute mt-[-1] invisible group-hover:visible w-full h-[15%] m-auto bg-slate-400 rounded-lg p-1 group-hover:md:mt-[-21px] group-hover:lg:mt-0'>
                <p className='font-normal font-montserrat text-slate-700 text-xs sm:text-sm sm:a[font-size:14px] text-center'>Clique para detalhes</p>
            </div>
        </div>
        <div className='relative w-[75%] h-[60%] sm:w-[50%] sm:h-[90%] invisible group-hover:visible m-auto p-1 sm:p-2 bg-slate-400 rounded-lg'>
            <div className='h-[15%] w-full border-b-[0.5px] border-b-black'>
                <h2 className='font-semibold font-montserrat sm:text-base text-sm text-center'>
                    {titulo}
                </h2>
            </div>
            <div className='h-[75%] w-full m-auto p-y'>
                <p className='font-normal font-montserrat md:text-sm text-xs text-slate-900 group-hover:md:text-sm group-hover:[font-size:10px]'>{descricao}</p>
            </div>
            <div className='absolute invisible group-hover:visible group-hover:mb-[50px] group-hover:sm:mb-[0px] w-full h-[15%] m-auto ml-[-5px] mt-[17.5px] sm:ml-[-8px] sm:mt-[24px] bg-slate-400 rounded-lg p-1'>
                <p className='font-extralight font-montserrat md:text-sm text-xs text-slate-700 text-center group-hover:[font-size:10px] group-hover:sm:[font-size:14px]'>{stack}</p>
            </div>
        </div>
    </a>
  )
}

export default ProjectItem
