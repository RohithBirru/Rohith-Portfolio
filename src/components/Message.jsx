import React from 'react'
import './Message.css'
import {useRef} from 'react'
import emailjs from '@emailjs/browser'

const contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_z9ueqwd', 'template_b6lpe55', form.current, {
        publicKey: 'M9gbzAM6sDBZQeWUfxmUp',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <session id="contactsec">
    <div className="contacttitle">       
            <h2 className="contact">Contact</h2>
            <form className="contactform" ref={form} onSubmit={sendEmail}>
              <input className="name" type="text" placeholder="Enter name" name="your_name" />
              <input className="name" type="text" placeholder="Enter number" name="your_email"/>
              <textarea className="name" type="text" placeholder="write message here" rows="5" name="message"></textarea>
              <button className="submit" type="submit" value="send">Submit</button>

            </form>
    </div>
</session>
  )
}

export default contact
