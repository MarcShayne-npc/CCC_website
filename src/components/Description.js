import { Col, Container, Row } from "react-bootstrap"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
const Description = () => {
    return (
        <Container fluid id="descSection">
            <Row >
                <Col lg="5" set  id="desc-Col">
                <h1 class="text-center ">Description</h1>
                <div class="w-75 p-5 mx-auto fs-5">
                <p> Single-use plastics (SUPs) embody the throwaway culture in our modern society that has been proven harmful to the environment and human health for causing pollution of water bodies and death or injury to marine organisms, blockages in our drainage and waterways, and release of toxic gases when burned or from the production and transportation of plastic products.</p>
                <p>Plastics have exceedingly long lifetimes, with ordinary plastic bottles having an average lifetime of 450 years, while others taking up to more than a century. They do not biodegrade, rather, break down under the action of weather, sun, and waves into tiny particles called microplastics, which are consumed by fish, thus entering into human food chain.</p>            
                </div>
                </Col>
                <Col md="4" id="desc-Col1" >
                <div class="w-75 p-4 mx-auto fs-4 text-center">
                <FontAwesomeIcon icon="microphone" id="dMicrophone" size="4x" color="white"/>
                <p id="quote">Single-use plastics [are] packaging or other consumer products that are thrown away after one brief use, are rarely recycled and prone to being littered.</p>
                <p>____________________</p>
                <p>European Commission</p>
                </div>
                </Col>
                <Col md id="desc-Col2" >
                
                </Col>
            </Row>
        </Container>
    )
}

export default Description
