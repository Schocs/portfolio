import React from 'react';
import ProjectItem from './ProjectItem';
import security from '../assets/security-shield-svgrepo-com.svg'

const Projects = () => {

  const projectData = [
    {
      image:security,
      titulo:'Spring Security JWT - Backend',
      descricao:'Este é um projeto básico de segurança em uma aplicação Spring Boot. Funciona com a geração de um JWT para autenticação, e dentro do token é possível se passar roles para autorização de acesso. No entanto, este projeto contém apenas a parte inicial da segurança. Utilizei JavaDoc para documentar o projeto.',
      stack:'SpringSecurity 6.0, SpringBoot 3.0.1, Java 17',
      link:'https://github.com/Schocs/JwtSeguranca'
    }
  ]

  return (
    <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16 sm:mt-[750px] md:mt-[1000px] sm:h-screen'>
        <h1 className='text-gray-900 sm:text-4xl text-2xl font-bold font-montserrat text-center mb-[25%]'>Projetos</h1>
        {
          (projectData.map((item, id) => (
            <ProjectItem
            key={id}
            image={item.image}
            titulo={item.titulo}
            descricao={item.descricao}
            stack={item.stack}
            link={item.link}
            />
          )))
        }
    </div>
  )
}

export default Projects
