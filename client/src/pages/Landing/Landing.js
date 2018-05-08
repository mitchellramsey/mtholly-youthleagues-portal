import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import MainHeader from "../../components/MainHeader";
import LogIn from "../../components/LogIn";
import "./landing.css";

class Landing extends Component {

    render() {
        return (
            <Container fluid>
                <Row>
                    <Col size="md-6 form">
                        <MainHeader/>
                        <LogIn/>
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

export default Landing;