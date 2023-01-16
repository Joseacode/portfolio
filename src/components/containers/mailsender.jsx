import React, { useState } from 'react'
import ContactForm from '../pures/contact/contact'

export default function Mailsender() {

    const [mail, setMail] = useState("");

    function createMail(dates){
        setMail(dates)
        console.log(mail)
    }

  return (
    <ContactForm add={createMail} />
  )
}
