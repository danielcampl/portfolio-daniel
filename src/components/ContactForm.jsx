import React from "react";

import "../CSS/ContactForm.css";

export default function ContactForm() {
  return (
    <section>
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
                <input type="text" name="" required="required" />
                <span className="text">First Name</span>
                <span className="line" />
              </div>
            </div>
            <div className="col">
              <div className="input-box-name">
                <input type="text" name="" required="required" />
                <span className="text">Last Name</span>
                <span className="line" />
              </div>
            </div>
          </div>
          {/* EMAIL */}
          <div className="row100">
            <div className="col">
              <div className="input-box">
                <input type="text" name="" required="required" />
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
              <textarea required="required" />
              <span className="text">Type your message</span>
              <span className="line" />
            </div>
          </div>
        </div>
        {/* SEND BUTTOM */}
        <div className="row100 send-bnt">
          <div className="col">
            <input type="submit" value="Send message!" />
          </div>
        </div>
      </div>
    </section>
  );
}
