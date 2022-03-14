import React, { useEffect } from 'react';
import UserLocation from 'components/body/user-location';
import ListCheckout from 'components/body/list-checkout';
import Header from 'components/body/header-checkout';
import Footer from 'components/body/footer';
import ScrollToTop from 'hooks/scroll_to_top';

export default function CheckoutLayout() {
  useEffect(() => {
    document.title = 'Thanh toán';
  }, []);
  return (
    <div>
      <ScrollToTop />
      <Header />
      <UserLocation />
      <ListCheckout />
      <Footer />
    </div>
  );
}
