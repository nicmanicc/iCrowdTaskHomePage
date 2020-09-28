import React from 'react'


import Requester from './requester'
import './requester.css'
import Col from 'react-bootstrap/Col'
import RequesterInfo from '../../data/requester-info'



function FeatureRequesters() {
    return (
            <React.Fragment>
                <Col className='marginbottom' xs={6} md={4}>   
                    <Requester 
                        name = {RequesterInfo[0].name}
                        desc = {RequesterInfo[0].desc}
                        image = {RequesterInfo[0].img}
                    />
                </Col>
                <Col className='marginbottom' xs={6} md={4}>   
                    <Requester 
                        name = {RequesterInfo[1].name}
                        desc = {RequesterInfo[1].desc}
                        image = {RequesterInfo[1].img}
                    />
                </Col>
                <Col className='marginbottom' xs={6} md={4}>    
                    <Requester 
                        name = {RequesterInfo[2].name}
                        desc = {RequesterInfo[2].desc}
                        image = {RequesterInfo[2].img}
                    />
                </Col>
                <Col className='marginbottom' xs={6} md={4}>   
                    <Requester 
                        name = {RequesterInfo[3].name}
                        desc = {RequesterInfo[3].desc}
                        image = {RequesterInfo[3].img}
                    />
                </Col>
                <Col className='marginbottom' xs={6} md={4}>   
                    <Requester 
                        name = {RequesterInfo[4].name}
                        desc = {RequesterInfo[4].desc}
                        image = {RequesterInfo[4].img}
                    />
                </Col>
                <Col className='marginbottom' xs={6} md={4}>    
                    <Requester 
                        name = {RequesterInfo[5].name}
                        desc = {RequesterInfo[5].desc}
                        image = {RequesterInfo[5].img}
                    />
                </Col>
            </React.Fragment>
    )
}

export default FeatureRequesters