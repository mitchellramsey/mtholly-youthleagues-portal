import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import MainHeader from "../../components/MainHeader";
import AdminLanding from "../../components/LogIn/AdminLanding";
import Nav from "../../components/Nav";
import "../Landing/landing.css";

class AdminLogin extends Component {

    render() {
        return (
            <Container fluid>
                <Row>
                    <Col size="md-6 form">
                        <Nav/>
                        <MainHeader/>
                        <AdminLanding/>
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

export default AdminLogin;