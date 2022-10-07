import React from "react";

import "../CSS/ContactForm.css";

export default function ContactForm() {
  return (
    <section className="contact-container">
      <div>
        <h1>Contact me</h1>
      </div>
      <div className="row100">
        <div className="col">
          <div className="input-box">
            <input type="text" name="" required="required" />
            <span className="text">First Name</span>
            <span className="line" />
          </div>
        </div>
        <div className="col">
          <div className="input-box">
            <input type="text" name="" required="required" />
            <span className="text">Last Name</span>
            <span className="line" />
          </div>
        </div>
      </div>

      <div className="row100">
        <div className="col">
          <div className="input-box textarea">
            <textarea name="" id="" cols="30" rows="10" required="required" />
            <span className="text">Type your message</span>
            <span className="line" />
          </div>
        </div>
      </div>

    </section>
  );
}
