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

export default function RR(){
  
   
    return(
      <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> {projest2['name']}</title>
          {/* <meta name="description" content={meta.description} /> */}
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3 align-items-center">
          <Col lg="8">
            <h5 className="display-4 mb-4">{projest2['name']}</h5>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
          <Col lg="1">
          <a href="https://orxid.in.ua/mobilesDataBase/admin/Mobiles/tickets/" target="_blank" rel="noopener noreferrer">
              <FaInternetExplorer size={40} />
            </a>
          </Col>
                    

        </Row>
        {projest2['photo'].map((item) => (
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

const projest2 = {
    'name':'Large custom CRM for a phone repair shop',
    'title':`The bot is written in Python language using microservices architecture and consists of 3 components:
PostgreSQL DB
Backend on Django
Frontend is the bot itself using aiogram`,
    'photo':[
    {
      img: 'https://www.upwork.com/att/download/portfolio/persons/uid/1662865922213687296/profile/projects/files/31c12130-f8a7-4ca1-acdf-b158b62ce3c0',
      title: `This is a large project that I have been developing for several months. The project is developed on Django, PostgreSQL database.`,
    },
    {
      img: 'https://zelse.asuscomm.com/PortfolioStatic/RR/2.png',
      title: `The client has the opportunity to
- Keep records of orders,
- Print labels and invoices
- Work with a spare parts warehouse
- Keep track of the salaries of the masters
- Maintain correspondence with customers
- and much more`,
    },
    {
      img: 'https://www.upwork.com/att/download/portfolio/persons/uid/1662865922213687296/profile/projects/files/648df716-b9ab-483c-becd-a9d68dec4e76',
      title: ``,
    },
    {img: 'https://zelse.asuscomm.com/PortfolioStatic/RR/17.png',
      title: ``,
    },
    {img: 'https://zelse.asuscomm.com/PortfolioStatic/RR/3.jpg',
      title: ``,
    },
    {img: 'https://zelse.asuscomm.com/PortfolioStatic/RR/12.jpg',
      title: ``,
    },
    {img: 'https://zelse.asuscomm.com/PortfolioStatic/RR/10.jpg',
      title: ``,
    },
    {img: 'https://zelse.asuscomm.com/PortfolioStatic/RR/4.jpg',
      title: ``,
    },
    {img: 'https://zelse.asuscomm.com/PortfolioStatic/RR/8.jpg',
      title: ``,
    },
    {img: 'https://zelse.asuscomm.com/PortfolioStatic/RR/11.jpg',
      title: ``,
    },
    {img: 'https://zelse.asuscomm.com/PortfolioStatic/RR/7.jpg',
      title: ``,
    },
    {img: 'https://zelse.asuscomm.com/PortfolioStatic/RR/15.png',
      title: ``,
    },
    {img: 'https://zelse.asuscomm.com/PortfolioStatic/RR/13.jpg',
      title: ``,
    },
    {img: 'https://zelse.asuscomm.com/PortfolioStatic/RR/16.png',
      title: ``,
    },
  
  ]};