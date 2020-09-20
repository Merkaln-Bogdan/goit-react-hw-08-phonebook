import React, { Component, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import routes from "./routes";
import ContactsOperations from "./components/redux/ContactsOperatins/ContactsOperation";
import ContactSelector from "./components/redux/Selectors/ContactSelectors";
import { connect } from "react-redux";
import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";
import RegisterForm from "./components/RegisterForm/RegisterForm";
import LoginForm from "./components/LoginForm/LoginForm";
import { Home } from "./components/HomePage/Homepage";
import Navigation from "./components/Navigation/Navigation";
import Phonebook from "./components/Phonebook/Phonebook";
class App extends Component {
  componentDidMount() {
    this.props.onGetUser();
    this.props.onFetchContacts();
  }
  componentDidUpdate() {
    if (this.props.message) {
      return setTimeout(() => {
        this.props.registrationError(null);
      }, 3000);
    }
  }
  render() {
    return (
      <>
        <Navigation />
        <Suspense fallback={<div>...Loading</div>}>
          <Switch>
            <Route path={routes.home} exact component={Home} />
            <PublicRoute
              path={routes.home}
              exact
              restricted
              redirectTo={routes.contacts}
              component={"logIn ? UserPage : StartPage"}
            />
            <PublicRoute
              path={routes.login}
              restricted={false}
              redirectTo={routes.LoginForm}
              component={LoginForm}
            />
            <PublicRoute
              path={routes.register}
              restricted={false}
              redirectTo={routes.register}
              component={RegisterForm}
            />
            <PrivateRoute
              path={routes.contacts}
              restricted={true}
              redirectTo={routes.login}
              component={Phonebook}
            />
            {/* <PrivateRoute
            path={routes.logout}
            redirectTo={routes.login}
            component={LogOut}
          /> */}
            {/* <Redirect to={routes.home} /> */}
          </Switch>
        </Suspense>
      </>
    );
  }
}
const MapStateToProps = (state) => ({
  contacts: ContactSelector.visibleContacts(state),
});
const MapDispatchToProps = {
  onFetchContacts: ContactsOperations.fetchContacts,
  onGetUser: ContactsOperations.registration,
};
export default connect(MapStateToProps, MapDispatchToProps)(App);
