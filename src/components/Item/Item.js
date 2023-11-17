import React, { Component } from "react";
import { connect } from "react-redux";
import FadeLoader from "react-spinners/FadeLoader";
// import { Blurhash } from "react-blurhash";
import ContactsOperations from "../../redux/Operations/ContactsOperations";
import ContactSelector from "../../redux/Selectors/Selectors";
import camera  from "../../assets/camera.png"

const override = {
  display: "block",
  margin: "0 auto"
};


class item extends Component {
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
    loading: true,
    imageLoaded: false
  }
  
  componentDidMount() {
    const {id} = this.props.match.params;
    this.props.getContact(id);
  }

  componentDidUpdate(prevProps) {
    if (this.props.contact !== prevProps.contact) {
      // new Promise((resolve, reject) => {
      //   const img = new Image();
      //   img.onload = () => resolve(img);
      //   img.onerror = (...args) => reject(args);
      //   img.src = this.props.contact.image;
      //   this.setState({imageLoaded: true})
      // });
      this.setState({contact: this.props.contact, loading: false})
    }
  }

  onLoad = () => {
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

   const { firstName, lastName, number, city, profession, email, image, gender, id } = this.state.contact;
   const { previewImage, loading } = this.state;

    return (
      <>
        {loading ? 
          <FadeLoader
            color={"#36d7b7"}
            loading={loading}
            cssOverride={override}
            size={300}
            height={20}
            aria-label="Loading Spinner"
            data-testid="loader"    
          />
         :
            <div className={"card p-2"} style={{maxWidth: "30rem", borderRadius: "10px", margin: "0 auto"}}>


            {/* {!imageLoaded ?
              <Blurhash
                hash={"LEHV6nWB2yk8pyo0adR*.7kCMdnj"}
                width={460}
                height={460}
                resolutionX={32}
                resolutionY={32}
                punch={1}
              />
              : */}
              <img loading="lazy" className={"card-img-top"} onLoad={this.onLoad} src={image || previewImage || camera} alt="Card_cap"/>
            {/* } */}
          
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
              <span className={"d-flex justify-content-between"}>Phone number: <p className={"ml-2 font-weight-bold"}>{number}</p></span>
              <span className={"d-flex justify-content-between"}>Email: <p className={"ml-2 font-weight-bold"}>{email}</p></span>
              <span className={"d-flex justify-content-between"}>City: <p className={"ml-2 font-weight-bold"}>{city}</p></span>
              <span className={"d-flex justify-content-between"}>Profession: <p className={"ml-2 font-weight-bold"}>{profession}</p></span>
              <span className={"d-flex justify-content-between"}>Gender: <p className={"ml-2 font-weight-bold"}>{gender}</p></span>
            </div>
          </div>
         }
      </>
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
  changePhotoContact: ContactsOperations.changePhotoContact
};
export default connect(MapStateToProps, MapDispatchToProps)(item);
