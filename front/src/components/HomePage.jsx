import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import { NavLink } from "react-router-dom";
import "./HomePage.css";

const HomePage = () => (
    <Container fluid className="HomePage">
      <Row>
        <Col className="homepage-logo" md={6}>
          <img src="../images/echome.png" alt="Logo" height="180" width="320" />
        </Col>
        <Col
          className="homepage-button-wrap"
          xl={{ size: 2, offset: 2 }}
          md={3}
          sm={2}
        >
          <NavLink to="/myHome">
            <Button className="homepage-button-first" color="primary">
              INSCRIPTION
              <i class="far fa-edit" />
            </Button>{" "}
          </NavLink>
        </Col>
        <Col className="homepage-button-wrap2" xl={2} md={3} sm={2}>
          <NavLink to="/myHome">
            <Button className="homepage-button-second" color="primary">
              CONNEXION
              <i class="far fa-user" />
            </Button>{" "}
          </NavLink>
        </Col>
      </Row>
      <Row>
        <Col className="homepage-schema-wrap">
          <img src="" alt="schema" className="homepage-schema" />
        </Col>
      </Row>
    </Container>
);

export default HomePage;
