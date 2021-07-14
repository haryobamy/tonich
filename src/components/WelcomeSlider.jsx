import React from "react";
import {
 
  Row,
  Col,
  
} from "reactstrap";

import bg from "../assets/image/bg6.jpg";
import bg1 from "../assets/image/bg4.jpg";
import bg5 from "../assets/image/bg5.jpg";



const WelcomeSlider = () => {
    const [activeimg, setActiveimg] = React.useState(bg);

    const handleImage = (e) => {
        const {name,src} = e.target
        setActiveimg(src)
        console.log(name, src)

    }



  return (
    <>
      <Row className="justify-content-center mt-5">
        <Col lg="2"></Col>
        <Col lg="4" md="12">
          <div className="my-5">
            <h2>Welcome </h2>
            <span>
              <h2>To My World </h2>
            </span>
            <p className="mb-5 mt-4">
              Multiple lines of text that form the lede, informing new readers
              quickly and efficiently about what’s most interesting in this
              post’s contents.
            </p>
            <p className="mb-0 ">
              {" "}
              <a className="text-dark fw-bold text-decoration-none" href="#">
                BE THE FIRST TO KNOW <i className="fa fa-arrow-right"></i>
              </a>
            </p>
          </div>
        </Col>
        <Col lg="6" md="12">
            
          <div className="sliderImage">
          <h5 style={{transform:'rotate(270deg)', position:'absolute',bottom:'-25px',left:'660px', fontSize:"10px"}} className='text-dark'>ABOUT</h5>
            <img src={activeimg} alt="" className="activeimg" />
            <div className='sliderimageunactive'>
              <img src={bg1} alt="" className="sliderimg " name='bg1' value={bg1} onMouseOver={handleImage} />
              <img src={bg5} alt="" className="sliderimg"  name='bg5' value={bg5} onMouseOver={handleImage}/>
              <img src={bg} alt="" className="sliderimg"  name='bg' value={bg} onMouseOver={handleImage}/>
              <img src={bg1} alt="" className="sliderimg"  name='bg1' value={bg1} onMouseOver={handleImage} />
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default WelcomeSlider;


