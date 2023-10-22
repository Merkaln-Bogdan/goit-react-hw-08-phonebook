import React, { Component } from "react";
import { connect } from "react-redux";
import ContactsOperations from "../redux/Operations/ContactsOperations";
import ContactSelector from "../redux/Selectors/ContactSelectors";


class item extends Component {
  state = { firstName: "", lastName: "", number: "", city: "", profession: "", image: null, email: "" }
  componentDidMount() {
    const {id} = this.props.match.params;
    console.log(this.props.contact);
    this.props.getContact(id);
  }

  componentDidUpdate(prevProps) {
    if (this.props.contact !== prevProps.contact) {
      this.setState({...this.props.contact})
    }
  }


 
  render() {
   const {firstName, lastName, number, city, profession, email} = this.state

    return (
      <div>
        {firstName}
        {lastName}
        {profession}
        {number}
        {city}
        {email}
      </div>
    );
  }
}

const MapStateToProps = (state) => {
  return {
    contact: ContactSelector.getCurrentContact(state)
  }
}

const MapDispatchToProps = {
  getContact: ContactsOperations.getContact,
};
export default connect(MapStateToProps, MapDispatchToProps)(item);
