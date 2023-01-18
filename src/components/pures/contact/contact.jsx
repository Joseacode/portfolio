import React, { useRef } from 'react'
import PropTypes from 'prop-types';
import { Contact } from '../../../models/contact.class.js'
import Swal from 'sweetalert2/dist/sweetalert2.js'
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
      Swal.fire('Estaremos en contacto pronto....')
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
          <button
            style={{width:"150px", margin:"30px 0px 0px 130px"}}
            type="submit"
            className="btn btn-primary btn-block"
            data-bs-toggle="button"
            >Enviar
          </button>

        </div>
      </form>

    </div>
  )
}

ContactForm.protoTypes ={
  add: PropTypes.func.isRequired
}