import React from 'react';
import Card from './Card';
import Timeline from './Timeline';

const data = [
    {
        ano: "2013",
        duracao: "3",
        titulo: "Colégio Naval",
        tipo: "Ensino Médio Militar",
        detalhes: "Durante o ensino médio, fui aluno do Colégio Naval, uma instituição tradicional da Marinha do Brasil. Além da carga de estudo e aprendizado, fui introduzido a noções de trabalho em equipe em ambientes profissionais. Para além disso, fui escolhido para ser presidente da Sociedade Acadêmica Grennhalgh(SAG), onde pude desenvolver um trabalho, junto do tenente responsável, de elucidar e melhorar a administração das finanças dos alunos, além de administrar diretamente os grêmios estudantis."
    },
    {
        ano: "2017",
        duracao: "5",
        titulo: "UFF",
        tipo: "Ensino Superior - Medicina",
        detalhes: "Frequentei a Universidade Federal Fluminense, no curso de medicina, por 5 anos, o que inclui um período de 1 ano em que a universidade ficou parada por conta da pandemia. Eu não me identifiquei com o estilo de vida e com as atribuições de um médico, por isso transicionei para uma carreira voltada para programação. Durante o período em que estive na universidade, pude aprender ainda mais sorbre trabalho em equipe, noções de gestão e estatística. Além disso, tive experiências com protocolos para ação em situações de urgência e estresse."
    },
    {
        ano: "2022",
        duração: "6 meses",
        titulo: "Senai/Serratec",
        tipo: "Ensino Técnico - Desenvolvedor Full Stack",
        detalhes: "Tive a oportunidade de concluir o curso de formação de desenvolvedor full stack, realizado numa parceria entre o Senai e o Serratec. Neste curso, pude aprimorar minhas habilidades de trabalho em equipe, em um ambiente idêntico ao de trabalho em uma empresa. Num cenário em equipe, era responsável por desenvolver e apresentar projetos back end, front end e, no trabalho de conclusão o curso, um projeto full stack completo. A stack utilizada durante o curso, na qual tenho desenvolvido outros projetos e aprimorado minhas habilidades técnicas, foi: Spring Boot(2.7) utilizando Java(11, JDK8+, JRE11+), ReactJs(17.0.2) e ReactNative"
    }
];

const About = () => {
  return (
    <div id='about' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16 sm:h-screen'>
        <h1 className='text-gray-900 sm:text-4xl text-2xl font-bold font-montserrat text-center'>Sobre</h1>
{/*         <div className='rounded-full absolute right-[5%] shadow-lg shadow-pink-200 m-2 hover:right-[2.5%] hover:scale-110 group'>
            <img src={eu} alt="" className='object-cover w-full h-full rounded-full'/>
            <div className='bg-pink-200 invisible group-hover:visible absolute right-[20%] z-[-1] group-hover:w-[400%] top-0 h-full rounded-full'>
                <p className='ml-5 mt-2 text-xs font-montserrat font-light'>Nasci em Teresópolis-RJ, 1996.<br /> Frequentei uma academia militar, mas me frustei.<br /> Cursei medicina, mas vi que não era pra mim.<br/> Encontrei na programação uma paixão e uma carreira.<br /> Sou movido por desafios e paixões.</p>
            </div>
        </div> */}
        <Card />
    </div>
  )
}

export default About
