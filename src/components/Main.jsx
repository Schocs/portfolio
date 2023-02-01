import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const Main = () => {
  return (
    <div id='main'>
        <img src="https://images.unsplash.com/photo-1508830524289-0adcbe822b40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1425&q=80"
        alt="Imagem de fundo, notebook e um porta lápis ao fundo" 
        className='w-full h-screen object-cover object-left '
        />
        <div className='w-full h-screen top-0 left-0 bg-teal-200/40 absolute'>
        <div>
            <h1>Olá! Meu nome é João Pedro!</h1>
            <h2>Eu sou um
            <TypeAnimation
            sequence={[
                'Desenvolvedor Web',
                1500,
                'Admirador de programação',
                1500,
                'Constante Estudante',
                1500,
                'Entusiasta de novas tecnologias',
                1500
            ]}
            wrapper="div"
            cursor={true}
            repeat={Infinity}
            style={{ fontSize: '2em' }}
            />
            </h2>
        </div>
       </div>
    </div>
  )
}

export default Main
