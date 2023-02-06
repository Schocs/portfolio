import React from 'react'

const Stack = ( { image, titulo, descricao } ) => {
  return (
      <div className='relative group w-[25%] h-[50%] sm:w-[20%] sm:h-[80%] mx-2 my-1 [perspective:1000px]'>
        <div className='relative m-auto w-full h-full bg-slate-900 rounded-xl transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]'>
            <div className='absolute m-auto sm:w-full sm:h-full rounded-xl border border-gray-700 inset-0 hover:cursor-pointer bg-pink-200 [transform:rotateY(180deg)]'>
                <img src={image} alt="" className='h-full w-full rounded-xl object-cover shadow-xl scale-x-[-1]' />
            </div>
            <div className='absolute m-auto p-1 sm:w-full sm:h-full rounded-xl border border-gray-700 inset-0 hover:cursor-pointer bg-black/75 [transform:rotateY(180deg)] [backface-visibility:hidden]'>
                <h5 class="mb-2 sm:text-2xl text-base font-semibold space-x-1 tracking-tight text-white text-center font-montserrat">{titulo}</h5>
                <p class="font-normal sm:text-base text-sm text-white font-montserrat">{descricao}</p>
            </div>
        </div>
      </div>
  )
}

export default Stack
