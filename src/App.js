import React, { Component, Suspense } from "react";
import { Switch } from "react-router-dom";
import routes from "./routes";
import UserOperations from "./redux/Operations/UserOperation";
import Selector from "./redux/Selectors/Selectors";
import { connect } from "react-redux";
import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";
import RegisterForm from "./components/RegisterForm/RegisterForm";
import LoginForm from "./components/LoginForm/LoginForm";
import { Home } from "./components/HomePage/Homepage";
import Footer from "./components/Footer";

import Phonebook from "./components/Phonebook/Phonebook";
import Item from "./components/Item/Item"

import { Layout } from "./components/Layout/Layout";
import Header from "./components/Header";
import Wrapper from "./components/Wrapper";

// The app will be update and rewritten a little bit later with hooks and new features of React

class App extends Component {

  componentDidMount() {
    this.props.onGetUser();
  }
  
  render() {
    return (
      <Layout>
        <Header isAuthenticated={this.props.isAuthenticated} />
        <Wrapper>
          <Suspense fallback={<div>...Loading</div>}>
          <Switch>
            <PublicRoute
              path={routes.home}
              restricted={false}
              exact
              component={Home}
            />
            <PublicRoute
              path={routes.login}
              restricted={true}
              redirectTo={routes.LoginForm}
              component={LoginForm}
            />
            <PublicRoute
              path={routes.register}
              restricted={true}
              redirectTo={routes.register}
              component={RegisterForm}
            />
            <PrivateRoute
              path={routes.contacts}
              restricted={true}
              redirectTo={routes.login}
              component={Phonebook}
            />
            <PrivateRoute
              path={routes.contact}
              restricted={true}
              redirectTo={routes.login}
              component={Item}
            />
          </Switch>
        </Suspense>
        </Wrapper>
  
        <Footer/>
      </Layout>
    );
  }
}
const MapStateToProps = (state) => ({
  contacts: Selector.visibleContacts(state),
  isAuthenticated: Selector.isAuthenticated(state)
});

const MapDispatchToProps = {
  onGetUser: UserOperations.getUser,
};

export default connect(MapStateToProps, MapDispatchToProps)(App);
