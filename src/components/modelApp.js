import React from 'react';
import {Button, Card, Modal} from "react-bootstrap";

function ModelApp(props) {
    return(
        <div>
            {props.card ?
                <Modal
                onHide={props.handleClose}
                show={props.show}
                size="sm"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                >
                <Card style={{textAlign:'right'}}
                    bg='dark'
                    text='white'
                    border="light"
                >
                    <Card.Img variant="top" src={props.card.urlToImage} />
                    <Card.Body>
                        <Card.Title>{props.card.title}</Card.Title>
                        <Card.Text style={{direction:'rtl',fontSize:'14px'}}>
                            {props.card.description? props.card.description+".":null}
                        </Card.Text>
                    </Card.Body>
                    <Button variant="dark" onClick={props.handleClose}>Close</Button>
                </Card>
            </Modal>
                :null}
        </div>
    )
}

export default ModelApp;