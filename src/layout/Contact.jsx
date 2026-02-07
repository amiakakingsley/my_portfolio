import React, { useRef } from 'react';
import "./Contact.css";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef(null);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_w6bnf5c",
      "template_ouryl4y",
      formRef.current,
      { publicKey: "rrpe9LSJxDkSQj6pM" }
    ).then(
      () => {
        alert("Message sent successfully!");
        formRef.current.reset();
      },
      () => {
        alert("Failed to send message. Please try again later.");
      }
    );
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">

        {/* LEFT: CONTACT INFO */}
        <div className="contact-info">
          <header className="contact-header">
            <h2>Get in Touch</h2>
            <p>I’ll help you connect your ideas to the world.</p>
          </header>

          <address className="contact-details">

             <div className="contact-item">
              <i className="fa fa-phone" aria-hidden="true"></i>
              <span>
                <strong>Phone:</strong> +2347046515316
              </span>
            </div>

            <div className="contact-item">
              <i className="fa-regular fa-envelope" aria-hidden="true"></i>
              <span>
                <strong>Email:</strong> kingsleyamiaka@gmail.com
              </span>
            </div>


            <div className="contact-item">
              <i className="fa fa-location-dot" aria-hidden="true"></i>
              <span>
                <strong>Address:</strong> Freedom way, Lekki, Logos State, Nigeria
              </span>
            </div>

          </address>

          <div className="social-links">
            <a
              href="https://wa.me/2347046515316"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              <i className="fa-brands fa-whatsapp"></i>
            </a>

           <a href="https://www.linkedin.com/in/amiaka-kingsley-990bb02a0"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
              >
              <i className="fa-brands fa-linkedin"></i>
              </a>

              <a
              href="https://t.me/your-telegram-username"
              aria-label="Telegram"
              target="_blank"
              rel="noopener noreferrer"
              >
              <i className="fa-brands fa-telegram"></i>
              </a>

          </div>
        </div>

        {/* RIGHT: CONTACT FORM */}
        <div className="contact-form-wrapper">
          
          <form
            ref={formRef}
            onSubmit={sendEmail}
            className="contact-form"
            noValidate
          >

             <h2 className="contact-header">Drop a Message</h2>
            <div className="form-group half">
              <label htmlFor="name">Your Name</label>
              <input id="name" type="text" name="name" required />
            </div>

            <div className="form-group half">
              <label htmlFor="email">Email</label>
              <input id="email" type="email" name="email" required />
            </div>

            <div className="form-group full">
              <label htmlFor="subject">Subject</label>
              <input id="subject" type="text" name="title" required />
            </div>

            <div className="form-group full">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                required
              ></textarea>
            </div>

            <div className="form-group full">
              <button type="submit" className="btn-primary">
                Send Message
              </button>
            </div>
          </form>
        </div>

      </div>
    </section>
  );
};

export default Contact;
