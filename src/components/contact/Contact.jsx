import emailjs from "emailjs-com";
import React, { useState } from 'react';
import './Contact.css'
import { FaTelegram, FaPhoneAlt } from 'react-icons/fa'
import { BsGithub, BsLinkedin } from 'react-icons/bs'
import emailrobot from '../../assets/emailrobot.png'

export default function Contact() {
  function sendEmail(e) {
    e.preventDefault();

    if (!Name || !email || !subject || !textA) {
      return alert('Fill in the fields provided!')
    }

    else {
      emailjs.sendForm('service_0dp1t3r', 'template_xxb527j', e.target, 'tmdt5JuumKtFzx_ec')
        .then((result) => { alert( result.status ===200 ? "Yuborildi" : "Yuborilmadi"); },
          (error) => {
            console.log(error.text);
          });
      e.target.reset()

      setEmail("")
      setName("")
      setSubject("")
      setTextA("")
    }
  }

  const [Name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [textA, setTextA] = useState('')
  return (
    <div className="contact_wrapper">
      <h1 className='contact_caption'>Contact</h1>
      <div className="contact_container">
        <div className="contact_container_left">
            <img src={emailrobot} alt="robot" />
        </div>
        <div className="contact_container_right">

        
         <form onSubmit={sendEmail}>
          <input type="text" value={Name} onChange={e => setName(e.target.value)} placeholder="Name" name="name" />
          <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email Address" name="email" />
          <input type="text" value={subject} onChange={e => setSubject(e.target.value)} placeholder="Subject" name="subject" />
          <textarea cols="25" value={textA} onChange={e => setTextA(e.target.value)} placeholder="Your message" name="message" rows="7"></textarea>
          <input type="submit" style={!Name || !email || !subject || !textA || textA.length < 5 ? { cursor: "no-drop", background: "red" } : { cursor: "pointer" }} className="submitBtn" value="Send Message"></input>
        </form>
        <div className="socialNetworks">
          <h3 className="socialNetworks_caption">Social networks.</h3>
          <div className="networks">
            <a href='tel:+998939119572' rel='noreferrer' className="tg">
              <FaPhoneAlt />
              <span>+998 93-911-95-72</span>             </a>
            <a target="_blank" href='https://t.me/Bahromjon0207' rel='noreferrer' className="tg">
              <FaTelegram />
            </a>
            <a href='https://github.com/abdulhayevbahrom' rel='noreferrer' target="_blank" className="tg">
              <BsGithub />           </a>
            <a href='https://www.linkedin.com/in/bahromjon-abdulhayev-883726234/' target="_blank" rel='noreferrer' className="tg">
              <BsLinkedin />
            </a>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}