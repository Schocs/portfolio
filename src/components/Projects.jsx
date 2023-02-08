import React from 'react';
import ProjectItem from './ProjectItem';
import java from '../assets/java-svgrepo-com.svg'

const Projects = () => {
  return (
    <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16 sm:mt-[750px] md:mt-[1000px] sm:h-screen'>
        <h1 className='text-gray-900 sm:text-4xl text-2xl font-bold font-montserrat text-center mb-10'>Projetos</h1>
        <ProjectItem image={java} titulo={'Olá'} descricao={'Uma descricao'} stack={'Uma stack'}/>
    </div>
  )
}

export default Projects
