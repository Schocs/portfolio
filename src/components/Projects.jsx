import React from 'react';
import ItemProjeto from './ItemProjeto/ItemProjeto';
import security from '../assets/security-shield-svgrepo-com.svg';
import calculator from '../assets/calculator-svgrepo-com.svg';
import celular from '../assets/cellphone-svgrepo-com.svg'

const Projects = () => {

  const projectData = [
    {
      image:security,
      titulo:'Spring Security JWT - BackEnd',
      descricao:'Este é um projeto básico de segurança em uma aplicação Spring Boot. Funciona com a geração de um JWT para autenticação, e dentro do token é possível se passar roles para autorização de acesso. No entanto, este projeto contém apenas a parte inicial da segurança. Documentado com JavaDoc.',
      stack:'SpringSecurity 6.0, SpringBoot 3.0.1, Java 17',
      link:'https://github.com/Schocs/JwtSeguranca'
    },
    {
      image:calculator,
      titulo:'Calculadora - FrontEnd',
      descricao:'Este é um projeto básico de segurança em uma aplicação Spring Boot. Funciona com a geração de um JWT para autenticação, e dentro do token é possível se passar roles para autorização de acesso. No entanto, este projeto contém apenas a parte inicial da segurança. Documentado com JavaDoc.',
      stack:'React, JavaScript, CSS',
      link:'https://www.google.com'
    },
    {
      image:celular,
      titulo:'Aplicativo E-commerce - FrontEnd',
      descricao:'O projeto foi feito por um time de 6 pessoas, focado apenas no FrontEnd, e se conecta a uma api fornecida. É uma aplicação de arquitetura monolítica. Este aplicativo de e-commerce permite a um usuário se cadastrar, modificar cadastro, adicionar itens a um carrinho, mas não comprar.',
      stack:'ReactNative, Javascript, CSS',
      link:'https://github.com/Schocs/React-Native-G6'
    },
    {
      image:calculator,
      titulo:'Calculadora - FrontEnd',
      descricao:'Este é um projeto básico de segurança em uma aplicação Spring Boot. Funciona com a geração de um JWT para autenticação, e dentro do token é possível se passar roles para autorização de acesso. No entanto, este projeto contém apenas a parte inicial da segurança. Documentado com JavaDoc.',
      stack:'React, JavaScript, CSS',
      link:'https://www.google.com'
    }
  ]

  return (
    <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16 sm:mt-[750px] md:mt-[1000px] sm:min-h-fit'>
        <h1 className='text-gray-900 sm:text-4xl text-2xl font-bold font-montserrat text-center mb-[10%]'>Projetos</h1>
        <p className='text-gray-900 md:text-lg sm:text-base text-sm text-center font-montserrat font-medium mb-[15%]'>
          Estes são alguns dos projetos que desenvolvi durante minha jornada de desenvolvedor. Alguns são projetos apenas de FrontEnd, outros apenas de BackEnd, e o restante é FullStack. Todas as stacks estão detalhadas. Para melhor detalhamento dos projetos, acesse meu GitHub: <a href='https://github.com/Schocs' target='_blank' className='hover:text-indigo-500'>https://github.com/Schocs</a>
        </p>
       {
          (projectData.map((item, id) => (
            <ItemProjeto
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
