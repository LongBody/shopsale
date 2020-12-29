import React from "react";
import ReactLoading from "react-loading";
import LogoLoadingImage from "../../image/logoWebSpiner.png";
// import "./styles.css";

function Example() {
    return (
        <div style={{position:"relative", display:"flex", justifyContent:"center" , alignItems:"center"}}>
            <ReactLoading type="spin" color="#dfd611"  width={50} />
            <img style={{height:32, position:"absolute",top:10 }} src={LogoLoadingImage}/>
        </div>
    )
}
    

export default Example;
