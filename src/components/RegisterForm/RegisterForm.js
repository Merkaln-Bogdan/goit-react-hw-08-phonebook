import React, { Component } from "react";
import { connect } from "react-redux";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Registerform.css"
import ContactsOperatins from "../redux/ContactsOperatins/ContactsOperation";
import TaskPhonebook from "../redux/TaskPhonebook";
class RegisterForm extends Component {
  state = {
    name: "",
    email: "",
    password: "",
  };
  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, password } = this.state;
    const user = {
      name: name,
      email: email,
      password: password,
    };

    if (this.props.onRegister) {
      this.props.onRegister(user);
      this.setState({ ...this.state });
    } else {
      alert("пароль или email не действительны!");
    }
  };

  render() {
    const { name, email, password } = this.state;
    return (
      <Container className="container">
        <br />
        <Row className="justify-content-md-center">
          <Col xs lg="5">
            <h2>Регистрация</h2>
            <Form type="form">
              <Form.Group controlId="firstName">
                <Form.Label>имя</Form.Label>
                <Form.Control
                  type="name"
                  name="name"
                  value={name}
                  placeholder="Имя"
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Form.Group controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  suggested="email"
                  autoComplete="email"
                  type="email"
                  name="email"
                  value={email}
                  placeholder="введите email"
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Form.Group controlId="password">
                <Form.Label>Пароль</Form.Label>
                <Form.Control
                  suggested="password"
                  autoComplete="new-password"
                  type="password"
                  name="password"
                  value={password}
                  placeholder="пароль"
                  onChange={this.handleChange}
                />
              </Form.Group>

              <Button
                variant="primary"
                type="button"
                onClick={this.handleSubmit}
              >
                РЕГИСТРАЦИЯ
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default connect(null, {
  onRegister: ContactsOperatins.registration,
  registersError: TaskPhonebook.registersError,
})(RegisterForm);
