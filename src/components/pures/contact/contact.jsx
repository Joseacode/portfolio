import React, { useRef } from 'react'
import PropTypes from 'prop-types';
import { Contact } from '../../../models/contact.class.js'
import styles from "./contact.module.css"
import { useNavigate } from 'react-router-dom';
import img from "../../../images/backmail.png"


export default function ContactForm({add}) {

  console.log(add)

  const nameRef = useRef("");
  const messageRef = useRef("")

  const navigate = useNavigate()

  function addContact(e){
    e.preventDefault()
    const newContact = new Contact(
      nameRef.current.value,
      messageRef.current.value
  ) 
      add(newContact)
      
      alert(`${nameRef.current.value}, Estaré en contacto contigo. Gracias!!!`)
      navigate("/")
  
  }

  return (
    <div  className={styles.cntform} style={ {background: `url(${img})`} }>
      <form onSubmit={ addContact }  className={styles.form}>
          
        <div>
          <input 
            placeholder="Ingresa tu Email"
            id="email"
            ref={nameRef}
            type="email"
            required
          />
        </div>

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

        <div>
          <input className={styles.button}
            
            type="submit"
            value={"Enviar"}
          />
        </div>
      </form>

    </div>
  )
}

ContactForm.protoTypes ={
  add: PropTypes.func.isRequired
}