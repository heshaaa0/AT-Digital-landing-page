import React, { useState } from 'react';
import Background from '../images/back.png';
import Img1 from '../images/image 1.png';
import Img2 from '../images/image 2.png';

function MainContent() {
    const [expanded, setExpanded] = useState([false, false, false]);
  
    const toggleExpand = (index) => {
      const newExpanded = [...expanded];
      newExpanded[index] = !newExpanded[index];
      setExpanded(newExpanded);
    };

  return (
    <div className="main-content">
      <div style={{ 
        backgroundImage: `url(${Background})`, 
        backgroundSize: 'cover', 
        backgroundPosition: 'center', 
        minHeight: '400px', 
        position: 'relative', 
        paddingTop: '250px' 
      }}>
        <div>
          <p style={{ 
            background: 'linear-gradient(to right, rgba(120, 191, 145, 1), rgba(28, 189, 221, 1))',
            marginLeft:'400px',
            font:'Inter', 
            fontWeight:'700',
            fontSize:'48px',
            width:'556px',
            height:'300px',
            position: 'absolute', 
            transform: 'translate(-50%, -50%)', 
            color: '#fff', 
            textAlign: 'left', 
            padding:'30px' 
          }}>
            We crush your competitors, goals, and sales records - without the B.S.
          </p> 
          <button style={{ 
            backgroundColor:'#F28D35', 
            color:'white',
            marginTop:'50px',
            marginLeft:'-460px',
            position: 'absolute', 
            top: '60%', 
            left: '50%', 
            transform: 'translate(-50%, -50%)',  
            padding: '10px 20px', 
            borderRadius: '4px', 
            border: 'none', 
            cursor: 'pointer' 
          }}> GET FREE CONSULTATION</button>
        </div>
      </div>
          
      <div style={{display:'flex'}}>
        <img src={Img1} alt='Image1' style={{marginLeft:'100px'}}/>
        <div style={{marginTop:'120px', marginLeft:'70px'}}>
          <h2> Web & Mobile App Development</h2>
          <p> Your web and mobile Apps are pieces of the puzzle to grow your <br/> business. We use frameworks which tailor content and engagement <br/> methods to respond to different intents shown by your potential<br/> customers who interact with your business online.</p>
          <button style={{  
            marginTop:'20px',
            marginLeft:'65px',
            backgroundColor:'#F28D35', 
            color:'white',
            position: 'absolute', 
            transform: 'translate(-50%, -50%)',  
            padding: '10px 20px', 
            borderRadius: '4px', 
            border: 'none', 
            cursor: 'pointer' 
          }}>LEARN MORE</button>
        </div>
      </div>

      <div style={{display:'flex'}}>
        <div style={{marginTop:'120px', marginLeft:'90px'}}>
          <h2>Digital Strategy Consulting</h2>
          <p>Your digital strategy should complement the overall marketing strategy <br/>of the company. In online marketing, each component will never work in <br/> isolation and every business needs a different mix. We provide a clear <br/> concept and strategic overview to find the most efficient model for <br/>your business.</p>
          <button style={{  
            marginTop:'20px',
            marginLeft:'65px',
            backgroundColor:'#F28D35', 
            color:'white',
            position: 'absolute', 
            transform: 'translate(-50%, -50%)',  
            padding: '10px 20px', 
            borderRadius: '4px', 
            border: 'none', 
            cursor: 'pointer' 
          }}>LEARN MORE</button>
        </div>
        <img src={Img2} alt='Image2' style={{marginLeft:'100px'}}/>
      </div>

      <div style={{marginLeft:'350px',gap:'28px'}}>
        <h1 style={{ color: '#6B3CC9'}}>Frequently Asked Questions</h1>
        <div style={{marginLeft:'-20px'}}>
          <h3 onClick={() => toggleExpand(0)} style={{ cursor: 'pointer'  ,background: 'rgba(250, 248, 255, 1)',borderRadius:'7px', color: '#6B3CC9',padding:'20px', width:'846px'}}> Lorem ipsum dolor sit amet consectetur. Leo at sit eu libero? {expanded[0] ? '-' : '+'}</h3>
          {expanded[0] && <p style={{ background: '#FAF8FF', color: '#6F6C90', padding: '10px' }}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, temporibus.</p>}
        </div>
        <div style={{marginLeft:'-20px'}}>
          <h3 onClick={() => toggleExpand(1)} style={{ cursor: 'pointer',background: 'rgba(250, 248, 255, 1)',borderRadius:'7px', color: '#6B3CC9',padding:'20px', width:'846px'}}> Lorem ipsum dolor sit amet consectetur. Tortor scelerisque integer? {expanded[1] ? '-' : '+'}</h3>
          {expanded[1] && <p style={{ background: '#FAF8FF', color: '#6F6C90', padding: '10px' }}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, temporibus.</p>}
        </div>
        <div style={{marginLeft:'-20px'}}>
          <h3 onClick={() => toggleExpand(2)} style={{ cursor: 'pointer',background: 'rgba(250, 248, 255, 1)',borderRadius:'7px', color: '#6B3CC9',padding:'20px', width:'846px'}}> Lorem ipsum dolor sit amet consectetur. Faucibus scelerisque nunc? {expanded[2] ? '-' : '+'}</h3>
          {expanded[2] && <p style={{ background: '#FAF8FF', color: '#6F6C90', padding: '10px' }}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, temporibus.</p>}
        </div>
      </div>
    </div>
  );
}

export default MainContent;
