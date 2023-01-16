import React, { useRef } from 'react'
import { propTypes } from 'prop-types'
import { Contact } from '../../models/contact.class'

export default function ContactForm({add}) {

  const dataRef = useRef({
    name: '',
    lastName: '',
    email: '',
  })
  
  function addContact(e){
    e.preventDefault()
    const newContact = new Contact(
    dataRef.name.current.value,
    dataRef.lastName.current.value,
    dataRef.email.current.value,
    false
  ) 
    add(newContact)
  }

  return (
    <form onSubmito='submit'>
      <input 
        placeholder='Nombre'

      />
      <input 
        placeholder='Apellido'
      />
      <input 
        placeholder='email'
      />
      <button 
        type='submit'
  
      />
    </form>
  )
}

ContactForm.protoTypes ={
  add: propTypes.func.isRequired
}