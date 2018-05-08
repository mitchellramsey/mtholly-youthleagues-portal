import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import MainHeader from "../../components/MainHeader";
import Signup from "../../components/Signup";
import Nav from "../../components/Nav";
import "../Landing/landing.css";

class SignupPage extends Component {

    render() {
        return (
            <Container fluid>
                <Row>
                    <Col size="md-6 form">
                        <Nav/>
                        <MainHeader/>
                        <Signup/>
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

export default SignupPage;