import React from 'react'

const Timeline = ( { ano, duracao, tipo, titulo, detalhes } ) => {
  return (
    <ol className='relative flex flex-col md:flex-row border-l-2 border-pink-200'>
      <li className='mb-5 mt-5 ml-3'>
        <div className='absolute w-3 h-3 rounded-full bg-slate-200 mt-1.5 -left-1.5 border-white' />
        <p className='flex flex-wrap sm:gap-4 gap-2 flex-row items-center justify-start text-xs md:text-sm font-montserrat'>
          <span className='inline-block p-1 text-white bg-indigo-900 font-semibold rounded-md'>{ano}</span>
          <span className='leading-none sm:text-lg text-base font-bold'>{titulo}</span>
          <span className='leading-none sm:text-sm text-xs font-semibold'>{tipo}</span>
          <span className='leading-none sm:mx-2 text-slate-500'>{duracao}</span>
        </p>
        <p className='font-montserrat text-sm md:text-base mt-3'>
          {detalhes}
        </p>
      </li>
    </ol>
  )
}

export default Timeline
