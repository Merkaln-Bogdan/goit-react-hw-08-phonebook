import React, { Component } from "react";
import { connect } from "react-redux";
import {NotificationContainer, NotificationManager} from 'react-notifications';
import "../../../node_modules/react-notifications/lib/notifications.css"
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import withTranslation from "../../hook";
import "bootstrap/dist/css/bootstrap.min.css";
import Selector from "../../redux/Selectors/Selectors";
import UserOperation from "../../redux/Operations/UserOperation";

class LoginForm extends Component {

  state = {
    credential: {
      email: "",
      password: "",
    },
    loading: false,
    unathourize: null,
    error: null
  };

  override = {
    display: "block",
    margin: "0 auto 20px"
  };
  
  getNofication = (type, message) => {
    this.setState({...this.state, unathourize: false, loading: false})
    if(type==='auth'){
      return NotificationManager.warning('Authorization error', 'Error');
    }
    else {
      return NotificationManager.error(message, 'Error');
    }
  }
 
  componentDidUpdate(prevProps) {
    if(this.props.error && this.props?.error !== prevProps.error){
      if(this.props?.error?.includes('401')){
        return this.getNofication('auth')
      }else{
        return this.getNofication('error', this.props?.error)
      }
    }

    if (this.props.loader !== prevProps.loader) {
      this.setState({loading: this.props.loader})
    }
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({credential: { ...this.state.credential, [name]: value }});
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = this.state.credential;

    const user = {
      email: email,
      password: password,
    };

    this.props.onLogin(user);
    this.setState({credential: { email: "", password: "" }});
  };

  render() {
    const {credential: {password, email}, loading} = this.state;
    const {transationHook} = this.props

    return (
    <>
      <Container className="container-fluid d-flex flex-column mt-4">

        <Row className="justify-content-md-center">
          <Col xs lg="5">
            <h2>{transationHook("signIn")}</h2>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="enter email"
                  suggested="email"
                  name="email"
                  value={email}
                  autoComplete="email"
                  onChange={this.handleChange}
                  required
                />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>{transationHook("password")}</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="enter password"
                  suggested="password"
                  name="password"
                  value={password}
                  autoComplete="password"
                  onChange={this.handleChange}
                  required
                />
              </Form.Group>

              <Button
                variant="primary"
                type="button"
                onClick={this.handleSubmit}
                disabled={loading || (!password && !email)}
              >
                {transationHook("signIn")}
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>

      <NotificationContainer/>
    </>
    );
  }
}

const MapStateToProps = (state) => ({
  loader: Selector.getLoader(state),
  error: Selector.getError(state),
});

export default connect(MapStateToProps, { onLogin: UserOperation.loginUser})(withTranslation(LoginForm));
