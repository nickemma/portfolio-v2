import { AiOutlineLinkedin, AiOutlineTwitter } from 'react-icons/ai';
import { FaGithub, FaMedium } from 'react-icons/fa';
import PropTypes from 'prop-types';
import './contact.scss';

const Contact = ({ menu }) => (
  <section className={`contact ${menu && 'open'}`}>
    <div className="container">
      <div className="row">
        <div className="section-title padd-15">
          <h2>Contact Me</h2>
        </div>
      </div>
      <h3 className="contact-title padd-15">Do You Have Any Questions ?</h3>
      <h4 className="contact-sub-title padd-15">I&apos;M AT YOUR SERVICE</h4>
      <div className="row">
        <div className="contact-info-item padd-15">
          <div className="icon">
            <a href="https://github.com/nickemma" target="_blank" rel="noreferrer">
              <FaGithub className="react-icon" />
            </a>
            <h4>GitHub</h4>
          </div>
        </div>
        <div className="contact-info-item padd-15">
          <div className="icon">
            <a href="https://medium.com/@nicholasemmanuel321" target="_blank" rel="noreferrer">
              <FaMedium className="react-icon" />
            </a>
            <h4>Medium</h4>
          </div>
        </div>
        <div className="contact-info-item padd-15">
          <div className="icon">
            <a href="https://www.linkedin.com/in/techieemma/" target="_blank" rel="noreferrer">
              <AiOutlineLinkedin className="react-icon" />
            </a>
            <h4>LinkedIn</h4>
          </div>
        </div>
        <div className="contact-info-item padd-15">
          <div className="icon">
            <a href="https://twitter.com/techieEmma" target="_blank" rel="noreferrer">
              < AiOutlineTwitter className="react-icon" />
            </a>
            <h4>Twitter</h4>
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
