import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import MainHeader from "../../components/MainHeader";
import Nav from "../../components/Nav";



class ParentPortal extends Component {

    render() {
        return (
            <Container fluid>
                <Row>
                    <Col size="md-6 form">
                        <Nav/>
                        <MainHeader/>
                        
                    </Col>

                    <Col size="md-6 home-bg">
                        <div className="landing-bg">
                        </div>
                    </Col>
                </Row>
            </Container>
        )
    }
};

export default ParentPortal;