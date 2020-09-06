import React from 'react';
import { GoogleLogin } from 'react-google-login';
import { useHistory } from "react-router-dom";
import Button from '@material-ui/core/Button';
export default function GoogleSignIn() {
  let history = useHistory();

  const responseGoogle = (response) => {
    console.log(response);
    if(response.profileObj){
      localStorage.setItem("userShopsale", JSON.stringify(response.profileObj));
      history.push({
        pathname: '/',
    })
    }
    
  }

  return (
    <div style={{display:"flex" , justifyContent:"center" , paddingBottom:10 , width:"100%" , backgroundColor:"rgb(255, 255, 255)"}}>
      <GoogleLogin
        clientId="1079345342714-8q3900edhd8glu594i1kbgovile1bgio.apps.googleusercontent.com"
        render={renderProps => (
          <Button variant="contained" onClick={renderProps.onClick} disabled={renderProps.disabled} 
           className="btn-sign-in-gg"
          >
            <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg " style={{height:20 , marginRight:10}}/>
             Sign in with Google</Button>
        )}
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
      />
    </div>
  );
}