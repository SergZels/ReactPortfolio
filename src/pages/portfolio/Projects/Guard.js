import * as React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { Helmet, HelmetProvider } from "react-helmet-async";
import {
  FaGithub,
  FaYoutube,
  FaInstagram,
  FaInternetExplorer
} from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa"; 
import './Project.css';

export default function Guard(){
  
   
    return(
      <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> {projest['name']}</title>
          {/* <meta name="description" content={meta.description} /> */}
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3 align-items-center">
          <Col lg="8">
            <h5 className="display-4 mb-4">{projest['name']}</h5>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
          <Col lg="1">
          <a href="https://zelse.asuscomm.com/AdminkaCzBeads/" target="_blank" rel="noopener noreferrer">
              <FaInternetExplorer size={40} />
            </a>
          </Col>
      
          <Col lg="1">
          <a href="https://t.me/Czech_beads_bot" target="_blank" rel="noopener noreferrer">
              <FaTelegramPlane size={40} />
            </a>
          </Col>
          <Col lg="1">
          <a href="https://github.com/SergZels/Czech_beads_V2" target="_blank" rel="noopener noreferrer">
              <FaGithub size={40} />
            </a>
          </Col>
          <Col lg="1">
          <a href="https://www.youtube.com/shorts/HecgA7FqErE" target="_blank" rel="noopener noreferrer">
              <FaYoutube size={40} />
            </a>
          </Col>

        </Row>
        {projest['photo'].map((item) => (
        <Row className="sec_sp">
           <Col lg="5">
      <h4 className="color_sec py-4">{item.title.split('\n')[0]}</h4>
      {item.title.includes('-') && (
        <ul>
          {item.title.split('\n').slice(1).map((line, i) => (
            <li key={i}>- {line.replace(/^\s*-\s*/, '')}</li> // Видалення дефісу з початку
          ))}
        </ul>
      )}
    </Col>
          <Col lg="7" className="d-flex align-items-center">
         <img
              srcSet={`${item.img}`}
              src={`${item.img}`}
              alt={item.title}
              loading="lazy"
              className="zoom-image"
            />
         
          </Col>
        </Row>
        ))}

      </Container>
      </HelmetProvider>
    );
}

  const projest = {
    'name':'Guard Bot',
    'title':``,
    'photo':[
    {
      img: 'https://zelse.asuscomm.com/PortfolioStatic/Guard/5.png',
      title: `The script connects to the IP camera via rtsp protocol and uses a small neural network to search for a human silhouette`,
    },
    {
        img: 'https://zelse.asuscomm.com/PortfolioStatic/Guard/3.png',
        title: `If a person is detected, the photo is sent to the Telegram bot.`,
      },
      {
        img: 'https://zelse.asuscomm.com/PortfolioStatic/Guard/4.png',
        title: `The script also tries to recognize the color of clothes.`,
      },
      {
        img: 'https://zelse.asuscomm.com/PortfolioStatic/Guard/2.png',
        title: ``,
      },

  
  ]};