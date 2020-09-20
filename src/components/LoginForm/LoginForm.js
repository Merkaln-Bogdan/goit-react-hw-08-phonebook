import React, { Component } from "react";
import { connect } from "react-redux";
import ContactsOperation from "../redux/ContactsOperatins/ContactsOperation";
import taskphonebook from "../redux/TaskPhonebook";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

class LoginForm extends Component {
  state = {
    name: "",
    password: "",
    // validPassword: "",
  };
  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };
  handleSubmit = (e) => {
    const { email, password } = this.state;
    const user = {
      email: email,
      password: password,
      // validPassword: validPassword,
    };
    // if (password !== validPassword) {
    //   this.props.onloginError("password dismach");
    //   return;
    // } else {
    //   console.log(this.props.onLogin);
    this.props.onLogin(user);
    // }
    this.setState({ ...this.state });
  };

  componentDidMount() {}
  render() {
    return (
      <Container>
        <br />
        <Row className="justify-content-md-center">
          <Col xs lg="5">
            <h2>Login</h2>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  suggested="email"
                  name="email"
                  value={this.state.email}
                  autoComplete="email"
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
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
  onLogin: ContactsOperation.loginUser,
  // onloginError: taskphonebook.loginError,
})(LoginForm);
