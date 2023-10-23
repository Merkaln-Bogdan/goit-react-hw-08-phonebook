import React, { Component } from "react";
import { connect } from "react-redux";

import { Form, Button, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import UserOperation from "../../redux/Operations/UserOperation";
import Wrapper from "../Wrapper";

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
    <Wrapper>
      <Container className="container-fluid d-flex flex-column">
        <Row className="justify-content-md-center">
          <Col xs lg="5">
            <h2>Увійдіть в ваш акаунт</h2>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="enter email"
                  suggested="email"
                  name="email"
                  value={this.state.email}
                  autoComplete="email"
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>пароль (password)</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="enter password"
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
                Ввійти в акаунт (Sign in)
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </Wrapper>
    );
  }
}
export default connect(null, {
  onLogin: UserOperation.loginUser,
})(LoginForm);
