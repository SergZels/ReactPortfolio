
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
import Typewriter from "typewriter-effect";
import './Project.css';

export default function Prokat(){
  
   
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
            <h5 className="display-4 mb-4">
             
              <Typewriter
                    options={{
                      strings: [
                        projest['name'],
                        "VBA",
                        projest['name'],
                      ],
                      autoStart: true,
                      loop: true,
                      deleteSpeed: 10,
                    }}
                  />
              </h5>
            <hr className="t_border my-4 ml-0 text-left" />
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
    'name':'Prokat',
    'title':``,
    'photo':[
    {
      img: 'https://zelse.asuscomm.com/PortfolioStatic/Prokat/2.png',
      title: `Мій перший комерційний проект для сімейного бізнесу.`,
    },
    {
      img: 'https://zelse.asuscomm.com/PortfolioStatic/Prokat/3.png',
      title: `CRM система для прокату дитячих карнавальних костюмів`,
    },
    {
      img: 'https://zelse.asuscomm.com/PortfolioStatic/Prokat/4.png',
      title: ``,
    },
    {
      img: 'https://zelse.asuscomm.com/PortfolioStatic/Prokat/5.png',
      title: `Адмінка`,
    },
    {
      img: 'https://zelse.asuscomm.com/PortfolioStatic/Prokat/6.png',
      title: `Статистика`,
    },
    {
      img: 'https://zelse.asuscomm.com/PortfolioStatic/Prokat/7.png',
      title: ``,
    },
    {
      img: 'https://zelse.asuscomm.com/PortfolioStatic/Prokat/8.png',
      title: `Квитанція`,
    },
    {
      img: 'https://zelse.asuscomm.com/PortfolioStatic/Prokat/9.png',
      title: `Багато різних алгоритмів пошуку та обробки замовлень`,
    },
    {
      img: 'https://zelse.asuscomm.com/PortfolioStatic/Prokat/10.png',
      title: `Кастомна СУБД`,
    },
    {
      img: 'https://zelse.asuscomm.com/PortfolioStatic/Prokat/11.png',
      title: ``,
    },
    {
      img: 'https://zelse.asuscomm.com/PortfolioStatic/Prokat/12.png',
      title: ``,
    },
    {
      img: 'https://zelse.asuscomm.com/PortfolioStatic/Prokat/13.png',
      title: ``,
    },
    {
      img: 'https://zelse.asuscomm.com/PortfolioStatic/Prokat/14.png',
      title: ``,
    },
    {
      img: 'https://zelse.asuscomm.com/PortfolioStatic/Prokat/15.png',
      title: ``,
    },
    {
      img: 'https://zelse.asuscomm.com/PortfolioStatic/Prokat/16.png',
      title: ``,
    },
    {
      img: 'https://zelse.asuscomm.com/PortfolioStatic/Prokat/17.png',
      title: ``,
    },
    {
      img: 'https://zelse.asuscomm.com/PortfolioStatic/Prokat/18.png',
      title: ``,
    },
   
  
  ]};