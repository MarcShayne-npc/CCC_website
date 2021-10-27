import React from 'react'
import { Row } from 'react-bootstrap'
import partner1 from "../Images/partner1.png"
import partner2 from "../Images/partner2.png"
import partner3 from "../Images/partner3.png"
import partner4 from "../Images/partner4.png"
import partner5 from "../Images/partner5.png"
import partner6 from "../Images/partner6.png"
import partner7 from "../Images/partner7.png"
import partner8 from "../Images/partner8.png"
import partner9 from "../Images/partner9.png"


const Partners = () => {
    return (
        <div class="partner container-fluid" id="partnerSection">
            <Row class="text-center">
                <div class="col-lg-2 text-center" id="partner1">
                    <a href="https://www.greenclimate.fund/countries/philippines" target="_blank"><img src={partner1} /></a>
                </div>
                <div class="col-lg-2 text-center" id="partner2">
                    <a href="https://climate.gov.ph/our-programs/communities-for-resilience" target="_blank"><img src={partner2} /></a>
                </div>
                <div class="col-lg-2 text-center" id="partner3">
                    <a href="https://www.foi.gov.ph/" target="_blank"><img src={partner3} /></a>
                </div>
                <div class="col-lg-2 text-center" id="partner4">
                    <a href="https://climate.gov.ph/climate-news" target="_blank"><img src={partner4} /></a>
                </div>
                <div class="col-lg-2 text-center" id="partner5">
                    <a href="https://niccdies.climate.gov.ph" target="_blank"><img src={partner5} /></a>
                </div>
                <div class="col-lg-2 text-center" id="partner6"> 
                    <a href="https://climate.gov.ph/our-programs/climate-finance/peoples-survival-fund" target="_blank"><img src={partner6} /></a>
                </div>
            </Row>
            <Row>
                <div class="col-lg-4 text-center" id="partner7"> 
                    <a href="https://climate.gov.ph/knowledge" target="_blank"><img src={partner7} /></a>
                </div>
                <div class="col-lg-4 text-center" id="partner7"> 
                    <a href="https://climate.gov.ph/knowledge" target="_blank"><img src={partner8} /></a>
                </div>
                <div class="col-lg-4 text-center mb-5" id="partner7"> 
                    <a href="https://climate.gov.ph/our-programs/anti-single-use-plastic-campaign" target="_blank"><img src={partner9} /></a>
                </div>
            </Row>
        </div>
    )
}

export default Partners


