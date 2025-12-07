import Buttons from "../components/Buttons";
import "../styles/contact.scss";

function Contact() {
  return (
      <section>
        <div id="contact" className="contact">
        <h1 className="section-header">Contact Me</h1>

        <div className="contact-wrapper">
          {/* Contact Form */}
          <form id="contact-form" className="form-horizontal">
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              required
              className="form-control"
            />
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              required
              className="form-control"
            />
            <textarea
              id="message"
              name="message"
              placeholder="Your Message"
              rows="6"
              required
              className="form-control"
            ></textarea>
            <Buttons type='submit' text="Send" variant="dark"/>

          </form>

          {/* Contact Info */}
          <div className="direct-contact-container">
            <ul className="contact-list">
              <li><i className="fa fa-map-marker"></i> City, State</li>
              <li><i className="fa fa-phone"></i> <a href="tel:+12125552368">(212) 555‑2368</a></li>
              <li><i className="fa fa-envelope"></i> <a href="mailto:hitmeup@gmail.com">hitmeup@gmail.com</a></li>
            </ul>

            <div className="social-media-list">
              <a href="#" target="_blank"><i className="fa fa-github"></i></a>
              <a href="#" target="_blank"><i className="fa fa-codepen"></i></a>
              <a href="#" target="_blank"><i className="fa fa-twitter"></i></a>
              <a href="#" target="_blank"><i className="fa fa-instagram"></i></a>
            </div>

            <p className="copyright">© {new Date().getFullYear()} All Rights Reserved</p>
          </div>
        </div>
        </div>
        
      </section>
  );
}

export default Contact;


