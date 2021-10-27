import React from 'react'
import { Row } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faFacebook, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
const Footer = () => {
    return (
        <div class="footer container-fluid text-center">
            <p class="text-white py-2">Follow us on</p>
            <Row>
                <div class="social Col-md-12 mb-4">
                    <a href="https://www.instagram.com/cccphl/?hl=en" target=" blank"><FontAwesomeIcon size="5x" color="white" icon={faInstagram}/></a>
                    <a href="https://www.facebook.com/CCCPhl/" target=" blank"><FontAwesomeIcon size="5x" color="white" icon={faFacebook}/></a>
                    <a href="https://twitter.com/thecccuk?lang=en" target=" blank"><FontAwesomeIcon size="5x" color="white" icon={faTwitter}/></a>
                    <a href="https://www.youtube.com/channel/UCiUt4F-vNGQt1cNrDKeOTPw" target=" blank"><FontAwesomeIcon size="5x" color="white" icon={faYoutube}/></a>
                </div>
            </Row>
        </div>
    )
}

export default Footer
