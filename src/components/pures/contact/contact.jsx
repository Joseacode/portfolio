import React, { useRef } from 'react'
import PropTypes from 'prop-types';
import { Contact } from '../../../models/contact.class.js'
import styles from "./contact.module.css"
import { useNavigate } from 'react-router-dom';



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
    <div className={styles.form}>
      <form onSubmit={ addContact }>
        
        <div>
          <input 
            placeholder="Nombre"
            id="name"
            ref={nameRef}
            type="text"
          />
        </div>

        <textarea
          cols={30}
          rows={10}
          placeholder="Tu mensaje"
          id='message'
          ref={messageRef}
          type="text"
        >
        </textarea>

        <div>
          <input 
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