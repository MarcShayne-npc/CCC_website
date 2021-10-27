import React from 'react';
import { Carousel, Col, Container, Row } from "react-bootstrap";
import refuse from "../Images/forbidden.png";
import rethink from "../Images/light-bulb.png";
import reduce from "../Images/trend.png";
import re_use from "../Images/undo.png";
import re_purpose from "../Images/plastic-bottle.png";
import repair from "../Images/wrench.png";
import recycle from "../Images/triangular-arrows-sign-for-recycle.png";
import slide1 from "../Images/68ad87_14157afca1184b8ba486de4e11f6c5ba~mv2.jpg";
import slide2 from "../Images/0a0643_f7915876ad1147dc88d502b09c703ed7~mv2.jpg";
import slide3 from "../Images/68ad87_1dbd288e836e4c6aa25adc8021a483c4~mv2.jpg";
import slide4 from "../Images/0a0643_b5e0b7bf71464e3698d174c2a60717f9~mv2.jpg";
import slide5 from "../Images/68ad87_a4ec4d9154d54088b44676561fd4e3e1~mv2.jpg";
import ReactPlayer from 'react-player';
const SevenR = () => {
    return (
       <Container fluid id="7rSection">
           <Row id="row">
               <Col lg="3">
               
               </Col>
               <Col lg="2" md="auto" id="rowSeven">
                   
                         <Row lg="2 mt-5">
                            <p class="text-center mt-4 h4 text-white">RETHINK</p>
                            <img id="img"class="float-right" src={rethink} alt="forbidden"/>
                         </Row>

                         <Row lg="2 mt-5">
                            <p class="text-center mt-4 h4 text-white">REFUSE</p>
                            <img id="img"class="float-right" src={refuse} alt=""/>
                         </Row>

                         <Row lg="2 mt-5">
                            <p class="text-center mt-4 h4 text-white">REDUCE</p>
                            <img id="img"class="float-right" src={reduce} alt=""/>
                         </Row>

                         <Row lg="2 mt-5">
                            <p class="text-center mt-4 h4 text-white">RE-USE</p>
                            <img id="img"class="float-right" src={re_use} alt=""/>
                         </Row>

                         <Row lg="2 mt-5">
                            <p class="text-center mt-4 h4 text-white">RE-PUPOSE</p>
                            <img id="img"class="float-right" src={re_purpose} alt=""/>
                         </Row>

                         <Row lg="2 mt-5">
                            <p class="text-center mt-4 h4 text-white">REPAIR</p>
                            <img id="img"class="float-right" src={repair} alt=""/>
                         </Row>

                         <Row lg="2 mt-5 mb-5">
                            <p class="text-center mt-4 h4 text-white">RECYCLE</p>
                            <img id="img"class="float-right" src={recycle} alt=""/>
                         </Row>
                   
               </Col >
               <Col lg="4" md="auto">
                  <Col > 
                     <Carousel id="slide" >
                        <Carousel.Item>
                           <img id="slide" src={slide1} alt=""/>
                        </Carousel.Item>
                        <Carousel.Item>
                           <img id="slide" src={slide2} alt=""/>
                        </Carousel.Item>
                        <Carousel.Item>
                           <img id="slide" src={slide3} alt=""/>
                        </Carousel.Item>
                        <Carousel.Item>
                           <img id="slide" src={slide4} alt=""/> 
                        </Carousel.Item>
                        <Carousel.Item>
                           <img id="slide" src={slide5} alt=""/>
                        </Carousel.Item>
                     </Carousel>
                  </Col>
                  <Col>
                     <ReactPlayer url="https://www.youtube.com/watch?v=qeICIIIAxB4&t=41s" />
                  </Col>
                   
               </Col>
           </Row>
       </Container>
    )
}

export default SevenR
