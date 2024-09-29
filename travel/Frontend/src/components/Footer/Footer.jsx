import React from 'react'
import "./footer.css"
import { Container,Row,Col,ListGroup, ListGroupItem } from 'reactstrap';
import {Link} from 'react-router-dom';
import logo from "../../assets/images/logo.png"

const quick__Links = [
  {
    path:"/home",
    display: "Home"
  },
  {
    path: "/about",
    display: "About"
  },
  {
    path: "/tours",
    display: "Tours"
  }
];

const quick__Links2 = [
  {
    path: "/gallery",
    display: "Gallery"
  },
  {
    path: "login",
    display: "Login"
  },
  {
    path: "register",
    display: "Register"
  }
]

const Footer = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col>
            <div className="logo">
              <img src={logo} alt="" />
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo veniam neque eum earum dignissimos, saepe aspernatur ipsam eaque ullam doloribus sapiente, temporibus libero cupiditate, aperiam dolore quibusdam. Odio, quibusdam cupiditate?</p>

              <div className="social__links d-flex align-items-center gap-4">
                <span>
                  <Link to = '#' ><i class="ri-youtube-line"></i></Link>
                </span>

                <span>
                  <Link to = '#' ><i class="ri-github-fill"></i></Link>
                </span>

              </div>
              <span>
                  <Link to = '#' ><i class="ri-facebook-circle-line"></i></Link>
                </span>

                <span>
                  <Link to = '#' ><i class="ri-instagram-line"></i></Link>
                </span>
            </div>
          </Col>

          <Col lg='3'>
            <h5 className='footer__link-title'>Discover</h5>

            <ListGroup className="footer__quick-links">
              {
                quick__Links.map((item,index) => {
                  <ListGroupItem key={index} className="ps-0 border-0">
                    <Link to={item.path}>{item.display}</Link>
                  </ListGroupItem>
                })
              }
            </ListGroup>
          </Col>


          <Col lg='3'>
            <h5 className='footer__link-title'>Quick Links</h5>

            <ListGroup className="footer__quick-links">
              {
                quick__Links2.map((item,index) => {
                  <ListGroupItem key={index} className="ps-0 border-0">
                    <Link to={item.path}>{item.display}</Link>
                  </ListGroupItem>
                })
              }
            </ListGroup>
          </Col>



          <Col lg='3'>
            <h5 className='footer__link-title'>Contact Us</h5>

            <ListGroup className="footer__quick-links">
              
                  <ListGroupItem key={index} className="ps-0 border-0 d-flex align-items-center gap-3">
                    <h6 className='mb-0 d-flex align-items-center gap-2'>
                      <span><i class="ri-map-pin-line"></i></span>
                      Address:
                    </h6>

                    <p className='mb-0'>Mumbai, India</p>
                  </ListGroupItem>



                  <ListGroupItem key={index} className="ps-0 border-0 d-flex align-items-center gap-3">
                  <h6 className='mb-0 d-flex align-items-center gap-2'>
                    <span><i class="ri-mail-line"></i></span>
                    Email:
                  </h6>
                                
                  <p className='mb-0'>example@gmail.com</p>
                  </ListGroupItem>



                  <ListGroupItem key={index} className="ps-0 border-0 d-flex align-items-center gap-3">
                  <h6 className='mb-0 d-flex align-items-center gap-2'>
                    <span><i class="ri-phone-fill"></i></span>
                    Email:
                  </h6>
                                
                  <p className='mb-0'>+91 8974198613</p>
                  </ListGroupItem>
                
              
            </ListGroup>
          </Col>

          <Col lg='12' className="text-center pt-5">
              <p className='copyright'>Copyright {year}, design and developed by IT team. All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Footer