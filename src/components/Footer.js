import React from 'react';
import Logo from '../images/Logo.png';

function Footer() {
  return (
    <footer style={{ background: 'rgba(107, 60, 201, 1)', color: '#fff', padding: '20px', textAlign: 'center', height:'266px' , display:'flex', justifyContent: 'space-evenly', alignItems: 'center' }}>
      <div style={{ flex: 1 , marginTop:'-100px',justifyContent:'space-between' }}>
        <img src={Logo} alt='Logo' style={{ width: '238.89px',height: '36.11px',top: '-11.11px',gap: '0px',opacity: '0px' , marginLeft:'-120px'}} />
        <p style={{ textAlign: 'left', marginLeft: '50px', height:'57px',width:'413px', fontWeight:'400', fontSize:'16px', lineHeight:'19.2px'}}>Your goal is our target. Not anything in between. We use <br />online marketing platforms and tools to achieve single  <br /> objective - your business results.</p>
      </div>
      <div style={{ flex: 1 }}>
        <div style={{marginLeft:'80px'}}>
          <h3 style={{marginTop:'-10px', fontWeight:'600',fontSize:'21px', lineHeight:'25.41px', color:'rgba(255, 255, 255, 1)'}}>Our Technologies</h3>
          <ul style={{ listStyleType: 'none' , textAlign:'left', marginLeft:'80px'}}> 
            <li>ReactJS</li><br/>
            <li>Gatsby</li><br/>
            <li>NextJS</li><br/>
            <li>NodeJS</li>
          </ul>
        </div>
      </div>
      <div style={{ flex: 1 }}>
        <div>
          <h3 style={{marginTop:'-50px', marginLeft:'-40px', fontWeight:'600',fontSize:'21px', lineHeight:'25.41px', color:'rgba(255, 255, 255, 1)'}}>Our Services</h3>
          <ul style={{ listStyleType: 'none', textAlign:'left' ,marginLeft:'100px'}}> 
            <li>Social media Marketing</li><br/>
            <li>Web & Mobile App Development</li><br/>
            <li>Data & Analytics</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
