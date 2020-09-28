import React from 'react'


import Card from 'react-bootstrap/Card'
import './requester.css'


function Requester(props) {
    return (
        <Card>
            <Card.Img variant="top" src={props.image} />
            <Card.Body>
            <Card.Title>{props.name}</Card.Title>
            <Card.Text>{props.desc}</Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Requester