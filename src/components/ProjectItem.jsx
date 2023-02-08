import React from 'react'

const ProjectItem = ( { image, alt, titulo, descricao, stack } ) => {
  return (
    <div className='relative w-[90%] m-auto mt-10 h-[250px] sm:h-[40%] items-center flex flex-col sm:flex-row justify-between'>
        <div className='relative w-[66%] h-[50%] sm:w-[30%] sm:h-[90%] m-auto bg-pink-200 rounded-lg hover:scale-110 duration-500 group'>
            <a href="">
                <img src={image} alt={alt} className='rounded-lg object-fill h-full w-full' />
            </a>
            <div className='absolute mt-[-1] invisible group-hover:visible w-full h-[15%] m-auto bg-pink-200 rounded-lg p-1'>
                <p className='font-normal font-montserrat text-white text-xs sm:text-sm text-center'>Clique para detalhes sobre {titulo}</p>
            </div>
        </div>
        <div className='relative w-full h-[50%] sm:w-[50%] sm:h-[90%] m-auto p-2 bg-pink-200 rounded-lg'>
            <div className='h-[15%] w-full border-b-[0.5px] border-b-black'>
                <h2 className='font-semibold font-montserrat text-base text-center'>
                    {titulo}
                </h2>
            </div>
            <div className='h-[75%] w-full m-auto p-y'>
                <p className='font-normal font-montserrat text-sm'>{descricao}</p>
            </div>
            <div className='h-[10%] w-[90%] m-auto'>
                <p className='font-extralight font-montserrat text-sm text-gray-400'>Stack: {stack}</p>
            </div>
        </div>
    </div>
  )
}

export default ProjectItem
