import * as React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { Helmet, HelmetProvider } from "react-helmet-async";
import {
  FaGithub,
  FaYoutube,
  FaInstagram,
  FaViber,
  FaInternetExplorer
} from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa"; 
import './Project.css';

export default function OrxidBotViber(){
  
   
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
          <a href="https://orxid.in.ua/ViberBotOrxid.php" target="_blank" rel="noopener noreferrer">
              < FaViber size={40} />
            </a>
          </Col>
      
         <Col lg="1">
          <a href="https://github.com/SergZels/Czech_beads_V2" target="_blank" rel="noopener noreferrer">
              <FaGithub size={40} />
            </a>
          </Col>
          <Col lg="1">
          <a href="https://www.youtube.com/shorts/In914tL6zbo" target="_blank" rel="noopener noreferrer">
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
    'name':'OrxidBot',
    'title':``,
    'photo':[
    {
      img: 'https://www.upwork.com/att/download/portfolio/persons/uid/1662865922213687296/profile/projects/files/a003ede0-8e96-4c43-9b31-cda8a1663d45',
      title: ` Viber Bot - a virtual employee of Orchid atelier, which provides answers to clients' questions about services, prices, contacts, and much more. This bot works together with an operator.`,
    },
  
  ]};