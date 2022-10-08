import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import "../CSS/ContactForm.css";
import Button from "./Button";

const Result = () => {
  return <p className="row50">Your message has been succesfully sent 🚀</p>;
};

export default function ContactForm() {
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
    <form ref={form} onSubmit={sendEmail}>
      <div className="contact-container">
        <h1>Contact me</h1>
        <p>
          I’m open for new opportunities. However, if you have other request or
          question, don’t hesitate to use the form.
        </p>
        {/* NAME */}
        <div className="input-names">
          <div className="row100">
            <div className="col">
              <div className="input-box-name">
                <input type="text" name="firstname" required="required" />
                <span className="text">First Name</span>
                <span className="line" />
              </div>
            </div>
            <div className="col">
              <div className="input-box-name">
                <input type="text" name="lastname" required="required" />
                <span className="text">Last Name</span>
                <span className="line" />
              </div>
            </div>
          </div>
          {/* EMAIL */}
          <div className="row100">
            <div className="col">
              <div className="input-box">
                <input type="text" name="email" required="required" />
                <span className="text">Email</span>
                <span className="line" />
              </div>
            </div>
          </div>
        </div>
        {/* MESSAGE */}
        <div className="row100">
          <div className="col">
            <div className="input-box-message textarea">
              <textarea required="required" name="message" />
              <span className="text">Type your message</span>
              <span className="line" />
            </div>
          </div>
        </div>
        {/* SEND BUTTOM */}
        <div className="row100 send-bnt">
          <div className="col">
            <Button title="Send message!" />
          </div>
        </div>
        <div className="row">{result ? <Result /> : null}</div>
      </div>
    </form>
  );
}
