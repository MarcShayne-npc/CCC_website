import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import plasticCups from "../Images/plasticCups.gif"
import plastic2 from "../Images/Plastic2.gif"
import plastic3 from "../Images/Plastic3.gif"
import plastic4 from "../Images/Plastic4.gif"
import plastic5 from "../Images/Plastic5.gif"
import plastic6 from "../Images/Plastic6.gif"
import plastic7 from "../Images/Plastic7.gif"
const SingleUse = () => {
    return (
       <Container fluid id="singleuseSection">
        <Row id="SingleusePar">
           <Row>
               <Col />
                <Col lg="4">
                <p id="g" class="mt-5 mb-5 h1 text-center Aborder text-white">Unecessary Single-Use Platic</p>
                </Col>
                <Col />
           </Row>
           <Row>
                  <div class="Aborder col-lg-4 mt-5">
                <img id="gifPic" src={plasticCups} />
                <p class="text-center mt-5">Plastic cups (lower than 0.2mm in thickness)</p>
                  </div>
                  <div class="Aborder col-lg-4 mb-5">
                <img id="gifPic" src={plastic2} />
                <p class="text-center mt-5">Plastic coffee stirrers</p>
                  </div>
                  <div class="Aborder col-lg-4 mt-5">
                <img id="gifPic" src={plastic3} />
                <p class="text-center mt-5">Plastic knives</p>
                  </div>
           </Row>
           <Row>
                  <div class="Aborder col-lg-4 mt-5">
                <img id="gifPic" src={plastic4} />
                <p class="text-center mt-5">Plastic drinking straws</p>
                   </div>
                  <div class="Aborder col-lg-4 mb-5">
                <img class="plasticspon"id="gifPic" src={plastic5} />
                <p class="text-center mt-5">Plastic spoons</p>
                   </div>
                  <div class="Aborder col-lg-4 mt-5">
                <img id="gifPic" src={plastic6} />
                <p class="text-center mt-5">Plastic labo and thin-filmed sando bags (lower than 15 microns)</p>
                   </div>
           </Row>
           <Row>
               <Col />
                  <div class="Aborder col-lg-4 mb-5">
                <img id="gifPic" src={plastic7} />
                <p class="text-center mt-5">Plastic forks</p>
                  </div>
               <Col />
           </Row>
        </Row>
       </Container>
    )
}

export default SingleUse
