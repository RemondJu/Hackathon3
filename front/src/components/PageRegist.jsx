import React from "react";
import { Button, Form, FormGroup, Label, Input, Container, Row, Col } from "reactstrap";
import { NavLink } from "react-router-dom";
import './PageRegist.css';

export default class Example extends React.Component {
  render() {
    return (
      <Container fluid>
      <NavLink to="/"><Button className="page-register-button">RETOUR</Button></NavLink>
        <Row className="page-register-wrap">
          <Col lg={4} md={6} sm={12}>
            <Form>
              <FormGroup>
                <Label for="exampleEmail">Email</Label>
                <Input type="email" name="email" id="exampleEmail" />
              </FormGroup>
              <FormGroup>
                <Label for="examplePseudo">Pseudo</Label>
                <Input type="pseudo" name="pseudo" id="examplePseudo" />
              </FormGroup>
              <FormGroup>
                <Label for="examplePassword">Mot de passe</Label>
                <Input type="password" name="password" />
              </FormGroup>
              <FormGroup>
                <Label for="examplePassword">Confirmer mot de passe</Label>
                <Input type="passwordConfirm" name="passwordconfirm" />
              </FormGroup>
              <NavLink to="/accueil"><Button color="primary">Submit</Button></NavLink>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
}
