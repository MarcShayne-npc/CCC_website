import {Button, Container, Row, Col } from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
const Awareness = () => {
    return (
    
       <Container fluid id="actSection">
             <Row>
                 <Col lg id="awa1"  className="box text-center">  
                 <FontAwesomeIcon icon="lightbulb" size="4x" id="bulb"  color="white" />         
                <h2>Republic Act 9729</h2>
                <p> An Act mainstreaming climate change into government policy formulation, 
                establishing the framework strategy and program climate change, 
                creating for this purpose the Climate Change Commission, and for other purposes</p>
                <a href = '#' ><Button variant="outline-light">Read More{'>'}</Button></a>
                 </Col>

                 <Col lg id="awa2" className="box text-center">
                <FontAwesomeIcon icon="microphone" size="4x" id="microphone" color="white"/>
                <h2>Republic Act 10174</h2>
                <p>An Act establishing the People's Survival Fund to provide 
                long-term finance streams to enable the government to effectively address the problem of climate change.  
                Amending for the purpose Republic Act No. 9729, otherwise known as the 'Climate Change Act 2009', and for other purposes.</p>
                <a href = '#' ><Button variant="outline-light">Read More{'>'}</Button></a>
                 </Col>

                <Col lg id="awa3" className="box text-center">
                <FontAwesomeIcon icon="pencil-alt" size="4x" id="pencil" color="black" />
                <h2>Republic Act 8435</h2>
                <p>An Act prescribing urgent related measures to modernize the Agriculture and 
                Fisheries sectors of the country in order to enhance their profitability
                , and prepare said sectors for the challenges of globalization through adequate, focused, 
                and rational delivery of necessary support services, appropriating funds therefore and for other purposes.</p>
                <a href = '#' ><Button variant="outline-dark">Read More{'>'}</Button></a>
                </Col >
        
                <Col lg id="awa4" className="box text-center">
                <FontAwesomeIcon icon="comments" size="4x" id="comment" color="Black"/>
                <h2>Republic Act 9512</h2>
                <p>An Act to promote environmental awareness through environmental education and for other purposes.</p>
                <a href = '#' ><Button variant="outline-dark">Read More{'>'}</Button></a>
                </Col >
            </Row>
       </Container >
        
    )
}

export default Awareness