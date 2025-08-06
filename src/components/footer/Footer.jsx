import { Mail, MapPin, Phone, X } from "lucide-react";
import './footer.css';
import { FaFacebook, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="modern-footer">
      <div className="footer-main">
        <div className="">
          <div className="footer-grid">
            {/* Brand Section */}
            <div className="footer-brand">
              <h3 className="brand-title">Emperio</h3>
              <p className="brand-description">
                Discover the latest fashion trends and elevate your style with our premium collection of clothing and accessories.
              </p>
              <div className="social-links">
                <a href="https://web.facebook.com/" className="social-link">
                  <FaFacebook  size={20} />
                </a>
                <a href="https://www.instagram.com/" className="social-link">
                  <FaInstagram size={20} />
                </a>
                <a href="https://x.com/" className="social-link">
                  <X size={20} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="footer-section">
              <h5 className="footer-title">Shop</h5>
              <ul className="footer-links">
                <li><a href="#">New Arrivals</a></li>
                <li><a href="#">Men's Collection</a></li>
                <li><a href="#">Women's Collection</a></li>
                <li><a href="#">Accessories</a></li>
                <li><a href="#">Sale Items</a></li>
              </ul>
            </div>

            {/* Customer Service */}
            <div className="footer-section">
              <h5 className="footer-title">Customer Care</h5>
              <ul className="footer-links">
                <li><a href="#">About Us</a></li>
                <li><a href="#">Contact Support</a></li>
                <li><a href="#">Size Guide</a></li>
                <li><a href="#">Shipping Info</a></li>
                <li><a href="#">Returns</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="footer-section">
              <h5 className="footer-title">Get in Touch</h5>
              <div className="contact-info">
                <div className="contact-item">
                  <Mail size={16} />
                  <span>hello@emperio.com</span>
                </div>
                <div className="contact-item">
                  <Phone size={16} />
                  <span>(+62) 822 7516 4917</span>
                </div>
                <div className="contact-item">
                  <MapPin size={16} />
                  <span>Jakarta, Indonesia</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-content">
            <p className="copyright">© 2024 Emperio. All rights reserved.</p>
            <div className="footer-bottom-links">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
              <a href="#">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;