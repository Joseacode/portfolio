import React from 'react'
import ContactForm from '../pures/contact/contact'
import emailjs from '@emailjs/browser';

export default function Mailsender() {

    function createMail({name, message}){
       
      const templateParams = {
          from_name: name,
           message:  message
        };

        emailjs.send('service_czazpks','template_rwhm6qa', templateParams, '2OM96tezMc-H2Eqht')
          .then((response) => {
            console.log('SUCCESS!', response.status, response.text);
          }, (err) => {
            console.log('FAILED...', err);
          });
        
    }

  return (
    <ContactForm add={createMail} />
  )
}
