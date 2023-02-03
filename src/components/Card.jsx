import React,  { useState } from 'react';
import person from '../assets/digital-nomad-man-light-svgrepo-com.svg'
import chinelo from '../assets/flip-flops-svgrepo-com.svg'
import laptop from '../assets/laptop-svgrepo-com.svg'

const Card = () => {

    const [flip, setFlip] = useState(true);

    const handleClick = () => {
        setFlip(!flip);
    }

    return (
    <div className='m-auto w-[90%] mt-[10%] sm:h-[50%] relative items-center flex-row flex justify-between'>
        <div className='group relative w-full h-full mx-5'>
            <div className='relative w-full h-full rounded-xl shadow-xl transition-all duration-1000 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]'>
                <div className='m-auto absolute rounded-xl shadow-pink-200 shadow-xl border border-gray-700 inset-0 hover:cursor-pointer bg-slate-400 [transform:rotateY(180deg)]'>
                    <img src={person} className='h-full w-full rounded-xl object-cover shadow-xl' alt="" />
                </div>
                <div className='m-auto py-1 px-2 absolute rounded-xl shadow-slate-200 shadow-xl border border-gray-700 inset-0 hover:cursor-pointer bg-pink-300 [backface-visibility:hidden] [transform:rotateY(180deg)]'>
                    <div className='flex flex-col min-h-full items-center justify-center'>
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-slate-900">Quem eu sou</h5>
                        <p class="font-normal text-slate-700">Nasci em Teresópolis-RJ, 1996. Sou irmão de duas garotas fantásticas. Sou filho da Cris e do Giba. Sou uma pessoa calma e reflexiva, e não gosto de agir por impulsos.</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='group relative w-full h-full mx-5'>
            <div className='relative w-full h-full rounded-xl shadow-xl transition-all duration-1000 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]'>
                <div onClick={handleClick} className='m-auto absolute rounded-xl shadow-pink-200 shadow-xl border border-gray-700 inset-0 hover:cursor-pointer bg-slate-400 [transform:rotateY(180deg)]'>
                    <img src={laptop} className='h-full w-full rounded-xl object-cover shadow-xl' alt="" />
                </div>
                <div onClick={handleClick} className='m-auto py-1 px-2 absolute rounded-xl shadow-slate-200 shadow-xl border border-gray-700 inset-0 hover:cursor-pointer bg-pink-300 [backface-visibility:hidden] [transform:rotateY(180deg)]'>
                    <div className='flex flex-col min-h-full items-center justify-center'>
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-slate-900">Quem busco ser profissionalmente</h5>
                        <p class="font-normal text-slate-700">Sou movido por desafios. Fui militar por um tempo, quase médico, mas foram os desafios da programação que me inspiraram a perseguir esta carreira. Sou ávido por conhecimento.</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='group relative w-full h-full mx-5'>
            <div className='relative w-full h-full rounded-xl shadow-xl transition-all duration-1000 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]'>
                <div onClick={handleClick} className='m-auto absolute rounded-xl shadow-pink-200 shadow-xl border border-gray-700 inset-0 hover:cursor-pointer bg-slate-400 [transform:rotateY(180deg)]'>
                    <img src={chinelo} className='h-full w-full rounded-xl object-cover shadow-xl' alt="" />
                </div>
                <div onClick={handleClick} className='m-auto py-1 px-2 absolute rounded-xl shadow-slate-200 shadow-xl border border-gray-700 inset-0 hover:cursor-pointer bg-pink-300 [backface-visibility:hidden] [transform:rotateY(180deg)]'>
                    <div className='flex flex-col min-h-full items-center justify-center'>
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-slate-900">Meus hobbys</h5>
                        <p class="font-normal text-slate-700">Minha grande paixão longe das telas é a música. Também adoro cozinhar, e me considero um bom cozinheiro não profissional. Perto das telas, além da progamação, me encantam os jogos. Gosto de caminhaas longas</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Card
