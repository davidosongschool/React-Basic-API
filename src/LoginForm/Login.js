import React from 'react'
import { Form, Container, Col } from 'react-bootstrap' 
import Button from 'react-bootstrap/Button' //Bootstrap Button




const Loginform = () => {
    return (
        <Container>
        <Col xs lg="6" className="mx-auto">
        <div className="ContainLogin shadow-lg pl-5 pr-5">
        <Form.Group className="pt-4">
        <Form.Label>Username</Form.Label>
        <Form.Control type="text" placeholder="Username" name="username"/>
        <Form.Control type="text" placeholder="Password" name="password"/>
        <Button>Login</Button>
        </Form.Group>
        </div>
        </Col>
        </Container>
    )
};

export default Loginform;