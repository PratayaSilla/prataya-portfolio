import './FooterContact.css';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

const FooterContact = () => {
  return (
    <footer id="contact" className="footer-contact">
      <div className="footer-grid">

        <div className="contact-info">
          <h2 className="footer-title">
            <span className="yellow">/</span>get-in-touch
          </h2>
          
          <div className="contact-method">
            <FaEnvelope className="contact-icon" />
            <div>
              <h3>Email</h3>
              <a href="mailto:proprataya339@gmail.com?cc=yourmail@domain.com&subject=Let's%20Work%20Together&body=Hey%2C%20Prataya!">proprataya339@gmail.com</a>
            </div>
          </div>
          
          <div className="contact-method">
            <FaPhoneAlt className="contact-icon" />
            <div>
              <h3>Phone</h3>
              <a href="tel:+918917375064">+91 8917375064</a>
            </div>
          </div>
        </div>


        <div className="quick-links">
          <h3>Navigate</h3>
          <ul>
            {['home', 'about', 'projects', 'education', 'contact'].map((item) => (
              <li key={item}>
                <a href={`#${item}`}>{item.charAt(0).toUpperCase() + item.slice(1)}</a>
              </li>
            ))}
          </ul>
        </div>


        <div className="social-links">
          <h3>Connect</h3>
          <div className="social-icons">
            <a href="https://github.com/PratayaSilla" aria-label="GitHub">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/pratayasilla/" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            <a href="https://x.com/proprataya" aria-label="Twitter">
              <FaTwitter />
            </a>
            <a href="https://leetcode.com" aria-label="LeetCode">
              <SiLeetcode />
            </a>
          </div>

          
          <div className="footer-cta">
            <p>Ready to collaborate?</p>
            <button 
              className="cta-button"
              onClick={() => window.location.href = "mailto:proprataya339@gmail.com?cc=yourmail@domain.com&subject=Let's%20Work%20Together&body=Hey%2C%20Prataya!"}
            >
              Let's Build Something
            </button>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} No rights reserved 👍🏻</p>
        <p>Built with React and passion</p>
      </div>
    </footer>
  );
};

export default FooterContact;