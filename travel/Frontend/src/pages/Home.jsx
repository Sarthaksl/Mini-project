import React from 'react'
import "../styles/home.css"

import { Container,Row,Col } from 'reactstrap';
import heroImg from '../assets/images/hero-img01.jpg'
import heroImg02 from '../assets/images/hero-img02.jpg'
import heroVideo from '../assets/images/hero-video.mp4'
import wordImg from '../assets/images/world.png'
import experinceImg from '../assets/images/experience.png'
import Subtitle from '../shared/Subtitle';
import SearchBar from '../shared/SearchBar';
import rajmachi_fort from '../assets/images/rajmachi_fort.png'
import pawna_lake from '../assets/images/pawna_lake.png'
import ServiceList from '../services/ServiceList';
import FeaturedTourList from '../components/Featured-tours/FeaturedTourList';
import MasonryImagesGallery from '../components/Image-gallery/MasonryImagesGallery';
import Testimonial from '../components/Testimonial/Testimonial';
import Newsletter from '../shared/Newsletter';

const Home = () => {
  return ( <>
  
  <section>
    <Container>
      <Row>
        <Col lg='6'>
          <div className='hero__content'>
              <div className="hero__subtitle d-flex align-items-center">
                <Subtitle subtitle={'know Before You Go'}/>
                <img src={wordImg} alt="" />
              </div>
              <h1>Traveling opens the door to creating <span
              className='highlight'> memories</span></h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas cum harum quos officiis reiciendis hic quasi unde, qui sunt rem recusandae ea eum doloremque fuga esse error dolor rerum. Maxime!
              </p>
          </div>
        </Col>

        <Col lg='2'>
          <div className="hero__img-box">
            <img src={rajmachi_fort} alt="" />
          </div>
        </Col>
        <Col lg='2'>
          <div className="hero__img-box mt-4">
            <video src={heroVideo} alt="" controls/>
          </div>
        </Col>
        <Col lg='2'>
          <div className="hero__img-box mt-5">
            <img src={pawna_lake} alt="" />
          </div>
        </Col>

        <SearchBar />
      </Row>
    </Container>
  </section>


  <section>
    <Container>
      <Row>
        <Col lg='3'>
          <h5 className="services__subtitle">What we serve</h5>
          <h2 className="services__title">We offer our best services</h2>
        </Col>
        <ServiceList/>
      </Row>
    </Container>
  </section>



  <section>
    <Container>
      <Row>
        <Col lg='12' className='mb-5'>
          <Subtitle subtitle={"Explore"}/>
          <h2 className="featured__tour-title">Our featured tours</h2>
        </Col>
        <FeaturedTourList/>
      </Row>
    </Container>
  </section>



  <section>
  <Container>
    <Row>
      <Col lg='6'>
        <div className="experience_content">
          <Subtitle subtitle={'Experience'} />
          <h2>With our all experience <br /> we will serve you</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br /> Quas aliquam, hic tempora inventore suscipit unde.</p>
        </div>



        <div className="counter__wrapper d-flex align-items-center gap-5
        ">
          <div className="counter__box">
            <span>12k+</span>
            <h6>Successful Trip</h6>
          </div>
          <div className="counter__box">
            <span>2k+</span>
            <h6>Regular clients</h6>
          </div>
          <div className="counter__box">
            <span>15</span>
            <h6>Years experience</h6>
          </div>

        </div>
      </Col>
      <Col lg='6'>
        <div className="experience_img">
          <img src={experinceImg} alt="" />
        </div>
      </Col>
    </Row>
  </Container>
</section>

<section>
  <Container>
  <Row>
    <Col lg='12'>
      <subtitle subtitle={'Gallery'}/>
      <h2 className='gallery__title'>Visit Our Customers Tour Gallery</h2>
    </Col>
    <Col lg='12'>
      <MasonryImagesGallery/>
    </Col>
  </Row>
 </Container>
</section>


<section>
  <Container>
    <Row>
      <Col lg='12'>
        <Subtitle subtitle= {'Fans Love'} /> 
        <h2 className='testimonial__title'>What Our Fans Say About Us</h2>
      </Col>
      <Col lg='12'>
        <Testimonial/>
      </Col>
    </Row>
  </Container>
</section>


<Newsletter/>
 
  </>
  );
};

export default Home;