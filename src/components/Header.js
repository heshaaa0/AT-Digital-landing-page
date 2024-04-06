// components/Header.js
import React from 'react';
import Logo from '../images/Logo.png'


function Header() {
  return (
    <header className="header" style={{background:'rgba(107, 60, 201, 1)',width:'1,440px',height: '50px',padding: '26px 80px 26px 80px',gap: '0px',justify: 'space-between',opacity: '0px'}}>
       <img src={Logo} alt='Logo'/>
       <nav>
        <ul style={{ listStyleType: 'none', display: 'flex', gap: '28px', marginLeft:'750px' , marginTop:'-30px', color:'white'}}>
            <li>SERVICES</li>
            <li>ABOUT US</li>
            <li>CONTACT US</li>
            <li>CAREERS</li>
        </ul>
       </nav>
       
       
    </header>
  );
}

export default Header;
