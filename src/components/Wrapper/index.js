import React from "react";

const Wrapper = ({children}) => {
    return (
        <div style={{minHeight: "80vh"}}>
            {children}
        </div>
    )
}

export default Wrapper