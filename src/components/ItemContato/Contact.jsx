import React, { useRef } from 'react';
import classes from './item.module.css';
import emailjs from '@emailjs/browser';

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('contact_service', 'contact_form', form, 'mDCUJXRTNM9ngGtrl')
        .then((result) => {
            console.log(result.text)
        }, (error) => {
            console.log(error.text)
        });
    }

    return (
        <div id='contact' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16 sm:h-screen'>
            <h1 className='text-gray-900 sm:text-4xl text-2xl font-bold font-montserrat text-center mb-[10%]'>Contato</h1>
            <form action="" method='POST' encType='multipart/form-data' ref={form} onSubmit={sendEmail} className={classes.form}>
                <div className={classes.mainForm}>
                    <div className={classes.itemForm}>
                        <label htmlFor="" className={classes.labelForm}>Nome:</label>
                        <input type="text" name='nome' className={classes.inputForm}/>
                    </div>
                    <div className={classes.itemForm}>
                        <label className={classes.labelForm}>Email:</label>
                        <input type="email" name="email" id="" className={classes.inputForm}/>
                    </div>
                    <div className={classes.itemForm}>
                        <label className={classes.labelForm}>Assunto:</label>
                        <input type="text" name="assunto" id="" className={classes.inputForm}/>
                    </div>
                </div>
                <div>
                    <label>Mensagem:</label>
                    <textarea rows={10} name='mensagem'></textarea>
                </div>
            </form>
        </div>
  )
}

export default Contact
