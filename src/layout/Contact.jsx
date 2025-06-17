import React, { useRef } from 'react';
import "./contact.css";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_w6bnf5c', 'template_ouryl4y', form.current, {
        publicKey: 'rrpe9LSJxDkSQj6pM',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          alert('Message sent successfully!');
          form.current.reset(); // clear form
        },
        (error) => {
          console.error('FAILED...', error.text);
          alert('Failed to send message. Try again later.');
        },
      );
  };

  return (
    <div className="contact">
      <div className="container">
        <main className="row">
          <section className="col left">
            <div className="contactTitle">
              <h2>Get In Touch with me</h2>
              <p>I will help you connect to the World</p>
            </div>

            <div className="contactInfo">
              <div className="iconGroup">
                <div className="icon">
                  <i className="fa-regular fa-envelope"></i>
                </div>
                <div className="details">
                  <span>Email:</span>
                  <span>kingsleyamiaka01@gmail.com</span>
                </div>
              </div>
              <div className="iconGroup">
                <div className="icon">
                  <i className="fa fa-phone"></i>
                </div>
                <div className="details">
                  <span>Phone No:</span>
                  <span>+2347046515316</span>
                </div>
              </div>
              <div className="iconGroup">
                <div className="icon">
                  <i className="fa-regular fa-address-book" aria-hidden="true"></i>
                </div>
                <div className="details">
                  <span>Address:</span>
                  <span>Abuja, Nigeria</span> {/* Replace or remove if not needed */}
                </div>
              </div>
            </div>

            <div className="socialMedia">
              <a href="https://www.facebook.com/amiakakingsley"><i className="fa-brands fa-facebook-f"></i></a>
              <a href="https://wa.me/2347046515316"><i className="fa-brands fa-whatsapp"></i></a>
              <a href="#"><i className="fa-brands fa-instagram"></i></a>
              <a href="#"><i className="fa-brands fa-telegram"></i></a>
            </div>
          </section>

          <section className="col right">
            <form ref={form} onSubmit={sendEmail} className="messageForm">
              <div className="inputGroup halfWidth">
                <input type="text" name="name" required />
                <label>Your Name</label>
              </div>

              <div className="inputGroup halfWidth">
                <input type="email" name="send_emial" required />
                <label>Email</label>
              </div>

              <div className="inputGroup fullWidth">
                <input type="text" name="title" required />
                <label>Subject</label>
              </div>

              <div className="inputGroup fullWidth">
                <textarea name="message" required></textarea>
                <label className='textArea-label'>Say Something</label>
              </div>

              <div className="inputGroup fullWidth">
                <button type="submit">Send Message</button>
              </div>
            </form>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Contact;