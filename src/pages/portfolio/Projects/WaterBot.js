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

export default function WaterBot(){
  
   
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
          <a href="https://t.me/TerebovlaVodokanal_bot" target="_blank" rel="noopener noreferrer">
              <FaTelegramPlane size={40} />
            </a>
          </Col>
      
          <Col lg="1">
          <a href="https://www.youtube.com/shorts/oUcjWH9b4RE" target="_blank" rel="noopener noreferrer">
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
    'name':'Water Bot',
    'title':``,
    'photo':[
    {
      img: 'https://zelse.asuscomm.com/PortfolioStatic/WaterBot/1.png',
      title: `The bot collects water meter readings in Terebovlia sity and creates an Excel file for the bot operator.`,
    },
  
  ]};