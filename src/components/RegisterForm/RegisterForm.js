import React, { Component } from "react";
import { connect } from "react-redux";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import ContactsOperatins from "../redux/ContactsOperatins/ContactsOperation";
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
    const { name, email, password, confirmPassword } = this.state;
    const user = {
      name: name,
      email: email,
      password: password,
    };
    // if (password !== confirmPassword) {
    //   this.props.registerError("password is not valid");
    //   return;
    // } else {
    this.props.onRegister(user);
    // }
    this.setState({ ...this.state });
  };

  // componentDidMount() {}
  render() {
    const { name, email, password } = this.state;
    return (
      <Container>
        <br />
        <Row className="justify-content-md-center">
          <Col xs lg="5">
            <h2>Registration</h2>
            <Form type="form">
              <Form.Group controlId="firstName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="name"
                  name="name"
                  value={name}
                  placeholder="Name"
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
                  placeholder="Enter email"
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Form.Group controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  suggested="password"
                  autoComplete="new-password"
                  type="password"
                  name="password"
                  value={password}
                  placeholder="Password"
                  onChange={this.handleChange}
                />
              </Form.Group>

              <Button
                variant="primary"
                type="button"
                onClick={this.handleSubmit}
              >
                Submit
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
  // registerError: authOperation.registration.registerError,
})(RegisterForm);
