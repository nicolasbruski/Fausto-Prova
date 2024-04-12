import React from 'react'
import { Card, Button } from 'react-bootstrap'
import '../styles/components/cardFarmacia.css'

export default function CardFarmacia(props) {
    return (
        <Card style={{ width: '18rem', background: '#F3F2F2', borderRadius: '30px', padding: '1rem', display: 'flex', alignItems: 'center'}} className="cardFarmacia">
            <Card.Img variant="top" src={props.imagem} style={{width: '94px', height: '64'}} />
            <Card.Body>
                <Card.Title>{props.nome}</Card.Title>
                <Card.Text>
                    {props.endereco}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}
