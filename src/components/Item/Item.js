import React, { Component } from "react";
import { connect } from "react-redux";
import PuffLoader from "react-spinners/PuffLoader";
import withTranslation from "../../hook";
import ContactsOperations from "../../redux/Operations/ContactsOperations";
import ContactSelector from "../../redux/Selectors/Selectors";
import camera  from "../../assets/camera.png"
import Selectors from "../../redux/Selectors/Selectors";

class item extends Component {
  constructor() {
    super();
    this.infoList = [
      {key: "Phone number", value: "number"},
      {key: "Email", value: "email"},
      {key: "City", value: "city"},
      {key: "Profession", value: "profession"},
      {key: "Gender", value: "gender"},
      {key: "Email", value: "email"},
    ]
  }
  state = { 
    contact: {
      id: null,
      firstName: "", 
      lastName: "", 
      number: "", 
      city: "", 
      profession: "", 
      image: '', 
      email: "" ,
      gender: ""
    },
    previewImage: null,
    fileImage: null,
    imageLoaded: false
  }

  override = {
    position: "absolute", 
    transform: window?.innerWidth < 414 ? "translate(60%, 100%)" : "translate(80%, 100%)"
  }
  
  componentDidMount() {
    const {id} = this.props.match.params;
    this.props.getContact(id);
  }

  componentDidUpdate(prevProps) {
    if (this.props.contact !== prevProps.contact) {
      this.setState({contact: this.props.contact, loading: false})
    }
  }

  handleLoadImage = () => {
    this.setState({imageLoaded: true})
  } 

  selectFile = (event) => {
    this.setState({
      ...this.state,
        fileImage: event.target.files[0],
        previewImage: URL.createObjectURL(event.target.files[0])
    });
  };

  handleChangePhotoContact = (id) => {
    this.setState({loading: true})
    this.props.changePhotoContact(this.state.fileImage, id)
    this.props.getContact(id)
  }

  render() {
   const { firstName, lastName, image, id } = this.state.contact;
   const { previewImage, imageLoaded } = this.state;
   const { loader } = this.props;

    return (
      !loader &&
        <div className={"card p-2"} style={{maxWidth: "25rem", borderRadius: "10px", margin: "0 auto"}}>
             <div style={{position: "relative", width: "100%", height: !imageLoaded ? "400px" : "100%"}} >
                {!imageLoaded && 
                  <PuffLoader color="#36d7b7" cssOverride={this.override} size={150}/> 
                }
      
                <img 
                  loading="lazy" 
                  className={"card-img-top"} 
                  onLoad={this.handleLoadImage} 
                  src={image || previewImage || camera} alt="Card_cap"
                />
                  </div>
          
              {!image && 
                <div>
                  <label className={"m-2"}>
                      Фото (Photo)
                      <input
                        type="file"
                        name="avatar"
                        onChange={this.selectFile}
                        title="Photo"
                        className={"mx-1"}
                      />

                  </label>
                </div>
              }
              {previewImage && 
                <button type="button" onClick={() => this.handleChangePhotoContact(id)}>
                  Upload
                </button>
              }
               
            <div className={"card-body"}>
              <h5 className={"card-title font-weight-bold"}>{firstName} {lastName}</h5>
              {this.infoList.map(el => (
                <span className={"d-flex justify-content-between"}>
                  {el.key}: 
                  <p className={"ml-2 font-weight-bold"}>
                    {this.state.contact[el.value]}
                  </p>
                </span>
              ))}
            </div>
        </div>
    );
  }
}

const MapStateToProps = (state) => {
  return {
    contact: ContactSelector.getCurrentContact(state),
    loader: Selectors.getLoader(state)
  }
}

const MapDispatchToProps = {
  getContact: ContactsOperations.getContact,
  changePhotoContact: ContactsOperations.changePhotoContact
};

export default connect(MapStateToProps, MapDispatchToProps)(withTranslation(item));
