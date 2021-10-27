import React from 'react'
import {Row, Carousel, Button} from 'react-bootstrap'
import slide1 from "../Images/event1.png"
import slide2 from "../Images/event2.png"
import slide3 from "../Images/event3.png"
import slide4 from "../Images/event4.png"
import slide5 from "../Images/event5.png"
import slide6 from "../Images/event6.png"
import slide7 from "../Images/event7.png"
import slide8 from "../Images/event8.png"
import slide9 from "../Images/event9.png"
import slide10 from "../Images/event10.png"
import slide11 from "../Images/event11.png"
import slide12 from "../Images/event12.png"
import slide13 from "../Images/event13.png"
import slide14 from "../Images/event14.png"
import slide15 from "../Images/event15.png"
export const Events = () => {
    return (
        <div class="events container-fluid bg-secondary" id="eventSection">
            <Row>
                <div class="col-lg-12 text-center">
            <p class="fw-bold h1 mt-5 text-light">How can you help?</p>
            <p class="fw-light h2 text-light">Bringing Change</p>
                </div>
            <div class="col-lg-12 text-center mt-1 mb-3">
                <Carousel id="slide2 text-ceter" >
                        <Carousel.Item>
                           <img id="slide2" src={slide1} alt=""/>
                            <Carousel.Caption>
                                <a class="btn btn-primary" id="read" href="https://www.facebook.com/CCCPhl" role="button">Read More</a>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                           <img id="slide2" src={slide2} alt=""/>
                            <Carousel.Caption>
                                <a class="btn btn-primary" id="read" href="https://www.facebook.com/CCCPhl" role="button">Read More</a>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                           <img id="slide2" src={slide3} alt=""/>
                            <Carousel.Caption>
                                <a class="btn btn-primary" id="read" href="https://www.facebook.com/CCCPhl" role="button">Read More</a>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                           <img id="slide2" src={slide4} alt=""/> 
                            <Carousel.Caption>
                                <a class="btn btn-primary" id="read" href="https://www.facebook.com/CCCPhl" role="button">Read More</a>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                           <img id="slide2" src={slide5} alt=""/>
                            <Carousel.Caption>
                                <a class="btn btn-primary" id="read" href="https://www.facebook.com/CCCPhl" role="button">Read More</a>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                           <img id="slide2" src={slide6} alt=""/>
                            <Carousel.Caption>
                                <a class="btn btn-primary" id="read" href="https://www.facebook.com/CCCPhl" role="button">Read More</a>
                            </Carousel.Caption>
                        </Carousel.Item><Carousel.Item>
                           <img id="slide2" src={slide7} alt=""/>
                            <Carousel.Caption>
                                <a class="btn btn-primary" id="read" href="https://www.facebook.com/CCCPhl" role="button">Read More</a>
                            </Carousel.Caption>
                        </Carousel.Item><Carousel.Item>
                           <img id="slide2" src={slide8} alt=""/>
                            <Carousel.Caption>
                                <a class="btn btn-primary" id="read" href="https://www.facebook.com/CCCPhl" role="button">Read More</a>
                            </Carousel.Caption>
                        </Carousel.Item><Carousel.Item>
                           <img id="slide2" src={slide9} alt=""/>
                            <Carousel.Caption>
                                <a class="btn btn-primary" id="read" href="https://www.facebook.com/CCCPhl" role="button">Read More</a>
                            </Carousel.Caption>
                        </Carousel.Item><Carousel.Item>
                           <img id="slide2" src={slide10} alt=""/>
                            <Carousel.Caption>
                                <a class="btn btn-primary" id="read" href="https://www.facebook.com/CCCPhl" role="button">Read More</a>
                            </Carousel.Caption>
                        </Carousel.Item><Carousel.Item>
                           <img id="slide2" src={slide11} alt=""/>
                            <Carousel.Caption>
                                <a class="btn btn-primary" id="read" href="https://www.facebook.com/CCCPhl" role="button">Read More</a>
                            </Carousel.Caption>
                        </Carousel.Item><Carousel.Item>
                           <img id="slide2" src={slide12} alt=""/>
                            <Carousel.Caption>
                                <a class="btn btn-primary" id="read" href="https://www.facebook.com/CCCPhl" role="button">Read More</a>
                            </Carousel.Caption>
                        </Carousel.Item><Carousel.Item>
                           <img id="slide2" src={slide13} alt=""/>
                            <Carousel.Caption>
                                <a class="btn btn-primary" id="read" href="https://www.facebook.com/CCCPhl" role="button">Read More</a>
                            </Carousel.Caption>
                        </Carousel.Item><Carousel.Item>
                           <img id="slide2" src={slide14} alt=""/>
                            <Carousel.Caption>
                                <a class="btn btn-primary" id="read" href="https://www.facebook.com/CCCPhl" role="button">Read More</a>
                            </Carousel.Caption>
                        </Carousel.Item><Carousel.Item>
                           <img id="slide2" src={slide15} alt=""/>
                            <Carousel.Caption>
                                <a class="btn btn-primary" id="read" href="https://www.facebook.com/CCCPhl" role="button">Read More</a>
                            </Carousel.Caption>
                        </Carousel.Item>
                </Carousel>
            </div>
            </Row>
        </div>
    )
}
