import React from 'react';

const Footer = () => {
    return (
        <footer className="footer p-10 bg-sky-100 text-neutral-content my-12">
        <div>
            <span className="footer-title">Medical Health</span> 
    <a className="link link-hover">We bring the years, global experience,<br /> and stamina to guide our clients through <br /> new and often disruptive realities.</a>
    <a className="link link-hover">55 Main Road, USA</a>
    <a className="link link-hover">support@gmail.com</a>
    <a className="link link-hover">+012 (345) 678 99</a>
  </div> 
  <div>
    <span className="footer-title">Popular Services</span> 
    <a className="link link-hover">Heart Caring</a>
    <a className="link link-hover">Orthopedics</a>
    <a className="link link-hover">Covid 19</a>
    <a className="link link-hover">Gastro Care</a>
  </div> 
  <div>
    <span className="footer-title">Newsletters</span> 
    <a className="link link-hover">Sed ut perspiciatis unde omniste natus <br /> error sit voluptatem</a>
    
        </div>

        
        </footer>
    );
};

export default Footer;