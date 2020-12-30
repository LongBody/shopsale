import React from 'react';
import LocationUser from '../body/locationUser'
import ListCheckout from '../body/listCheckout'
import Header from '../body/headerCheckout'
  
export default function CheckoutLayout() {
   
  
    return (
     <div>
         <Header/>
         <LocationUser/>
         <ListCheckout/>
     </div>
    );
  }