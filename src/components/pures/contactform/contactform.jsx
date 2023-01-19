/**
 * Componente hijo del componente mailsender.
 * Por props recibirá una función que luego se ejecutará en el componente padrea.
 * Los estilos se utiliza CSS Modules. 
*/

import React, { useRef } from 'react'
import PropTypes from 'prop-types';
import { Contact } from '../../../models/contact.class.js'
import styles from "./contact.module.css"
import { useNavigate } from 'react-router-dom';
import img from "../../../images/backmail.png"

export default function ContactForm({add}) {

  const nameRef = useRef(""); //Hook React que devuelve un objeto ref mutable.
  const messageRef = useRef("")
  const navigate = useNavigate() //Hook React que no llevará a la pagina indicada.

  /**
   * addContact: Función que almacenará por referencia los datoos ingresados a los inputs a un objeto.
   * Notar que newcontact es un objeto creado a partir de la clase Contact.
   */

  function addContact(e){
    e.preventDefault()
    const newContact = new Contact(
      nameRef.current.value,
      messageRef.current.value
  ) 
      add(newContact)
      navigate("/")
  }

  return (

    <div  className={styles.cntform} style={ {background: `url(${img})`} }>
      
      <form onSubmit={ addContact }  className={styles.form}>
          
        {/* //Cuadro de dialogo donde se ingresa el mail */}
        <div>
          <input 
            placeholder="Ingresa tu Email"
            id="email"
            ref={nameRef}
            type="email"
            required
          />
        </div>
        
        {/* //Cuador de dialogo amplio, donde se ingresa las causas del contanto. */}
        <textarea
          cols={50}
          rows={10}
          placeholder="Tu mensaje"
          id='message'
          ref={messageRef}
          type="text"
          resize = "none"
          required
        >
        </textarea>
        
        {/* //Boton Bootstrap */}
        <button
          style={{width:"150px", margin:"30px 0px 0px 130px"}} //inline para no chocar con ek Classname de bootstrap
          type="submit"
          className="btn btn-primary btn-block"
          data-bs-toggle="button"
          >Enviar
        </button>
        
      </form>

    </div>
  )
}

/**
 * Proptype: cuando se reciven datos por props, con en este comonete, decimos que tipo de dato nos llegara.
 * En el caso de que llegue un tipo de dato diferente, tendremos un error.
 * La terminación isRequired, nos indica que el dato debe llegar de manera obligatoria.
*/

ContactForm.protoTypes ={
  add: PropTypes.func.isRequired
}