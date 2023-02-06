import React from 'react';
import Card from './Card';
import Timeline from './Timeline';
import Stack from './Stack';
import java from '../assets/java-svgrepo-com.svg';
import react from '../assets/reactjs-svgrepo-com.svg';
import spring from '../assets/spring-svgrepo-com.svg';
import postgres from '../assets/postgresql-svgrepo-com.svg';
import javascript from '../assets/javascript-svgrepo-com.svg'

const data = [
    {
        ano: "2013",
        duracao: "3 anos",
        titulo: "Colégio Naval",
        tipo: "Ensino Médio Militar",
        detalhes: "Durante o ensino médio, fui aluno do Colégio Naval, uma instituição tradicional da Marinha do Brasil. Além da carga de estudo e aprendizado, fui introduzido a noções de trabalho em equipe em ambientes profissionais. Para além disso, fui escolhido para ser presidente da Sociedade Acadêmica Grennhalgh(SAG), onde pude desenvolver um trabalho, junto do tenente responsável, de elucidar e melhorar a administração das finanças dos alunos, além de administrar diretamente os grêmios estudantis."
    },
    {
        ano: "2017",
        duracao: "5 anos",
        titulo: "UFF",
        tipo: "Ensino Superior - Medicina",
        detalhes: "Frequentei a Universidade Federal Fluminense, no curso de medicina, por 5 anos, o que inclui um período de 1 ano em que a universidade ficou parada por conta da pandemia. Eu não me identifiquei com o estilo de vida e com as atribuições de um médico, por isso transicionei para uma carreira voltada para programação. Durante o período em que estive na universidade, pude aprender ainda mais sorbre trabalho em equipe, noções de gestão e estatística. Além disso, tive experiências com protocolos para ação em situações de urgência e estresse."
    },
    {
        ano: "2022",
        duracao: "6 meses",
        titulo: "Senai/Serratec",
        tipo: "Ensino Técnico - Desenvolvedor Full Stack",
        detalhes: "Tive a oportunidade de concluir o curso de formação de desenvolvedor full stack, realizado numa parceria entre o Senai e o Serratec. Neste curso, pude aprimorar minhas habilidades de trabalho em equipe, em um ambiente idêntico ao de trabalho em uma empresa. Num cenário em equipe, era responsável por desenvolver e apresentar projetos back end, front end e, no trabalho de conclusão do curso, um projeto full stack completo. A stack utilizada durante o curso, na qual tenho desenvolvido outros projetos e aprimorado minhas habilidades técnicas, foi: Spring Boot(2.7) utilizando Java(11, JDK8+, JRE11+), ReactJs(17.0.2) e ReactNative. Atualmente, tenho desenvolvido projetos em Spring Boot 3+ e Java 17+."
    }
];

const stackData = [
    {
        image: java,
        titulo: 'Java',
        descricao: 'Experiência com JDK8+, JRE11+ e 8+. Desenvolvendo em 17+'
    },
    {
        image: spring,
        titulo: 'Spring Boot',
        descricao: 'Experiência com 2.7+. Desenvolvendo em 3+'
    },
    {
        image: postgres,
        titulo: 'Postgres Sql',
        descricao: '13+'
    },
    {
        image: javascript,
        titulo: 'JavaScript',
        descricao: 'ES5, ES6'
    },
    {
        image: react,
        titulo: 'ReactJs e ReactNative',
        descricao: '16+'
    }
]

const About = () => {
  return (
    <div id='about' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16 sm:h-screen'>
        <h1 className='text-gray-900 sm:text-4xl text-2xl font-bold font-montserrat text-center'>Sobre</h1>
        <Card />
        <h1 className='text-gray-900 sm:text-2xl text-xl font-bold font-montserrat text-center mt-[10%]'>Experiência</h1>
        {
            (data.map((item, id) => (
                <Timeline
                key={id}
                ano={item.ano}
                duracao={item.duracao}
                titulo={item.titulo}
                tipo={item.tipo}
                detalhes={item.detalhes}
                />      
            )))
        }
        <h1 className='text-gray-900 sm:text-2xl text-xl font-bold font-montserrat text-center mt-[5%]'>Stack</h1>
        <div className='m-auto w-full h-[500px] mt-[5%] sm:h-[40%] relative items-center justify-center flex flex-wrap sm:flex-row sm:justify-between'>
            {
                (stackData.map((item, id) => (
                    <Stack
                    key={id}
                    image={item.image}
                    titulo={item.titulo}
                    descricao={item.descricao}
                    />
                )))
            }
        </div>
    </div>
  )
}

export default About
