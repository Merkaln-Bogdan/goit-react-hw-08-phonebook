import React, { Component } from "react";
import { connect } from "react-redux";
import ContactsOperations from "../../redux/Operations/ContactsOperations";
import ContactSelector from "../../redux/Selectors/ContactSelectors";
import manPhoto  from "../../assets/work_man.jpg"
import girlPhoto  from "../../assets/women_photo.jpg"


class item extends Component {
  state = { 
    firstName: "", 
    lastName: "", 
    number: "", 
    city: "", 
    profession: "", 
    image: null, 
    email: "" ,
    gender: ""
  }
  
  componentDidMount() {
    const {id} = this.props.match.params;
    this.props.getContact(id);
  }

  componentDidUpdate(prevProps) {
    if (this.props.contact !== prevProps.contact) {
      this.setState({...this.props.contact})
    }
  }



  render() {
   const { firstName, lastName, number, city, profession, email, image, gender } = this.state

    return (
      firstName ?
      <div className={"card"} style={{width: "40rem", margin: "0 auto"}}>
        <img className={"card-img-top"} src={image || (gender === "male" ? manPhoto : girlPhoto)} alt="Card_cap"/>
        <div className={"card-body"}>
          <h5 className={"card-title"}>{firstName} {lastName}</h5>
          <p className={"card-text"}>Phone number: {number}</p>
          <p className={"card-text"}>Email: {email}</p>
          <p className={"card-text"}>City: {city}</p>
          <p className={"card-text"}>Profession: {profession}</p>
          {/* <a href="#" className="btn btn-primary"></a> */}
        </div>
      </div>
      : <div style={{margin: "0 auto"}}>Loading...</div>
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
