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

export default function ByBit(){
  
   
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
       
      
          <Col lg="1">
          <a href="https://github.com/SergZels/BybitCopyTradingGO" target="_blank" rel="noopener noreferrer">
              <FaGithub size={40} />
            </a>
          </Col>
      
    
        </Row>
        {/* <Row className="mb-5 mt-3 pt-md-3 align-items-center">
        <Col lg="1"><FaCubes /> <strong>Stack</strong></Col> <Col lg="2"><FaPython /> Python</Col>
        <hr className="t_border my-4 ml-0 text-left" />
        </Row> */}
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
    'name':'ByBit',
    'title':`Python`,
    'photo':[
      {
        img: 'https://zelse.asuscomm.com/PortfolioStatic/Bybit/4.png',
        title: `My first project on GO. The project provides copy trade for traders on the ByBit exchange`,
      },
    {
      img: 'https://zelse.asuscomm.com/PortfolioStatic/Bybit/2.png',
      title: ``,
    },
    {
        img: 'https://zelse.asuscomm.com/PortfolioStatic/Bybit/3.png',
        title: `Vanilla js frontend (more than 1000 lines js code), Boorstrap`,
      },

  
  ]};