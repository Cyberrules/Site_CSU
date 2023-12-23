import React from 'react';
import './Footer.scss';

const Footer = () => {

  const textFooter ={
    follow: 'Follow Us',
    facebook: 'Facebook',
    twitter: 'Twitter',
    instagram: 'Instagram',
    youtube: 'YouTube',
    titluContact: 'Contact',
    locatie: 'Suceava, Romania',
    telefon: '0230522819'
  }
  return (
    <div className="footer two-column-footer">
      <div className="column">
        <div className="about_us">
          <p>{textFooter.follow}</p>
        </div>
        <div className="icons">
          <ul className="ulList">
            <li className="media">
              <a href="https://www.facebook.com/CSUSuceava" alt="">
                <i className="fab fa-facebook" aria-hidden="true"></i>
                <span className="sr-only">{textFooter.facebook}</span>
              </a>
            </li>
            <li className="media">
              <a href="https://twitter.com/usvro/status/328166609933983744">
                <i className="fab fa-twitter" aria-hidden="true"></i>
                <span className="sr-only">{textFooter.twitter}</span>
              </a>
            </li>
            <li className="media">
              <a href="https://www.instagram.com/csusuceava">
                <i className="fab fa-instagram" aria-hidden="true"></i>
                <span className="sr-only">{textFooter.instagram}</span>
              </a>
            </li>
            <li className="media">
              <a href="https://www.youtube.com/channel/UCoQXPQ1UNKKcbmiCKx7UcRA">
                <i className="fab fa-youtube" aria-hidden="true"></i>
                <span className="sr-only">{textFooter.youtube}</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    
      <div className="column">
        <div className="contact-details">
          <h2>{textFooter.titluContact}</h2>
          <p>
            <i className="fa fa-map-marker fa-lg" aria-hidden="true"></i>&nbsp;
            {textFooter.locatie}
          </p>
          <p>
            <i className="fa fa-phone fa-lg" aria-hidden="true"></i>&nbsp;&nbsp;
            <a className='tel' href="tel:0230522819">{textFooter.telefon}</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
