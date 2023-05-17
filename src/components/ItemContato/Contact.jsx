import React, { useRef, useState } from 'react';
import classes from './item.module.css';
import emailjs from '@emailjs/browser';
import { SiGmail, SiGithub, SiLinkedin } from 'react-icons/si';
import PopUp from '../PopUp/PopUp';

const Contact = () => {

    const form = useRef();

/*     const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('contact_service', 'contact_form', form.current, 'mDCUJXRTNM9ngGtrl')
        .then((result) => {
            console.log(result.text);
            showPop();
        }, (error) => {
            console.log(error.text);
            showError();
        });
    } */

    const [popTrigger, setPopTrigger] = useState(false)

    const showPop = () => {
        setPopTrigger(!popTrigger);
    }

    const [errorTrigger, setErrorTrigger] = useState(false)

    const showError = () => {
        setErrorTrigger(!errorTrigger);
    }

    return (
        <div id='contact' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16 sm:h-screen'>
            <h1 className='text-gray-900 sm:text-4xl text-2xl font-bold font-montserrat text-center mb-[10%]'>Contato</h1>
            <p className='text-gray-900 md:text-lg sm:text-base text-sm text-center font-montserrat font-medium mb-[1.5%]'> Entre em contato através do formulário abaixo, ou, caso prefira, acessando um link pelos ícones abaixo!</p>
            <form action="" method='POST' encType='multipart/form-data' /*ref={form} onSubmit={sendEmail} */ className={classes.form} id='form'>
                <div className={classes.iconsForm}>
                    <a href="mailto:joaochocron@gmail.com" className={classes.icon} target='_blank'>
                        <SiGmail size={25} />
                    </a>
                    <a href="https://github.com/Schocs" className={classes.icon} target='_blank'>
                        <SiGithub size={25}/>
                    </a>
                    <a href="https://www.linkedin.com/in/joao-pedro-chocron-b6aa20239/" className={classes.icon} target='_blank'>
                        <SiLinkedin size={25}/>
                    </a>
                </div>
                <div className={classes.mainForm}>
                    <div className={classes.itemForm}>
                        <label htmlFor="" className={classes.labelForm}>Nome:</label>
                        <input type="text" name='user_name' className={classes.inputForm} required/>
                    </div>
                    <div className={classes.itemForm}>
                        <label className={classes.labelForm}>Email:</label>
                        <input type="email" name="user_email" id="" className={classes.inputForm} required/>
                    </div>
                    <div className={classes.itemForm}>
                        <label className={classes.labelForm}>Assunto:</label>
                        <input type="text" name="subject" id="" className={classes.inputForm} required/>
                    </div>
                </div>
                <div className={classes.msgForm}>
                    <label className={classes.labelForm}>Mensagem:</label>
                    <textarea rows={20} name='message' className={classes.txtArea} required></textarea>
                </div>
                <div className={classes.btnDiv}>
                    <button className={classes.buttonForm} onClick={showPop}>Enviar</button>
                </div>
            </form>
            <PopUp trigger={popTrigger} setTrigger={setPopTrigger} resultado={'Sucesso!'} msg={'Sua mensagem foi enviada com sucesso! Em até 2 dias úteis, responderei através do endereço joaochocron@gmail.com'} check={'Obrigado pela mensagem!'}/>
            <PopUp trigger={errorTrigger} setTrigger={setErrorTrigger} resultado={'Algo deu errado!'} msg={'Tente novamente mais tarde, ou envie um e-mail diretamente através do endereço joaochocron@gmail.com'} check={'Obrigado pelo interesse!'}/>
        </div>
  )
}

export default Contact
