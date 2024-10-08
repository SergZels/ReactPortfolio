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

export default function MobDev(){
  
   
    return(
      <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Mobile development</title>
          {/* <meta name="description" content={meta.description} /> */}
        </Helmet>
        <Row className=" mt-3 pt-md-3 align-items-center">
          <Col lg="8">
            <h5 className="display-4 mb-4">Mobile development 2016</h5>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
       
                
        </Row>
       
       <Row className="sec_sp">
      <Col lg="5">
      <h4> In 2016, I wrote several mobile apps for Android in Java </h4>
    
       </Col>
       <Col lg="7" className="d-flex align-items-center">
         <img
              srcSet={`https://zelse.asuscomm.com/PortfolioStatic/Mobile/1.png`}
              src={`https://zelse.asuscomm.com/PortfolioStatic/Mobile/1.png`}
              alt={""}
              loading="lazy"
              className="zoom-image"
            />
         
          </Col>
        </Row>

        <Row className="sec_sp">
      <Col lg="5">
      <h4></h4>
 
    
       </Col>
       <Col lg="7" className="d-flex align-items-center">
         <img
              srcSet={`https://zelse.asuscomm.com/PortfolioStatic/Mobile/2.png`}
              src={`https://zelse.asuscomm.com/PortfolioStatic/Mobile/2.png`}
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

