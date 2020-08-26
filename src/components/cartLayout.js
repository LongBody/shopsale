import React , {useState} from 'react';
import Header from './header'
import '../scss/app.scss'
import CartContainer from '../containers/cartContainer'
import { Redirect } from 'react-router';




export default function CartLayout() {

  let userData = JSON.parse(localStorage.getItem("user"));
  const [user, setUser] = useState(userData);

  let result =   user ? <div>
        <Header/> <CartContainer/>        
  </div>  : <Redirect to="/sign-in" />

  return (
    <div>
      {
      result
    }
    </div>
  
  );
}
