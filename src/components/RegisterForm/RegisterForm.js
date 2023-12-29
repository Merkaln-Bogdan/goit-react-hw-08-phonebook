import React, { Component } from "react";
import { connect } from "react-redux";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import {NotificationContainer, NotificationManager} from 'react-notifications';
import withTranslation from "../../hook";
import "../../../node_modules/react-notifications/lib/notifications.css"
import "./Registerform.css";
import Selector from "../../redux/Selectors/Selectors";
import UserOperation from "../../redux/Operations/UserOperation";

class RegisterForm extends Component {

  state = {
     user: {
      name: "",
      email: "",
      password: "",
     },
     loading: false
  };

  override = {
    display: "block",
    margin: "0 auto 20px"
  };

  getNofication = () => {
    this.setState({loading: false})
    return NotificationManager.error('Помилка авторизації. Спробуйте ще раз', 'Увага!');
  }
 
  componentDidUpdate(prevProps) {
    if(this.props?.error !== prevProps.error){
        return this.getNofication()
    }
  
    if(this.props.loader !== prevProps.loader) {
      this.setState({...this.state, loading: this.props.loader})
    }
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({ user: {...this.state.user, [name]: value} });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, password } = this.state.user;

    const user = {
      name: name,
      email: email,
      password: password,
    };

    if (this.props.onRegister) {
      this.props.onRegister(user);
      this.setState({ ...this.state });
    } else {
      alert("пароль або email невірний! (Not correct data!)");
    }
  };

  render() {
    const { user: {name, email, password}, loading } = this.state;
    const {transationHook} = this.props;
 
    return (
      <Container className="container mt-4">

        <Row className="justify-content-md-center">
          <Col xs lg="5">
            <h2>{transationHook("signUp")}</h2>
            <Form type="form">
              <Form.Group controlId="firstName">
                <Form.Label>{transationHook("name")}</Form.Label>
                <Form.Control
                  type="name"
                  name="name"
                  value={name}
                  placeholder={transationHook("name")}
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
                  placeholder="Email"
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Form.Group controlId="password">
                <Form.Label>{transationHook("password")}</Form.Label>
                <Form.Control
                  suggested="password"
                  autoComplete="new-password"
                  type="password"
                  name="password"
                  value={password}
                  placeholder={transationHook("password")}
                  onChange={this.handleChange}
                />
              </Form.Group>

              <Button
                variant="primary"
                type="button"
                onClick={this.handleSubmit}
                disabled={loading}
              >
                {transationHook("signUp")}
              </Button>
            </Form>
          </Col>
        </Row>

        <NotificationContainer/>
      </Container>
    );
  }
}

const MapStateToProps = (state) => ({
  loader: Selector.getLoader(state),
  error: Selector.getError(state),
});

const MapDispatchToProps = {
  onRegister: UserOperation.registration,
};

export default connect(MapStateToProps, MapDispatchToProps)(withTranslation(RegisterForm));
