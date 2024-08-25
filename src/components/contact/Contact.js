import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
import "./contact.css";
export const Contact = () => {
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>svgoudar4101@gmail.com</h5>
            <a href="mailto:svgoudar4101@gmail.com">Send a message</a>
          </article>
          {/* <article className='contact_option'>
                        <MdOutlineEmail />
                        <h4>Email</h4>
                        <h5>prasannanaik141@gmail.com</h5>
                        <a href='mailto:prasannanaik131@gmail.com'>Send a message</a>
                    </article> */}
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>+918431739055</h5>
            <a href="https://api.whatsapp.com/send?phone=+918431739055">
              Send a message
            </a>
          </article>
        </div>
        <form>
          <input
            placeholder="Enter your Name"
            type="text"
            name="name"
            required
          ></input>
          <input
            placeholder="Enter your Email"
            type="email"
            name="email"
            required
          ></input>
          <textarea
            name="message"
            rows={7}
            placeholder="Your message"
          ></textarea>
          <button className="btn btn-primary" type="submit">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};
