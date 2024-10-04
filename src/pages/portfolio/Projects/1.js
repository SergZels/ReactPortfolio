import * as React from 'react';
import ImageListItem from '@mui/material/ImageListItem';
import { projest1 } from "../../../content_option";
import { Container, Row, Col } from "react-bootstrap";
import { Helmet, HelmetProvider } from "react-helmet-async";
import {
  FaGithub,
  FaYoutube,
  FaInstagram,

} from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa"; 

export default function Project1(){
    
    return(
      <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> {projest1['name']}</title>
          {/* <meta name="description" content={meta.description} /> */}
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="6">
            <h1 className="display-4 mb-4">{projest1['name']}</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
      
          <Col lg="1">
          <a href="https://t.me/TerInfobot" target="_blank" rel="noopener noreferrer">
              <FaTelegramPlane size={40} />
            </a>
          </Col>
          <Col lg="1">
          <a href="https://github.com/SergZels/TerInfoBot" target="_blank" rel="noopener noreferrer">
              <FaGithub size={40} />
            </a>
          </Col>
          <Col lg="1">
          <a href="https://www.youtube.com/shorts/a4DmC3CdNVc" target="_blank" rel="noopener noreferrer">
              <FaYoutube size={40} />
            </a>
          </Col>

        </Row>
        {projest1['photo'].map((item) => (
        <Row className="sec_sp">
          <Col lg="4">
            <h3 className="color_sec py-4">{item.title}</h3>
          </Col>
          <Col lg="8" className="d-flex align-items-center">
          <ImageListItem key={item.img}>
            <img
               srcSet={`${item.img}`}
               src={`${item.img}`}
               alt={item.title}
               loading="lazy"
             />
          </ImageListItem> 
          </Col>
        </Row>
        ))}
      </Container>
      </HelmetProvider>
    );
}