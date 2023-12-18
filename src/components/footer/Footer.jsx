import React from 'react';
import './Footer.scss';

const Footer = () => {
  return (
    <div className="footer two-column-footer">
      <div className="column">
        <div className="about_us">
          <p>Follow Us</p>
        </div>
        <div className="icons">
          <ul className="ulList">
            <li className="media">
              <a href="https://www.facebook.com/CSUSuceava" alt="">
                <i className="fab fa-facebook" aria-hidden="true"></i>
                <span className="sr-only">Facebook</span>
              </a>
            </li>
            <li className="media">
              <a href="https://twitter.com/usvro/status/328166609933983744">
                <i className="fab fa-twitter" aria-hidden="true"></i>
                <span className="sr-only">Twitter</span>
              </a>
            </li>
            <li className="media">
              <a href="https://www.instagram.com/csusuceava">
                <i className="fab fa-instagram" aria-hidden="true"></i>
                <span className="sr-only">Instagram</span>
              </a>
            </li>
            <li className="media">
              <a href="https://www.youtube.com/channel/UCoQXPQ1UNKKcbmiCKx7UcRA">
                <i className="fab fa-youtube" aria-hidden="true"></i>
                <span className="sr-only">YouTube</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    
      <div className="column">
        <div className="contact-details">
          <h2>Contact</h2>
          <p>
            <i className="fa fa-map-marker fa-lg" aria-hidden="true"></i>&nbsp;
            Suceava, Romania
          </p>
          <p>
            <i className="fa fa-phone fa-lg" aria-hidden="true"></i>&nbsp;&nbsp;
            <a className='tel' href="tel:0230522819">0230522819</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
