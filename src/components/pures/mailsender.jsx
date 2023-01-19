/**
 * Componente Mailsender padre el componente ContactForm.
 * Se gestiona toda la lógica del envio del mail.
 * Se importa la libreria emailJs que permite el envio de mails desde el frontend, sin la necesidad de un backend.
 * Para referencias de emailJs  visitar: https://www.emailjs.com/ 
 * Sweetalerts https://sweetalert.js.org/ para mensajes tipo alerts de html, con estilos propios.
 * Este componente no necesita estilos.
 */

import React from 'react'
import ContactForm from './contactform/contactform'
import emailjs from '@emailjs/browser';
import swal from 'sweetalert'; //Sweetalerts

export default function Mailsender() {


  //funcion que se pasa por pops al componente hijo ContactForm y almacenará datos de contacto y mensaje a enviar.
    function createMail({name, message}){
      const templateParams = {
          from_name: name,
          message:  message
        };

        //Logica de emailJs. Sus respuestas las da a través de promesas.
        //Para las respuestas se untiliza sweetalerts, una si se cumple la promesa y otra si esta es rechazada.
        emailjs.send('service_czazpks','template_rwhm6qa', templateParams, '2OM96tezMc-H2Eqht')
          .then((response) => {
            swal ( " ¡Muchas Gracias! " , " ¡Pronto estaremos en contacto! ", "success"  );
          }, (err) => {
            swal ( " ¡No pudimos enviar tu mensaje! " , " Vuelve a intentarlo pronto ", "error"  );
          });   
    }

  return (
    <ContactForm add={createMail} /> //componente CreateForm con la función que se le envía por porps.
  )
}
