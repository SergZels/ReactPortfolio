import * as React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { Helmet, HelmetProvider } from "react-helmet-async";
import {
  FaGithub,
  FaYoutube,
  FaInstagram,
  FaCubes,
  FaPython,
  FaInternetExplorer
} from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa"; 
import './Project.css';
import { Margin } from '@mui/icons-material';

export default function OtherPr(){
  
   
    return(
      <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> {projest['name']}</title>
          {/* <meta name="description" content={meta.description} /> */}
        </Helmet>
        <Row className=" mt-3 pt-md-3 align-items-center">
          <Col lg="8">
            <h5 className="display-4 mb-4">{projest['name']}</h5>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
       
                
        </Row>
       
       <Row className="sec_sp">
      <Col lg="5">
      <h4> Game Bot</h4>
      <a href="https://t.me/ZelGameBot" target="_blank" rel="noopener noreferrer" className='ic'>
              <FaTelegramPlane size={40} />
       </a>
      <a href="https://github.com/SergZels/gameBot" target="_blank" rel="noopener noreferrer" className='ic'>
              <FaGithub size={40} />
      </a>
      <a href="https://www.youtube.com/shorts/xVSC31UXQVw" target="_blank" rel="noopener noreferrer" className='ic'>
           <FaYoutube size={40} />
      </a>
       </Col>
       <Col lg="7" className="d-flex align-items-center">
         <img
              srcSet={`https://zelse.asuscomm.com/portfolio/img/port4.jpg`}
              src={`https://zelse.asuscomm.com/portfolio/img/port4.jpg`}
              alt={""}
              loading="lazy"
              className="zoom-image"
            />
         
          </Col>
        </Row>

        <Row className="sec_sp">
      <Col lg="5">
      <h4> This bot sends invitation to Telegram channel after clients complete the registration. Bot enters registration data into Google Sheets
      The programming language is Python</h4>
 
       <a href="https://www.youtube.com/shorts/dCHL86dQdHs" target="_blank" rel="noopener noreferrer" className='ic'>
           <FaYoutube size={40} />
      </a>
       </Col>
       <Col lg="7" className="d-flex align-items-center">
         <img
              srcSet={`https://zelse.asuscomm.com/portfolio/img/port8.jpg`}
              src={`https://zelse.asuscomm.com/portfolio/img/port8.jpg`}
              alt={""}
              loading="lazy"
              className="zoom-image"
            />
         
          </Col>
        </Row>

        
        <Row className="sec_sp">
      <Col lg="5">
      <h4> Bot for a logistics company with an admin panel on Django, using microservices architecture and DRF
      The programming language is Python</h4>
 
       <a href="https://github.com/SergZels/BotDrivers" target="_blank" rel="noopener noreferrer" className='ic'>
           <FaGithub size={40} />
      </a>
       </Col>
       <Col lg="7" className="d-flex align-items-center">
         <img
              srcSet={`https://zelse.asuscomm.com/portfolio/img/port9.jpg`}
              src={`https://zelse.asuscomm.com/portfolio/img/port9.jpg`}
              alt={""}
              loading="lazy"
              className="zoom-image"
            />
         
          </Col>
        </Row>
     

      </Container>
      </HelmetProvider>
    );
}

  const projest = {
    'name':' Other',
    'title':`Python`,
    'photo':[
    {
      img: 'https://zelse.asuscomm.com/portfolio/img/port4.jpg',
      title: ``,
    },
    {
        img: 'https://zelse.asuscomm.com/PortfolioStatic/Bybit/3.png',
        title: ``,
      },
  
  ]};