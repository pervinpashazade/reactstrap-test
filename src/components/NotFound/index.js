import React from 'react';
import { Link } from 'react-router-dom'
import { Container, Row, Col, Alert } from 'reactstrap';

function NotFound() {
    return (
        <>
            <Container>
                <Row className="my-5">
                    <Col md={12}>
                        <Alert color="danger">
                            Ooppss... Error 404! Page Not Found!
                        </Alert>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <Link to="/" className="btn btn-primary mr-2">Go to Home Page</Link>
                        <Link to="/news" className="btn btn-primary mr-2">Go to News Page</Link>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default NotFound