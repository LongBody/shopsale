import React, { useState } from "react";
import Header from "components/body/header";
import "scss/app.scss";
import CartContainer from "containers/cartContainer";
import { Redirect } from "react-router";
import Footer from "components/body/footer";
import ScrollToTop from "hooks/scroll_to_top";

export default function CartLayout() {
  let userData = JSON.parse(localStorage.getItem("userShopsale"));
  const [user, setUser] = useState(userData);

  let result = user ? (
    <div>
      <ScrollToTop /> <Header /> <CartContainer /> <Footer />
    </div>
  ) : (
    <Redirect to="/sign-in" />
  );

  return <div>{result}</div>;
}
