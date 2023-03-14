import React from 'react'

const Contact = () => {
  return (
    <div id='contact' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16 sm:h-screen'>
        <h1 className='text-gray-900 sm:text-4xl text-2xl font-bold font-montserrat text-center mb-[10%]'>Contato</h1>
        <form action="" method='POST' encType='multipart/form-data'>
            <div>
                <div>
                    <label htmlFor="">Nome</label>
                    <input type="text" name='nome' />
                </div>
                <div>
                    <label htmlFor="">Telefone</label>
                    <input type="tel" name='telefone'/>
                </div>
            </div>
            <div>
                <label>Email</label>
                <input type="email" name="email" id="" />
            </div>
            <div>
                <label>Assunto</label>
                <input type="text" name="assunto" id="" />
            </div>
            <div>
                <label>Mensagem</label>
                <textarea rows={10} name='mensagem'></textarea>
            </div>
        </form>
    </div>
  )
}

export default Contact
