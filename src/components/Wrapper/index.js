import React from "react";
import { connect } from "react-redux";
import FadeLoader from "react-spinners/FadeLoader";
import style from "./Wrapper.module.css"
import Selectors from "../../redux/Selectors/Selectors";
import phone_icon from "../../assets/icons_phone2.png"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";


const Wrapper = (props) => {

const {children, loader} = props;
const {location} = useHistory();

    const override = {
        display: "block",
        margin: "0 auto 20px"
      };
    
    return (
        <div style={{minHeight: "80vh"}}>
            <div>
                {loader ?
                    <FadeLoader
                        color={"#36d7b7"}
                        loading={loader}
                        cssOverride={override}
                        size={300}
                        height={20}
                        aria-label="Loading Spinner"  
                    /> 
                    :
                    !location.pathname.includes('contact') ? <img src={phone_icon} alt={"phone_logo"} className={style.logo}/> : null
                }
            </div>
    
            {children}
        </div>
    )
}

const MapStateToProps = (state) => ({
    loader: Selectors.getLoader(state)
  });
  

export default connect(MapStateToProps)(Wrapper);