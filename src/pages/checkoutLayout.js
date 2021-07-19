import React,  {useEffect} from 'react';
import LocationUser from 'components/body/locationUser'
import ListCheckout from 'components/body/listCheckout'
import Header from 'components/body/headerCheckout'
import Footer from 'components/body/footer';
  
export default function CheckoutLayout() {
   
    useEffect(() => {
        document.title = "Thanh toán"; 
    },[]);
    return (
     <div>
         <Header/>
         <LocationUser/>
         <ListCheckout/>
         <Footer />
     </div>
    );
  }