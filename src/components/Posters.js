import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import poster from "../Images/STFP.jpg"
import poster2 from "../Images/STFP2.jpg"
import poster3 from "../Images/STFP3.jpg"
import poster4 from "../Images/STFP4.jpg"
import poster5 from "../Images/Artboard.jpg"
import poster6 from "../Images/Artboard2.jpg"
import poster7 from "../Images/Artboard3.jpg"
import poster8 from "../Images/Artboard4.jpg"

const Posters = () => {
    return (
        <Container fluid id="posterSection">
            <Row id="posterPar">
                <Col />
                <Col lg="10" >
                <img src={poster} id="poster"/>
                <img src={poster2} id="poster"/>
                <img src={poster5} id="poster"/>
                <img src={poster6} id="poster"/>
                <img src={poster3} id="poster"/>
                <img src={poster4} id="poster"/>
                <img src={poster7} id="poster"/>
                <img src={poster8} id="poster"/>
                </Col>
                <Col />
            </Row>
        </Container>
    )
}

export default Posters
