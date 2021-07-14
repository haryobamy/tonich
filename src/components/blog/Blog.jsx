import React from 'react'
import {
    Button,
    Container,
    Row,
    Col,
    Carousel,
    CarouselItem,
    CarouselIndicators,
  } from "reactstrap";
import Sidebar from './Sidebar';
import bg from "../../assets/image/bg1.jpg";
import bg2 from "../../assets/image/bg2.jpg";
import bg3 from "../../assets/image/bg3.jpg";

const Blog = () => {
    return (
        <>
        <Row>
           <Col lg='2'></Col>
           <Col lg='7' md='12'>
               <div className='blog'>
                   <div className='blogPosts'>
                       
                       <img src={bg} alt="" className="blogimg" />
                       <Button className='bg-light text-dark fw-bold topButton '>INTERIOR</Button>
                   </div>
                   
               </div>
           </Col>
           <Col lg='3' md='12'>
               <Sidebar/>
           </Col>
           </Row>
        </>
    )
}

export default Blog
