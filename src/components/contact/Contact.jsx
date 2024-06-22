import PropTypes from "prop-types";
import email from "../../assets/images/email.png";
import phone from "../../assets/images/phone.png";
import "./contact.scss";

const Contact = ({ menu }) => (
  <section className={`contact ${menu && "open"}`}>
    <div className="container">
      <div className="row">
        <div className="section-title padd-15">
          <h2>Contact Me</h2>
        </div>
      </div>
      <h3 className="contact-title padd-15">Take A Coffee & Chat With Me</h3>
      <h4 className="contact-sub-title padd-15">
        Feel free to reach out if you&apos;re looking for a developer, <br />{" "}
        have a question or just want to connect.
      </h4>
      <div className="row">
        <div className="footer">
          <div className="footer-item">
            <img src={email} alt="email" />
            <a href="mailto:nicholasemmanuel321@gmail.com" className="p-text">
              Hello, Emmanuel
            </a>
          </div>
          <div className="footer-item">
            <img src={phone} alt="phone" />
            <a href="tel:+2349163198026" className="p-text">
              +2349163198026
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

Contact.propTypes = {
  menu: PropTypes.bool.isRequired,
};

export default Contact;
