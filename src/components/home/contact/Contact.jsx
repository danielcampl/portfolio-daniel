import React, { useRef, useState } from "react";

import emailjs from "@emailjs/browser";
import './Contact.css';

const Result = () => {
  return <span className="succes-msg">Sua mensagem foi enviada com sucesso 🚀</span>;
};

export default function Contact() {
  const [result, showResult] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_1luzg18",
        "template_2dbflqg",
        form.current,
        "bSdbJUtA_u6ASV4ym"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    showResult(true);
  };

  return (
    <section id="contact" className="contact-container">
      <div className="form-container">
          <form ref={form} onSubmit={sendEmail} className="form-content">
            <h1>Entre em Contato</h1>
            <h2>Let's Work Together!</h2>
            <input placeholder="Name" required="required" />
            <input placeholder="Email" required="required" />
            <textarea placeholder="Write your message" rows={10} required="required" />
            <button>Enviar</button>
            <div className="msg-container">{result ? <Result /> : null}</div>
          </form>
      </div>
    </section>
  );
}