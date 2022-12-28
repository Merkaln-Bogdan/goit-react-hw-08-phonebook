import React, { Component } from "react";
import { connect } from "react-redux";

import { Form, Button, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import UserOperation from "../redux/Operations/UserOperation";

class LoginForm extends Component {
  state = {
    email: "",
    password: "",
  };
  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    const user = {
      email: email,
      password: password,
    };
    this.props.onLogin(user);
    this.setState({ ...this.state });
  };

  render() {
    return (
      <Container>
        <br />
        <Row className="justify-content-md-center">
          <Col xs lg="5">
            <h2>Ввойдите в ваш акаунт</h2>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="введите email"
                  suggested="email"
                  name="email"
                  value={this.state.email}
                  autoComplete="email"
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>пароль</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="пароль"
                  suggested="password"
                  name="password"
                  value={this.state.password}
                  autoComplete="password"
                  onChange={this.handleChange}
                />
              </Form.Group>

              <Button
                variant="primary"
                type="button"
                onClick={this.handleSubmit}
              >
                Ввойти в акаунт
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default connect(null, {
  onLogin: UserOperation.loginUser,
})(LoginForm);
