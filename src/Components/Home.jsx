import React, { useState, useEffect } from 'react';

import './Css/Home.css';
import { Typewriter } from 'react-simple-typewriter';
import softwareitem1 from '../assets/pngwing1.png';
import softwareitem2 from '../assets/pngwing2.png';
import softwareitem3 from '../assets/pngwing3.png';
import softwareitem4 from '../assets/brand-2.png';
import softwareitem5 from '../assets/pngwing4.png';
import softwareitem6 from '../assets/brand-1.png';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { FaTiktok } from 'react-icons/fa';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Link, useNavigate } from 'react-router-dom';
import ScrollReveal from 'scrollreveal';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
const Home = () => {

  //scrolreveal///////////
  useEffect(() => {
    ScrollReveal().reveal('.social-icons', {
      origin: 'top',
      distance: '50px',
      duration: 1000,
      reset: true,  // Animation will happen every time it scrolls into view
      easing: 'ease-in-out'
    });
  }, []);
  useEffect(() => {
    ScrollReveal().reveal('.text', {
      origin: 'bottom',
      distance: '50px',
      duration: 1000,
      reset: true,  // Animation will happen every time it scrolls into view
      easing: 'ease-in-out'
    });
  }, []);

  const [isDownloaded, setIsDownloaded] = useState(false);
  const handleDownload = () => {
    // Set the download flag to true after clicking
    setIsDownloaded(true);

    // Create a link element to trigger the download
    const link = document.createElement('a');
    link.href = '/cv.pdf'; // Update with your actual CV file path
    link.download = 'shashimal_liyanage_Cv.pdf'; // The downloaded file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link); // Remove the link after downloading
  };


  //backdrop
  const handleClose = () => {
    setOpen(false);
  };
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const handleNavigate = () => {
    setOpen(true); 
    setTimeout(() => {
      setOpen(false); 
      navigate('/about'); 
    }, 2000); 
  };
  return (
    <div>
       <Backdrop sx={(theme) => ({ color: '#fff', zIndex: theme.zIndex.drawer + 1 })} open={open} onClick={handleClose}><CircularProgress color="inherit" /></Backdrop>
      <div className="logo">
        <img src="logo-sashi.png" alt="" />
      </div>
      <div className='social-icons'>

        <div className='ss'><a href="https://www.facebook.com/profile.php?id=100013988086956" ><FacebookOutlinedIcon className='so' sx={{ color: '#1E90FF' }} /></a></div>
        <div className='ss'><a href="https://wa.me/+94714677205" ><WhatsAppIcon className='so' sx={{ color: ' #1E90FF' }} /></a></div>
        <div className="ss"><a href="https://www.tiktok.com/@shashimal_liyanage"><FaTiktok className="so" style={{ color: '#1E90FF', fontSize: '20px' }} /></a></div>
  
        <div className='ss'><a href="https://www.instagram.com/shashimal_liyanage_/profilecard/?igsh=aDRzM2Q3dzFndWJu"><InstagramIcon className='so' sx={{ color: '#1E90FF' }} /></a></div>
      </div>
      <div className='main-sec'>

        <div className='text'>
          <div className='text-section'>
            <h1>
              <span>Hello I'm </span>
            </h1>
            <h3>Shashimal Liyanage</h3>

            <span className='typewrite' style={{ display: 'inline-block', minHeight: '40px', color: '#1E90FF' }}>
              <Typewriter
                words={['Content Creater', 'videographer', 'video editor']}
                loop={true}
                speed={100}
                delay={2000}
                cursor
              />
            </span>


            <p>With over 2+ Years of experience as a freelance video editor, I bring stories to life through compelling visuals and seamless storytelling. My passion for filmmaking and content creation drives me to craft engaging videos that captivate audiences. Whether it’s editing dynamic vlogs, promotional content, or cinematic short films, wedding films, I thrive on collaborating with clients to transform their visions into reality. Let’s create something amazing together!</p>

            <div className="software">
              <div className="software_item">
                <img src={softwareitem1} alt="" />
              </div>
              <div className="software_item">
                <img src={softwareitem2} alt="" />
              </div>
              <div className="software_item">
                <img src={softwareitem3} alt="" />
              </div>
              <div className="software_item">
                <img src={softwareitem4} alt="" />
              </div>
              <div className="software_item">
                <img src={softwareitem5} alt="" />
              </div>
              <div className="software_item">
                <img src={softwareitem6} alt="" />
              </div>
            </div>

            <div className='cv' style={{ display: 'flex' }}>

              <button
                style={{ backgroundColor: '#1E35FF', color: '#ffffff' }}
                onClick={handleDownload}
              >
                {isDownloaded ? 'CV Downloaded' : 'Download CV'}
              </button>

              <button onClick={handleNavigate}>More Me</button>

            </div>
          </div>

        </div>

        <div className='image'>
          <div className='img-container'>
            <img src="WhatsApp Image 2024-10-29 at 14.06.46.png" alt="" className="main-image" />
            <img src="—Pngtree—blue ring ring ring_3775632.png" alt="" className="ring-animation" />
          </div>
          <div className="img-box">
            <div className="img-item">
              <img src="profile.png" alt="" srcset="" />
            </div>
          </div>
          <div className='top-right-image '>
            <img src="/shadow.png" alt="" />
          </div>
        </div>

      </div>

    </div>
  );
};

export default Home;
