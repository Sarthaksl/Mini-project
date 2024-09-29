import React from "react";
import './newsletter.css';
import { Container, Row, Col } from 'reactstrap';
import maleTourist from '../assets/images/maletouri.png';

const Newsletter = () => {

    return (
        <section className="newsletter">
            <Container>
                <Row>
                    <Col lg='6'>
                        <div className='newsletter__content'>
                            <h2>Subscribe to our newsletter</h2>
                            <p>Subscribe to our newsletter to receive exclusive offers and the latest news on our products and services.</p>

                            <div className="newsletter__input">
                                <input type="email" placeholder="Enter your email" />
                                <button className="btn newsletter__btn">
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </Col>

                    <Col lg='6'>
                        <div className="newsletter__img">
                            <img src={maleTourist} alt="" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Newsletter;