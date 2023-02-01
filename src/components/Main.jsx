import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'

const Main = () => {
  return (
    <div id='main'>
        <img src="https://images.unsplash.com/photo-1674418149815-d57ff02caf27?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        alt="Imagem de fundo, notebook e um porta lápis ao fundo" 
        className='w-full h-screen object-cover object-left '
        />
        <div className='w-full h-screen top-0 left-0 bg-gray-300/70 absolute'>
        <div className='max-w-[700px] m-auto w-full h-full flex flex-col justify-center items-center'>
            <h1 className='sm:text-3xl text-2xl font-semibold text-gray-900'>Olá! Meu nome é João Pedro!</h1>
            <h2 className='sm:text-xl text-l font-normal font-sans text-gray-900 flex flex-row'>
                Eu sou um 
            <TypeAnimation
            sequence={[
                'Desenvolvedor Web',
                1500,
                'Constante Estudante',
                1500,
                'Entusiasta de Novas Tecnologias',
                1500
            ]}
            wrapper="div"
            cursor={true}
            repeat={Infinity}
            style={{ fontSize: '1em', paddingLeft: '5px' }}
            />
            </h2>
        </div>
       </div>
    </div>
  )
}

export default Main